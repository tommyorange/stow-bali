/* STOW website — shared kit: primitives + chrome (header, footer, CTA band, waitlist form).
   Attaches window.StowKit. Loaded via a hidden x-import (StowKitLoader). */
const _DS = () => window.STOWSelfStorageDesignSystem_6ffa12 || {};
const _mk = (n) => (props) => React.createElement(_DS()[n] || 'div', props);
const Button = _mk('Button'), Input = _mk('Input'), Badge = _mk('Badge'), Card = _mk('Card'), Stat = _mk('Stat'), Accordion = _mk('Accordion');

const go = (route) => { window.location.hash = route; };
const ctaLabel = (stage) => (stage === 'booking' ? 'Reserve a unit' : 'Join the waitlist');

/* ---- type helpers ---- */
const display = (size, color = 'var(--ink-900)', extra = {}) => ({
  fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '112%',
  letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 0.96,
  fontSize: size, color, margin: 0, ...extra,
});
const eyebrowStyle = (color = 'var(--indigo-600)') => ({
  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12,
  letterSpacing: '0.16em', textTransform: 'uppercase', color, margin: 0,
});
const bodyStyle = (size = 17, color = 'var(--ink-600)') => ({
  fontFamily: 'var(--font-sans)', fontSize: size, fontWeight: 400,
  lineHeight: 1.55, color, margin: 0,
});

function Eyebrow({ children, color, style }) {
  return <p style={{ ...eyebrowStyle(color), ...style }}>{children}</p>;
}

/* ---- S-mark & wordmark ---- */
function SMark({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="STOW">
      <rect width="120" height="120" rx="16" fill="var(--indigo-500)" />
      <rect x="42" y="31" width="52" height="15" rx="7.5" fill="var(--cream-100)" />
      <rect x="26" y="53" width="68" height="15" rx="7.5" fill="var(--gold-500)" />
      <rect x="26" y="75" width="52" height="15" rx="7.5" fill="var(--cream-100)" />
    </svg>
  );
}
function Wordmark({ size = 26, color = 'var(--ink-900)', dot = 'var(--gold-600)' }) {
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '112%', letterSpacing: '-0.03em', textTransform: 'uppercase', fontSize: size, lineHeight: 1, color }}>
      Stow<span style={{ color: dot }}>.</span>
    </span>
  );
}

