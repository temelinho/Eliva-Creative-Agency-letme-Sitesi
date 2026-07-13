// Medical urun/teknoloji verisi
// Kaynak: "GCell Sunum Turkce" (GCell Autologous Innovative Technologies) + mevcut GMeso serisi
// NOT: Medical urunler klinik/lead-gen amaclidir. Fiyat gosterilmez ("Bilgi icin bize ulasin").

const MEDICAL_CATEGORIES = {
  "cihaz": "GCell Cihaz",
  "kit": "GCell Kit",
  "sac": "Saç Tedavisi",
  "svf": "SVF Uygulaması",
  "mezoterapi": "GMeso Mezoterapi"
};

const MEDICAL_PRODUCTS = [
  {
    id: "gcell-otolog-cihaz",
    category: "cihaz",
    name: "GCell® Otolog Mikrogreft Cihazı",
    fam: "GCell Cihaz",
    tagline: "Tek cihazda saç, anti-aging ve SVF — %100 otolog, enzimsiz",
    image: "assets/img/bg/medical_device_main.png",
    features: [
      "Kapalı sistem avantajıyla cihaz üzerinden otomatik materyal üretimi",
      "Fotoaktivasyon ile canlı hücre aktivasyonu (600–900 nm kırmızı LED)",
      "Homojenizasyon sistemi ile verimli ve eşit dağılımlı uygulama",
      "Tek seans, ~30 dakikada verimli uygulama — yüksek hasta uyumu",
      "Tek tıkla kullanım sağlayan kolay arayüz ve yazılım",
      "Hastane ortamına ihtiyaç duymadan klinik dostu prosedür"
    ],
    meta: [
      ["Uygulama alanları", "Saç, Anti-aging, SVF"],
      ["Sertifikalar", "FDA · CE · ISO"],
      ["İşlem süresi", "Tek seans, ~30 dakika"],
      ["Uygulama ortamı", "Klinik / poliklinik"],
      ["Doku kaynağı", "%100 otolog (hastanın kendi dokusu)"]
    ],
    desc: "GCell® yeni nesil otolog cihaz teknolojisi; Otolog Mikrogreft Saç Tedavileri, Anti-aging tedavileri ve SVF uygulamalarını tek cihazda toplar. 52'den fazla ülkede, 4000'den fazla klinikte, 250.000'den fazla hastada kullanılan, kullanıcı dostu ve klinik uygulamaya kolay entegre olan bir sistemdir. Enzimatik değil, tamamen otolog ve doğal bir yaklaşımla güvenli ve hızlı iyileşme sağlar."
  },
  {
    id: "gcell-mikrogreft-kit",
    category: "kit",
    name: "GCell® Otolog Mikrogreft Kiti",
    fam: "GCell Kit",
    tagline: "Güvenli, etkili ve steril tek kullanımlık mikrogreft çözümü",
    image: "assets/img/bg/medical_device_card.png",
    features: [
      "Otolog hücreler kullanarak doğal yenilenmeyi sağlar",
      "Steril, tek kullanımlık tasarım ile enfeksiyon riskini ortadan kaldırır",
      "Entegre filtre ve bıçak sistemi ile hassasiyet sağlar",
      "Kapalı devre sistem, maksimum hijyen ve güvenlik sunar"
    ],
    meta: [
      ["Kullanım", "Tek kullanımlık, steril"],
      ["Sistem", "Kapalı devre + entegre filtre/bıçak"],
      ["Uyum", "GCell® cihazı ile tam entegre"]
    ],
    desc: "GCell Yeni Nesil Otolog Mikrogreft Kitleri; otolog hücrelerle doğal yenilenmeyi destekleyen, steril ve tek kullanımlık tasarıma sahip çözümlerdir. Entegre filtre ve bıçak sistemi ile hassas, kapalı devre yapısıyla güvenli işlem sunar."
  },
  {
    id: "gcell-homojen-kit",
    category: "kit",
    name: "GCell® Homojen Mikrogreft Kiti",
    fam: "GCell Kit",
    tagline: "Eşit dağılım, yüksek hücre canlılığı, kullanım kolaylığı",
    image: "assets/img/bg/medical_device_card.png",
    features: [
      "Mikrogreftlerin homojen dağılımı için özel tasarım",
      "Hücre bütünlüğünü koruyarak etkinlik ve başarı oranını artırır",
      "Ergonomik ve steril uygulama",
      "Kapalı sistem ile tamamen güvenli işlemler"
    ],
    meta: [
      ["Öne çıkan", "Homojen mikrogreft dağılımı"],
      ["Fayda", "Yüksek hücre canlılığı"],
      ["Kullanım", "Tek kullanımlık, steril"]
    ],
    desc: "GCell Yeni Nesil Otolog Mikrogreft Homojen Kitleri, mikrogreftlerin homojen dağılımı için özel olarak tasarlanmıştır. Hücre bütünlüğünü koruyarak etkinlik ve başarı oranını artırır; ergonomik, steril ve kapalı sistemli güvenli uygulama sunar."
  },
  {
    id: "gcell-svf-kit",
    category: "kit",
    name: "GCell® SVF Kiti",
    fam: "GCell Kit",
    tagline: "Stromal Vasküler Fraksiyon için pratik ve etkili çözüm",
    image: "assets/img/bg/medical_device_card.png",
    features: [
      "Sadece 15 cc yağ yeterlidir — tam liposuction gerekmez",
      "Kapalı ve steril sistem ile yüksek hücre canlılığı",
      "Entegre filtrasyon ile hızlı ve güvenli hücre izolasyonu",
      "Tek kullanımlık, otolog uygulamaya uygun tasarım",
      "Klinik kullanım için basitleştirilmiş ve standartlaştırılmış prosedür"
    ],
    meta: [
      ["Gerekli yağ", "Sadece 15 cc"],
      ["Süreç", "Enzimsiz, kapalı ve steril"],
      ["Kullanım", "Tek kullanımlık, otolog"]
    ],
    desc: "GCell Yeni Nesil SVF Kitleri, Stromal Vasküler Fraksiyon (SVF) eldesi için pratik ve etkili bir çözümdür. Sadece 15 cc yağ ile, tam liposuction gerektirmeden; kapalı, steril ve enzimsiz bir süreçte yüksek hücre canlılığıyla hızlı ve güvenli izolasyon sağlar."
  },
  {
    id: "gcell-sac-tedavisi",
    category: "sac",
    name: "GCell® Otolog Mikrogreft Saç Tedavisi",
    fam: "Saç Tedavisi",
    tagline: "Kök hücre destekli, daha yoğun ve doğal saç için",
    image: "assets/img/bg/medical_device_main.png",
    features: [
      "Oksipital (kulak arkası) bölgeden alınan, DHT'ye dirençli unipotent kök hücreler",
      "Saç sayısında artış ve folikül minyatürizasyonunda azalma",
      "Saç kalınlığında artış, saç telleri arası mesafede azalma",
      "Enflamasyonun azalması ve doku rejenerasyonu (anjiyogenez)",
      "Saç ekimi öncesi, sırasında ve sonrası destekleyici uygulama"
    ],
    meta: [
      ["Endikasyonlar", "Androgenetik alopesi (evre 2–5), yaygın incelme, alopesi areata desteği"],
      ["Hücre kaynağı", "Oksipital bölge (bulge) unipotent kök hücreler"],
      ["Sonuç görülme", "Genellikle 3–4. aydan itibaren"],
      ["Not", "Saç ekimi tedavisinin yerini tutmaz, destekler"]
    ],
    desc: "GCell'in kök hücre destekli yaklaşımı, saç foliküllerini canlandırarak kalite ve canlılıklarını artırır; saç büyümesini uyarır, dökülmeyi azaltır ve daha yoğun, doğal görünümlü sonuçlar sağlar. Solüsyondaki büyüme faktörleri ve sitokinler enflamatuar dengeyi sağlar, metabolizmayı düzenler ve doku rejenerasyonunu destekler. Fotoaktivasyon (1500 rpm'de 10 dk) ile %95'ten fazla canlı progenitör hücre elde edilir."
  },
  {
    id: "gcell-svf-uygulamasi",
    category: "svf",
    name: "GCell® SVF Uygulaması",
    fam: "SVF Uygulaması",
    tagline: "Multipotent kök hücrelerle doku onarımı ve rejenerasyon",
    image: "assets/img/bg/medical_device_card.png",
    features: [
      "Adipoz (yağ) dokudan enzim kullanmadan kök hücre eldesi",
      "%100 otolog transplantasyon, tek seans uygulama",
      "Daha hızlı ve daha ekonomik kök hücre eldesi",
      "Tamamen steril bileşenler, enzimsiz süreç",
      "Fotoaktivasyon teknolojisi ile daha etkili tedavi"
    ],
    meta: [
      ["Hücre tipi", "Multipotent mezenkimal kök hücreler (SVF)"],
      ["Kaynak", "Karın bölgesi / diğer yağ dokuları"],
      ["Uygulama alanları", "Estetik tıp, dermatoloji, plastik cerrahi, ortopedi, jinekoloji, üroloji"]
    ],
    desc: "Stromal Vasküler Fraksiyon (SVF); farklı hücre türlerine dönüşebilen multipotent kök hücrelerle doku onarımı ve rejenerasyonunda kullanılır. GCell® SVF; cilt gençleştirme, yara/skar tedavisi, saç ekimi desteği, anti-aging, osteoartrit, jinekolojik ve ürolojik uygulamalar dahil geniş bir alanda değerlendirilir."
  },

  // --- GMeso Mezoterapi Serisi ---
  {
    id: "gmeso-anti-aging-125-ha",
    category: "mezoterapi",
    name: "G Meso Anti-Aging 125 HA",
    fam: "GMeso Serisi",
    tagline: "Anında lifting etkisi, yüksek hyaluronik asit",
    image: "assets/img/bg/gmeso-anti-aging.png",
    features: [
      "Yüksek hyaluronik asit ile yoğun nemlendirme",
      "Derin kırışıklık ve mimik çizgilerine karşı etkili",
      "Anında lifting ve dolgunluk hissi"
    ],
    meta: [
      ["Uygulama alanı", "Yüz, göz çevresi, boyun, dekolte, el"]
    ],
    desc: "Yüksek hyaluronik asit içeriğiyle anında lifting etkisi sağlar; derin kırışıklık ve mimik çizgilerine karşı yoğun nemlendirme sunar."
  },
  {
    id: "gmeso-skin-renewer",
    category: "mezoterapi",
    name: "G Meso Skin Renewer",
    fam: "GMeso Serisi",
    tagline: "Cilt tonunu eşitler, aydınlatır",
    image: "assets/img/bg/gmeso-skin-renewer.png",
    features: [
      "Cilt tonunu eşitler ve aydınlatır",
      "İnce kırışıklıkları azaltır",
      "Genç ve orta yaş cilt bakımı için ideal"
    ],
    meta: [
      ["Uygulama alanı", "Yüz, göz çevresi, boyun, dekolte, el"]
    ],
    desc: "Cilt tonunu eşitleyip aydınlatır, ince kırışıklıkları azaltır; genç ve orta yaş cilt bakımı için idealdir."
  },
  {
    id: "gmeso-anti-skin-spot",
    category: "mezoterapi",
    name: "G Meso Anti Skin Spot",
    fam: "GMeso Serisi",
    tagline: "Leke oluşumunu önler, tonu dengeler",
    image: "assets/img/bg/gmeso-anti-skin-spot.png",
    features: [
      "Tranexamic asit ve arbutin içeriği",
      "Leke oluşumunu önler",
      "Cilt tonunu dengeler"
    ],
    meta: [
      ["Uygulama alanı", "Yüz, göz çevresi, boyun, dekolte, el"]
    ],
    desc: "Tranexamic asit ve arbutin içeriğiyle leke oluşumunu önler, cilt tonunu dengeler."
  },
  {
    id: "gmeso-eye-contour-deluxe",
    category: "mezoterapi",
    name: "G Meso Eye Contour Deluxe",
    fam: "GMeso Serisi",
    tagline: "Göz çevresine özel bakım",
    image: "assets/img/bg/gmeso-eye-contour.png",
    features: [
      "Göz çevresi kırışıklıklarını azaltır",
      "Torbalanma ve koyu halkaları iyileştirir",
      "Elastikiyeti artırır"
    ],
    meta: [
      ["Uygulama alanı", "Göz çevresi"]
    ],
    desc: "Göz çevresi kırışıklıklarını azaltır, torbalanma ve koyu halkaları iyileştirir, elastikiyeti artırır."
  },
  {
    id: "gmeso-hair-guard",
    category: "mezoterapi",
    name: "G Meso Hair Guard",
    fam: "GMeso Serisi",
    tagline: "Saç derisini besler, dökülmeyi azaltır",
    image: "assets/img/bg/gmeso-hair-guard.png",
    features: [
      "Saç derisini nemlendirir ve folikülleri besler",
      "Dökülmeyi azaltır",
      "Yeni saç oluşumunu destekler"
    ],
    meta: [
      ["Uygulama alanı", "Saç, saç derisi"]
    ],
    desc: "Saç derisini nemlendirir, folikülleri besler, dökülmeyi azaltır ve yeni saç oluşumunu destekler."
  },
  {
    id: "gmeso-youth-bomb",
    category: "mezoterapi",
    name: "G Meso Youth Bomb",
    fam: "GMeso Serisi",
    tagline: "Genç ciltler için antioksidan koruma",
    image: "assets/img/bg/gmeso-youth-bomb.png",
    features: [
      "Antioksidan destekli formül",
      "UV etkilerine karşı koruma",
      "Erken yaşlanmaya karşı önleyici bakım"
    ],
    meta: [
      ["Uygulama alanı", "Yüz, göz çevresi, boyun, dekolte, el"]
    ],
    desc: "Genç ciltler için antioksidan destekli formül; UV etkilerine ve erken yaşlanmaya karşı koruma sağlar."
  }
];
