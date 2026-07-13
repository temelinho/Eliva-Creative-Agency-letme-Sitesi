// Premium Organik - Zeytinyağı ürünleri (kaynak: nerminhanim.com, musterimizin markasi)
// Bal urunleri henuz netlesmedi -> gostermelik (placeholder) olarak isaretlendi (isPlaceholder:true)

const PREMIUM_PRODUCTS = [
  {
    id: "edremit-erken-hasat-odullu",
    category: "zeytinyagi",
    name: "Ayvalık (Edremit) Erken Hasat — Bol Ödüllü Soğuk Sıkım Zeytinyağı",
    size: "5 Lt",
    price: 5275,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/14315cb7-5671-4631-871c-8c8dbeeda263/720/edremit.webp",
    tags: ["Salata", "Kahvaltı", "Yemekler"],
    desc: "Ulusal ve uluslararası yarışmalarda altın madalya kazanan, erken hasat zeytinlerden 20°C'de soğuk sıkılan üstün kalite naturel sızma zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/erken-hasat-naturel-sizma-zeytinyagi-soguk-sikim-5lt"
  },
  {
    id: "yemeklik-naturel-birinci",
    category: "zeytinyagi",
    name: "Yemeklik Naturel Birinci Zeytinyağı",
    size: "5 Lt",
    price: 3250,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/303ab619-c579-436c-8be5-e2cd64ec7865/720/yemeklik.webp",
    tags: ["Sıcak yemek", "Kızartma"],
    desc: "Sıcak yemekler ve kızartmalar için üretilmiş, günlük mutfak kullanımına uygun ekonomik ve kaliteli naturel zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/yemeklik-naturel-birinci-zeytinyagi-5lt"
  },
  {
    id: "edremit-olgun-hasat",
    category: "zeytinyagi",
    name: "Ayvalık (Edremit) Naturel Sızma — Olgun Hasat Soğuk Sıkım",
    size: "5 Lt",
    price: 3950,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/b28b3543-1b17-4b93-ac0a-f5218c953042/720/olgu-hasat.webp",
    tags: ["Sıcak yemek", "Mezeler"],
    desc: "Olgun hasat zeytinlerden elde edilen, dengeli ve yumuşak aromalı soğuk sıkım naturel sızma zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/edremit-olgun-hasat-sizma-zeytinyagi-5lt"
  },
  {
    id: "arbequina-erken-hasat",
    category: "zeytinyagi",
    name: "Arbequina Erken Hasat Soğuk Sıkım Zeytinyağı",
    size: "5 Lt",
    price: 7950,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/d3a587cd-1c21-4af3-a019-b153886f7f6a/720/arbequina.webp",
    tags: ["Salata", "Kahvaltı", "İçmek"],
    desc: "Yumuşak, meyvemsi ve hafif badem aromalı Arbequina çeşidinden özel seri erken hasat zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/arbequina-erken-hasat-soguk-sikim-zeytinyagi-5lt"
  },
  {
    id: "memecik-erken-hasat",
    category: "zeytinyagi",
    name: "Memecik Erken Hasat Soğuk Sıkım Zeytinyağı",
    size: "5 Lt",
    price: 6100,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/023bc653-7c70-4516-8ae8-c45969847222/720/memecik.webp",
    tags: ["Salata", "Kahvaltı", "İçmek"],
    desc: "Ege'nin karakteristik Memecik zeytininden, yoğun meyvemsi ve baharatlı notalar taşıyan erken hasat zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/memecik-erken-hasat-soguk-sikim-zeytinyagi-5-lt"
  },
  {
    id: "domat-erken-hasat",
    category: "zeytinyagi",
    name: "Domat Erken Hasat Soğuk Sıkım Zeytinyağı",
    size: "5 Lt",
    price: 7250,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/6833f062-ada5-45cb-8d4a-d96cbbd644c5/720/domat.webp",
    tags: ["Salata", "Kahvaltı", "İçmek"],
    desc: "Domat zeytininden, keskin ve yoğun aromalı, yüksek polifenol içerikli erken hasat soğuk sıkım zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/domat-erken-hasat-soguk-sizma-zeytinyagi-5lt"
  },
  {
    id: "trilye-erken-hasat",
    category: "zeytinyagi",
    name: "Trilye Erken Hasat Soğuk Sıkım Zeytinyağı",
    size: "5 Lt",
    price: 7250,
    image: "https://cdn.myikas.com/images/28c12ba3-0b3b-4a65-8228-3e71a5c505d3/318698a8-63fa-491c-8e78-e93f78d432b6/720/trilye.webp",
    tags: ["Salata", "Kahvaltı", "İçmek"],
    desc: "Trilye zeytininden, dengeli acılık ve zenginlik sunan, sofraların gözdesi erken hasat soğuk sıkım zeytinyağı.",
    sourceUrl: "https://nerminhanim.com/trilye-erken-hasat-soguk-sikim-zeytinyagi-5lt"
  },

  // --- BAL: Tedarikçi netleşene kadar gösterlik (placeholder) ürünler ---
  {
    id: "organik-cicek-bali",
    category: "bal",
    name: "Organik Çiçek Balı",
    size: "850 gr",
    price: null,
    image: "assets/img/bg/honey-cicek.jpg",
    isPlaceholder: true,
    tags: ["Kahvaltı"],
    desc: "Örnek ürün — tedarikçi ve gerçek ürün bilgisi netleştiğinde görsel, fiyat ve açıklama güncellenecektir.",
    sourceUrl: null
  },
  {
    id: "organik-kestane-bali",
    category: "bal",
    name: "Organik Kestane Balı",
    size: "850 gr",
    price: null,
    image: "assets/img/bg/honey-kestane.jpg",
    isPlaceholder: true,
    tags: ["Kahvaltı"],
    desc: "Örnek ürün — tedarikçi ve gerçek ürün bilgisi netleştiğinde görsel, fiyat ve açıklama güncellenecektir.",
    sourceUrl: null
  },
  {
    id: "organik-petek-bal",
    category: "bal",
    name: "Organik Petek Bal",
    size: "500 gr",
    price: null,
    image: "assets/img/bg/honey-petek.jpg",
    isPlaceholder: true,
    tags: ["Kahvaltı", "Hediyelik"],
    desc: "Örnek ürün — tedarikçi ve gerçek ürün bilgisi netleştiğinde görsel, fiyat ve açıklama güncellenecektir.",
    sourceUrl: null
  }
];
