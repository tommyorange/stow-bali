/* ============================================================
   STOW launch config — THE one file to edit before launch.
   Every 【KEY】 placeholder rendered anywhere on the site fills
   from here. Leave a value as null to keep the visible
   placeholder (nothing silently ships unfilled — you can see it).
   ============================================================ */
window.StowConfig = {
  OPEN_DATE: null,      // e.g. 'September 2026'
  HOURS: null,          // e.g. '06:00–22:00, every day'
  ADDRESS: null,        // street address, Kesiman Kertalangu
  WHATSAPP: '+62 (877) 2306 2026',
  EMAIL: 'hello@stowbali.com',
  PHONE: '+62 (877) 2306 2026',   // same line as WhatsApp
  SECURITY_SPEC: null,  // e.g. 'CCTV + PIN-coded gate access'
  YEAR: String(new Date().getFullYear()),
};

/* Machine-readable forms of the contact number — used for hrefs, where the
   display formatting above (spaces, parens) is not valid. */
window.StowContact = {
  WA_URL: 'https://wa.me/message/FF4LV225ZEMCN1',   // WhatsApp Business short link
  TEL: 'tel:+6287723062026',
  MAILTO: 'mailto:hello@stowbali.com',
};

/* Fills 【KEY】 tokens in rendered text and keeps them filled across
   React re-renders. Keys left null stay visible as placeholders. */
(() => {
  const RE = /【([A-Z_]+)】/g;
  const fill = (node) => {
    const t = node.nodeValue;
    if (!t || t.indexOf('【') === -1) return;
    const out = t.replace(RE, (m, k) => (window.StowConfig[k] ?? m));
    if (out !== t) node.nodeValue = out;
  };
  const walk = (root) => {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) fill(w.currentNode);
  };
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'characterData') fill(m.target);
      for (const n of m.addedNodes) {
        if (n.nodeType === 3) fill(n);
        else if (n.nodeType === 1) walk(n);
      }
    }
  });
  const start = () => {
    walk(document.body);
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });
  };
  if (document.body) start();
  else addEventListener('DOMContentLoaded', start);
})();
