/* ============================================================
   STOW launch config - THE one file to edit before launch.
   Every 【KEY】 placeholder rendered anywhere on the site fills
   from here. Leave a value as null to keep the visible
   placeholder (nothing silently ships unfilled - you can see it).
   ============================================================ */
window.StowConfig = {
  OPEN_DATE: null,      // e.g. 'September 2026'
  HOURS: null,          // e.g. '06:00-22:00, every day'
  ADDRESS: null,        // street address, Kesiman Kertalangu
  WHATSAPP: '+62 (877) 2306 2026',
  EMAIL: 'hello@stowbali.com',
  PHONE: '+62 (877) 2306 2026',   // same line as WhatsApp
  SECURITY_SPEC: null,  // e.g. 'CCTV + PIN-coded gate access'
  YEAR: String(new Date().getFullYear()),
};

/* Machine-readable forms of the contact number - used for hrefs, where the
   display formatting above (spaces, parens) is not valid. */
window.StowContact = {
  WA_URL: 'https://wa.me/message/FF4LV225ZEMCN1',   // WhatsApp Business short link
  TEL: 'tel:+6287723062026',
  MAILTO: 'mailto:hello@stowbali.com',
};

/* Public-facing fallbacks. When a key above is still null, visitors see this
   wording instead of the raw 【KEY】 marker. Per-language, because filling runs
   AFTER translation - a single English string here would drop "soon" into the
   middle of Japanese and Indonesian copy. Keys absent from this map keep
   showing 【KEY】 - so an unfilled value is still impossible to miss. */
window.StowFallbacks = {
  OPEN_DATE: { EN: 'soon', ID: 'segera', JP: '近日' },
};

/* Fills 【KEY】 tokens. Exposed as a PURE function only - it does not touch the
   DOM. translations.js is the single mutator of text nodes: it translates the
   raw 【KEY】-bearing string first (so dictionary keys always match the JSX
   source verbatim), then calls this to fill. Two observers racing over the same
   text nodes is what silently broke ID/JP on every OPEN_DATE string before.
   Keys left null fall back to StowFallbacks, else stay visible as placeholders. */
window.StowFill = (() => {
  const RE = /【([A-Z_]+)】/g;
  const fallback = (k, lang) => {
    const f = window.StowFallbacks[k];
    if (f == null) return null;
    return typeof f === 'string' ? f : (f[lang] ?? f.EN ?? null);
  };
  const text = (s, lang) => (
    !s || s.indexOf('【') === -1 ? s
      : s.replace(RE, (m, k) => (window.StowConfig[k] ?? fallback(k, lang || 'EN') ?? m))
  );
  return { text };
})();