/* ---- Lucide-style line icons (2px, rounded, no fill) ---- */
const ICONS = {
  climate: ['M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2', 'M9.6 4.6A2 2 0 1 1 11 8H2', 'M12.6 19.4A2 2 0 1 0 14 16H2'],
  secure: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4'],
  clean: ['M9.94 14.5A2 2 0 0 0 8.5 13.06l-4.6-1.18a.5.5 0 0 1 0-.96l4.6-1.18A2 2 0 0 0 9.94 8.3l1.18-4.6a.5.5 0 0 1 .96 0l1.18 4.6a2 2 0 0 0 1.44 1.44l4.6 1.18a.5.5 0 0 1 0 .96l-4.6 1.18a2 2 0 0 0-1.44 1.44l-1.18 4.6a.5.5 0 0 1-.96 0z', 'M18 5h2', 'M19 4v2'],
  flexible: ['M8 2v4', 'M16 2v4', 'M3 8h18', 'M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
  pin: ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z', 'M12 10a2 2 0 1 0 0-.01z'],
  clock: ['M12 6v6l4 2', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  chat: ['M7.9 20A9 9 0 1 0 4 16.1L2 22z'],
  arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
  arrowSm: ['M7 17 17 7', 'M7 7h10v10'],
  check: ['M20 6 9 17l-5-5'],
  box: ['m21 8-9-5-9 5v8l9 5 9-5z', 'M3.3 7 12 12l8.7-5', 'M12 22V12'],
};
function Icon({ name, size = 24, color = 'currentColor', stroke = 2, style }) {
  const paths = ICONS[name] || [];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/* ---- Section wrapper ---- */
function Section({ children, bg = 'transparent', pad = '96px 32px', bordered = false, style, maxw = 1200 }) {
  return (
    <section style={{ background: bg, borderTop: bordered ? '1px solid var(--border-soft)' : 'none', borderBottom: bordered ? '1px solid var(--border-soft)' : 'none', ...style }}>
      <div style={{ maxWidth: maxw, margin: '0 auto', padding: pad }}>{children}</div>
    </section>
  );
}

/* ---- Unit-door grid motif (hero visual until real photography exists) ---- */
function UnitGrid({ caption = 'Kesiman Kertalangu · Denpasar', badge = 'Opening 【OPEN_DATE】' }) {
  const cells = ['var(--indigo-500)', 'var(--cream-200)', 'var(--ink-800)', 'var(--cream-200)', 'var(--gold-500)', 'var(--cream-200)', 'var(--ink-800)', 'var(--cream-200)', 'var(--indigo-500)'];
  return (
    <div style={{ background: 'var(--ink-800)', borderRadius: 28, padding: 22, boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ aspectRatio: '1', borderRadius: 14, background: c, display: 'flex', alignItems: 'flex-end', padding: 12 }}>
            <span style={{ width: 18, height: 4, borderRadius: 2, background: c === 'var(--cream-200)' ? 'var(--ink-400)' : 'rgba(255,255,255,0.55)' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, padding: '0 4px' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cream-300)' }}>{caption}</span>
        <Badge tone="accent">{badge}</Badge>
      </div>
    </div>
  );
}

/* ---- Striped image / map placeholders ---- */
function ImgPlaceholder({ label = 'FACILITY PHOTO', note = 'premium · limestone & indigo · calm', ratio = '4 / 3', radius = 20, style }) {
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', border: '1px solid var(--border)', background: 'repeating-linear-gradient(135deg, var(--cream-050) 0 14px, var(--cream-100) 14px 28px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, ...style }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-400)' }}>{label}</span>
      <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12, color: 'var(--ink-400)' }}>{note}</span>
    </div>
  );
}

/* ---- Facility photos (real renders) ---- */
const PHOTOS = {
  hero: './assets/photo-side-elevation.png',
  corridor: './assets/photo-corridor.png',
  gate: './assets/photo-entrance-gate.png',
  unit: './assets/photo-open-unit.png',
};
function FacilityImage({ src = PHOTOS.hero, caption = 'Kesiman Kertalangu · Denpasar', badge = 'Opening 【OPEN_DATE】', radius = 28, style }) {
  const { Badge } = window.StowKit;
  return (
    <div style={{ position: 'relative', borderRadius: radius, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', ...style }}>
      <img src={src} alt="STOW Self Storage facility at dusk — Kesiman Kertalangu, Bali" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 22px 18px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, background: 'linear-gradient(to top, rgba(12,20,48,0.88), rgba(12,20,48,0.0))' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cream-100)' }}>{caption}</span>
        <Badge tone="accent" solid>{badge}</Badge>
      </div>
    </div>
  );
}

Object.assign(window, {
  StowKit_go: go, StowKit_ctaLabel: ctaLabel,
});

/* ---- Trust row (4 items) ---- */
const TRUST = [
  { icon: 'climate', t: 'Insulated & ventilated', d: 'Insulated units with built-in ventilation — airflow keeps damp, musty air and heat from settling on your things.' },
  { icon: 'secure', t: 'Secure', d: '【SECURITY_SPEC】 monitored access, so only you reach your unit.' },
  { icon: 'clean', t: 'Clean & modern', d: 'A brand-new facility, not a converted warehouse.' },
  { icon: 'flexible', t: 'Flexible', d: 'Month to month. Scale up or down when your needs change.' },
];
function TrustRow({ onDark = false }) {
  const tc = onDark ? 'var(--cream-100)' : 'var(--ink-900)';
  const dc = onDark ? 'rgba(243,238,225,0.72)' : 'var(--ink-600)';
  const ic = onDark ? 'var(--gold-500)' : 'var(--indigo-500)';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
      {TRUST.map((it) => (
        <div key={it.t}>
          <Icon name={it.icon} size={26} color={ic} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.015em', fontSize: 19, color: tc, margin: '14px 0 6px' }}>{it.t}</h3>
          <p style={{ ...bodyStyle(14.5, dc), lineHeight: 1.5 }}>{it.d}</p>
        </div>
      ))}
    </div>
  );
}

