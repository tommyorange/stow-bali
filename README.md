# STOW Self Storage — static site (for Claude Cowork)

This folder is a **complete, deployable static site**. No build step required —
push it to GitHub and point Vercel (or Netlify / GitHub Pages) at it.

## Deploy

- **Vercel:** import the repo, framework preset "Other", no build command,
  output directory = this folder. Done.
- Routing is client-side via URL hashes (`#/pricing`, `#/contact`, …), so no
  server rewrites/redirect config is needed — every route works from
  `index.html`.

## Before / after going live

1. **`site-config.js`** — fill in the real values (open date, hours, address,
   WhatsApp, email, phone, security spec). Keys left `null` show as visible
   `【KEY】` placeholders on the page, so it's obvious what's missing.
2. **`index.html`** — replace `https://REPLACE-WITH-DOMAIN` in the `og:image`
   meta tag with the real domain (social previews need an absolute URL).
3. **Waitlist form** — the form in `SiteKit.jsx` (`WaitlistForm`) currently
   only simulates submission. Wire it to a real endpoint (Formspree, a Vercel
   serverless function, or the team's CRM).
4. **Fonts** — currently loaded from Google Fonts via `tokens/fonts.css`.
   A separate task brief exists to self-host them ("Font Self-Hosting
   Handoff") — apply it in this folder's `tokens/fonts.css`.

## What's in here

- `index.html` — entry point; head metadata, favicons, responsive CSS
- `SiteKit.jsx` / `SitePages.jsx` / `SitePages2.jsx` / `SiteApp.jsx` — the site
  (React, JSX transpiled in the browser by Babel standalone)
- `site-config.js` — launch facts, one file to edit
- `styles.css` + `tokens/` — the STOW design tokens (colors, type, spacing…)
- `_ds_bundle.js` — compiled STOW component library (Button, Card, Modal, …)
- `assets/` — hero render, favicons, app icons, OG share image

## Known architecture caveat (fine for launch, improve later)

JSX is transpiled **in the browser** and React is the development build —
simple and dependency-free, but it costs ~1s of extra load time and the pages
are client-rendered (weaker SEO). When there's time, precompile: run the four
`.jsx` files through Babel once at build time, switch the React CDN scripts to
`react.production.min.js` / `react-dom.production.min.js`, and drop Babel
standalone. No code changes needed — the files are plain React without any
bundler-specific imports.

## Brand rules (do not "improve" these)

- Antique gold `#C7A14A` is trim/detail; as a fill it appears on at most ONE
  primary CTA per view, only on indigo/ink surfaces. Never bright yellow.
- Display type = Archivo 800, `font-stretch: 112%`, uppercase. Do not fake the
  width with transforms.
- No gradients, no emoji, no green as a brand color.
