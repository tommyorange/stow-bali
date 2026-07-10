/* STOW website — pages A: Home, Personal, Business, Units & Pricing, How It Works.
   Reads window.StowKit; merges into window.StowPages. */
const MAP_URL = 'https://maps.app.goo.gl/HbMR3C5H6r7BdaKm9';

/* ---------- shared page bits ---------- */
function PageHero({ eyebrow, title, sub, primary = 'Join the waitlist', secondary = 'See units & pricing', onPrimary, onSecondary, visual }) {
  const { display, bodyStyle, Button } = window.StowKit;
  return (
    <section style={{ background: 'var(--indigo-500)', color: 'var(--cream-100)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: visual ? '84px 32px 88px' : '96px 32px 80px', display: 'grid', gridTemplateColumns: visual ? '1.08fr 0.92fr' : '1fr', gap: 56, alignItems: 'center' }} className="stow-hero-grid">
        <div style={{ opacity: 1, animation: 'stowFadeUp 0.5s var(--ease, ease) forwards' }}>
          {eyebrow && <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)', margin: 0 }}>{eyebrow}</p>}
          <h1 style={{ ...display('clamp(46px,5.6vw,80px)', 'var(--cream-100)'), marginTop: 18, maxWidth: '15ch' }}>{title}</h1>
          <p style={{ ...bodyStyle(19, 'rgba(243,238,225,0.82)'), marginTop: 22, maxWidth: '48ch' }}>{sub}</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            {primary && <Button variant="gold" size="lg" onClick={onPrimary || (() => window.StowKit.go('#/contact'))}>{primary}</Button>}
            {secondary && <Button variant="inverse" size="lg" onClick={onSecondary || (() => window.StowKit.go('#/pricing'))}>{secondary}</Button>}
          </div>
        </div>
        {visual}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, intro, center = false, maxw = '30ch' }) {
  const { display, bodyStyle, Eyebrow } = window.StowKit;
  return (
    <div style={{ textAlign: center ? 'center' : 'left', margin: center ? '0 auto' : 0, maxWidth: center ? 720 : 'none' }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ ...display('clamp(32px,3.6vw,46px)'), marginTop: eyebrow ? 12 : 0, maxWidth: center ? 'none' : maxw }}>{title}</h2>
      {intro && <p style={{ ...bodyStyle(18), marginTop: 16, maxWidth: center ? '52ch' : '56ch', marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{intro}</p>}
    </div>
  );
}

/* feature card list */
function FeatureCards({ items, cols = 4 }) {
  const { Card, display, bodyStyle, Icon } = window.StowKit;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 20 }} className={cols === 4 ? 'stow-4col' : cols === 3 ? 'stow-3col' : 'stow-2col'}>
      {items.map((it) => (
        <Card key={it.t} padding={26}>
          {it.icon && <Icon name={it.icon} size={24} color="var(--indigo-500)" />}
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.015em', fontSize: 20, color: 'var(--ink-900)', margin: it.icon ? '14px 0 8px' : '0 0 8px' }}>{it.t}</h3>
          <p style={{ ...bodyStyle(15, 'var(--ink-600)'), lineHeight: 1.5 }}>{it.d}</p>
        </Card>
      ))}
    </div>
  );
}

