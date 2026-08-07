#!/usr/bin/env node
/**
 * site-check.mjs - one checker for all of Aaron's marketing sites.
 *
 * Answers one question: is the live site actually fine?
 * Not "did the build pass" - a blank page builds green.
 *
 * Usage:
 *   node check/site-check.mjs check/sites/stow.json
 *   node check/site-check.mjs check/sites/stow.json --base http://localhost:8080
 *
 * Exit 0 = all hard checks passed. Exit 1 = something is broken.
 * Warnings never fail the run; they print and are counted.
 *
 * This file is IDENTICAL across repos. Only the JSON config differs.
 * If you change it here, copy it to the other repo.
 */

import { chromium } from 'playwright';
import { readFileSync, existsSync } from 'node:fs';

/* ---------- args ---------- */

const argv = process.argv.slice(2);
const configPath = argv.find((a) => !a.startsWith('--'));
if (!configPath) {
  console.error('usage: node site-check.mjs <config.json> [--base <url>] [--quiet]');
  process.exit(2);
}
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? null : argv[i + 1];
};

const cfg = JSON.parse(readFileSync(configPath, 'utf8'));
const BASE = (flag('base') || cfg.baseUrl).replace(/\/+$/, '');
const QUIET = argv.includes('--quiet');

/* ---------- reporting ---------- */

const results = [];
let hardFailures = 0;
let warnings = 0;

function record(level, name, ok, detail = '') {
  results.push({ level, name, ok, detail });
  if (!ok && level === 'fail') hardFailures++;
  if (!ok && level === 'warn') warnings++;
  const mark = ok ? 'PASS' : level === 'fail' ? 'FAIL' : 'WARN';
  if (!QUIET || !ok) {
    console.log(`  ${mark.padEnd(4)}  ${name}${detail ? `  ${detail}` : ''}`);
  }
}
const pass = (n, d) => record('fail', n, true, d);
const fail = (n, d) => record('fail', n, false, d);
const warn = (n, ok, d) => record('warn', n, ok, d);

function section(title) {
  if (!QUIET) console.log(`\n${title}`);
}

/* ---------- helpers ---------- */

const urlFor = (route) => {
  if (route === '/' || route === '') return `${BASE}/`;
  return cfg.routeStyle === 'hash'
    ? `${BASE}/#${route.startsWith('/') ? route : `/${route}`}`
    : `${BASE}${route.startsWith('/') ? route : `/${route}`}`;
};

/** Load a route from a clean slate. Hash routes do not reload on their own. */
async function loadRoute(page, route, timeout) {
  await page.goto('about:blank');
  await page.goto(urlFor(route), {
    waitUntil: 'domcontentloaded',
    timeout: cfg.timeoutMs ?? 45000,
  });
  await waitForRender(page, timeout);
}

/** Wait until the app has actually painted content, not just returned 200. */
async function waitForRender(page, timeout) {
  const sel = cfg.renderSelector || 'body';
  const min = cfg.minRenderChars ?? 200;
  try {
    await page.waitForFunction(
      ([s, m]) => {
        const el = document.querySelector(s);
        return !!el && (el.innerText || '').trim().length >= m;
      },
      [sel, min],
      { timeout: timeout ?? cfg.renderTimeoutMs ?? 30000 }
    );
    return true;
  } catch {
    return false;
  }
}

async function renderedChars(page) {
  const sel = cfg.renderSelector || 'body';
  return page.evaluate(
    (s) => ((document.querySelector(s)?.innerText) || '').trim().length,
    sel
  );
}

/** HEAD, falling back to ranged GET - some CDNs do not answer HEAD. */
async function statusOf(ctx, url) {
  try {
    const r = await ctx.request.fetch(url, { method: 'HEAD', timeout: 20000 });
    if (r.status() === 405 || r.status() === 501) {
      const g = await ctx.request.get(url, {
        timeout: 20000,
        headers: { Range: 'bytes=0-0' },
      });
      return g.status();
    }
    return r.status();
  } catch (e) {
    return `ERR ${String(e.message || e).slice(0, 60)}`;
  }
}

/* ---------- run ---------- */

console.log(`\n=== ${cfg.name} ===`);
console.log(`base: ${BASE}`);
console.log(`time: ${new Date().toISOString()}`);

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const ctx = await browser.newContext({
  userAgent: cfg.userAgent || undefined,
  viewport: { width: 1440, height: 900 },
});

