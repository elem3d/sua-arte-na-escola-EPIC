import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Sparkles,
  Palette,
  Layers,
  Users,
  Shield,
  Ban,
  Check,
  Calendar,
  Trophy,
  AlertTriangle,
  Instagram,
  FileText,
  Ruler,
  Monitor,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concurso Sua Arte na Escola | Epic School Floripa" },
      {
        name: "description",
        content:
          "Concurso de ilustração dos 8 anos da Epic School: crie a arte oficial do mural da escola e concorra a uma mesa digitalizadora. Inscrições até 12/09.",
      },
      { property: "og:title", content: "Concurso Sua Arte na Escola | Epic School Floripa" },
      {
        property: "og:description",
        content:
          "Deixe sua marca no mural oficial da Epic. Pintura Digital, Ilustração Vetorial e muito mais. Deadline 12/09.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Concurso Sua Arte na Escola | Epic School" },
      {
        name: "twitter:description",
        content: "Concurso oficial de ilustração dos 8 anos da Epic School Floripa.",
      },
    ],
  }),
  component: LandingPage,
});

const themes = [
  {
    n: "01",
    title: "O Mundo que Queremos Criar",
    desc: "Imagine o futuro que vive na sua cabeça — sociedades, ambientes, tecnologias. Pinte o mundo que você quer ver acontecer.",
  },
  {
    n: "02",
    title: "Além do Horizonte",
    desc: "Fronteiras, jornadas e o desconhecido. Vá onde o olhar ainda não alcançou e traga de volta uma imagem.",
  },
  {
    n: "03",
    title: "Metamorfose",
    desc: "Transformação, mudança, renascimento. Formas que viram outras coisas — assim como a arte muda quem cria.",
  },
];

const specs = [
  { icon: Ruler, label: "Tamanho", value: "2,00 × 1,40 m" },
  { icon: Monitor, label: "Resolução", value: "300 DPI" },
  { icon: Palette, label: "Modo de cor", value: "CMYK" },
  { icon: FileText, label: "Formatos", value: "PDF + PSD" },
];

const timeline = [
  { date: "05/08", title: "Lançamento", desc: "Abertura das inscrições pra geral." },
  { date: "15/08 • 16h às 18h", title: "Workshop 1: Vetorização", desc: "Aula extra de Illustrator." },
  { date: "22/08 • 16h às 18h", title: "Workshop 2: Pintura Digital", desc: "Aula extra de Photoshop." },
  { date: "29/08 • 16h às 18h", title: "Workshop 3: Técnico", desc: "Como fechar e entregar o arquivo certinho." },
  { date: "01–11/09", title: "Reta final de produção", desc: "Tempo livre pra focar e finalizar." },
  { date: "12/09", title: "Deadline — 23:59", desc: "Submissões encerram em ponto.", highlight: true },
  { date: "18–21/09", title: "Votação popular", desc: "Finalistas nos Stories do Instagram." },
  { date: "26/09", title: "Festa de 8 anos", desc: "Revelação do mural oficial." },
];

const criteria = [
  { name: "Conceito", desc: "Sua criatividade, ideia e se tem a ver com o tema.", pts: 20 },
  { name: "Identidade Epic", desc: "Como você escondeu ou mostrou os elementos da escola.", pts: 10 },
  { name: "Técnica", desc: "Seus skills no software e o acabamento.", pts: 5 },
  { name: "Impacto Visual", desc: "Se a arte chama atenção e fica bonita vista de longe.", pts: 5 },
  { name: "Regras Técnicas", desc: "Se tá no tamanho certo, modo de cor certo e resolução pra imprimir.", pts: 20 },
];

