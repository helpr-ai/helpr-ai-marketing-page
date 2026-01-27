import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Read the useI18n.ts file
const content = readFileSync(join(rootDir, 'composables/useI18n.ts'), 'utf-8');

// Extract the translations object using regex
const translationsMatch = content.match(/const translations = \{[\s\S]*?\n  en: \{[\s\S]*?\n  \}\n\}/);

if (!translationsMatch) {
  console.error('Could not find translations object');
  process.exit(1);
}

// We need to evaluate the translations object
// First, let's find the nl and en sections separately
const nlStart = content.indexOf('nl: {', content.indexOf('const translations = {'));
const enStart = content.indexOf('\n  en: {', nlStart);
const translationsEnd = content.indexOf('\n}', enStart + 100);

// Find where nl section ends (before en starts)
let braceCount = 0;
let nlEnd = nlStart + 4; // Start after 'nl: {'
for (let i = nlStart + 4; i < enStart; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      nlEnd = i + 1;
      break;
    }
  }
}

const nlContent = content.substring(nlStart + 4, nlEnd);
const enContent = content.substring(enStart + 7, translationsEnd);

// Function to convert JS object literal to JSON
function jsToJson(jsStr) {
  // Remove trailing commas before } or ]
  let result = jsStr.replace(/,(\s*[}\]])/g, '$1');

  // Quote unquoted keys
  result = result.replace(/(\s*)(\w+)(\s*):/g, '$1"$2"$3:');

  // Handle template literals and string concatenation - convert to regular strings
  result = result.replace(/`([^`]*)`/g, (match, content) => {
    return '"' + content.replace(/\n/g, '\\n').replace(/"/g, '\\"').replace(/\$\{[^}]+\}/g, '') + '"';
  });

  return result;
}

// Write the translations to JSON files
// We need a more robust approach - let's use Function constructor to eval
try {
  // Create a minimal extraction by reading specific sections
  console.log('Extracting translations...');

  // Write a temporary file that exports the translations
  const tempContent = `
const translations = ${content.substring(content.indexOf('const translations = {') + 22, translationsEnd + 1)};
export default translations;
`;

  writeFileSync(join(rootDir, 'scripts/temp-translations.mjs'), tempContent);
  console.log('Created temp file, importing...');

  const { default: translations } = await import('./temp-translations.mjs');

  // Write NL translations
  writeFileSync(
    join(rootDir, 'locales/nl.json'),
    JSON.stringify(translations.nl, null, 2)
  );
  console.log('Created locales/nl.json');

  // Write EN translations
  writeFileSync(
    join(rootDir, 'locales/en.json'),
    JSON.stringify(translations.en, null, 2)
  );
  console.log('Created locales/en.json');

  console.log('Done!');
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
