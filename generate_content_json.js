/**
 * Script para generar los JSON de contenido desde archivos TypeScript.
 *
 * Uso:
 *   node generate_content_json.js <content_file.ts> <keys_file.ts> <output_dir>
 *
 * Ejemplo (Windows):
 *   node generate_content_json.js content1.ts keys.ts src\assets\content
 *
 * Ejemplo (loop Windows CMD):
 *   for /L %i in (1,1,25) do node generate_content_json.js content%i.ts keys.ts src\assets\content
 *
 * Ejemplo (loop Windows PowerShell):
 *   1..25 | ForEach-Object { node generate_content_json.js "content$_.ts" keys.ts src\assets\content }
 */

const fs   = require('fs');
const path = require('path');

function parseKeys(keysPath) {
  const content = fs.readFileSync(path.resolve(keysPath), 'utf-8');
  const keyMap  = {};
  const pattern = /export const (\w+)\s*=\s*'([^']*)'/g;
  let match;
  while ((match = pattern.exec(content)) !== null) {
    keyMap[match[1]] = match[2];
  }
  return keyMap;
}

function parseSections(contentPath) {
  const content = fs.readFileSync(path.resolve(contentPath), 'utf-8');
  const pattern = /^export const (\w+)\s*=/gm;
  const found   = [];
  let match;

  while ((match = pattern.exec(content)) !== null) {
    found.push({ name: match[1], start: match.index });
  }

  const sections = {};
  for (let i = 0; i < found.length; i++) {
    const start = found[i].start;
    const end   = i + 1 < found.length ? found[i + 1].start : content.length;
    sections[found[i].name] = content.slice(start, end);
  }
  return sections;
}

function parseItems(tsText, keyMap) {
  const items   = {};
  const pattern = /new Item\(([^,)]+),\s*\[([\s\S]*?)\]\s*\)/g;
  let match;

  while ((match = pattern.exec(tsText)) !== null) {
    const rawKey      = match[1].trim();
    const rawArr      = match[2];

    const keyRef      = rawKey.replace(/^Keys\./, '').replace(/['"]/g, '');
    const resolvedKey = keyMap[keyRef] ?? keyRef;

    const strings = [];
    const strPat  = /'((?:[^'\\]|\\.)*)'/g;
    let s;
    while ((s = strPat.exec(rawArr)) !== null) {
      strings.push(s[1].replace(/\\'/g, "'"));
    }

    items[resolvedKey] = strings;
  }
  return items;
}

function main() {
  const [,, contentPath, keysPath, outputDir] = process.argv;

  if (!contentPath || !keysPath || !outputDir) {
    console.log('Uso: node generate_content_json.js <content.ts> <keys.ts> <output_dir>');
    process.exit(1);
  }

  const resolvedOutput = path.resolve(outputDir);
  fs.mkdirSync(resolvedOutput, { recursive: true });

  console.log('Leyendo keys desde:   ' + path.resolve(keysPath));
  const keyMap = parseKeys(keysPath);
  console.log('  ' + Object.keys(keyMap).length + ' constantes encontradas');

  console.log('Leyendo contenido de: ' + path.resolve(contentPath));
  const sections = parseSections(contentPath);
  console.log('  ' + Object.keys(sections).length + ' secciones encontradas: ' + Object.keys(sections).join(', '));

  for (const [sectionName, tsBlock] of Object.entries(sections)) {
    const items      = parseItems(tsBlock, keyMap);
    const outputName = sectionName.toLowerCase();
    const outputPath = path.join(resolvedOutput, outputName + '.json');

    fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf-8');
    console.log('  [' + sectionName + '] -> ' + outputPath + '  (' + Object.keys(items).length + ' items)');
  }

  console.log('\nListo.');
}

main();