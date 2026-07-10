/* STOW website — pages B: Facility, FAQ, About, Contact, Privacy, Terms.
   Reads window.StowKit + window.StowShared; merges into window.StowPages. */

function MapPanel() {
  const { Button, Icon, bodyStyle } = window.StowKit;
  const { MAP_URL } = window.StowShared;
  return (
    <div style={{ position: 'relative', aspectRatio: '16 / 10', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--indigo-050)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--indigo-100) 1px, transparent 1px), linear-gradient(90deg, var(--indigo-100) 1px, transparent 1px)', backgroundSize: '38px 38px', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50% 50% 50% 4px', background: 'var(--indigo-500)', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
          <span style={{ transform: 'rotate(-45deg)', color: 'var(--gold-500)', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: 15 }}>S</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 18, bottom: 18, right: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: 'var(--indigo-600)', background: 'rgba(243,238,225,0.85)', padding: '4px 8px', borderRadius: 6 }}>MAP — 【ADDRESS】, Denpasar</span>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="sm" iconRight={<Icon name="pin" size={15} color="var(--cream-100)" />}>Open in Google Maps</Button>
        </a>
      </div>
    </div>
  );
}

/* ---------- FACILITY ---------- */
function Facility({ stage }) {
  const { Section, bodyStyle, display, ImgPlaceholder, FacilityImage, CtaBand, Icon } = window.StowKit;
  const { PageHero, SectionHead } = window.StowShared;
  const features = [
    { icon: 'climate', t: 'Insulated & ventilated', d: 'Insulated units with built-in vents — keeps heat and damp moving, not trapped.' },
    { icon: 'secure', t: '【SECURITY_SPEC】', d: 'Monitored, controlled access throughout.' },
    { icon: 'clean', t: 'Clean and modern', d: 'Purpose-built, well-lit, easy to move through.' },
    { icon: 'box', t: 'A range of sizes', d: 'From lockers to whole-home units.' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Facility & location"
        title={<>A facility built<br />on purpose<span style={{ color: 'var(--gold-500)' }}>.</span></>}
        sub="Brand-new, clean and secure, in Kesiman Kertalangu. Designed for how people and businesses in Bali actually store."
        primary={window.StowKit.ctaLabel(stage)}
        visual={<div style={{ opacity: 1, animation: 'stowFadeUp 0.6s var(--ease, ease) forwards' }}><FacilityImage /></div>}
      />
      <Section pad="88px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="stow-2col">
          <SectionHead eyebrow="The facility" title="What makes it different." intro="Most storage in Bali is a spare room, a converted shed, or a warehouse corner. STOW is a purpose-built facility — insulated, ventilated units, proper security, clean and well-lit throughout. Built to protect your things against Bali's toughest problem: the climate." maxw="18ch" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {features.map((f) => (
              <div key={f.t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid var(--border-soft)' }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: 'var(--indigo-050)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={f.icon} size={21} color="var(--indigo-600)" /></div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.01em', fontSize: 18, color: 'var(--ink-900)', margin: '2px 0 4px' }}>{f.t}</h3>
                  <p style={{ ...bodyStyle(14.5, 'var(--ink-600)') }}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section pad="0 32px 88px">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="stow-3col">
          {[
            { src: window.StowKit.PHOTOS.corridor, alt: 'Unit rows at dusk', cap: 'Wide, lit rows — easy to move through' },
            { src: window.StowKit.PHOTOS.gate, alt: 'Gated entrance', cap: 'Gated entry, monitored access' },
            { src: window.StowKit.PHOTOS.unit, alt: 'Open storage unit with boxes and a surfboard', cap: 'Inside a unit — insulated and ventilated' },
          ].map((p) => (
            <figure key={p.cap} style={{ margin: 0 }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '4 / 3.4' }}>
                <img src={p.src} alt={p.alt} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <figcaption style={{ marginTop: 12, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-500)' }}>{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <Section bg="var(--cream-050)" bordered pad="88px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'center' }} className="stow-2col">
          <div>
            <SectionHead eyebrow="Location" title="Find us." intro="【ADDRESS】, Kesiman Kertalangu. 【One line on access / parking / landmark】." maxw="12ch" />
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon name="clock" size={20} color="var(--indigo-500)" />
              <span style={{ ...bodyStyle(16, 'var(--ink-800)'), fontWeight: 600 }}>Access hours: 【HOURS】</span>
            </div>
          </div>
          <MapPanel />
        </div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- FAQ ---------- */
const FAQ_GROUPS = [
  { group: 'Getting started', items: [
    { q: 'When does STOW open?', a: 'We open 【OPEN_DATE】. Join the waitlist and we’ll contact you before we release units publicly.' },
    { q: 'How do I reserve a unit?', a: 'For now, join the waitlist. When booking goes live, you’ll be able to reserve online, or with our team, in a few minutes.' },
    { q: 'Can you help me choose a size?', a: 'Yes. Tell us what you’re storing and we’ll recommend the right unit.' },
  ] },
  { group: 'Units & access', items: [
    { q: 'Are units climate-controlled?', a: 'Not with air-conditioning. STOW’s first site uses insulated units with built-in ventilation — insulation slows Bali’s heat and steady airflow keeps damp and musty air from settling. That’s what protects clothing, wood, electronics and documents.' },
    { q: 'What are your access hours?', a: '【HOURS】.' },
    { q: 'Who can access my unit?', a: 'Only you. 【SECURITY_SPEC】 and individual access control.' },
  ] },
  { group: 'Terms & pricing', items: [
    { q: 'How much does it cost?', a: 'See Units & Pricing. One clear monthly rate per unit, nothing hidden.' },
    { q: 'Is there a minimum term?', a: '1 month. Month to month after that. No long lock-in.' },
    { q: 'Can I change unit size later?', a: 'Yes. Move up or down as your needs change, subject to availability.' },
    { q: 'How do I pay?', a: '【Payment methods — confirm】.' },
  ] },
  { group: 'Business', items: [
    { q: 'Do you offer business storage?', a: 'Yes. Retail stock, equipment, documents and archives. For multiple units or larger space, talk to our team.' },
    { q: 'Can I receive deliveries to my unit?', a: '【Confirm policy】.' },
  ] },
];
function Faq({ stage }) {
  const { Section, Accordion, display, CtaBand } = window.StowKit;
  const { PageHero } = window.StowShared;
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Questions,<br />answered<span style={{ color: 'var(--gold-500)' }}>.</span></>} sub="Plain, short answers on units, access, pricing, security and terms." primary={window.StowKit.ctaLabel(stage)} secondary={null} />
      <Section pad="80px 32px" maxw={840}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {FAQ_GROUPS.map((g) => (
            <div key={g.group}>
              <h2 style={{ ...display(24), marginBottom: 8 }}>{g.group}</h2>
              <Accordion items={g.items} defaultOpen={-1} />
            </div>
          ))}
        </div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- ABOUT ---------- */
function About({ stage }) {
  const { Section, bodyStyle, display, CtaBand } = window.StowKit;
  const { PageHero } = window.StowShared;
  return (
    <>
      <PageHero eyebrow="About STOW" title={<>Storage in Bali,<br />built the right way<span style={{ color: 'var(--gold-500)' }}>.</span></>} sub="STOW is a new self-storage facility in Kesiman Kertalangu — purpose-built, secure, and run to a standard the island has been missing." primary={window.StowKit.ctaLabel(stage)} secondary={null} />
      <Section pad="88px 32px" maxw={760}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{ ...bodyStyle(20, 'var(--ink-800)'), lineHeight: 1.6 }}>Bali runs on people and businesses in motion — moving, growing, travelling, building. But storing your things here has always meant a compromise: a damp spare room, a converted shed, a warehouse corner with no security and no protection from the damp.</p>
          <p style={{ ...bodyStyle(20, 'var(--ink-800)'), lineHeight: 1.6 }}>STOW was built to end that compromise. Clean, insulated and ventilated units. Real security. Clear pricing. Flexible terms. Storage that protects your things instead of slowly ruining them.</p>
          <p style={{ ...bodyStyle(20, 'var(--ink-800)'), lineHeight: 1.6 }}>We open 【OPEN_DATE】 in Kesiman Kertalangu. This is the first STOW facility. It will not be the last<span style={{ color: 'var(--gold-600)' }}>.</span></p>
        </div>
      </Section>
      <CtaBand stage={stage} />
    </>
  );
}

/* ---------- CONTACT / JOIN THE WAITLIST ---------- */
function Contact({ stage }) {
  const { Section, bodyStyle, display, WaitlistForm, Icon, Eyebrow } = window.StowKit;
  const { PageHero } = window.StowShared;
  const { MAP_URL } = window.StowShared;
  const channels = [
    { icon: 'chat', label: 'WhatsApp', value: '【WHATSAPP】', note: 'Fastest way to reach us' },
    { icon: 'arrowSm', label: 'Email', value: '【EMAIL】' },
    { icon: 'clock', label: 'Phone', value: '【PHONE】' },
    { icon: 'pin', label: 'Address', value: '【ADDRESS】, Kesiman Kertalangu' },
    { icon: 'clock', label: 'Hours', value: '【HOURS】' },
  ];
  return (
    <>
      <PageHero eyebrow="Contact · Join the waitlist" title={<>Be first<br />in line<span style={{ color: 'var(--gold-500)' }}>.</span></>} sub="We open 【OPEN_DATE】. Join the waitlist and we'll contact you with your size options and rate before we release units to the public." primary={null} secondary={null} />
      <Section pad="80px 32px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'start' }} className="stow-2col">
          <div>
            <Eyebrow>Join the waitlist</Eyebrow>
            <h2 style={{ ...display('clamp(30px,3vw,40px)'), marginTop: 12, marginBottom: 24 }}>Tell us what you need.</h2>
            <WaitlistForm stage={stage} />
          </div>
          <div>
            <Eyebrow>Reach us directly</Eyebrow>
            <h2 style={{ ...display('clamp(30px,3vw,40px)'), marginTop: 12, marginBottom: 24 }}>Talk to STOW.</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {channels.map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 11, background: 'var(--indigo-050)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={c.icon} size={20} color="var(--indigo-600)" /></div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-400)' }}>{c.label}</div>
                    <div style={{ ...bodyStyle(17, 'var(--ink-900)'), fontWeight: 600, marginTop: 3 }}>{c.value}</div>
                    {c.note && <div style={{ ...bodyStyle(13.5, 'var(--ink-500)'), marginTop: 2 }}>{c.note}</div>}
                  </div>
                </div>
              ))}
            </div>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--indigo-600)', textDecoration: 'none' }}>
              View on Google Maps <Icon name="pin" size={16} color="var(--indigo-600)" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ---------- LEGAL (placeholder) ---------- */
function LegalPage({ title, stage }) {
  const { Section, bodyStyle, display } = window.StowKit;
  return (
    <Section pad="120px 32px" maxw={760}>
      <h1 style={display('clamp(38px,4vw,56px)')}>{title}</h1>
      <p style={{ ...bodyStyle(18), marginTop: 20, maxWidth: '54ch' }}>【Legal copy to be supplied before launch — required before collecting waitlist emails for data consent.】</p>
      <p style={{ ...bodyStyle(16, 'var(--ink-500)'), marginTop: 14 }}>This page is a placeholder in the launch build.</p>
    </Section>
  );
}
function Privacy(props) { return <LegalPage title={<>Privacy Policy</>} {...props} />; }
function Terms(props) { return <LegalPage title={<>Terms</>} {...props} />; }

window.StowPages = Object.assign(window.StowPages || {}, { Facility, Faq, About, Contact, Privacy, Terms });
window.StowPages_B = true;
Object.assign(window, { StowPagesLoader2: () => null });
