/* STOW website — router + gate. Mounted as the visible root by the DC.
   Waits for the DS bundle + kit + pages, then renders Header / page / Footer
   driven by the URL hash. Exports window.SiteApp. */

const ROUTES = {
  '': 'Home', '#': 'Home', '#/': 'Home',
  '#/personal': 'Personal',
  '#/business': 'Business',
  '#/pricing': 'Pricing',
  '#/how-it-works': 'HowItWorks',
  '#/facility': 'Facility',
  '#/faq': 'Faq',
  '#/about': 'About',
  '#/contact': 'Contact',
  '#/privacy': 'Privacy',
  '#/terms': 'Terms',
};

function ready() {
  return !!(window.STOWSelfStorageDesignSystem_6ffa12 && window.StowKit && window.StowKit.Header && window.StowPages && window.StowPages.Home && window.StowPages.Contact);
}

function SiteRouter({ stage, showRates }) {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const { Header, Footer } = window.StowKit;
  const key = ROUTES[hash] ? hash : '#/';
  const name = ROUTES[key];
  const Page = window.StowPages[name] || window.StowPages.Home;

  return (
    <div style={{ minHeight: '100%' }}>
      <Header stage={stage} current={key} />
      <main key={key} style={{ opacity: 1 }}>
        <Page stage={stage} showRates={showRates} />
      </main>
      <Footer stage={stage} />
    </div>
  );
}

function SiteApp(props) {
  const stage = props.stage === 'booking' ? 'booking' : 'waitlist';
  const showRates = !(props.showRates === false || props.showRates === 'false');
  const [ok, setOk] = React.useState(ready());
  React.useEffect(() => {
    if (ok) return;
    const id = setInterval(() => { if (ready()) { clearInterval(id); setOk(true); } }, 30);
    return () => clearInterval(id);
  }, [ok]);

  if (!ok) {
    return (
      <div style={{ minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream-100, #F3EEE1)' }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, border: '3px solid rgba(26,42,82,0.18)', borderTopColor: '#1A2A52', animation: 'stowSpin 0.7s linear infinite' }} />
        <style>{'@keyframes stowSpin{to{transform:rotate(360deg)}}'}</style>
      </div>
    );
  }
  return React.createElement(SiteRouter, { stage, showRates });
}

window.SiteApp = SiteApp;
