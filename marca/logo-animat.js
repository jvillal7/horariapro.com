// Reprodueix el logo quan entra a la pantalla; data-replay per tornar-lo a reproduir.
(function () {
  function play(svg) { svg.classList.remove('is-playing'); void svg.getBoundingClientRect(); svg.classList.add('is-playing'); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { play(e.target); io.unobserve(e.target); } }); }, { threshold: .4 });
  document.querySelectorAll('.hl-anim').forEach(function (s) { io.observe(s); });
  document.querySelectorAll('[data-replay]').forEach(function (b) { b.addEventListener('click', function () { var s = document.querySelector(b.getAttribute('data-replay')); if (s) play(s); }); });
})();
