// Horaria — moviment d'entrada de la guia: títols, textos i targetes pugen 20 px i apareixen,
// un rere l'altre (esglaó 70 ms), una sola vegada quan entren a la pantalla.
(function () {
  if (!('IntersectionObserver' in window)) return;
  var sel = '.section-tag, .section-title, .section-sub, .faq-item, .legal-card, .role-picker-btn, .feature-row-text, .step, .foot-word';
  var els = [].slice.call(document.querySelectorAll(sel)).filter(function (el) {
    return !el.closest('.fx-stage, nav, .modal-overlay, .hero-wrap') && el.getBoundingClientRect().top > window.innerHeight;
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      requestAnimationFrame(function () { e.target.classList.add('is-in'); });
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) {
    var i = 0, s = el.previousElementSibling;
    while (s && i < 6) { if (s.matches(sel)) i++; s = s.previousElementSibling; }
    el.style.setProperty('--rise-d', (i * 70) + 'ms');
    el.classList.add('rise-in');
    io.observe(el);
  });
})();

// En local (localhost), "Accedir" porta a l'app local (Vite, port 5173) en lloc de la de producció
(function () {
  if (location.hostname !== 'localhost') return;
  document.querySelectorAll('a[href^="https://app.horariapro.com"]').forEach(function (a) {
    a.href = a.href.replace('https://app.horariapro.com', 'http://localhost:5173');
  });
})();
