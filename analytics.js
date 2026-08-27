/**
 * Analítica pròpia de la web pública horariapro.com — sense cookies de tercers,
 * escriu directament a Supabase (taula web_analytics_log, insert-only per a
 * anon). Alimenta la pestanya "Web" del SuperAdmin Dashboard de l'app.
 *
 * 3 tipus d'event:
 *  - pageview: una càrrega de pàgina
 *  - click:    una CTA amb data-track="..." (afegir l'atribut on calga mesurar)
 *  - leave:    quan l'usuari marxa de la pàgina, amb el temps que hi ha estat
 */
(function () {
  var SUPA_URL = 'https://mtrylcazzwolgzfzmbrn.supabase.co';
  var SUPA_KEY = 'sb_publishable_t3-NsA6e13wB0-kDuXvXGw_7b6vVllK';
  var ENDPOINT = SUPA_URL + '/rest/v1/web_analytics_log';

  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function store(key, gen) {
    try {
      var v = sessionStorage.getItem(key);
      if (v) return v;
      v = gen();
      sessionStorage.setItem(key, v);
      return v;
    } catch (e) { return gen(); }
  }

  function persist(key, gen) {
    try {
      var v = localStorage.getItem(key);
      if (v) return v;
      v = gen();
      localStorage.setItem(key, v);
      return v;
    } catch (e) { return gen(); }
  }

  var visitorId = persist('hp_visitor_id', uid);
  var sessionId = store('hp_session_id', uid);

  function utmParam(name) {
    try { return new URLSearchParams(window.location.search).get(name) || null; }
    catch (e) { return null; }
  }

  function send(payload, useBeacon) {
    var body = JSON.stringify(Object.assign({
      visitor_id: visitorId,
      session_id: sessionId,
      path: window.location.pathname,
    }, payload));

    if (useBeacon && navigator.sendBeacon) {
      var blob = new Blob([body], { type: 'application/json' });
      // sendBeacon no permet capçaleres custom (apikey), així que passem la
      // clau anon com a query param — és publicable, no un secret.
      navigator.sendBeacon(ENDPOINT + '?apikey=' + encodeURIComponent(SUPA_KEY), blob);
      return;
    }

    try {
      fetch(ENDPOINT, {
        method: 'POST',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPA_KEY,
          Authorization: 'Bearer ' + SUPA_KEY,
          Prefer: 'return=minimal',
        },
        body: body,
      }).catch(function () {});
    } catch (e) { /* mai bloquejar la navegació per un error d'analítica */ }
  }

  // ── Pageview ────────────────────────────────────────────────────────────
  send({
    event: 'pageview',
    referrer: document.referrer || null,
    utm_source: utmParam('utm_source'),
    utm_medium: utmParam('utm_medium'),
    utm_campaign: utmParam('utm_campaign'),
  });

  // ── Clicks en CTAs marcades amb data-track ─────────────────────────────
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest && ev.target.closest('[data-track]');
    if (!el) return;
    send({ event: 'click', label: el.getAttribute('data-track') });
  }, true);

  // ── Sortida de la pàgina (per saber on es queden/abandonen) ─────────────
  var startedAt = Date.now();
  var sent = false;
  function sendLeave() {
    if (sent) return;
    sent = true;
    send({ event: 'leave', time_on_page_ms: Date.now() - startedAt }, true);
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') sendLeave();
  });
  window.addEventListener('pagehide', sendLeave);
})();