/* network + console capture on the home page load */
const consoleErrors = [];
const failedRequests = [];
const googleFontHits = new Set();
const seenRequests = [];

const page = await ctx.newPage();

/* Optional, local testing only: serve third-party CDN scripts from disk so the
   checker can be exercised on a machine with no outbound internet. Never used
   in CI against the live site. --route-map path/to/map.json
   { "cdn.jsdelivr.net/npm/react@18.3.1/...": "node_modules/react/umd/..." } */
const routeMapPath = flag('route-map');
if (routeMapPath) {
  const map = JSON.parse(readFileSync(routeMapPath, 'utf8'));
  await page.route('**/*', async (route) => {
    const u = route.request().url();
    for (const [needle, file] of Object.entries(map)) {
      if (u.includes(needle) && existsSync(file)) {
        return route.fulfill({
          status: 200,
          contentType: 'application/javascript',
          body: readFileSync(file),
        });
      }
    }
    return route.continue();
  });
  console.log(`(offline route-map active: ${Object.keys(map).length} rules)`);
}

page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text());
});
page.on('pageerror', (e) => consoleErrors.push(`pageerror: ${e.message}`));
page.on('requestfailed', (r) => {
  const u = r.url();
  // Beacons and analytics collect endpoints are noisy and expected to fail
  // in sandboxed/CI environments. They are checked separately.
  if (!/google-analytics\.com|analytics\.google\.com|\/g\/collect/.test(u)) {
    failedRequests.push(`${u} (${r.failure()?.errorText || 'failed'})`);
  }
});
page.on('response', (r) => {
  const u = r.url();
  seenRequests.push({ url: u, status: r.status() });
  if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u)) googleFontHits.add(u);
});

/* ---- 1. Does the home page actually render ---- */

section('1. Render');
let homeOk = false;
try {
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded', timeout: cfg.timeoutMs ?? 45000 });
  homeOk = await waitForRender(page);
} catch (e) {
  fail('home page loads', String(e.message || e).slice(0, 120));
}
const chars = await renderedChars(page).catch(() => 0);
if (homeOk) pass('home page renders content', `${chars} chars in ${cfg.renderSelector || 'body'}`);
else fail('home page renders content', `only ${chars} chars - page is blank or stuck`);

// Site-specific "something went wrong" tell (STOW's boot splash staying up).
if (cfg.brokenIndicatorSelector) {
  const stuck = await page
    .evaluate((s) => {
      const el = document.querySelector(s);
      if (!el) return false;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
      // NOTE: do not use offsetParent here - it is always null for
      // position:fixed elements, which is exactly what a boot splash is.
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }, cfg.brokenIndicatorSelector)
    .catch(() => false);
  if (stuck) fail('boot splash cleared', `${cfg.brokenIndicatorSelector} still visible - app did not mount`);
  else pass('boot splash cleared');
}

/* ---- 2. Analytics ---- */

section('2. Analytics');
const gaId = cfg.gaMeasurementId;
if (gaId) {
  const html = await page.content();
  const occurrences = (html.match(new RegExp(gaId.replace(/[-]/g, '\\-'), 'g')) || []).length;
  if (occurrences >= 2) pass('GA id present in page', `${occurrences} occurrences`);
  else fail('GA id present in page', `found ${occurrences}, expected >= 2 (script src + config)`);

  const gtagLoaded = await page
    .evaluate(() => typeof window.gtag === 'function' && Array.isArray(window.dataLayer) && window.dataLayer.length > 0)
    .catch(() => false);
  if (gtagLoaded) pass('gtag initialised', 'window.gtag is a function, dataLayer populated');
  else fail('gtag initialised', 'gtag missing or dataLayer empty - tag is in the HTML but not running');

  const tagScript = seenRequests.find((r) => r.url.includes(`gtag/js?id=${gaId}`));
  if (!tagScript) warn('gtag script fetched', false, 'no request to googletagmanager observed');
  else if (tagScript.status === 200) pass('gtag script fetched', '200');
  else warn('gtag script fetched', false, `status ${tagScript.status}`);
}

/* ---- 3. Head tags ---- */

section('3. Head tags');
const head = await page.evaluate(() => ({
  canonical: document.querySelector('link[rel="canonical"]')?.href || null,
  ogImage: document.querySelector('meta[property="og:image"]')?.content || null,
  ogSiteName: document.querySelector('meta[property="og:site_name"]')?.content || null,
  ogUrl: document.querySelector('meta[property="og:url"]')?.content || null,
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content || null,
  html: document.documentElement.outerHTML,
}));

