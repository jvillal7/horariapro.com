// Regenera demo/index.html a partir de demo/src/template.html
// (el bundle conserva el manifest d'assets; només se substitueix la plantilla).
// Ús:  node demo/build.js            -> escriu demo/index.html
//      node demo/build.js --extract  -> treu la plantilla actual de demo/index.html a demo/src/template.html
const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, 'index.html');
const src = path.join(__dirname, 'src', 'template.html');
const re = /(<script type="__bundler\/template">)([\s\S]*?)(<\/script>)/;
const html = fs.readFileSync(out, 'utf8');

if (process.argv.includes('--extract')) {
  fs.writeFileSync(src, JSON.parse(html.match(re)[2]));
  console.log('plantilla extreta a', src);
} else {
  const json = JSON.stringify(fs.readFileSync(src, 'utf8'))
    .replace(/[\u007f-\uffff]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'))
    .replace(/</g, '\\u003c').replace(/\//g, '\\u002F');
  fs.writeFileSync(out, html.replace(re, (_, a, __, c) => a + json + c));
  console.log('demo/index.html regenerat (' + json.length + ' bytes de plantilla)');
}
