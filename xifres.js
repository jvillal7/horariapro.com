/* HorariaPro — xifres reals de la franja de prova social (sota el hero).
 * Supabase les recalcula cada dilluns (web_xifres_actualitza, pg_cron) i ací
 * es llegeixen amb la clau pública via l'RPC web_xifres(), que només torna
 * dos totals. Si la petició falla, es queden els números escrits a l'HTML.
 * Els "2 min" són fixos i no es toquen.
 */
(function () {
  var els = document.querySelectorAll('[data-xifra]');
  if (!els.length || !window.fetch) return;
  var KEY = 'sb_publishable_t3-NsA6e13wB0-kDuXvXGw_7b6vVllK';
  fetch('https://mtrylcazzwolgzfzmbrn.supabase.co/rest/v1/rpc/web_xifres', {
    method: 'POST',
    headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' },
    body: '{}'
  })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (rows) {
      var x = rows && rows[0];
      if (!x) return;
      for (var i = 0; i < els.length; i++) {
        var n = Number(x[els[i].getAttribute('data-xifra')]);
        if (n > 0) els[i].textContent = n.toLocaleString('ca-ES');
      }
    })
    .catch(function () {});
})();