if (cfg.expectCanonical) {
  if (head.canonical === cfg.expectCanonical) pass('canonical tag', head.canonical);
  else fail('canonical tag', `got ${head.canonical || 'MISSING'}, expected ${cfg.expectCanonical}`);
}
if (cfg.expectOgImage) {
  if (head.ogImage === cfg.expectOgImage) pass('og:image absolute', head.ogImage);
  else fail('og:image absolute', `got ${head.ogImage || 'MISSING'}, expected ${cfg.expectOgImage}`);
}
if (cfg.expectOgSiteName) {
  if (head.ogSiteName === cfg.expectOgSiteName) pass('og:site_name', head.ogSiteName);
  else fail('og:site_name', `got ${head.ogSiteName || 'MISSING'}`);
}
if (head.title && head.title.trim().length > 0) pass('title present', head.title.slice(0, 70));
else fail('title present', 'empty');
if (head.description && head.description.trim().length > 0) pass('meta description present');
else warn('meta description present', false, 'missing');

for (const token of cfg.forbiddenStrings || []) {
  if (head.html.includes(token)) fail(`no "${token}" placeholder left`, 'found in page source');
  else pass(`no "${token}" placeholder left`);
}

/* ---- 4. Fonts ---- */

section('4. Fonts');
for (const f of cfg.selfHostedFonts || []) {
  const u = f.startsWith('http') ? f : `${BASE}${f}`;
  const s = await statusOf(ctx, u);
  if (s === 200 || s === 206 || s === 304) pass(`font ${f.split('/').pop()}`, String(s));
  else fail(`font ${f.split('/').pop()}`, `status ${s}`);
}
if (cfg.expectFontFamily) {
  const face = await page
    .evaluate((fam) => {
      const f = [...document.fonts].find((x) => new RegExp(fam, 'i').test(x.family));
      return f ? { family: f.family, weight: f.weight, stretch: f.stretch, status: f.status } : null;
    }, cfg.expectFontFamily)
    .catch(() => null);
  if (!face) {
    fail(`${cfg.expectFontFamily} font-face registered`, 'not found in document.fonts');
  } else {
    pass(`${cfg.expectFontFamily} font-face registered`, JSON.stringify(face));
    if (cfg.expectFontWeight && face.weight !== cfg.expectFontWeight)
      warn('font weight axis', false, `got ${face.weight}, expected ${cfg.expectFontWeight}`);
    else if (cfg.expectFontWeight) pass('font weight axis', face.weight);
    if (cfg.expectFontStretch && face.stretch !== cfg.expectFontStretch)
      warn('font stretch axis', false, `got ${face.stretch}, expected ${cfg.expectFontStretch}`);
    else if (cfg.expectFontStretch) pass('font stretch axis', face.stretch);
  }
}
if (cfg.googleFontsPolicy === 'forbid') {
  if (googleFontHits.size === 0) pass('no Google Fonts on default view');
  else fail('no Google Fonts on default view', [...googleFontHits].join(', ').slice(0, 160));
} else if (cfg.googleFontsPolicy === 'warn') {
  if (googleFontHits.size === 0) pass('no Google Fonts on default view');
  else warn('no Google Fonts on default view', false, [...googleFontHits].join(', ').slice(0, 160));
}

/* ---- 5. Assets ---- */

section('5. Assets');
for (const a of cfg.assets || []) {
  const u = a.startsWith('http') ? a : `${BASE}${a}`;
  const s = await statusOf(ctx, u);
  if (s === 200 || s === 206 || s === 304) pass(`asset ${a.split('/').pop()}`, String(s));
  else fail(`asset ${a.split('/').pop()}`, `status ${s}`);
}
const brokenImgs = await page
  .evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src))
  .catch(() => []);
if (brokenImgs.length === 0) pass('all <img> loaded');
else fail('all <img> loaded', `${brokenImgs.length} broken: ${brokenImgs.slice(0, 3).join(', ')}`);

/* ---- 6. Routes ---- */

section('6. Routes');
/* If the home page never rendered, the whole app is down. Checking eleven
   more routes just burns 30s each to tell us the same thing. Fail fast. */
