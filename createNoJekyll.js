// createNoJekyll.js
import { writeFileSync } from 'fs';
writeFileSync('./out/.nojekyll', '');
console.log('.nojekyll file created successfully.');
