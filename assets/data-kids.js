// Hopfrög Kids ürün ailesi verisi
// Kaynak: HOPFRÖG KIDS PRODUCT PRESENTATION.pdf (musteri sunumu)
// NOT: Bu sunum toptan/distributor tanitim materyalidir, TL perakende fiyati icermez.
// price: null -> "Fiyat için bize ulaşın" gösterilir. Gercek fiyat listesi gelince guncellenmelidir.

const KIDS_PRODUCTS = [
  {
    id: "smart-walker-canvas-play",
    name: "Smart Walker Canvas Play",
    tagline: "Yıkanabilir, kolay temizlenen ilk adım ayakkabısı",
    image: "assets/img/kids/smart-walker-canvas-play.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Dusty Blue", hex:"#7c9cc4"},
      {name:"Powder Pink", hex:"#eec3c9"},
      {name:"White", hex:"#f3f3f0"},
      {name:"Navy Blue", hex:"#233350"},
      {name:"Lilac", hex:"#9aa8d6"}
    ],
    features: [
      "3F Barefoot Tasarım (Feel, Fit, Flex)",
      "Yıkanabilir ve kolay temizlenen kumaş",
      "Hop-Click Tongue: dile kaymayan dil sistemi",
      "Smart Wing Velcro Duo: tek hareketle açılıp kapanan cırt cırt"
    ],
    desc: "Smart Walker Canvas Play, maceraya doyamayan minikler için kirlenmeye dayanıklı, kolay yıkanan ve barefoot destekli bir ilk adım ayakkabısı."
  },
  {
    id: "smart-walker-slip-on",
    name: "Smart Walker Slip-On #Tags",
    tagline: "Dünyanın ilk ışıklı, kişiselleştirilebilir slip-on'u",
    image: "assets/img/kids/smart-walker-slip-on.jpg",
    price: null,
    euSize: "20-32",
    usSize: "4-13.5",
    colors: [
      {name:"Super Matt Pink", hex:"#e79bb0"},
      {name:"Super Matt Navy", hex:"#1f2d47"},
      {name:"Brown Oak", hex:"#8a5a3b"},
      {name:"Super Matt Cool Gray", hex:"#9aa0a6"}
    ],
    features: [
      "Değiştirilebilir #Tags ile kişiselleştirme",
      "Scuba kumaş: esnek, dayanıklı ve rahat",
      "Çoklu yönde esneyen bantlar",
      "Kutu içinde sürpriz #Tag hediyesi (biri ışıklı!)"
    ],
    desc: "Smart Walker Slip-On #Tags, takılabilir figürleriyle çocuklara kendi stilini yaratma özgürlüğü veren, giyip çıkarması saniyeler süren bir slip-on modelidir."
  },
  {
    id: "smart-walker-outdoor-sandals",
    name: "Smart Walker Outdoor Sandals",
    tagline: "Karanlıkta parlayan, suya dayanıklı outdoor sandalet",
    image: "assets/img/kids/smart-walker-outdoor-sandals.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Pink Duo", hex:"#e9b7ac"},
      {name:"Green Duo", hex:"#8fb7a8"},
      {name:"Brown Duo", hex:"#8a6a4e"},
      {name:"Blue Duo", hex:"#2b3f5c"}
    ],
    features: [
      "Profesyonel dalgıç kumaşından esnek scuba kumaş",
      "4x4 reflektör: karanlıkta parlayan detaylar",
      "Smart WingVelcros Duo hızlı giyim sistemi",
      "Kir tutmaz, hızlı kurur"
    ],
    desc: "Yaz maceraları için tasarlanan Outdoor Sandals, gün boyu konfor sunan hafif ve hızlı kuruyan yapısıyla küçük kaşiflerin yanında."
  },
  {
    id: "smart-walker-mary-jane",
    name: "Smart Walker Mary Jane",
    tagline: "Şık ve rahat, BioVegan deri Mary Jane",
    image: "assets/img/kids/smart-walker-mary-jane.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Cool Black", hex:"#1b1b1b"},
      {name:"Gold Star", hex:"#cba135"},
      {name:"Cool Pink", hex:"#eec4cb"},
      {name:"Cool White", hex:"#f2f0ea"}
    ],
    features: [
      "BioVegan™ deri: doğal, geri dönüştürülmüş malzeme",
      "Esnek elastik kayış ile güvenli ve rahat kullanım",
      "3F Barefoot tasarım ile sağlıklı ayak gelişimi",
      "Nefes alabilir, terlemeyi önleyen yapı"
    ],
    desc: "Mary Jane, günlük şıklığı barefoot konforuyla birleştiren, özel günler ve okul için ideal bir modeldir."
  },
  {
    id: "multi-mix",
    name: "Multi Mix",
    tagline: "Su geçirmez taban, her ortama uygun çok amaçlı ayakkabı",
    image: "assets/img/kids/multi-mix.jpg",
    price: null,
    euSize: "20-32",
    usSize: "4-13.5",
    colors: [
      {name:"Gray Mix", hex:"#9aa0a6"},
      {name:"Pink Mix", hex:"#eab2a6"},
      {name:"Neon Mix", hex:"#d6f24e"},
      {name:"Navy Mix", hex:"#1f2d47"},
      {name:"Green Mix", hex:"#a8dcc6"}
    ],
    features: [
      "Su geçirmez EVA taban, ıslanınca kurutması hızlı",
      "Karanlıkta parlayan reflektör logo",
      "TP-Rubber kaymaz ve dayanıklı dış taban",
      "Ev, bahçe, park ve okul için uygun"
    ],
    desc: "Multi Mix; evde, parkta, okulda — minikler nereye giderse gitsin yanlarından ayrılmayan çok yönlü bir günlük ayakkabı."
  },
  {
    id: "smart-walker-recycled-canvas",
    name: "Smart Walker Recycled Canvas",
    tagline: "%100 geri dönüştürülmüş kumaştan, sürdürülebilir seçim",
    image: "assets/img/kids/smart-walker-recycled-canvas.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Eco Light Blue", hex:"#a9c6dc"},
      {name:"Eco Yellow", hex:"#e9d27a"},
      {name:"Eco Gray", hex:"#b7bcc0"},
      {name:"Eco Pink", hex:"#eec3c9"},
      {name:"Eco Violet", hex:"#7d87b8"},
      {name:"Eco Navy Blue", hex:"#233350"},
      {name:"Eco Off-White", hex:"#f1ede2"},
      {name:"Eco Sea Green", hex:"#a9c9a1"}
    ],
    features: [
      "Recycle360: 667 ton su tasarrufu sağlayan üretim",
      "Hop-Click Tongue ve Smart Wing Velcros Duo",
      "%100 doğal ve geri dönüştürülmüş malzeme",
      "3F Barefoot tasarım"
    ],
    desc: "Recycled Canvas serisi, doğaya verdiği zararı en aza indiren üretim süreciyle çevre bilinçli aileler için tasarlandı."
  },
  {
    id: "smart-walker-junior",
    name: "Smart Walker Junior",
    tagline: "BioVegan deri ile büyüyen ayaklara sağlıklı destek",
    image: "assets/img/kids/smart-walker-junior.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Super Matt Cool Gray", hex:"#9aa0a6"},
      {name:"Super Matt Khaki", hex:"#7c8060"},
      {name:"Red Light", hex:"#c23b3b"},
      {name:"Super Matt Navy", hex:"#1f2d47"},
      {name:"Brown Oak", hex:"#8a5a3b"},
      {name:"Purple Light", hex:"#8a6bb0"},
      {name:"Super Matt Pink", hex:"#e79bb0"},
      {name:"Super Matt Black", hex:"#1b1b1b"},
      {name:"Super Matt Beige", hex:"#d8c7a8"},
      {name:"Green Light", hex:"#3f7a4f"}
    ],
    features: [
      "%100 BioVegan™ PU deri",
      "Smart Wing Velcros Duo",
      "Hop-Click Tongue kaymayan dil sistemi",
      "Yüksek hava geçirgenliği, terlemeyi önler"
    ],
    desc: "Smart Walker Junior, çevre ve hayvan dostu BioVegan deri kullanımıyla hem sorumlu hem de dayanıklı bir seçim sunar."
  },
  {
    id: "smart-walker-casual",
    name: "Smart Walker Casual",
    tagline: "%100 pamuk astar, OrthoFlex taban",
    image: "assets/img/kids/smart-walker-casual.jpg",
    price: null,
    euSize: "20-32",
    usSize: "4-13.5",
    colors: [
      {name:"Super Matt Beige", hex:"#d8c7a8"},
      {name:"Super Matt Gray", hex:"#9aa0a6"},
      {name:"Super Matt Pink", hex:"#e79bb0"},
      {name:"Super Matt Black", hex:"#1b1b1b"},
      {name:"Super Matt Khaki", hex:"#7c8060"},
      {name:"Illuminating Silver", hex:"#c9cdd1"},
      {name:"Super Matt Navy", hex:"#1f2d47"},
      {name:"Brown Oak", hex:"#8a5a3b"}
    ],
    features: [
      "%100 pamuk astar, %100 geri dönüştürülmüş OrthoFlex® taban",
      "Tek parça Smart WingVelcros sistemi",
      "Cırt cırt bölgesini kirden koruyan kauçuk kapak",
      "3F Barefoot tasarım"
    ],
    desc: "Smart Walker Casual, günlük kullanımda üstün konfor ve şıklığı bir arada sunan, her kombine uyan bir klasik."
  },
  {
    id: "smart-walker-first-prime",
    name: "Smart Walker First Prime",
    tagline: "İlk adımlar için ışıldayan, BioVegan destekli tasarım",
    image: "assets/img/kids/smart-walker-first-prime.jpg",
    price: null,
    euSize: "17-23",
    usSize: "2-6.5",
    colors: [
      {name:"Super Matt Cool Gray", hex:"#9aa0a6"},
      {name:"Cool Green", hex:"#a9c9a1"},
      {name:"Cool Pink", hex:"#eec4cb"},
      {name:"Cool Beige", hex:"#e3d6bd"}
    ],
    features: [
      "Karanlıkta parlayan Glowing Hopfrögs detayı",
      "Kaymaz BioVegan taban",
      "Smart WingVelcros ile tek elle kolay giyim",
      "İlk adımlar için özel yumuşak yapı"
    ],
    desc: "First Prime, yürümeye yeni başlayan bebekler için ekstra yumuşak ve destekleyici bir ilk ayakkabı deneyimi sunar."
  },
  {
    id: "smart-walker-high-top",
    name: "Smart Walker High Top",
    tagline: "Bilek destekli, esnek bağcıklı günlük bot",
    image: "assets/img/kids/smart-walker-high-top.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Super Matt Cool Gray", hex:"#9aa0a6"},
      {name:"Super Matt Khaki", hex:"#7c8060"},
      {name:"Red Light", hex:"#c23b3b"},
      {name:"Super Matt Navy", hex:"#1f2d47"},
      {name:"Brown Oak", hex:"#8a5a3b"},
      {name:"Purple Light", hex:"#8a6bb0"},
      {name:"Super Matt Pink", hex:"#e79bb0"},
      {name:"Super Matt Black", hex:"#1b1b1b"},
      {name:"Super Matt Beige", hex:"#d8c7a8"},
      {name:"Green Light", hex:"#3f7a4f"}
    ],
    features: [
      "Esnek, kolay giyilen streç bağcık sistemi",
      "Smart WingVelcros ile tam kavrama",
      "Bilek desteğiyle güvenli adımlar",
      "3F Barefoot tasarım"
    ],
    desc: "High Top, günlük kullanımda hem şıklık hem de bilek desteği isteyen aileler için ideal bir bot modelidir."
  },
  {
    id: "smart-walker-rain-boots",
    name: "Smart Walker Rain Boots",
    tagline: "Su geçirmez, ThermoComfort+ astarlı yağmur botu",
    image: "assets/img/kids/smart-walker-rain-boots.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Brown Oak", hex:"#8a5a3b"},
      {name:"Super Matt Pink", hex:"#e79bb0"},
      {name:"Super Navy Blue", hex:"#1f2d47"},
      {name:"Super Matt Cool Gray", hex:"#9aa0a6"}
    ],
    features: [
      "Smart Rain Shield: rüzgar, toz ve suya karşı çok katmanlı koruma",
      "ThermoComfort+ taban ile sıcak tutan yapı",
      "Karanlıkta görünürlük sağlayan reflektör",
      "Kolay giyim için elastik çek-bırak aksesuar"
    ],
    desc: "Rain Boots, yağmurlu ve soğuk günlerde minik ayakları kuru ve sıcak tutan, su geçirmez bir koruma sunar."
  },
  {
    id: "smart-walker-furry-boots",
    name: "Smart Walker Furry Boots",
    tagline: "Kürklü, sıcak tutan kış botu",
    image: "assets/img/kids/smart-walker-furry-boots.jpg",
    price: null,
    euSize: "20-36",
    usSize: "4-4Y",
    colors: [
      {name:"Brown Oak", hex:"#8a5a3b"},
      {name:"Pink Lotus", hex:"#e6a9b8"},
      {name:"Navy Nubuck", hex:"#233350"},
      {name:"Honey Nubuck", hex:"#c98a3f"}
    ],
    features: [
      "Su itici dış yüzey, sıcak kürklü iç astar",
      "ThermoComfort+ taban, alüminyum ısı kalkanı",
      "Esnek bağcık ve yan fermuar ile kolay giyim",
      "Karanlıkta görünürlük için reflektör detay"
    ],
    desc: "Furry Boots, kış aylarında sıcaklık ve rahatlığı bir arada sunan, kolay giyilebilir şık bir bot modelidir."
  },
  {
    id: "hoppuff",
    name: "Hoppuff (Casual & Polar)",
    tagline: "Evde ve dışarıda kullanılabilen rahat terlik/bot",
    image: "assets/img/kids/hoppuff.jpg",
    price: null,
    euSize: "24-32",
    usSize: "7.5-13.5",
    colors: [
      {name:"Dynamic Black", hex:"#1b1b1b"},
      {name:"Dynamic Green", hex:"#3f7a4f"},
      {name:"Dynamic Navy", hex:"#1f2d47"},
      {name:"Dynamic Pink", hex:"#e0447f"},
      {name:"Dynamic Yellow", hex:"#e8b93a"},
      {name:"Fuxia Polar", hex:"#d81b6a"},
      {name:"Brown Polar", hex:"#5a3a28"},
      {name:"Green Polar", hex:"#3f9a4f"}
    ],
    features: [
      "Ayarlanabilir push-pull bağcık aksesuarı",
      "Karanlıkta parlayan reflektör logo",
      "Aşınmaya dayanıklı hafif parashüt kumaş (Casual)",
      "Sıcak tutan polar iç yapı (Polar)"
    ],
    desc: "Hoppuff, evden bahçeye kolay geçiş yapabilen, hafif ve konforlu bir günlük terlik/bot serisidir."
  },
  {
    id: "smart-booties",
    name: "Smart Booties",
    tagline: "Yeni doğan ve bebekler için organik pamuklu patik",
    image: "assets/img/kids/smart-booties.jpg",
    price: null,
    euSize: "Bebek / 0-2 yaş",
    usSize: "-",
    colors: [
      {name:"Karışık desenler", hex:"#a9c9a1"}
    ],
    features: [
      "Organik pamuk, vegan malzeme",
      "Geri dönüştürülmüş OrthoFlex® taban",
      "Eğlenceli hayvan figürleriyle Montessori destekli tasarım",
      "Yumuşak ve esnek 3F Barefoot yapı"
    ],
    desc: "Smart Booties, ilk aylardan itibaren bebeklerin ayaklarını doğal gelişimine uygun şekilde saran, sevimli tasarımlı patiklerdir."
  },
  {
    id: "fun-furry",
    name: "Fun Furry (Ev Terlikleri)",
    tagline: "Dünyanın ilk ışıklı, kişiselleştirilebilir ev terliği",
    image: "assets/img/kids/light-up-slippers.jpg",
    price: null,
    euSize: "Çocuk beden aralığı",
    usSize: "-",
    colors: [
      {name:"Recycled Woo Wooly", hex:"#d8c7a8"},
      {name:"Furry Furry", hex:"#e6d7c3"},
      {name:"Polar Fleece", hex:"#e6a9b8"}
    ],
    features: [
      "Süper silikon: esnek, dayanıklı ve tamamen doğal",
      "Burun ve topukta aşınma karşıtı koruma",
      "%100 pamuk astar, %100 geri dönüştürülmüş OrthoFlex® taban",
      "Eğlenceli karakter ve desen seçenekleri"
    ],
    desc: "Fun Furry serisi, evde sıcacık ve rahat, dışarıdan gelen sürprizlerle çocukların keyifle giydiği bir terlik ailesidir."
  }
];
