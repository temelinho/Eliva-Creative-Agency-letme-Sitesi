// Ortak yardımcı fonksiyonlar

function formatTRY(amount) {
  if (amount === null || amount === undefined) return "Fiyat için bize ulaşın";
  return amount.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₺";
}

function qs(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Sayfa yüklendiğinde iletişim linklerini config.js'den doldurur
function bindContactLinks() {
  document.querySelectorAll("[data-wa-generic]").forEach(el => {
    el.href = waLink(SITE_CONFIG.waMessageGeneric());
  });
  document.querySelectorAll("[data-tel]").forEach(el => {
    el.href = telLink();
    if (el.dataset.telText !== undefined) el.textContent = SITE_CONFIG.phone;
  });
  document.querySelectorAll("[data-phone-label]").forEach(el => {
    el.textContent = SITE_CONFIG.phone;
  });
  document.querySelectorAll("[data-mail]").forEach(el => {
    el.href = "mailto:" + SITE_CONFIG.email;
    if (el.dataset.mailText !== undefined) el.textContent = SITE_CONFIG.email;
  });
  document.querySelectorAll("[data-brand-name]").forEach(el => {
    el.textContent = SITE_CONFIG.brandName;
  });
}

document.addEventListener("DOMContentLoaded", bindContactLinks);