if (!homeOk) {
  for (const route of cfg.routes || []) {
    fail(`route ${route}`, 'skipped - home page did not render, site is down');
  }
} else {
  const routeTimeout = cfg.routeRenderTimeoutMs ?? 15000;
  for (const route of cfg.routes || []) {
    let ok = false;
    let n = 0;
    try {
      await loadRoute(page, route, routeTimeout);
      n = await renderedChars(page);
      ok = n >= (cfg.minRenderChars ?? 200);
    } catch {
      ok = false;
      n = 0;
    }
    if (ok) pass(`route ${route}`, `${n} chars`);
    else fail(`route ${route}`, `${n} chars - blank or failed to load`);
  }
}

/* ---- 7. Internal links ---- */

section('7. Internal links');
await page.goto('about:blank');
await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
await waitForRender(page);
const hrefs = await page.evaluate(() =>
  [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'))
);
const internal = [...new Set(hrefs)].filter(
  (h) => h && !/^(mailto:|tel:|javascript:|#$)/.test(h) && !/^https?:\/\//.test(h)
);
const pathLinks = internal.filter((h) => !h.startsWith('#'));
if (pathLinks.length === 0) {
  pass('internal path links', 'none (hash-routed site)');
} else {
  for (const h of pathLinks.slice(0, 40)) {
    const u = new URL(h, `${BASE}/`).toString();
    const s = await statusOf(ctx, u);
    if (s === 200 || s === 206 || s === 304) pass(`link ${h}`, String(s));
    else fail(`link ${h}`, `status ${s}`);
  }
}
const externalLinks = [...new Set(hrefs)].filter((h) => h && /^https?:\/\//.test(h));
if (!QUIET && externalLinks.length) {
  console.log(`  INFO  ${externalLinks.length} external link(s): ${externalLinks.slice(0, 6).join(', ')}`);
}

/* Required links, per route. Some links only exist on specific pages -
   the WhatsApp FAB is site-wide, but tel:/mailto: only render on /contact. */
if (cfg.requiredLinks) {
  for (const [route, required] of Object.entries(cfg.requiredLinks)) {
    let routeHrefs = hrefs;
    if (route !== '/' && homeOk) {
      await loadRoute(page, route, cfg.routeRenderTimeoutMs ?? 15000);
      routeHrefs = await page.evaluate(() =>
        [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'))
      );
    }
    for (const req of required) {
      if (routeHrefs.some((h) => h && h.includes(req))) pass(`link on ${route}`, req);
      else fail(`link on ${route}`, `${req} not found`);
    }
  }
}

/* ---- 8. Console + network noise ---- */

section('8. Console');
const allow = (cfg.allowedConsolePatterns || []).map((p) => new RegExp(p, 'i'));
/* "Failed to load resource" duplicates the requestfailed handler and the
   explicit asset checks below. A genuinely missing asset still hard-fails via
   the assets list and the broken-<img> check, so counting it twice here only
   creates noise from third-party beacons. Real JS errors still fail. */
const RESOURCE_NOISE = /failed to load resource|net::ERR_/i;
const realErrors = consoleErrors.filter(
  (e) => !allow.some((r) => r.test(e)) && !RESOURCE_NOISE.test(e)
);
if (realErrors.length === 0) pass('no unexpected console errors', `${consoleErrors.length} allowlisted`);
else fail('no unexpected console errors', realErrors.slice(0, 3).join(' | ').slice(0, 300));

if (failedRequests.length === 0) pass('no failed network requests');
else warn('no failed network requests', false, failedRequests.slice(0, 3).join(' | ').slice(0, 240));

/* ---- done ---- */

await browser.close();

const total = results.length;
const failed = results.filter((r) => !r.ok && r.level === 'fail').length;
const warned = results.filter((r) => !r.ok && r.level === 'warn').length;

console.log(`\n${'-'.repeat(60)}`);
console.log(`${cfg.name}: ${total - failed - warned}/${total} passed, ${failed} failed, ${warned} warnings`);
if (failed > 0) {
  console.log('\nFAILURES:');
  for (const r of results.filter((x) => !x.ok && x.level === 'fail')) {
    console.log(`  - ${r.name}: ${r.detail}`);
  }
}
if (warned > 0) {
  console.log('\nWARNINGS:');
  for (const r of results.filter((x) => !x.ok && x.level === 'warn')) {
    console.log(`  - ${r.name}: ${r.detail}`);
  }
}
console.log('');

process.exit(failed > 0 ? 1 : 0);
