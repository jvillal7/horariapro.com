// Traductor en viu de la demo (ca base, va i es) i icones de línia. Igual que el de l'app: canvia el text dels nodes sense tocar l'estructura.
(function () {
  var ES = __ES__, IC = __ICONES__;
  function idioma() {
    var l = null;
    try { l = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (!l) { try { l = localStorage.getItem('hp_lang'); } catch (e) {} }
    if (!l) { var p = String((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase(); l = /valencia/.test(p) ? 'va' : p.indexOf('es') === 0 ? 'es' : 'ca'; }
    l = String(l).toLowerCase(); if (l === 'val') l = 'va';
    return l === 'va' || l === 'es' ? l : 'ca';
  }
  var L = idioma();
  document.documentElement.lang = L === 'va' ? 'ca-ES-valencia' : L;
  var VA = [[/\bAvui\b/g, 'Hui'], [/\bavui\b/g, 'hui'], [/\bAVUI\b/g, 'HUI'], [/\bteva\b/g, 'teua'], [/\bteves\b/g, 'teues'], [/\bseva\b/g, 'seua'], [/\bseves\b/g, 'seues'], [/\bmeva\b/g, 'meua'], [/\bmeves\b/g, 'meues'],
    [/\bAquest\b/g, 'Este'], [/\baquest\b/g, 'este'], [/\bAquesta\b/g, 'Esta'], [/\baquesta\b/g, 'esta'], [/\bAquests\b/g, 'Estos'], [/\baquests\b/g, 'estos'], [/\bAquestes\b/g, 'Estes'], [/\baquestes\b/g, 'estes'],
    [/\bCobreix\b/g, 'Cobrix'], [/\bcobreix\b/g, 'cobrix'], [/\bCobreixes\b/g, 'Cobrixes'], [/\bcobreixes\b/g, 'cobrixes'], [/\bcobreixen\b/g, 'cobrixen'], [/\bIntrodueix\b/g, 'Introduïx'], [/\bredistribueix\b/g, 'redistribuïx'],
    [/\boblidis\b/g, 'oblides'], [/\bfacis\b/g, 'faces'], [/\bgestioni\b/g, 'gestione'], [/\bsurti\b/g, 'isca'], [/\btingui\b/g, 'tinga'], [/\bpugui\b/g, 'puga'], [/\bquedi\b/g, 'quede']];
  var fet = window.__hpFalta = {};
  function tr(s) {
    if (L === 'ca') return s;
    var k = s.trim(); if (!k) return s;
    if (L === 'es') {
      if (Object.prototype.hasOwnProperty.call(ES, k)) return s.replace(k, function () { return ES[k]; });
      if (/\p{L}{2}/u.test(k)) fet[k] = 1;
      return s;
    }
    var o = s; for (var i = 0; i < VA.length; i++) o = o.replace(VA[i][0], VA[i][1]); return o;
  }
  var escrit = new WeakMap(), ATR = ['placeholder', 'title', 'aria-label'];
  function saltar(el) { return !el || /^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/.test(el.tagName); }
  function icona(el, txt) {
    var e = txt.trim().replace(/️/g, ''), d = IC[e];
    if (!d || el.children.length) return;
    if (el.getAttribute('data-ic') === e) return;
    if (!el.getAttribute('data-ic')) el.setAttribute('data-ic-mida', parseFloat(getComputedStyle(el).fontSize) || 16);
    var px = (+el.getAttribute('data-ic-mida') * 1.15).toFixed(1) + 'px';
    var u = 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>') + '")';
    el.setAttribute('data-ic', e);
    var c = el.style;
    c.fontSize = '0'; c.display = 'inline-block'; c.width = px; c.height = px; c.minWidth = px; c.flex = 'none'; c.alignSelf = 'center'; c.marginTop = '0';
    c.background = 'currentColor'; c.webkitMask = u + ' center/contain no-repeat'; c.mask = u + ' center/contain no-repeat';
  }
  function node(n) {
    var p = n.parentElement; if (saltar(p)) return;
    var v = n.nodeValue;
    if (escrit.get(n) === v) return;
    if (IC[v.trim().replace(/️/g, '')]) { icona(p, v); return; }
    var o = tr(v);
    if (o !== v) { escrit.set(n, o); n.nodeValue = o; }
  }
  function attrs(el) {
    if (!el.hasAttribute) return;
    for (var i = 0; i < ATR.length; i++) { var a = ATR[i]; if (el.hasAttribute(a)) { var v = el.getAttribute(a), o = tr(v); if (o !== v) el.setAttribute(a, o); } }
  }
  function camina(r) {
    if (r.nodeType === 3) return node(r);
    if (r.nodeType !== 1) return;
    attrs(r);
    var w = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) node(n); else attrs(n); }
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === 'characterData') node(m.target);
      else if (m.type === 'attributes') attrs(m.target);
      else m.addedNodes.forEach(camina);
    });
  }).observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATR });
})();