/* ---------- HOME ---------- */
function Home({ stage }) {
  const { Section, UnitGrid, FacilityImage, display, bodyStyle, Button, Card, Eyebrow, Icon, TrustRow, WaitlistBand, go } = window.StowKit;
  const paths = [
    { tag: 'Personal', title: 'Personal', d: 'Moving, renovating, or just out of room. Keep your things safe, dry and close by.', link: 'Personal storage', route: '#/personal' },
    { tag: 'Business', title: 'Business', d: 'Stock, equipment, documents and archives. Off-site space that grows with you.', link: 'Business storage', route: '#/business' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Opening 【OPEN_DATE】 · Kesiman Kertalangu, Bali"
        title={<>Storage in Bali,<br />done properly<span style={{ color: 'var(--gold-500)' }}>.</span></>}
        sub="Clean, secure, insulated and ventilated units for your home and your business — in Kesiman Kertalangu. We open 【OPEN_DATE】. Join the waitlist today."
        primary={window.StowKit.ctaLabel(stage)}
        visual={<div style={{ opacity: 1, animation: 'stowFadeUp 0.6s var(--ease, ease) forwards' }}><FacilityImage /></div>}
      />

      {/* Two paths */}
      <Section pad="88px 32px">
        <SectionHead eyebrow="Two paths, equal weight" title="What are you storing?" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 40 }} className="stow-2col">
          {paths.map((p) => (
            <div key={p.tag} onClick={() => go(p.route)} style={{ cursor: 'pointer' }}>
              <Card interactive padding={0} style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ padding: '32px 32px 0' }}>
                    <Eyebrow>{p.tag}</Eyebrow>
                    <h3 style={{ ...display(34), marginTop: 12 }}>{p.title}</h3>
                    <p style={{ ...bodyStyle(16.5), marginTop: 12, maxWidth: '34ch' }}>{p.d}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, marginBottom: 28, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, letterSpacing: '0.04em', color: 'var(--indigo-600)' }}>
                      {p.link} <Icon name="arrow" size={17} color="var(--indigo-600)" />
                    </div>
                  </div>
                  <div style={{ marginTop: 'auto', height: 10, background: p.tag === 'Personal' ? 'var(--indigo-500)' : 'var(--gold-500)' }} />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Why STOW */}
      <Section bg="var(--cream-050)" bordered pad="88px 32px">
        <SectionHead eyebrow="Why STOW" title="Storage you can actually trust." intro="Bali is hard on stored belongings — humidity, heat, damp. STOW is built to protect against all three." />
        <div style={{ marginTop: 44 }}><TrustRow /></div>
      </Section>

      {/* How it works teaser */}
      <Section pad="88px 32px">
        <SectionHead eyebrow="How it works" title="Three steps." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 40 }} className="stow-3col">
          {[{ n: '01', t: 'Pick your size', d: 'Not sure? We\\u2019ll help you choose.' }, { n: '02', t: 'Reserve it', d: 'Book online or with our team. For now: join the waitlist.' }, { n: '03', t: 'Move in', d: 'Bring your things, or arrange a hand.' }].map((s) => (
            <div key={s.n}>
              <div style={display(52, 'var(--indigo-500)')}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.015em', fontSize: 23, color: 'var(--ink-900)', margin: '12px 0 8px' }}>{s.t}</h3>
              <p style={{ ...bodyStyle(16), maxWidth: '32ch' }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}><Button variant="secondary" onClick={() => go('#/how-it-works')} iconRight={<Icon name="arrow" size={17} />}>See how it works</Button></div>
      </Section>

      {/* Pricing teaser */}
      <Section bg="var(--ink-800)" pad="80px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="stow-cta-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)', margin: 0 }}>Pricing</p>
            <h2 style={{ ...display('clamp(32px,3.6vw,46px)', 'var(--cream-100)'), marginTop: 12 }}>Clear pricing. No surprises.</h2>
            <p style={{ ...bodyStyle(18, 'rgba(243,238,225,0.78)'), marginTop: 14, maxWidth: '46ch' }}>Units from lockers up to whole-home rooms. One monthly rate, everything included.</p>
          </div>
          <Button variant="gold" size="lg" onClick={() => go('#/pricing')} iconRight={<Icon name="arrow" size={18} color="var(--ink-900)" />}>See units & pricing</Button>
        </div>
      </Section>

      <WaitlistBand stage={stage} heading="We open 【OPEN_DATE】. Be first in." />
    </>
  );
}

