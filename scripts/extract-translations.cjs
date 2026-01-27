const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Read the useI18n.ts file
const content = fs.readFileSync(path.join(rootDir, 'composables/useI18n.ts'), 'utf-8');

// Find the start of translations object
const translationsStart = content.indexOf('const translations = {');
if (translationsStart === -1) {
  console.error('Could not find translations object');
  process.exit(1);
}

// Find the end of the translations object by counting braces
let braceCount = 0;
let inString = false;
let stringChar = '';
let translationsEnd = translationsStart + 22; // After "const translations = {"

for (let i = translationsStart + 22; i < content.length; i++) {
  const char = content[i];
  const prevChar = content[i - 1];

  // Handle string detection
  if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
    }
    continue;
  }

  if (inString) continue;

  if (char === '{') braceCount++;
  if (char === '}') {
    braceCount--;
    if (braceCount === -1) {
      translationsEnd = i + 1;
      break;
    }
  }
}

// Extract the translations object content
const translationsContent = content.substring(translationsStart + 22, translationsEnd);

// Now we need to parse this as JavaScript
// Clean it up for eval
let cleanContent = '({' + translationsContent + ')';

// Use Function constructor to safely evaluate
try {
  const translations = eval(cleanContent);

  // Write NL translations
  fs.writeFileSync(
    path.join(rootDir, 'locales/nl.json'),
    JSON.stringify(translations.nl, null, 2)
  );
  console.log('Created locales/nl.json');

  // Write EN translations
  fs.writeFileSync(
    path.join(rootDir, 'locales/en.json'),
    JSON.stringify(translations.en, null, 2)
  );
  console.log('Created locales/en.json');

  console.log('Done!');
} catch (err) {
  console.error('Error parsing translations:', err.message);
  // Write the content to a file for debugging
  fs.writeFileSync(path.join(rootDir, 'scripts/debug-content.txt'), cleanContent.substring(0, 2000));
  console.log('Wrote debug content to scripts/debug-content.txt');
  process.exit(1);
}
