document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("footer-placeholder");
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h5 data-brand-name>Eliva Creative Agency</h5>
          <p style="color:rgba(255,255,255,.7); font-size:.86rem; max-width:280px;">
            Kids, Medical, Premium Organik ve Spor &amp; Fitness kategorilerinde güvenilir markaları bir araya getiren vitrin sitesi.
          </p>
        </div>
        <div>
          <h5>Kategoriler</h5>
          <a href="kids.html">Kids — Çocuk Ayakkabısı</a>
          <a href="medical.html">Medical — GCell &amp; GMeso</a>
          <a href="premium.html">Premium Organik — Zeytinyağı &amp; Bal</a>
          <a href="spor.html">Spor &amp; Fitness — Avessa</a>
        </div>
        <div>
          <h5>Kurumsal</h5>
          <a href="index.html">Ana Sayfa</a>
          <a href="#" data-wa-generic target="_blank" rel="noopener">WhatsApp</a>
          <a href="#" data-mail data-mail-text>info@elivacreative.com</a>
        </div>
        <div>
          <h5>İletişim</h5>
          <a href="#" data-tel data-tel-text>+90 5xx xxx xx xx</a>
          <a href="#" data-mail>E-posta Gönder</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="footer-year"></span> <span data-brand-name>Eliva Creative Agency</span>. Tüm hakları saklıdır.</span>
        <span>Bu bir vitrin sitesidir, online ödeme alınmamaktadır.</span>
      </div>
    </div>
  `;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  bindContactLinks();
});
