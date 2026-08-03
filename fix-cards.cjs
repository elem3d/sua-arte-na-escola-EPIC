const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Make the dotted grid more visible
content = content.replace(/opacity-\[0\.07\]/, 'opacity-25');
content = content.replace(/_1px,transparent_1px/g, '_2px,transparent_2px');

// Add backdrop-blur and opaque backgrounds to the cards
content = content.replace(/bg-surface\/60/g, 'bg-background/90 backdrop-blur-xl');
content = content.replace(/bg-surface\/80/g, 'bg-background/90 backdrop-blur-xl');
content = content.replace(/bg-\[var\(--gradient-card\)\]/g, 'bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)]');
content = content.replace(/bg-border\/50/g, 'bg-background/80 backdrop-blur-xl');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cards made opaque and grid more visible.');
