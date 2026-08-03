const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add the ParallaxDivider component
const parallaxComponent = `
function ParallaxDivider({ imagePath }: { imagePath: string }) {
  return (
    <div 
      className="relative h-48 md:h-64 w-full bg-fixed bg-center bg-cover border-y border-border/20"
      style={{ backgroundImage: \`url(\${imagePath})\` }}
    >
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

`;

content = content.replace(/function Hero\(\) \{/, parallaxComponent + 'function Hero() {');

// Insert them in LandingPage component
content = content.replace(/<About \/>/, '<About />\n        <ParallaxDivider imagePath="/images/parallax1.png" />');
content = content.replace(/<Specs \/>/, '<Specs />\n        <ParallaxDivider imagePath="/images/parallax2.png" />');
content = content.replace(/<Criteria \/>/, '<Criteria />\n        <ParallaxDivider imagePath="/images/parallax3.png" />');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Parallax dividers added.');