/* ---- Language switcher (EN / ID / JP) — UI only, persists choice ---- */
function LangSwitcher({ onDark = false }) {
  const [lang, setLang] = React.useState(() => { try { return localStorage.getItem('stow_lang') || 'EN'; } catch (e) { return 'EN'; } });
  const pick = (l) => {
    setLang(l);
    try { localStorage.setItem('stow_lang', l); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('stow-lang', { detail: l })); } catch (e) {}
  };
  const base = onDark ? 'rgba(243,238,225,0.55)' : 'var(--ink-400)';
  const on = onDark ? 'var(--cream-100)' : 'var(--indigo-600)';
  const bg = onDark ? 'rgba(243,238,225,0.14)' : 'var(--cream-200)';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: 3, borderRadius: 999, background: bg }}>
      {['EN', 'ID', 'JP'].map((l) => (
        <button key={l} onClick={() => pick(l)} style={{
          border: 'none', cursor: 'pointer', borderRadius: 999, padding: '5px 11px',
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.06em',
          background: lang === l ? (onDark ? 'rgba(243,238,225,0.9)' : 'var(--white)') : 'transparent',
          color: lang === l ? (onDark ? 'var(--indigo-700)' : on) : base,
          boxShadow: lang === l ? 'var(--shadow-xs)' : 'none', transition: 'all var(--dur) var(--ease)',
        }}>{l}</button>
      ))}
    </div>
  );
}

