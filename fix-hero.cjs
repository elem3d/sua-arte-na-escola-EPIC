const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update Hero text
content = content.replace(
  /<span className="inline-flex items-center gap-2 rounded-full border border-primary\/30 bg-primary\/10 px-4 py-1.5 text-xs font-medium text-primary-foreground\/90">\s*<Sparkles className="h-3.5 w-3.5 text-primary" \/>\s*Concurso Epic 8 anos • Sua Arte na Escola\s*<\/span>/,
  '<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90 uppercase tracking-wider">\n            <Sparkles className="h-3.5 w-3.5 text-primary" />\n            XP-PEN em parceria com a Epic apresenta\n          </span>'
);

content = content.replace(
  /<h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-\[1.05\]">\s*Deixe sua marca\s*<br \/>\s*<span className="text-gradient font-serif italic font-normal">na parede da Epic.<\/span>\s*<\/h1>/,
  '<h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">\n            Sua Arte\n            <br />\n            <span className="text-gradient font-serif italic font-normal">na Escola.</span>\n          </h1>'
);

// Insert images into FluidBackground
const imagesString = `
      {/* --- DECORATIVE SPONSOR/ART IMAGES --- */}
      <img src="/images/tablet.png" alt="" className="absolute top-[10%] -left-[10vw] w-[40vw] max-w-[500px] opacity-30 mix-blend-lighten blur-[1px] animate-[pulse_10s_ease-in-out_infinite]" style={{ transform: 'rotate(15deg)' }} />
      <img src="/images/paintbrush.png" alt="" className="absolute top-[50%] -right-[5vw] w-[35vw] max-w-[450px] opacity-30 mix-blend-lighten blur-[1px] animate-[pulse_12s_ease-in-out_infinite_reverse]" style={{ transform: 'rotate(-10deg)' }} />
    </div>
  );
}`;

content = content.replace(
  /    <\/div>\s*  \);\s*}\s*$/,
  imagesString
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Hero and background images updated.');
