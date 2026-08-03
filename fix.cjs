const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'routes', 'index.tsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);

const fixedFooter = `          <a
            href="https://www.epicschool.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground"
          >
            <Monitor className="h-4 w-4" /> epicschool.com.br
          </a>
          <a
            href="https://www.instagram.com/epicfloripa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> @epicfloripa
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-8 text-center text-xs text-muted-foreground">
        © 2026 Epic School Floripa — Concurso Sua Arte na Escola.
      </div>
    </footer>
  );
}`;

const newLines = [
  ...lines.slice(0, 587),
  ...fixedFooter.split('\n'),
  ...lines.slice(806)
];

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Fixed index.tsx');