/* ---- Header / nav ---- */
const NAV = [
  { label: 'Personal', route: '#/personal' },
  { label: 'Business', route: '#/business' },
  { label: 'Units & Pricing', route: '#/pricing' },
  { label: 'How It Works', route: '#/how-it-works' },
  { label: 'Facility', route: '#/facility' },
];
function Header({ stage = 'waitlist', current = '#/' }) {
  const [menu, setMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = (active) => ({ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: active ? 'var(--indigo-600)' : 'var(--ink-700)', textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap' });
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(243,238,225,0.86)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${scrolled ? 'var(--border-soft)' : 'transparent'}`, transition: 'border-color var(--dur) var(--ease)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <a href="#/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <SMark size={36} /><Wordmark size={24} />
        </a>
        <nav className="stow-desktop-nav" style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
          {NAV.map((n) => <a key={n.route} href={n.route} style={link(current === n.route)}>{n.label}</a>)}
        </nav>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div className="stow-desktop-nav"><LangSwitcher /></div>
          <div className="stow-desktop-nav"><Button variant="primary" size="sm" onClick={() => go('#/contact')}>{ctaLabel(stage)}</Button></div>
          <button className="stow-mobile-only" onClick={() => setMenu(true)} aria-label="Menu" style={{ display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', padding: 6 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ink-900)" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {menu && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100dvh', zIndex: 60, background: 'var(--indigo-500)', display: 'flex', flexDirection: 'column', animation: 'stowFade var(--dur) var(--ease)' }}>
          <div style={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76, padding: '0 24px', borderBottom: '1px solid rgba(243,238,225,0.14)' }}>
            <Wordmark size={24} color="var(--cream-100)" dot="var(--gold-500)" />
            <button onClick={() => setMenu(false)} aria-label="Close" style={{ display: 'inline-flex', border: 'none', background: 'transparent', cursor: 'pointer', padding: 6 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cream-100)" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
          <nav style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2, padding: '20px 24px' }}>
            {[{ label: 'Home', route: '#/' }, ...NAV, { label: 'FAQ', route: '#/faq' }, { label: 'About', route: '#/about' }].map((n) => (
              <a key={n.route} href={n.route} onClick={() => setMenu(false)} style={{ ...display(24, current === n.route ? 'var(--gold-500)' : 'var(--cream-100)'), padding: '11px 0', textDecoration: 'none' }}>{n.label}</a>
            ))}
          </nav>
          <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', gap: 14, padding: '20px 24px', borderTop: '1px solid rgba(243,238,225,0.14)' }}>
            <LangSwitcher onDark />
            <Button variant="gold" size="lg" block onClick={() => { setMenu(false); go('#/contact'); }}>{ctaLabel(stage)}</Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---- Global CTA band ---- */
function CtaBand({ stage = 'waitlist' }) {
  return (
    <section style={{ background: 'var(--indigo-500)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="stow-cta-grid">
        <div>
          <h2 style={display('clamp(40px,5vw,64px)', 'var(--cream-100)')}>Store it. Sorted<span style={{ color: 'var(--gold-500)' }}>.</span></h2>
          <p style={{ ...bodyStyle(18, 'rgba(243,238,225,0.8)'), marginTop: 16, maxWidth: '46ch' }}>Clean, secure, insulated and ventilated storage in Kesiman Kertalangu. Join the waitlist and lock in your unit before we open.</p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="gold" size="lg" onClick={() => go('#/contact')}>{ctaLabel(stage)}</Button>
          <Button variant="inverse" size="lg" onClick={() => go('#/pricing')}>See units & pricing</Button>
        </div>
      </div>
    </section>
  );
}

/* ---- Waitlist form (reused site-wide) ---- */
function WaitlistForm({ stage = 'waitlist' }) {
  const [need, setNeed] = React.useState('Personal');
  const [when, setWhen] = React.useState('Within 1 month');
  const [done, setDone] = React.useState(false);
  const seg = (val, cur, set) => ({
    flex: 1, cursor: 'pointer', border: `1.5px solid ${cur === val ? 'var(--indigo-500)' : 'var(--border)'}`,
    background: cur === val ? 'var(--indigo-500)' : 'var(--white)', color: cur === val ? 'var(--cream-100)' : 'var(--ink-700)',
    borderRadius: 12, padding: '11px 8px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13.5,
    textAlign: 'center', transition: 'all var(--dur) var(--ease)',
  });
  const fieldLabel = { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-500)', display: 'block', marginBottom: 8 };
  if (done) {
    return (
      <Card padding={32} style={{ textAlign: 'center' }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
          <Icon name="check" size={30} color="var(--ink-900)" stroke={3} />
        </div>
        <h3 style={display(28, 'var(--ink-900)')}>You're on the list<span style={{ color: 'var(--gold-600)' }}>.</span></h3>
        <p style={{ ...bodyStyle(16), marginTop: 10 }}>We'll be in touch before we open. Watch for a message from STOW.</p>
      </Card>
    );
  }
  return (
    <Card padding={30}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" placeholder="you@email.com" />
        <Input label="WhatsApp number" hint="Optional" placeholder="+62 …" />
        <div>
          <span style={fieldLabel}>I need storage for</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Personal', 'Business'].map((v) => <div key={v} style={seg(v, need, setNeed)} onClick={() => setNeed(v)}>{v}</div>)}
          </div>
        </div>
        <div>
          <span style={fieldLabel}>Roughly when</span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Within 1 month', '1–3 months', 'Just exploring'].map((v) => (
              <div key={v} onClick={() => setWhen(v)} style={{ cursor: 'pointer', borderRadius: 999, padding: '8px 15px', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, border: `1.5px solid ${when === v ? 'var(--indigo-500)' : 'var(--border)'}`, background: when === v ? 'var(--indigo-050)' : 'var(--white)', color: when === v ? 'var(--indigo-600)' : 'var(--ink-600)', transition: 'all var(--dur) var(--ease)' }}>{v}</div>
            ))}
          </div>
        </div>
        <Input label="What are you storing?" hint="Optional, one line" placeholder="e.g. villa furniture, retail stock…" />
        <Button variant="primary" size="lg" block onClick={() => setDone(true)}>{ctaLabel(stage)}</Button>
        <p style={{ ...bodyStyle(13, 'var(--ink-400)'), textAlign: 'center', lineHeight: 1.5 }}>No payment now. No obligation. We'll only contact you about STOW.</p>
      </div>
    </Card>
  );
}

function WaitlistBand({ stage = 'waitlist', heading = 'Be first in line.', bg = 'var(--cream-050)' }) {
  return (
    <section style={{ background: bg, borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px', display: 'grid', gridTemplateColumns: '1fr 460px', gap: 56, alignItems: 'center' }} className="stow-form-grid">
        <div>
          <Eyebrow>Join the waitlist</Eyebrow>
          <h2 style={{ ...display('clamp(36px,4vw,52px)'), marginTop: 12 }}>{heading}</h2>
          <p style={{ ...bodyStyle(18), marginTop: 16, maxWidth: '42ch' }}>We open 【OPEN_DATE】. Join the waitlist and we'll contact you before we release units to the public — with your size options and your rate.</p>
        </div>
        <WaitlistForm stage={stage} />
      </div>
    </section>
  );
}

/* ---- Footer ---- */
function Footer({ stage = 'waitlist' }) {
  const flink = { fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'rgba(243,238,225,0.72)', textDecoration: 'none', cursor: 'pointer' };
  const col = (title, links) => (
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 16 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {links.map((l) => <a key={l.label} href={l.route || undefined} style={flink}>{l.label}</a>)}
      </div>
    </div>
  );
  return (
    <footer style={{ background: 'var(--indigo-900)', color: 'var(--cream-100)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.3fr', gap: 40 }} className="stow-footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <SMark size={34} /><Wordmark size={22} color="var(--cream-100)" dot="var(--gold-500)" />
          </div>
          <p style={{ ...bodyStyle(14, 'rgba(243,238,225,0.6)'), maxWidth: '30ch' }}>Clean, secure, insulated self storage — built for Kesiman Kertalangu, Bali.</p>
        </div>
        {col('Storage', [{ label: 'Personal Storage', route: '#/personal' }, { label: 'Business Storage', route: '#/business' }, { label: 'Units & Pricing', route: '#/pricing' }, { label: 'How It Works', route: '#/how-it-works' }])}
        {col('Facility', [{ label: 'Facility & Location', route: '#/facility' }, { label: 'FAQ', route: '#/faq' }, { label: 'About', route: '#/about' }])}
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 16 }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...bodyStyle(14, 'rgba(243,238,225,0.72)') }}>
            <span>【ADDRESS】</span><span>【PHONE】</span><span>【WHATSAPP】</span><span>【EMAIL】</span><span>【HOURS】</span>
          </div>
          <div style={{ marginTop: 18 }}><Button variant="gold" size="sm" onClick={() => go('#/contact')}>{ctaLabel(stage)}</Button></div>
          <div style={{ marginTop: 16 }}><LangSwitcher onDark /></div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(243,238,225,0.14)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Wordmark size={17} color="var(--cream-100)" dot="var(--gold-500)" />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(243,238,225,0.5)' }}>© STOW Self Storage 【YEAR】</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#/privacy" style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(243,238,225,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#/terms" style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(243,238,225,0.5)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { StowKitLoader: () => null });
window.StowKit = {
  Button, Input, Badge, Card, Stat, Accordion,
  go, ctaLabel, display, eyebrowStyle, bodyStyle,
  Eyebrow, SMark, Wordmark, Icon, Section, UnitGrid, ImgPlaceholder, FacilityImage, PHOTOS, TrustRow, LangSwitcher,
  Header, Footer, CtaBand, WaitlistForm, WaitlistBand, NAV,
};
