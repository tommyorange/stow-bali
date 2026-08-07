repo: tommyorange/stow-bali
branch: main

## Last sync
date: 2026-08-07T00:00:00Z
commit: cfb1a248b43852b118083c8736240c0546c7af2b

### Updated in this project
- Removed the internal `(v6 model)` version string from public copy on Units &
  Pricing, in EN, ID and JP together with the matching dictionary key.
- Swept every em dash and en dash out of the whole repo except `_ds_bundle.js`
  (see Notes). EN/ID take a spaced hyphen, numeric ranges a tight hyphen; the
  single JP dash was restructured, never hyphenated.
- Token filler refactor: `StowFill` is now a pure function and `translations.js`
  is the single mutator of text nodes, translating the raw 【KEY】 string before
  filling it. `OPEN_DATE` falls back per-language (soon / segera / 近日).
- `tokens/fonts.css`: moved the Noto Sans JP `@import` to the first line (it sat
  after the `@font-face` blocks, so browsers dropped it and JP never loaded),
  and added a JP uppercase override that spares the wordmark and header nav.
- Footer phone and email are now real `tel:` / `mailto:` links.

## Sync history
### 2026-07-26T06:12:00Z - cbe66609a5867e5b3318791b1b62f4ffd5a87320
Mobile blank-page fix: explicit JSX transpile, production React, no SRI, CDN
fallbacks, boot splash. `OPEN_DATE` renders as "soon".

### 2026-07-26T04:43:19Z - tree c859346605a9
Pulled the full production site into this project as the working copy.

## Notes
- **Do not "fix" the ds-base chunk in `_ds_bundle.js`.** The stale
  `scraps/marketing-homepage-legacy/ds-base.js` chunk injects seven `../../`
  stylesheet links plus `../../_ds_bundle.js`. From the SITE ROOT the browser
  clamps the `..` segments, so those URLs resolve to the real
  `/tokens/*.css`, `/styles.css`, `/_ds_bundle.js` and all return 200 - which
  is why production shows zero 404s and zero console errors. It only looks
  broken in a preview that serves `index.html` from a nested path. Harmless
  duplicate loading; Aaron's decision is to leave the 90 KB bundle alone.
- **`_ds_bundle.js` still holds 26 em dashes and 3 en dashes**, plus its own
  stale duplicates of site strings (including `(v6 model)`). It loads first and
  IS in the render path, but the JSX files define the components that actually
  win, so those copies are inert today. Fix by re-exporting the design system,
  never by hand-editing the bundle.
- **Never split a deploy across commits.** A component definition and its mount
  must land together; on 2026-07-26 a four-commit burst served a blank page for
  two minutes while Vercel reported green.

## Screen map
| Screen | Built from |
| --- | --- |
| Entry / head, GA4, canonical, og:image | index.html |
| Router + Header/Footer shell | SiteApp.jsx |
| Shared kit (Header, Footer, WaitlistForm, WhatsAppFab, etc.) | SiteKit.jsx |
| Home, Personal, Business, Pricing, How It Works | SitePages.jsx |
| Facility, FAQ, About, Contact, Privacy, Terms | SitePages2.jsx |
| Launch facts (hours, address, contact) | site-config.js |
| Copy in EN / JA / ID | translations.js |
| Tokens + components | styles.css, tokens/, _ds_bundle.js |
| Fonts (self-hosted Archivo, Noto Sans JP via Google) | fonts/archivo/, tokens/fonts.css |
| Imagery, favicons, OG image | assets/ |
