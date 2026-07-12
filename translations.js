/* ============================================================
   STOW site translations — EN (source) → ID / JP.
   Covers the high-traffic pages (Home, Units & Pricing, Contact)
   plus site chrome (nav, CTA band, waitlist form, footer).
   Untranslated strings intentionally remain English.

   How it works: the LangSwitcher sets localStorage 'stow_lang'
   and fires a 'stow-lang' event; this engine swaps matching text
   nodes and keeps them swapped across React re-renders. 【KEY】
   tokens survive translation and are filled by site-config.js.
   ============================================================ */
window.StowI18N = (() => {
  const D = {
    /* ---- chrome / nav ---- */
    'Personal': { ID: 'Pribadi', JP: '個人向け' },
    'Business': { ID: 'Bisnis', JP: '法人向け' },
    'Units & Pricing': { ID: 'Unit & Harga', JP: 'ユニットと料金' },
    'How It Works': { ID: 'Cara Kerjanya', JP: 'ご利用の流れ' },
    'Facility': { ID: 'Fasilitas', JP: '施設' },
    'Home': { ID: 'Beranda', JP: 'ホーム' },
    'FAQ': { ID: 'FAQ', JP: 'よくある質問' },
    'About': { ID: 'Tentang Kami', JP: '私たちについて' },
    'Join the waitlist': { ID: 'Gabung daftar tunggu', JP: 'ウェイトリストに登録' },
    'Reserve a unit': { ID: 'Pesan unit', JP: 'ユニットを予約' },
    'See units & pricing': { ID: 'Lihat unit & harga', JP: 'ユニットと料金を見る' },
    'Personal Storage': { ID: 'Penyimpanan Pribadi', JP: '個人向けストレージ' },
    'Business Storage': { ID: 'Penyimpanan Bisnis', JP: '法人向けストレージ' },
    'Privacy Policy': { ID: 'Kebijakan Privasi', JP: 'プライバシーポリシー' },
    'Terms': { ID: 'Ketentuan', JP: '利用規約' },
    'Storage': { ID: 'Penyimpanan', JP: 'ストレージ' },
    'Contact': { ID: 'Kontak', JP: 'お問い合わせ' },
    'Clean, secure, insulated self storage — built for Kesiman Kertalangu, Bali.': { ID: 'Self storage bersih, aman, berinsulasi — dibangun untuk Kesiman Kertalangu, Bali.', JP: '清潔・安全・断熱のセルフストレージ。Kesiman Kertalangu, Bali.' },

    /* ---- CTA band (site-wide) ---- */
    'Store it. Sorted': { ID: 'Simpan. Beres', JP: '頸けて、スッキリ' },
    'Clean, secure, insulated and ventilated storage in Kesiman Kertalangu. Join the waitlist and lock in your unit before we open.': { ID: 'Penyimpanan bersih, aman, berinsulasi dan berventilasi di Kesiman Kertalangu. Gabung daftar tunggu dan amankan unit Anda sebelum kami buka.', JP: '清潔・安全・断熱・換気完備のストレージ。オープン前にウェイトリストでユニットを確保しましょう。' },

    /* ---- Home ---- */
    'Opening 【OPEN_DATE】 · Kesiman Kertalangu, Bali': { ID: 'Buka 【OPEN_DATE】 · Kesiman Kertalangu, Bali', JP: '【OPEN_DATE】オープン · Kesiman Kertalangu, Bali' },
    'Storage in Bali,': { ID: 'Penyimpanan di Bali,', JP: 'バリの収納を、' },
    'done properly': { ID: 'dengan cara yang benar', JP: 'きちんと' },
    'Clean, secure, insulated and ventilated units for your home and your business — in Kesiman Kertalangu. We open 【OPEN_DATE】. Join the waitlist today.': { ID: 'Unit bersih, aman, berinsulasi dan berventilasi untuk rumah dan bisnis Anda — di Kesiman Kertalangu. Kami buka 【OPEN_DATE】. Gabung daftar tunggu sekarang.', JP: 'ご家庭にもビジネスにも。清潔で安全、断熱・換気完備のユニットを Kesiman Kertalangu でご用意。【OPEN_DATE】オープン。今すぐウェイトリストへ。' },
    'Opening 【OPEN_DATE】': { ID: 'Buka 【OPEN_DATE】', JP: '【OPEN_DATE】オープン' },
    'Two paths, equal weight': { ID: 'Dua pilihan, sama pentingnya', JP: '2つの使い方' },
    'What are you storing?': { ID: 'Apa yang ingin Anda simpan?', JP: '何を保管しますか？' },
    'Moving, renovating, or just out of room. Keep your things safe, dry and close by.': { ID: 'Pindah, renovasi, atau kehabisan ruang. Simpan barang Anda dengan aman, kering, dan dekat.', JP: '引っ越し、リフォーム、収納不足に。大切な荷物を安全に、湿気から守り、すぐ近くで保管。' },
    'Stock, equipment, documents and archives. Off-site space that grows with you.': { ID: 'Stok, peralatan, dokumen, dan arsip. Ruang ekstra yang tumbuh bersama bisnis Anda.', JP: '在庫、機材、書類、アーカイブに。ビジネスの成長に合わせて広がる保管スペース。' },
    'Personal storage': { ID: 'Penyimpanan pribadi', JP: '個人向けストレージ' },
    'Business storage': { ID: 'Penyimpanan bisnis', JP: '法人向けストレージ' },
    'Why STOW': { ID: 'Kenapa STOW', JP: 'STOWが選ばれる理由' },
    'Storage you can actually trust.': { ID: 'Penyimpanan yang benar-benar bisa dipercaya.', JP: '本当に信頼できる収納を。' },
    'Bali is hard on stored belongings — humidity, heat, damp. STOW is built to protect against all three.': { ID: 'Bali keras terhadap barang simpanan — lembap, panas, basah. STOW dibangun untuk melindungi dari ketiganya.', JP: '湿気、暑さ、カビ——バリの気候は保管物の大敌です。STOWはその全てから守るために作られました。' },
    'How it works': { ID: 'Cara kerjanya', JP: 'ご利用の流れ' },
    'Three steps.': { ID: 'Tiga langkah.', JP: '3ステップ。' },
    'Pick your size': { ID: 'Pilih ukuran', JP: 'サイズを選ぶ' },
    'Not sure? We’ll help you choose.': { ID: 'Bingung? Kami bantu pilih.', JP: '迷ったらご相談ください。' },
    'Reserve it': { ID: 'Pesan', JP: '予約する' },
    'Book online or with our team. For now: join the waitlist.': { ID: 'Pesan online atau lewat tim kami. Untuk sekarang: gabung daftar tunggu.', JP: 'オンラインまたはスタッフ経由で予約。現在はウェイトリスト受付中。' },
    'Move in': { ID: 'Pindahkan barang', JP: '入庫する' },
    'Bring your things, or arrange a hand.': { ID: 'Bawa barang Anda, atau minta bantuan kami.', JP: '荷物を持ち込むか、搬入サポートをご利用ください。' },
    'See how it works': { ID: 'Lihat cara kerjanya', JP: '流れを見る' },
    'Pricing': { ID: 'Harga', JP: '料金' },
    'Clear pricing. No surprises.': { ID: 'Harga jelas. Tanpa kejutan.', JP: '明朗会計。追加費用なし。' },
    'Units from lockers up to whole-home rooms. One monthly rate, everything included.': { ID: 'Dari loker hingga unit sebesar rumah. Satu tarif bulanan, semua termasuk.', JP: 'ロッカーから一軌家サイズまで。月額一律、すべて込み。' },
    'We open 【OPEN_DATE】. Be first in.': { ID: 'Kami buka 【OPEN_DATE】. Jadilah yang pertama.', JP: '【OPEN_DATE】オープン。最初の一人に。' },

    /* ---- trust row ---- */
    'Insulated & ventilated': { ID: 'Berinsulasi & berventilasi', JP: '断熱・換気完備' },
    'Insulated units with built-in ventilation — airflow keeps damp, musty air and heat from settling on your things.': { ID: 'Unit berinsulasi dengan ventilasi bawaan — aliran udara mencegah lembap dan panas menempel pada barang Anda.', JP: '断熱材と換気口を備えたユニット。空気の流れが湿気やこもった熱から荷物を守ります。' },
    'Secure': { ID: 'Aman', JP: '安心のセキュリティ' },
    '【SECURITY_SPEC】 monitored access, so only you reach your unit.': { ID: '【SECURITY_SPEC】 dengan akses terpantau — hanya Anda yang bisa membuka unit Anda.', JP: '【SECURITY_SPEC】と入退室管理で、ユニットに入れるのはあなただけ。' },
    'Clean & modern': { ID: 'Bersih & modern', JP: '清潔でモダン' },
    'A brand-new facility, not a converted warehouse.': { ID: 'Fasilitas baru, bukan gudang bekas.', JP: '倉庫の転用ではない、新築の専用施設。' },
    'Flexible': { ID: 'Fleksibel', JP: '柔軟な契約' },
    'Month to month. Scale up or down when your needs change.': { ID: 'Bulanan. Tambah atau kurangi sesuai kebutuhan.', JP: '月単位の契約。必要に応じてサイズ変更も自由。' },

    /* ---- waitlist band + form ---- */
    'We open 【OPEN_DATE】. Join the waitlist and we\'ll contact you before we release units to the public — with your size options and your rate.': { ID: 'Kami buka 【OPEN_DATE】. Gabung daftar tunggu dan kami hubungi Anda sebelum unit dirilis ke publik — lengkap dengan pilihan ukuran dan tarif Anda.', JP: '【OPEN_DATE】オープン。ウェイトリストにご登録いただくと、一般公開前にサイズと料金をご案内します。' },
    'Be first in line.': { ID: 'Jadilah yang pertama.', JP: '最初の一人に。' },
    'Name': { ID: 'Nama', JP: 'お名前' },
    'Email': { ID: 'Email', JP: 'メール' },
    'WhatsApp number': { ID: 'Nomor WhatsApp', JP: 'WhatsApp番号' },
    'Optional': { ID: 'Opsional', JP: '任意' },
    'I need storage for': { ID: 'Saya butuh penyimpanan untuk', JP: '利用目的' },
    'Roughly when': { ID: 'Kira-kira kapan', JP: '利用時期' },
    'Within 1 month': { ID: 'Dalam 1 bulan', JP: '1ヶ月以内' },
    '1–3 months': { ID: '1–3 bulan', JP: '1〜3ヶ月' },
    'Just exploring': { ID: 'Masih lihat-lihat', JP: '検討中' },
    'Optional, one line': { ID: 'Opsional, satu baris', JP: '任意・一行で' },
    'No payment now. No obligation. We\'ll only contact you about STOW.': { ID: 'Tanpa pembayaran sekarang. Tanpa kewajiban. Kami hanya menghubungi Anda soal STOW.', JP: 'お支払いは不要、義務もありません。STOWに関するご連絡のみ行います。' },
    'You\'re on the list': { ID: 'Anda sudah terdaftar', JP: '登録完了' },
    'We\'ll be in touch before we open. Watch for a message from STOW.': { ID: 'Kami akan menghubungi Anda sebelum buka. Nantikan pesan dari STOW.', JP: 'オープン前にご連絡します。STOWからのメッセージをお待ちください。' },

    /* ---- Units & Pricing page ---- */
    'Units & pricing': { ID: 'Unit & harga', JP: 'ユニットと料金' },
    'One rate.': { ID: 'Satu tarif.', JP: '料金は一律。' },
    'Everything included': { ID: 'Semua termasuk', JP: 'すべて込み' },
    'No setup fees, no admin surprises. Pick the size that fits and pay one clear monthly price.': { ID: 'Tanpa biaya pemasangan, tanpa kejutan admin. Pilih ukuran yang pas dan bayar satu harga bulanan yang jelas.', JP: '初期費用や事務手数料なし。ぴったりのサイズを選んで、明確な月額料金だけ。' },
    'Get a size recommendation': { ID: 'Minta rekomendasi ukuran', JP: 'サイズ相談をする' },
    'Sizes & rates shown are indicative — final numbers confirmed at launch (v6 model).': { ID: 'Ukuran & tarif bersifat indikatif — angka final dikonfirmasi saat peluncuran (model v6).', JP: '表示のサイズ・料金は目安です。正式な金額はオープン時に確定します（v6モデル）。' },
    'Unit': { ID: 'Unit', JP: 'ユニット' },
    'Size': { ID: 'Ukuran', JP: 'サイズ' },
    'Good for': { ID: 'Cocok untuk', JP: '用途' },
    'Monthly rate': { ID: 'Tarif bulanan', JP: '月額料金' },
    'Locker': { ID: 'Loker', JP: 'ロッカー' },
    'Small': { ID: 'Kecil', JP: '小' },
    'Medium': { ID: 'Sedang', JP: '中' },
    'Large': { ID: 'Besar', JP: '大' },
    'Extra large': { ID: 'Ekstra besar', JP: '特大' },
    'A few boxes, bags, documents': { ID: 'Beberapa kotak, tas, dokumen', JP: '箱数個、バッグ、書類' },
    'One room of furniture, ~studio': { ID: 'Perabot satu kamar, ~studio', JP: '1部屋分の家具（スタジオ程度）' },
    '1–2 bedrooms, business stock': { ID: '1–2 kamar tidur, stok bisnis', JP: '1〜2寝室分、事業在庫' },
    'Full household, bulk inventory': { ID: 'Seisi rumah, inventaris besar', JP: '一軌分の家財、大量在庫' },
    'Whole home + vehicle-scale goods': { ID: 'Seluruh rumah + barang seukuran kendaraan', JP: '家一軌分＋大型品' },
    ' /mo': { ID: '/bln', JP: '/月' },
    'Enquire': { ID: 'Tanya', JP: '問い合わせ' },
    'All rates are monthly, billed in IDR.': { ID: 'Semua tarif bulanan, ditagih dalam IDR.', JP: '料金はすべて月額、IDR建てです。' },
    'Every unit is insulated with built-in ventilation.': { ID: 'Setiap unit berinsulasi dengan ventilasi bawaan.', JP: '全ユニット断熱・換気完備。' },
    'Minimum term: 1 month. No long lock-in.': { ID: 'Minimal 1 bulan. Tanpa kontrak panjang.', JP: '最低契約は1ヶ月。長期縛りなし。' },
    'Size guide': { ID: 'Panduan ukuran', JP: 'サイズガイド' },
    'Not sure what you need?': { ID: 'Belum yakin butuh yang mana?', JP: 'どのサイズか迷ったら' },
    'A quick guide. A Locker holds what fits in a car boot. A Small unit takes a studio\'s worth of furniture. A Medium fits one to two bedrooms. Large and Extra large hold a full house. Tell us what you\'re storing and we\'ll confirm the fit before you commit.': { ID: 'Panduan singkat. Loker memuat isi bagasi mobil. Unit Kecil memuat perabot studio. Sedang untuk 1–2 kamar. Besar dan Ekstra besar memuat seisi rumah. Beri tahu kami apa yang Anda simpan dan kami pastikan ukurannya sebelum Anda berkomitmen.', JP: 'かんたんガイド：ロッカーは車のトランク程度、小はスタジオ1部屋分の家具、中は1〜2寝室分、大・特大は家一軌分。保管する物を教えていただければ、契約前にぴったりのサイズをご案内します。' },

    /* ---- Contact page ---- */
    'Contact · Join the waitlist': { ID: 'Kontak · Gabung daftar tunggu', JP: 'お問い合わせ · ウェイトリスト' },
    'Be first': { ID: 'Jadilah yang', JP: '最初の' },
    'in line': { ID: 'pertama', JP: '一人に' },
    'We open 【OPEN_DATE】. Join the waitlist and we\'ll contact you with your size options and rate before we release units to the public.': { ID: 'Kami buka 【OPEN_DATE】. Gabung daftar tunggu dan kami hubungi Anda dengan pilihan ukuran dan tarif sebelum unit dirilis ke publik.', JP: '【OPEN_DATE】オープン。ウェイトリストにご登録いただくと、一般公開前にサイズと料金をご案内します。' },
    'Tell us what you need.': { ID: 'Ceritakan kebutuhan Anda.', JP: 'ご要望をお聞かせください。' },
    'Reach us directly': { ID: 'Hubungi kami langsung', JP: '直接連絡する' },
    'Talk to STOW.': { ID: 'Bicara dengan STOW.', JP: 'STOWに相談。' },
    'Phone': { ID: 'Telepon', JP: '電話' },
    'Address': { ID: 'Alamat', JP: '住所' },
    'Hours': { ID: 'Jam', JP: '営業時間' },
    'Fastest way to reach us': { ID: 'Cara tercepat menghubungi kami', JP: '最も早く繋がる方法' },
    'View on Google Maps': { ID: 'Lihat di Google Maps', JP: 'Googleマップで見る' },
  };

  const LANGS = ['EN', 'ID', 'JP'];
  const info = new WeakMap(); // text node -> { en: English source, cur: value we last set }
  let lang = 'EN';
  try { lang = localStorage.getItem('stow_lang') || 'EN'; } catch (e) {}
  if (!LANGS.includes(lang)) lang = 'EN';

  const xlate = (node) => {
    const val = node.nodeValue;
    let rec = info.get(node);
    if (rec && val !== rec.cur) { info.delete(node); rec = null; } // externally changed (React/config) — re-key
    const en = rec ? rec.en : val;
    const entry = D[en];
    if (!entry) return;
    const out = lang === 'EN' ? en : (entry[lang] || en);
    info.set(node, { en, cur: out });
    if (val !== out) node.nodeValue = out;
  };
  const walk = (root) => {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) xlate(w.currentNode);
  };
  const applyAll = () => {
    document.documentElement.setAttribute('data-stow-lang', lang);
    if (document.body) walk(document.body);
  };
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'characterData') xlate(m.target);
      for (const n of m.addedNodes || []) {
        if (n.nodeType === 3) xlate(n);
        else if (n.nodeType === 1) walk(n);
      }
    }
  });
  window.addEventListener('stow-lang', (e) => {
    lang = LANGS.includes(e.detail) ? e.detail : 'EN';
    applyAll();
  });
  const start = () => {
    applyAll();
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });
  };
  if (document.body) start(); else addEventListener('DOMContentLoaded', start);

  return { dict: D, get lang() { return lang; } };
})();
