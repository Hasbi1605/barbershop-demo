// Demo glue for the static Barbershop POS UI preview: original templates, styles and
// client JS from the app; seed data from the repo's own SQL dump is baked into the
// pages; form submissions are neutralized (no Java backend in this static preview).
(function () {
  var css = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:99999;background:#111827;color:#f9fafb;padding:9px 16px;border-radius:999px;font:500 13px/1.4 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);max-width:92vw;text-align:center';
  var bar = document.createElement('div');
  bar.style.cssText = css;
  bar.textContent = 'UI Preview — Barbershop POS: tampilan asli aplikasi dengan data contoh bawaan repo. Backend Java tidak berjalan dalam demo statis ini.';
  document.body.appendChild(bar);
  function toast(msg) {
    var t = document.createElement('div');
    t.style.cssText = css + ';bottom:64px;background:#7c2d12';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3400);
  }
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    toast('UI Preview: formulir tidak dikirim ke server dalam demo statis ini.');
  }, true);
})();
