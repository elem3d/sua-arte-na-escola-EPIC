const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The mascot HTML
const mascotHTML = `
      {/* Mascote XP-PEN espiando */}
      <div className="absolute -bottom-4 right-[5%] md:right-[15%] lg:right-[20%] w-32 sm:w-40 md:w-56 lg:w-64 z-20 pointer-events-none transform transition-transform duration-700 hover:translate-y-[-10px]">
        <img 
          src="/images/mascote.png" 
          alt="Mascote XP-PEN Fenix" 
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(234,88,12,0.3)]"
        />
      </div>
    </section>
  );
}
`;

// Insert it right before the closing tag of Hero
content = content.replace(
  /    <\/section>\s*  \);\s*}\s*function ParallaxDivider/,
  mascotHTML + '\nfunction ParallaxDivider'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Mascot placeholder added to Hero.');
