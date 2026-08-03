const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Destaque XP-PEN - SponsorBanner component
const sponsorBannerStr = `
function SponsorBanner() {
  return (
    <section className="relative border-y border-primary/20 bg-primary/5 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }} />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-20" style={{ background: "var(--color-primary)" }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative flex flex-col items-center text-center">
        <p className="text-xs md:text-sm text-primary uppercase tracking-[0.3em] font-bold mb-4">Apoiadora Oficial</p>
        <div className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight" style={{ color: "#ffffff", textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>
          XP-PEN
        </div>
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          A marca referência mundial em displays e mesas digitalizadoras apoia o talento da Epic School, premiando as melhores artes deste concurso.
        </p>
      </div>
    </section>
  );
}
`;

// Insert SponsorBanner before function About()
content = content.replace(/function About\(\) \{/, sponsorBannerStr + '\nfunction About() {');

// Add <SponsorBanner /> to LandingPage
content = content.replace(/<Hero \/>/, '<Hero />\n      <SponsorBanner />');

// 2. Adjust Grid mask in FluidBackground
content = content.replace(
  /<div className="absolute inset-0 bg-\[radial-gradient\(circle_at_center,var\(--color-primary\)_2px,transparent_2px\)\] \[background-size:40px_40px\] opacity-25 \[mask-image:linear-gradient\(to_bottom,transparent,black_10%,black_90%,transparent\)\]" \/>/,
  '<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_2px,transparent_2px)] [background-size:40px_40px] opacity-25" style={{ WebkitMaskImage: "linear-gradient(to right, black, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.05) 80%, black)" }} />'
);

// 3. Add more images with soft feather edges
const imagesStr = `
      {/* --- DECORATIVE SPONSOR/ART IMAGES --- */}
      <img src="/images/tablet.png" alt="" className="absolute top-[5%] -left-[10vw] w-[40vw] max-w-[500px] opacity-30 mix-blend-lighten animate-[pulse_10s_ease-in-out_infinite]" style={{ transform: 'rotate(15deg)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)' }} />
      <img src="/images/paintbrush.png" alt="" className="absolute top-[30%] -right-[5vw] w-[35vw] max-w-[450px] opacity-30 mix-blend-lighten animate-[pulse_12s_ease-in-out_infinite_reverse]" style={{ transform: 'rotate(-10deg)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)' }} />
      <img src="/images/stylus.png" alt="" className="absolute top-[60%] -left-[5vw] w-[35vw] max-w-[450px] opacity-20 mix-blend-lighten animate-[pulse_14s_ease-in-out_infinite]" style={{ transform: 'rotate(25deg)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)' }} />
      <img src="/images/colors.png" alt="" className="absolute top-[85%] -right-[10vw] w-[45vw] max-w-[550px] opacity-20 mix-blend-lighten animate-[pulse_15s_ease-in-out_infinite_reverse]" style={{ transform: 'rotate(-5deg)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)' }} />
    </div>
  );
}`;

content = content.replace(
  /      \{\/\* --- DECORATIVE SPONSOR\/ART IMAGES --- \*\/\}[\s\S]*?    <\/div>\s*  \);\s*}\s*$/,
  imagesStr
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Design updated');
