const fs = require('fs');
const file = fs.readFileSync('src/data/demos.ts','utf8');
const marker = 'export function getDemoById';
const idx = file.indexOf(marker);
const before = file.substring(0, idx).trimEnd();
const after = file.substring(idx);
fs.writeFileSync('src/data/demos.ts', before + '\n\n' + newDemos + '\n\n' + after);
console.log('Done - added demos');
