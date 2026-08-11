import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";
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
  { icon: FileText, label: "Formatos", value: "PDF + PSD ou AI" },
];

const timeline = [
  { date: "10/08", title: "Lançamento!", desc: "Abertura das inscrições pra geral." },
  { date: "22/08 - 16h às 18h", title: "Workshop 1: Vetorização", desc: "Aula extra de Illustrator pra ajudar na arte." },
  { date: "29/08 - 16h às 18h", title: "Workshop 2: Pintura Digital", desc: "Aula extra de Photoshop." },
  { date: "05/09 - 16h às 18h", title: "Workshop 3: Técnico", desc: "Como fechar e entregar o arquivo certinho." },
  { date: "07 a 18/09", title: "Reta Final de Produção", desc: "Tempo livre pra você focar e dar os últimos retoques." },
  { date: "19/09", title: "DEADLINE (Prazo Final)", desc: "Submissões encerram às 23:59 em ponto!", highlight: true },
  { date: "18 a 21/09", title: "Votação Popular", desc: "Galera votando nos finalistas nos Stories do Insta!" },
  { date: "03/10", title: "Festa de Aniversário", desc: "O grande evento de 8 anos da Epic e a revelação do mural!" },
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
    <div className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <FluidBackground />
      <Nav />
      <Hero />
      <SponsorBanner />
      <About />
        <ParallaxDivider imagePath="/images/parallax1.png" />
      <Themes />
      <Specs />
        <ParallaxDivider imagePath="/images/parallax2.jpeg" />
      <AiRules />
      <Timeline />
      <Criteria />
        <ParallaxDivider imagePath="/images/parallax3.png" />
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
          href="https://classroom.google.com/c/ODY5MDg4MDYxMzEz?cjc=cs2b76o6"
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


function ParallaxDivider({ imagePath }: { imagePath: string }) {
  return (
    <div 
      className="relative h-48 md:h-64 w-full bg-fixed bg-center bg-cover border-y border-border/20"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
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
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <div className="flex items-center justify-center gap-6 md:gap-12">
              <img src="/images/logo.png" alt="XP-PEN" className="h-12 sm:h-16 md:h-24 object-contain drop-shadow-xl" />
              <span className="text-muted-foreground/60 font-semibold text-2xl md:text-3xl">&</span>
              <img src="/images/LOGO-EPIC.png" alt="Epic" className="h-12 sm:h-16 md:h-24 object-contain drop-shadow-xl" />
            </div>
            <span className="text-muted-foreground font-medium text-xs sm:text-sm uppercase tracking-[0.3em]">apresentam</span>
          </div>
          <h1 className="mt-4 md:mt-8 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Sua Arte <span className="text-gradient font-serif italic font-normal">na Escola.</span>
          </h1>
          <p className="mx-auto mt-5 md:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            O 1º lugar vai levar para casa uma incrível <strong className="text-foreground font-semibold text-primary">mesa digitalizadora Artist 12 3rd com display da XP-PEN</strong>! E não para por aí: a ilustração vencedora ainda será impressa em uma parede de destaque da escola. Bora mostrar o seu talento?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 sm:px-0">
            <a
              href="https://classroom.google.com/c/ODY5MDg4MDYxMzEz?cjc=cs2b76o6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Participar agora <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#regras"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-background/90 backdrop-blur-xl px-6 py-3.5 sm:py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Ver regulamento
            </a>
            <a
              href="#premios"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-background/90 backdrop-blur-xl px-6 py-3.5 sm:py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Ver premiação
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-border/70 bg-background/80 backdrop-blur-xl overflow-hidden">
            {[
              ["8", "Anos de Epic"],
              ["3", "Temas para escolher"],
              ["60", "Pontos possíveis"],
              ["19/09", "Deadline final"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background/90 backdrop-blur-xl p-4 sm:p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
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


function SponsorBanner() {
  return (
    <section className="relative border-y border-primary/20 bg-primary/5 py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }} />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-20" style={{ background: "var(--color-primary)" }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative flex flex-col items-center text-center">
        <p className="text-xs md:text-sm text-primary uppercase tracking-[0.3em] font-bold mb-4">Apoiadora Oficial</p>
        <div className="relative group my-4 sm:my-6 flex items-center justify-center">
          <div
            className="absolute -inset-4 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"
            style={{ background: "var(--gradient-primary, #8b5cf6)" }}
          />
          <img
            src="/images/logo.png"
            alt="XP-PEN Logo"
            className="relative h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.7)] transition-all duration-300 transform group-hover:scale-105"
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          A marca referência mundial em displays e mesas digitalizadoras apoia o talento da Epic School, premiando a melhor arte deste concurso.
        </p>
        <div className="mt-8">
          <a
            href="https://www.storexppen.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/20 transition-colors"
          >
            Conheça a XPPEN <ArrowRight className="h-4 w-4" />
          </a>
        </div>
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
          <div key={it.title} className="group rounded-2xl border border-border bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)] p-5 md:p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
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
            className="relative overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)] p-6 md:p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
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
          <div key={s.label} className="rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-4 sm:p-5 md:p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
            <s.icon className="h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-1 font-display text-xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)] p-5 md:p-6">
          <div className="font-display text-lg font-semibold flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" /> O que enviar
          </div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="text-foreground font-medium">1. Arte final (PDF):</span> Fechado bonitinho em CMYK e 300 DPI.</li>
            <li><span className="text-foreground font-medium">2. Arquivo aberto (.PSD ou .AI):</span> O arquivo editável em Photoshop ou Illustrator com todas as camadas preservadas, organizadas e com nomes.</li>
            <li><span className="text-foreground font-medium">3. Justificativa:</span> Textinho rápido explicando por que sua arte tem a ver com o tema escolhido.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)] p-5 md:p-6">
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
          href="https://classroom.google.com/c/ODY5MDg4MDYxMzEz?cjc=cs2b76o6"
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
                <div className={`rounded-2xl border p-4 md:p-5 ${m.highlight ? "border-primary/60 bg-primary/10 shadow-[var(--shadow-glow)]" : "border-border bg-background/90 backdrop-blur-xl"}`}>
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
            <div key={c.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-4 md:p-5">
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
      <div className="mt-8 rounded-2xl border border-border bg-background/95 backdrop-blur-xl bg-[var(--gradient-card)] p-5 md:p-6 text-center">
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
          image="/images/heroisDaPizza.jpeg"
          items={["Rodízio Heróis da Pizza", "Camiseta oficial da Epic", "Arte impressa em A3", "Destaque nas nossas redes"]}
        />
        <PrizeCard
          place="1º Lugar"
          featured
          image="/images/premio.png"
          items={[
            "Arte GIGANTE plotada na parede em frente ao Laboratório G1",
            "Mesa Digitalizadora XP-PEN Artist 12 3rd Gen com display",
            "Arte impressa em A3"
          ]}
        />
        <PrizeCard
          place="3º Lugar"
          image="/images/cineplay.png"
          items={["Combo Cineplay", "Camiseta oficial da Epic", "Arte impressa em A3", "Destaque nas nossas redes"]}
        />
      </div>
    </Section>
  );
}

function PrizeCard({ place, items, featured = false, image }: { place: string; items: string[]; featured?: boolean; image: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative h-[450px] w-full [perspective:1000px] group ${
        featured ? "md:scale-105 mt-4 md:mt-0" : ""
      } ${!isFlipped ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => {
        if (!isFlipped) setIsFlipped(true);
      }}
    >
      <div 
        className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* FRONT */}
        <div className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col items-center rounded-3xl border bg-background/90 ${
          featured ? "border-primary/60 shadow-[var(--shadow-glow)] bg-[var(--gradient-card)]" : "border-border overflow-hidden"
        }`}>
          <div className="relative z-10 flex flex-col items-center h-full w-full p-6 md:p-8 justify-start">
            {featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground z-50" style={{ background: "var(--gradient-primary)" }}>
                Grande prêmio
              </div>
            )}
            
            {featured ? (
              <>
                <div className="bg-background/40 backdrop-blur-md p-3 rounded-full mb-2 border border-border/50 relative z-40 mt-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-white drop-shadow-xl transition-all duration-500 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.9)] relative z-40">
                  {place}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-xl px-6 py-3 rounded-full border border-border/50 relative z-40 w-full justify-center">
                <Trophy className="h-7 w-7 text-foreground drop-shadow-md" />
                <div className="font-display text-3xl font-bold text-white drop-shadow-xl transition-all duration-500 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.9)]">
                  {place}
                </div>
              </div>
            )}
            
            <div className="flex-1 w-full flex items-center justify-center relative mt-4 mb-2">
              <img src={image} alt={`Prêmio ${place}`} className={`absolute transition-transform duration-700 z-30 drop-shadow-2xl ${
                !featured 
                  ? 'w-[90%] aspect-square object-cover rounded-2xl border border-border/30 bg-background/20' 
                  : 'w-[120%] max-w-[120%] object-contain'
              } ${featured ? "scale-[1.1] group-hover:scale-[1.35]" : "scale-100"}`} />
            </div>
            
            <p className="text-foreground/90 text-xs mt-auto uppercase tracking-[0.2em] font-medium flex items-center gap-2 bg-background/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-border/50 z-20">
              <Sparkles className={`w-3.5 h-3.5 ${featured ? "text-primary" : "text-foreground"}`} /> Clique para virar
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className={`absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center rounded-3xl border p-6 md:p-8 overflow-hidden ${
          featured ? "border-primary/60 shadow-[var(--shadow-glow)]" 
                   : "border-border"
        }`}>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 scale-125" />
          <div className={`absolute inset-0 ${featured ? "bg-background/80 bg-[var(--gradient-card)]" : "bg-background/90"}`} />

          <div className="relative z-10 flex flex-col items-center w-full h-full">
            {featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground z-10" style={{ background: "var(--gradient-primary)" }}>
                Detalhes
              </div>
            )}
            
            <Trophy className={`h-8 w-8 mt-2 mb-4 drop-shadow-md ${featured ? "text-primary" : "text-foreground"}`} />
            <div className={`font-display text-2xl font-bold mb-6 drop-shadow-lg ${featured ? "text-primary" : "text-foreground"}`}>{place}</div>
            
            <ul className="space-y-4 text-base md:text-lg w-full flex flex-col items-center justify-center flex-1 pb-4">
              {items.map((it) => {
                const isTablet = it.includes("XP-PEN") || it.includes("Artist 12");
                return (
                  <li key={it} className="flex flex-col items-center text-center gap-1.5 text-foreground drop-shadow-md font-medium">
                    <Check className={`h-5 w-5 shrink-0 ${featured ? "text-primary" : "text-foreground/70"}`} />
                    <span>{it}</span>
                    {isTablet && featured && (
                      <a 
                        href="https://www.storexppen.com.br/buy/artist-12-3rd.html" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary border border-primary/30 px-5 py-1.5 text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Detalhes do produto
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
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
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Deadline 19/09 • 23:59</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-[1.05]">
              Pronto para deixar<br />sua marca?
            </h2>
            <p className="mt-4 sm:mt-6 mx-auto max-w-xl text-sm sm:text-base text-white/85 px-4 sm:px-0">
              A entrega é pelo Google Classroom. Prepare os 3 arquivos e envie antes do prazo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0">
              <a
                href="https://classroom.google.com/c/ODY5MDg4MDYxMzEz?cjc=cs2b76o6"
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
          <a
            href="https://www.epicschool.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg font-bold flex items-center justify-center md:justify-start gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
            EPIC <span className="text-muted-foreground font-normal">School Floripa</span>
          </a>
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
}
function FluidBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Subtle tech dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_2px,transparent_2px)] [background-size:40px_40px] opacity-25" style={{ WebkitMaskImage: "linear-gradient(to right, black, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.05) 80%, black)" }} />

      <svg
        className="absolute w-full h-full opacity-70"
        viewBox="0 0 1440 3000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="art-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="art-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.04" />
          </linearGradient>
          <filter id="art-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        {/* --- ARTISTIC FORMS (Organic glowing blobs) --- */}
        <g filter="url(#art-blur)">
          <path fill="url(#art-grad1)" d="M-100,200 C300,50 600,400 400,800 C200,1200 -200,1000 -300,600 Z" className="animate-[pulse_10s_ease-in-out_infinite]" />
          <path fill="url(#art-grad2)" d="M1200,500 C1600,400 1800,800 1500,1200 C1200,1600 800,1400 900,900 Z" className="animate-[pulse_12s_ease-in-out_infinite]" />
          <path fill="url(#art-grad1)" d="M200,1800 C600,1500 900,1900 700,2400 C500,2900 0,2700 -100,2200 Z" className="animate-[pulse_14s_ease-in-out_infinite]" />
          <path fill="url(#art-grad2)" d="M1100,2200 C1500,1900 1700,2400 1400,2800 C1100,3200 600,3000 700,2500 Z" className="animate-[pulse_11s_ease-in-out_infinite]" />
        </g>

        {/* --- TECHNOLOGICAL FLUID LINES (Data flow, sine waves) --- */}
        <g fill="none" strokeWidth="1" stroke="currentColor">
          {/* Top Section */}
          <path className="text-primary opacity-30" strokeDasharray="4 8" d="M-100,400 C200,300 500,600 900,300 S1300,500 1600,400" />
          <path className="text-primary opacity-50" d="M-100,420 C220,320 520,620 920,320 S1320,520 1620,420" />
          <path className="text-accent opacity-20" strokeWidth="2" d="M1600,600 C1200,700 900,400 500,700 S100,500 -100,600" />

          {/* Middle Section */}
          <path className="text-accent opacity-40" strokeDasharray="12 6" d="M-100,1400 C300,1200 600,1700 1000,1300 S1400,1600 1600,1400" />
          <path className="text-primary opacity-20" strokeWidth="1.5" d="M1600,1500 C1100,1400 800,1900 400,1600 S0,1800 -100,1700" />
          
          {/* Vertical Connectors */}
          <path className="text-foreground opacity-[0.05]" d="M300,-100 C400,500 100,1000 300,1500 S500,2500 300,3100" />
          <path className="text-foreground opacity-[0.05]" d="M1200,-100 C1100,400 1400,1100 1100,1800 S1300,2600 1100,3100" />

          {/* Bottom Section */}
          <path className="text-primary opacity-40" strokeDasharray="2 4" d="M-100,2400 C400,2600 700,2200 1100,2500 S1500,2300 1600,2600" />
          <path className="text-accent opacity-30" strokeWidth="1" d="M-100,2450 C380,2650 680,2250 1080,2550 S1480,2350 1600,2650" />
          <path className="text-primary opacity-20" strokeWidth="2" d="M1600,2800 C1200,2700 900,3100 500,2800 S100,2900 -100,2800" />
        </g>
      </svg>


      {/* --- DECORATIVE SPONSOR/ART IMAGES --- */}
      <img src="/images/tablet.png" alt="" className="absolute top-[5%] -left-[10vw] w-[40vw] max-w-[500px] opacity-30 mix-blend-lighten animate-[pulse_10s_ease-in-out_infinite]" style={{ transform: 'rotate(15deg)', WebkitMaskImage: 'radial-gradient(closest-side, black 20%, transparent 100%)' }} />
      <img src="/images/paintbrush.png" alt="" className="absolute top-[30%] -right-[5vw] w-[35vw] max-w-[450px] opacity-30 mix-blend-lighten animate-[pulse_12s_ease-in-out_infinite_reverse]" style={{ transform: 'rotate(-10deg)', WebkitMaskImage: 'radial-gradient(closest-side, black 20%, transparent 100%)' }} />
      <img src="/images/stylus.png" alt="" className="absolute top-[60%] -left-[5vw] w-[35vw] max-w-[450px] opacity-20 mix-blend-lighten animate-[pulse_14s_ease-in-out_infinite]" style={{ transform: 'rotate(25deg)', WebkitMaskImage: 'radial-gradient(closest-side, black 20%, transparent 100%)' }} />

    </div>
  );
}