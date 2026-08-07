# Live site checker

Answers one question: **is the live site actually fine?**

Not "did the build pass". stowbali.com went completely blank on 2026-07-26 and
Vercel reported the build green the entire time. A green build proves nothing.

## Run it

```bash
cd check
npm install
npx playwright install --with-deps chromium
node site-check.mjs sites/stow.json
```

Exit code 0 means every hard check passed. Exit 1 means something is broken,
and the failures are listed at the bottom of the output.

Check a Vercel preview instead of production:

```bash
node site-check.mjs sites/stow.json --base https://stow-bali-abc123.vercel.app
```

## What it checks

| # | Check | Why it exists |
|---|-------|---------------|
| 1 | The page actually renders content, and the boot splash cleared | The 2026-07-26 outage. A missing component reference blanks the page and still builds green. |
| 2 | GA tag present in the HTML, `gtag` initialised, script fetched | Ingenra's GA tag was silently stripped by an export and nobody noticed for 8 days. That data is gone. |
| 3 | canonical, og:image absolute, og:site_name, title, no placeholder tokens | Each of these has broken silently at least once. |
| 4 | All six Archivo woff2 return 200, variable axes intact, no Google Fonts | Self-hosting has regressed to `./fonts/...` before. A static-instances export silently strips the width axis. |
| 5 | Every asset returns 200, no broken `<img>` | Assets are uploaded separately from HTML and can be forgotten. |
| 6 | Every route renders real content | A route can 200 and still be blank on a client-rendered site. |
| 7 | Internal links resolve, required contact links present per page | The WhatsApp link is the primary conversion path. |
| 8 | No unexpected console errors | Anything unusual here is usually the first sign of a bigger problem. |

If the home page does not render, the route checks are skipped rather than
timing out one by one. The site is down; there is nothing more to learn.

## When it runs

`.github/workflows/site-check.yml`

- **After every push to main**, following a 2 minute wait so Vercel has
  actually deployed. Without the wait it would test the previous deploy and
  report a false green.
- **Daily at 06:00 Bali time**, to catch silent breakage.
- **On demand** from the Actions tab, optionally against a preview URL.

Two attempts before failing, 45 seconds apart, so one transient CDN blip does
not raise a false alarm. GitHub emails the repo owner when a scheduled run
fails.

## Configuration

Everything site-specific lives in `sites/stow.json`. The script itself is
generic and is intended to be **identical across repos** - the Ingenra copy
differs only in its config. If you change `site-check.mjs`, copy it to the
other repo.

Config worth knowing about:

- `routeStyle` - `hash` for STOW's `#/pricing` SPA, `path` for a normal site.
- `renderSelector` / `minRenderChars` - what counts as "rendered".
- `brokenIndicatorSelector` - an element that is only visible when the app
  failed to mount. STOW's boot splash.
- `requiredLinks` - keyed by route, because `tel:` and `mailto:` only render
  on `/contact`, while the WhatsApp button is site-wide.
- `allowedConsolePatterns` - regexes for known-harmless console noise.

`--route-map` exists for local testing on a machine with no outbound internet.
It is never used against the live site.

## Design system guard

`.github/workflows/design-system-guard.yml` reads `design-system-owned.txt`
and flags any push that edits a file the design system owns.

It warns, it does not block. A real design system release is supposed to touch
those files. The point is that it can never happen without you seeing it - and
if it happens outside a release, live has drifted and the next export will
silently revert whatever was done.