const redFlags = [
  "Fugir completamente do tema ou não ter nenhuma referência à Epic.",
  "Usar Inteligência Artificial para gerar imagens.",
  "Plágio, cópia ou uso de personagens com direitos autorais.",
  "Perder o prazo no Classroom ou faltar arquivo obrigatório.",
  "Conteúdo ofensivo, preconceituoso ou incompatível com a escola.",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <About />
      <Themes />
      <Specs />
      <AiRules />
      <Timeline />
      <Criteria />
      <Prizes />
      <RedFlags />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["Concurso", "#sobre"],
    ["Temas", "#temas"],
    ["Cronograma", "#cronograma"],
    ["Prêmios", "#premios"],
    ["Regras", "#regras"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          EPIC<span className="text-muted-foreground font-normal">School</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://classroom.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
        >
          Quero participar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-primary)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Concurso Epic 8 anos • Sua Arte na Escola
          </span>
          <h1 className="mt-8 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Deixe sua marca
            <br />
            <span className="text-gradient font-serif italic font-normal">na parede da Epic.</span>
          </h1>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            A ilustração vencedora vai ser impressa em uma parede de destaque da escola.
            Todo mundo que passar pela Epic vai ver o seu talento. Bora?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 sm:px-0">
            <a
              href="https://classroom.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Participar agora <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#regras"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 sm:py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Ver regulamento
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-border/70 bg-border/50 overflow-hidden">
            {[
              ["8", "Anos de Epic"],
              ["3", "Temas para escolher"],
              ["60", "Pontos possíveis"],
              ["12/09", "Deadline final"],
            ].map(([v, l]) => (
              <div key={l} className="bg-surface/80 p-4 sm:p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{v}</div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14 px-2 sm:px-0">
          {eyebrow && (
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary/90 mb-3 md:mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-3 md:mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const items = [
    { icon: Users, title: "100% individual", desc: "Cada aluno manda uma única arte, feita por conta própria." },
    { icon: Shield, title: "Alunos Epic", desc: "Epic Master, Master IA ou Epic Pro — tá tudo valendo." },
    { icon: Sparkles, title: "Identidade Epic", desc: "Elmo, Gladiador, logo, cores — coloque algo da escola na arte." },
  ];
  return (
    <Section id="sobre" eyebrow="O que é" title="Um mural pros próximos 8 anos" subtitle="O nosso aniversário tá chegando e queremos celebrar com o que vocês têm de melhor: criatividade. A arte vencedora será plotada na parede da escola.">
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-border bg-[var(--gradient-card)] p-5 md:p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Themes() {
  return (
    <Section id="temas" eyebrow="Escolha um tema" title="Três direções, um mural" subtitle="Escolha um dos temas abaixo e mande uma justificativa curta explicando a conexão da sua arte com ele.">
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {themes.map((t) => (
          <article
            key={t.n}
            className="relative overflow-hidden rounded-2xl border border-border bg-[var(--gradient-card)] p-6 md:p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="font-serif italic text-5xl md:text-6xl text-gradient leading-none">{t.n}</div>
            <h3 className="mt-4 md:mt-6 font-display text-xl md:text-2xl font-semibold leading-tight">{t.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-accent/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-lg font-semibold">Identidade Epic é obrigatória</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Sua arte precisa ter pelo menos uma referência visual à Epic — pode ser óbvio ou um easter egg escondido.
            Elmo, Gladiador, logo, arquitetura da escola, cores oficiais ou ferramentas que a gente ensina. Seja criativo.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Specs() {
  return (
    <Section eyebrow="Especificações" title="Como a arte deve ser feita" subtitle="Só valem artes digitais — Pintura Digital, Ilustração Vetorial ou mix das duas. Como a arte vai pra uma parede gigante, essas configurações são obrigatórias.">
      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        {specs.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-surface/60 p-4 sm:p-5 md:p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
            <s.icon className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-1 font-display text-xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-5 md:p-6">
          <div className="font-display text-lg font-semibold flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" /> O que enviar
          </div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="text-foreground font-medium">1. Arte final (PDF):</span> Fechado bonitinho em CMYK e 300 DPI.</li>
            <li><span className="text-foreground font-medium">2. Arquivo aberto (.PSD):</span> O arquivo editável em Photoshop com todas as camadas preservadas, organizadas e com nomes.</li>
            <li><span className="text-foreground font-medium">3. Justificativa:</span> Textinho rápido explicando por que sua arte tem a ver com o tema escolhido.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-5 md:p-6">
          <div className="font-display text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" /> Onde entregar
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A entrega é exclusivamente pelo <span className="text-foreground font-medium">Google Classroom</span>.
            Anexe os 3 itens acima antes da deadline (12/09 às 23:59).
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Obs: pode ser que a gente peça um ajuste de enquadramento pro vencedor, só pra garantir que encaixe perfeito na parede.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="https://classroom.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-primary/20 transition-all hover:scale-[1.02]"
        >
          Ir para o Classroom <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}

function AiRules() {
  return (
    <Section id="regras" eyebrow="Regras de IA" title="Crie, não copie" subtitle="Esse concurso é pra mostrar o seu talento humano e autoral.">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-destructive/40 bg-destructive/5 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
            <Ban className="h-3.5 w-3.5" /> Proibido
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3"><Ban className="h-4 w-4 shrink-0 mt-0.5 text-destructive" /> IA generativa (Midjourney, DALL-E, Stable Diffusion, Firefly generativo…) para criar a arte final.</li>
            <li className="flex gap-3"><Ban className="h-4 w-4 shrink-0 mt-0.5 text-destructive" /> Plágio, cópia ou uso de personagens com direitos autorais.</li>
            <li className="flex gap-3"><Ban className="h-4 w-4 shrink-0 mt-0.5 text-destructive" /> Imagens da internet como base da composição.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-accent/40 bg-accent/5 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <Check className="h-3.5 w-3.5" /> Liberado
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3"><Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" /> ChatGPT para brainstorming e ideias.</li>
            <li className="flex gap-3"><Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" /> Ferramentas técnicas normais (estabilizador de traço, ajustes de cor, seleções).</li>
            <li className="flex gap-3"><Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" /> A gente vai abrir seu arquivo aberto pra conferir o passo a passo.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Timeline() {
  return (
    <Section id="cronograma" eyebrow="Cronograma" title="Se liga nas datas" subtitle="Não perca nenhum prazo importante.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:-translate-x-px" />
        <ol className="space-y-6 md:space-y-8">
          {timeline.map((m, i) => (
            <li key={m.date} className={`relative flex flex-col md:flex-row md:items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="md:w-1/2 md:px-8 pl-10 md:pl-0">
                <div className={`rounded-2xl border p-4 md:p-5 ${m.highlight ? "border-primary/60 bg-primary/10 shadow-[var(--shadow-glow)]" : "border-border bg-surface/60"}`}>
                  <div className="flex items-center gap-2 font-display text-xl sm:text-2xl font-bold text-gradient">
                    <Calendar className="h-5 w-5 text-primary shrink-0" />
                    <span>{m.date}</span>
                  </div>
                  <div className="mt-1.5 font-display text-base sm:text-lg font-semibold text-foreground">{m.title}</div>
                  <div className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</div>
                </div>
              </div>
              <div
                className={`absolute left-4 md:left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
                  m.highlight ? "border-primary bg-primary shadow-[0_0_16px_var(--color-primary)]" : "border-primary/70 bg-background"
                }`}
              />
              <div className="hidden md:block md:w-1/2" />
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-foreground">
          📹 Todos os workshops serão gravados e disponibilizados no Google Classroom do concurso.
        </span>
      </div>
    </Section>
  );
}

function Criteria() {
  const totalPoints = criteria.reduce((acc, c) => acc + c.pts, 0);

  return (
    <Section eyebrow="Avaliação" title="Como a arte será avaliada" subtitle={`Uma banca de professores e convidados dá notas de até ${totalPoints} pontos. As melhores vão pra final.`}>
      <div className="grid gap-3 md:gap-4">
        {criteria.map((c) => {
          const pct = ((c.pts / totalPoints) * 100).toFixed(1).replace(/\.0$/, "");
          return (
            <div key={c.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-border bg-surface/60 p-4 md:p-5">
              <div className="font-display text-3xl font-bold text-gradient w-16 shrink-0">{c.pts}</div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.desc}</div>
              </div>
              <div
                className="font-display text-xl md:text-2xl font-bold shrink-0 text-transparent bg-clip-text self-start sm:self-center"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {pct}%
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 rounded-2xl border border-border bg-[var(--gradient-card)] p-5 md:p-6 text-center">
        <div className="font-display text-base font-semibold text-foreground">E se der empate?</div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A gente desempata olhando quem tirou a maior nota na <span className="text-foreground font-medium">Identidade Epic</span>, depois no <span className="text-foreground font-medium">Conceito</span> e, por último, o resultado da <span className="text-foreground font-medium">Votação Popular</span> no Instagram.
        </p>
      </div>
    </Section>
  );
}

function Prizes() {
  return (
    <Section id="premios" eyebrow="Premiação" title="O que você ganha">
      <div className="grid gap-4 md:gap-6 md:grid-cols-3 items-stretch md:items-end">
        <PrizeCard
          place="2º Lugar"
          items={["Combo Cineplay OU Rodízio Heróis da Pizza", "Camiseta oficial da Epic", "Arte impressa em A3", "Destaque nas nossas redes"]}
        />
        <PrizeCard
          place="1º Lugar"
          featured
          items={[
            "Arte GIGANTE plotada na parede em frente ao Laboratório G1",
            "Mesa digitalizadora / tablet de pintura digital",
            "Arte impressa em A3",
            "Muito destaque nas redes sociais",
          ]}
        />
        <PrizeCard
          place="3º Lugar"
          items={["Combo Cineplay OU Rodízio Heróis da Pizza", "Camiseta oficial da Epic", "Arte impressa em A3", "Destaque nas nossas redes"]}
        />
      </div>
    </Section>
  );
}

function PrizeCard({ place, items, featured = false }: { place: string; items: string[]; featured?: boolean }) {
  return (
    <div
      className={`relative rounded-3xl border p-6 md:p-8 ${
        featured
          ? "border-primary/60 bg-[var(--gradient-card)] md:scale-105 shadow-[var(--shadow-glow)] mt-4 md:mt-0"
          : "border-border bg-surface/60"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          Grande prêmio
        </div>
      )}
      <Trophy className={`h-7 w-7 ${featured ? "text-primary" : "text-muted-foreground"}`} />
      <div className={`mt-4 font-display text-2xl font-bold ${featured ? "text-gradient" : ""}`}>{place}</div>
      <ul className="mt-6 space-y-3 text-sm">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-muted-foreground">
            <Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RedFlags() {
  return (
    <Section eyebrow="Atenção" title="Red flags — o que desclassifica">
      <div className="grid gap-3 md:grid-cols-2">
        {redFlags.map((r) => (
          <div key={r} className="flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 md:p-5 text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
            <span className="text-foreground/90">{r}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section id="participar" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/40 p-8 sm:p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
          <div className="relative">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Deadline 12/09 • 23:59</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-[1.05]">
              Pronto para deixar<br />sua marca?
            </h2>
            <p className="mt-4 sm:mt-6 mx-auto max-w-xl text-sm sm:text-base text-white/85 px-4 sm:px-0">
              A entrega é pelo Google Classroom. Prepare os 3 arquivos e envie antes do prazo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0">
              <a
                href="https://classroom.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
              >
                Enviar minha arte <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#regras"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Reler o regulamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6 text-center md:text-left">
        <div>
          <div className="font-display text-lg font-bold flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            EPIC <span className="text-muted-foreground font-normal">School Floripa</span>
          </div>
          <p className="mt-3 md:mt-2 text-sm text-muted-foreground max-w-md">
            A arte sempre será sua. Ao participar, você autoriza a Epic School a imprimir o mural, postar nas redes
            e expor na escola — sempre com os devidos créditos.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground">Concurso</a>
          <a href="#cronograma" className="hover:text-foreground">Cronograma</a>
          <a href="#premios" className="hover:text-foreground">Prêmios</a>
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
}
