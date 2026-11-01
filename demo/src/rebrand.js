// Aplica una sola vegada la marca nova a demo/src/template.html (partint de la plantilla de git).
// Ús: git show HEAD:demo/src/template.html > base i node demo/src/rebrand.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..', '..');
const f = path.join(__dirname, 'template.html');
let s = fs.readFileSync(f, 'utf8');
const SCRIPT = '<script type="text/x-dc"';

// ---- tipografia: Geist incrustada, només 400/500/600
s = s.replace(/\/\*[^*]*\*\/\s*@font-face\s*\{[^}]*Instrument Sans[^}]*\}/g, '').replace(/@font-face\s*\{[^}]*Instrument Sans[^}]*\}/g, '');
const geist = fs.readFileSync(path.join(ROOT, 'videos', 'fonts', 'Geist.woff2')).toString('base64');
s = s.replace('<style>', `<style>\n@font-face { font-family: 'Geist'; font-weight: 100 900; font-display: swap; src: url("data:font/woff2;base64,${geist}") format('woff2'); }\n`);
s = s.replace(/'Instrument Sans'/g, "'Geist'");
s = s.replace(/font-family:\s*Georgia,\s*serif;([^"]*?)font-weight:\s*\d+;/g, "font-family:'Geist',sans-serif;$1font-weight:600;");
s = s.replace(/font-family:\s*Georgia,\s*serif;/g, "font-family:'Geist',sans-serif; font-weight:600;");
s = s.replace(/font-weight:\s*(700|800|900)/g, 'font-weight:600');
s = s.replace(/text-transform:\s*uppercase;?\s*/g, '').replace(/letter-spacing:\s*\.0[2-9]em;?\s*/g, '');

// ---- color
const degr = [
  [/linear-gradient\(\s*135deg\s*,\s*#8B5CF6\s*,\s*#6D28D9\s*\)/gi, '#1E3A2F'],
  [/linear-gradient\(\s*90deg\s*,\s*#7C6EF2\s*,\s*#2B5BAA\s*\)/gi, '#1A7A4E'],
  [/linear-gradient\(\s*(?:to right|90deg)\s*,\s*#7c3aed\s*,\s*#2563eb\s*\)/gi, '#1A7A4E'],
  [/linear-gradient\(\s*135deg\s*,\s*#0d7c5c\s*,\s*#16a34a\s*\)/gi, '#1A7A4E'],
];
for (const [a, b] of degr) s = s.replace(a, b);
s = s.replace(/background:#1A7A4E;\s*-webkit-background-clip:\s*text;\s*-webkit-text-fill-color:\s*transparent;?/gi, 'color:#1A7A4E;');
const col = { '#0A0A0B': '#14271F', '#3A3A3F': '#33463D', '#7A7A85': '#4E5E56', '#9A9AA2': '#6F7D75', '#B8B8C2': '#A3AEA6', '#D0D0D8': '#C8CEC5', '#D8D8DC': '#C8CEC5',
  '#EFEFEC': '#E3E0D4', '#F0F0EC': '#E3E0D4', '#F7F7F5': '#F4F2EA', '#FAFAF8': '#F4F2EA', '#2B5BAA': '#1A7A4E', '#EAF1FB': '#E8F2EC', '#7C6EF2': '#1A7A4E', '#7C3AED': '#1A7A4E', '#2563EB': '#1A7A4E' };
for (const [a, b] of Object.entries(col)) s = s.replace(new RegExp(a, 'gi'), b);
s = s.replace(/rgba\(43,\s*91,\s*170,/g, 'rgba(26,122,78,');
s = s.replace('<div data-app-root="1" style="width:100%; min-height:100%; height:auto; background:#FFFFFF;', '<div data-app-root="1" style="width:100%; min-height:100%; height:auto; background:#F4F2EA;');
s = s.replace('position:sticky; top:0; z-index:100; background:#FFFFFF;', 'position:sticky; top:0; z-index:100; background:#F4F2EA;');

// ---- nom i to: Horaria, no "la IA"
const noms = [['HorarIAPro', 'Horaria Pro'], ['HorarIA', 'Horaria'], ['Proposta IA', 'Proposta'], ['Horaria IA', 'Horaria'], ['La IA ho llegeix', 'Horaria ho llig'], ['Què en fa la IA', 'Què en fa Horaria'], ['la IA ho tindrà', 'Horaria ho tindrà'],
  ['la IA redistribueix', 'Horaria redistribueix'], ['La IA ho interpretarà', 'Horaria ho interpretarà'], ['millor podrà la IA', 'millor podrà Horaria']];
for (const [a, b] of noms) s = s.split(a).join(b);

// ---- logo
const logo = fs.readFileSync(path.join(ROOT, 'brand-horaria', 'logo', 'horaria-pro-sobre-clar.svg'), 'utf8').trim();
const logoH = (h) => logo.replace('<svg ', `<svg style="height:${h}px;width:auto;display:block" `);
s = s.replace(/<div style="font-family:'Geist',sans-serif; font-weight:600; font-size:17px; font-weight:600; color:#14271F;">Horaria Pro<\/div>/, logoH(22));

// ---- icones de línia de l'app en lloc d'emojis a la pantalla (només en el text de la maqueta)
const ic = fs.readFileSync(path.join(ROOT, 'GDOCENT', 'src', 'components', 'Ic.jsx'), 'utf8');
const P = eval('(' + ic.match(/const P = (\{[\s\S]*?\n\});/)[1] + ')');
const E = eval('(' + ic.match(/const E = (\{[\s\S]*?\n\});/)[1] + ')');
const EMOJI = /(\p{Extended_Pictographic})️?/gu;
const marca = 'M11 5 V41 M11 26 C11 18.5 15.5 15.5 20.5 15.5 C26 15.5 29 19 29 25 V37 L38.5 25';
const svg = (d, vb = '0 0 24 24', sw = 1.7) => `<svg viewBox="${vb}" style="width:1.1em;height:1.1em;flex:none;display:inline-block;vertical-align:-.18em" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const noMapat = new Set();
const canvi = (t) => t.replace(EMOJI, (m, e) => {
  if (e === '🤖') return svg(marca, '4 0 42 46', 5);
  if (E[e] && P[E[e]]) return svg(P[E[e]]);
  if ('✓✕☰'.includes(e)) return m;
  noMapat.add(e); return m;
});
const i = s.indexOf('</helmet>'), j = s.indexOf(SCRIPT);
const mig = s.slice(i, j).replace(/>([^<>]+)</g, (m, t) => (t.includes('{{') ? m : '>' + canvi(t) + '<'));
s = s.slice(0, i) + mig + s.slice(j);

// ---- defecte de la plantilla: etiquetes mal tancades feien eixir el botó de la targeta i colar-se a les altres pantalles
{
  const a = /<\/sc-if><\/div>\s*<\/sc-if>\s*(<sc-if value="\{\{ martaNotResolved \}\}")/;
  if (!a.test(s) || !s.includes('<!-- Avui tab -->')) throw new Error('marques de la targeta no trobades');
  s = s.replace(a, '</sc-if>\n            $1').replace('<!-- Avui tab -->', '</sc-if>\n\n        <!-- Avui tab -->');
}

// ---- dades de mostra neutres, emojis dins del codi i traductor
const lliure = [[/CEIP Rivo Rubeo/g, 'Escola Demo'], [/\bVero\b/g, 'Laura'], [/'VP'/g, "'LM'"], [/>VP</g, '>LM<'], [/@xtec\.cat/g, '@escola.demo'], [/Claudette/g, 'Clàudia'], [/\bJorge\b/g, 'Joan'], [/Geòrgia/g, 'Gemma'], [/Montse Aliaga/g, 'Montse Vila'], [/maliaga@/g, 'mvila@']];
for (const [a, b] of lliure) s = s.replace(a, b);
s = s.replace(/<div style="font-size:11px; color:#4E5E56; font-weight:600;[^"]*">HorariaPro<\/div>/, () => logoH(18));
const k = s.indexOf(SCRIPT);
s = s.slice(0, k) + s.slice(k).replace(/(\p{Extended_Pictographic})️?\s+(?=[\p{L}\d])/gu, '');
Object.assign(E, { '🤒': 'salut', '🙏': 'persona', '📁': 'carpeta', '🗄': 'carpeta', '📥': 'baixa', '⭐': 'guspira', '⏲': 'rellotge', '🖥': 'pantalla', '🖨': 'imprimir', '📷': 'imatge', '📱': 'mobil' });
const icones = {};
for (const e of Object.keys(E)) if (P[E[e]]) icones[e] = P[E[e]];
const es = { ...JSON.parse(fs.readFileSync(path.join(__dirname, 'es-app.json'), 'utf8')), ...JSON.parse(fs.readFileSync(path.join(__dirname, 'es.json'), 'utf8')) };
const run = fs.readFileSync(path.join(__dirname, 'idioma-demo.js'), 'utf8').replace('__ES__', () => JSON.stringify(es)).replace('__ICONES__', () => JSON.stringify(icones));
s = s.replace('<script src="db3c624e', () => `<script>${run.replace(/<\//g, '<\\/')}</script>\n<script src="db3c624e`);

fs.writeFileSync(f, s);
console.log('sense icona:', [...noMapat].join(' ') || '(cap)');