/* ---------- PERSONAL ---------- */
function Personal({ stage }) {
  const { Section, display, bodyStyle, Button, CtaBand, go, Icon } = window.StowKit;
  return (
    <>
      <PageHero
        eyebrow="Personal storage"
        title={<>Room for life<br />in Bali<span style={{ color: 'var(--gold-500)' }}>.</span></>}
        sub="Between moves, mid-renovation, or living somewhere that ran out of space — STOW keeps your things safe, dry and easy to reach."
        primary={window.StowKit.ctaLabel(stage)}
      />
      <Section pad="88px 32px">
        <SectionHead eyebrow="Who it's for" title="Made for the way people live here." />
        <div style={{ marginTop: 40 }}>
          <FeatureCards cols={4} items={[
            { t: 'Relocating', d: 'Landed in Bali, or moving villas. Store your things while you settle.' },
            { t: 'Renovating', d: 'Clear a room without sending furniture across the island.' },
            { t: 'Living light', d: 'Small villa, big life. Keep surfboards, bikes and off-season gear out of the way.' },
            { t: 'Travelling', d: 'Leaving for a stretch. Store, lock, go — come back to everything as you left it.' },
          ]} />
        </div>
      </Section>
      <Section bg="var(--cream-050)" bordered pad="88px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="stow-2col">
          <SectionHead eyebrow="Built for the climate" title="Safe storage, not just storage." maxw="16ch" />
          <p style={{ ...bodyStyle(18.5) }}>Damp and heat ruin stored belongings faster than anything else here. Mould on clothes, warped wood, corroded electronics. STOW's units are insulated to slow the heat and ventilated to keep air moving, so damp and musty air don't settle. This is the difference between storage and <em>safe</em> storage.</p>
        </div>
      </Section>
      <Section pad="88px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="stow-cta-grid">
          <SectionHead eyebrow="Sizes" title="From a few boxes to a whole home." intro="Lockers for the odd box or bag. Small units for a room of furniture. Large units for a full household. Not sure what you need? Tell us what you're storing and we'll size it for you." maxw="20ch" />
          <Button variant="secondary" size="lg" onClick={() => go('#/pricing')} iconRight={<Icon name="arrow" size={18} />}>See units & pricing</Button>
        </div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- BUSINESS ---------- */
function Business({ stage }) {
  const { Section, bodyStyle, Button, CtaBand, TrustRow, go, Icon, display } = window.StowKit;
  return (
    <>
      <PageHero
        eyebrow="Business storage"
        title={<>Off-site space that works as hard as you do<span style={{ color: 'var(--gold-500)' }}>.</span></>}
        sub="Stock, equipment, documents and archives — stored securely in Kesiman Kertalangu, ready when you need it. Flexible terms, built for growing businesses."
        primary={window.StowKit.ctaLabel(stage)}
      />
      <Section pad="88px 32px">
        <SectionHead eyebrow="Who it's for" title="Storage for real businesses." />
        <div style={{ marginTop: 40 }}>
          <FeatureCards cols={4} items={[
            { t: 'Retail & e-commerce', d: 'Hold stock off-site. Scale up in season, down when it\\u2019s quiet.' },
            { t: 'Hospitality & villas', d: 'Store linens, furniture, seasonal equipment and spares between guests.' },
            { t: 'Trades & services', d: 'Keep tools, materials and gear secure and out of the workshop.' },
            { t: 'Offices', d: 'Archive documents and records safely, off your floor space.' },
          ]} />
        </div>
      </Section>
      <Section bg="var(--cream-050)" bordered pad="88px 32px">
        <SectionHead eyebrow="Why STOW for business" title="Predictable, secure, close." />
        <div style={{ marginTop: 44 }}>
          <FeatureCards cols={4} items={[
            { icon: 'secure', t: 'Secure', d: '【SECURITY_SPEC】 and individual access. Your inventory stays your inventory.' },
            { icon: 'climate', t: 'Insulated & ventilated', d: 'Insulation and airflow keep stock, equipment and documents away from Bali\\u2019s damp and heat.' },
            { icon: 'flexible', t: 'Flexible', d: 'Month to month. Add units as you grow, release them when you don\\u2019t.' },
            { icon: 'pin', t: 'Accessible', d: '【HOURS】 access in Kesiman Kertalangu, close to where you work.' },
          ]} />
        </div>
      </Section>
      <Section pad="80px 32px">
        <div style={{ background: 'var(--indigo-500)', borderRadius: 28, padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="stow-cta-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)', margin: 0 }}>Business enquiries</p>
            <h2 style={{ ...display('clamp(30px,3.2vw,42px)', 'var(--cream-100)'), marginTop: 12 }}>Storing at scale?</h2>
            <p style={{ ...bodyStyle(18, 'rgba(243,238,225,0.8)'), marginTop: 14, maxWidth: '46ch' }}>Multiple units, or a lot of space? Talk to us. We'll put together the right setup and rate for your business.</p>
          </div>
          <Button variant="gold" size="lg" onClick={() => go('#/contact')} iconRight={<Icon name="chat" size={18} color="var(--ink-900)" />}>Talk to our team</Button>
        </div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- UNITS & PRICING ---------- */
const UNITS = [
  { name: 'Locker', size: '~1 m²', use: 'A few boxes, bags, documents', rate: 'Rp 350k' },
  { name: 'Small', size: '~4 m²', use: 'One room of furniture, ~studio', rate: 'Rp 900k' },
  { name: 'Medium', size: '~9 m²', use: '1–2 bedrooms, business stock', rate: 'Rp 1.7M' },
  { name: 'Large', size: '~15 m²', use: 'Full household, bulk inventory', rate: 'Rp 2.8M' },
  { name: 'Extra large', size: '~25 m²', use: 'Whole home + vehicle-scale goods', rate: 'Rp 4.2M' },
];
function Pricing({ stage, showRates }) {
  const { Section, display, bodyStyle, Button, Badge, CtaBand, go, Icon, Card } = window.StowKit;
  const [active, setActive] = React.useState(2);
  const th = { fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-400)', textAlign: 'left', padding: '0 0 16px' };
  return (
    <>
      <PageHero
        eyebrow="Units & pricing"
        title={<>One rate.<br />Everything included<span style={{ color: 'var(--gold-500)' }}>.</span></>}
        sub="No setup fees, no admin surprises. Pick the size that fits and pay one clear monthly price."
        primary={window.StowKit.ctaLabel(stage)} secondary="Get a size recommendation" onSecondary={() => go('#/contact')}
      />
      <Section pad="72px 32px 40px">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '9px 16px', borderRadius: 999, background: 'var(--warning-wash)', border: '1px solid var(--gold-300)', marginBottom: 28 }}>
          <Icon name="clock" size={16} color="var(--gold-700)" />
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13.5, color: 'var(--gold-700)' }}>Sizes &amp; rates shown are indicative — final numbers confirmed at launch (v6 model).</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="stow-price-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--ink-800)' }}>
                <th style={th}>Unit</th><th style={th}>Size</th><th style={th}>Good for</th><th style={{ ...th, textAlign: 'right' }}>Monthly rate</th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((u, i) => (
                <tr key={u.name} onClick={() => setActive(i)} style={{ borderBottom: '1px solid var(--border-soft)', cursor: 'pointer', background: active === i ? 'var(--indigo-050)' : 'transparent', transition: 'background var(--dur) var(--ease)' }}>
                  <td style={{ padding: '20px 0' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.01em', fontSize: 19, color: 'var(--ink-900)' }}>{u.name}</span>
                  </td>
                  <td style={{ padding: '20px 16px 20px 0', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink-700)' }}>{u.size}</td>
                  <td style={{ padding: '20px 16px 20px 0', ...bodyStyle(14.5, 'var(--ink-600)') }}>{u.use}</td>
                  <td style={{ padding: '20px 0', textAlign: 'right' }}>
                    {showRates
                      ? <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '112%', letterSpacing: '-0.02em', fontSize: 22, color: 'var(--ink-900)' }}>{u.rate}<span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13, color: 'var(--ink-400)' }}> /mo</span></span>
                      : <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); go('#/contact'); }}>Enquire</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['All rates are monthly, billed in IDR.', 'Every unit is insulated with built-in ventilation.', 'Minimum term: 1 month. No long lock-in.'].map((f) => (
            <p key={f} style={{ ...bodyStyle(13.5, 'var(--ink-500)'), margin: 0 }}>· {f}</p>
          ))}
        </div>
        <div style={{ marginTop: 24 }}><Button variant="secondary" onClick={() => go('#/contact')} iconRight={<Icon name="arrow" size={17} />}>Get a size recommendation</Button></div>
      </Section>
      <Section bg="var(--cream-050)" bordered pad="80px 32px">
        <SectionHead eyebrow="Size guide" title="Not sure what you need?" intro="A quick guide. A Locker holds what fits in a car boot. A Small unit takes a studio's worth of furniture. A Medium fits one to two bedrooms. Large and Extra large hold a full house. Tell us what you're storing and we'll confirm the fit before you commit." maxw="24ch" />
        <div style={{ marginTop: 32 }}><Button variant="primary" size="lg" onClick={() => go('#/contact')}>{window.StowKit.ctaLabel(stage)}</Button></div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks({ stage }) {
  const { Section, display, bodyStyle, Button, CtaBand, Icon, Card, go } = window.StowKit;
  const steps = [
    { n: '01', t: 'Choose your size', d: 'Browse units and pricing, or tell us what you\\u2019re storing and we\\u2019ll recommend a size. No guesswork.' },
    { n: '02', t: 'Reserve it', d: stage === 'booking' ? 'Reserve online in a few minutes. Pick your unit, set your move-in date, pay securely.' : 'Join the waitlist and we\\u2019ll contact you with your options and rate before we open.' },
    { n: '03', t: 'Move in', d: 'Come to 【ADDRESS】 on your date. Bring your things, or ask us about a hand moving in. Your unit, your access, from 【HOURS】.' },
  ];
  return (
    <>
      <PageHero eyebrow="How it works" title={<>Simple from<br />day one<span style={{ color: 'var(--gold-500)' }}>.</span></>} sub="Reserving and moving into STOW takes three steps." primary={window.StowKit.ctaLabel(stage)} />
      <Section pad="88px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }} className="stow-3col">
          {steps.map((s) => (
            <div key={s.n} style={{ borderTop: '3px solid var(--indigo-500)', paddingTop: 22 }}>
              <div style={display(56, 'var(--indigo-500)')}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.015em', fontSize: 25, color: 'var(--ink-900)', margin: '14px 0 10px' }}>{s.t}</h3>
              <p style={{ ...bodyStyle(16) }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section bg="var(--cream-050)" bordered pad="80px 32px">
        <SectionHead eyebrow="Included" title="What you get with every unit." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px 48px', marginTop: 36, maxWidth: 900 }} className="stow-2col">
          {['A clean, secure, insulated and ventilated unit', '【SECURITY_SPEC】 and individual access', 'Month-to-month terms — no long lock-in', 'Help sizing, moving in, and switching units as your needs change'].map((t) => (
            <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 9, background: 'var(--indigo-050)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}><Icon name="check" size={17} color="var(--indigo-600)" stroke={2.5} /></div>
              <p style={{ ...bodyStyle(16.5, 'var(--ink-800)'), fontWeight: 500 }}>{t}</p>
            </div>
          ))}
        </div>
        <p style={{ ...bodyStyle(16), marginTop: 40 }}>Still have questions? <a href="#/faq" style={{ color: 'var(--indigo-600)', fontWeight: 600, textDecoration: 'none' }}>Read the FAQ →</a></p>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

window.StowShared = { PageHero, SectionHead, FeatureCards, MAP_URL };
window.StowPages = Object.assign(window.StowPages || {}, { Home, Personal, Business, Pricing, HowItWorks });
window.StowPages_A = true;
Object.assign(window, { StowPagesLoader: () => null });
