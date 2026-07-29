# Landing Page – Concurso "Sua Arte na Escola" (Epic School)

Página única, marketing-first, para divulgar o concurso de arte dos 8 anos da Epic School Floripa, inspirada visualmente em epicschool.com.br (dark + roxo, com detalhes em azul e branco, estética futurista/tech).

## Estética e sistema visual

- Tema escuro profundo (near-black com viés roxo), gradientes roxo → violeta, glow neon azul/violeta em detalhes, tipografia sans grande e confiante (Space Grotesk / DM Sans), com um display serif condensado apenas no headline principal para acento editorial.
- Tags flutuantes estilo "pill" (como no site oficial: "Game Design", "Motion Design", "IA"), aqui usadas para os 3 temas do concurso.
- Detalhes: gradientes lineares no headline (branco → violeta claro → azul), glows suaves, bordas 1px em roxo translúcido, grid/scanlines sutis de fundo.
- Paleta (tokens em `src/styles.css`, todos oklch):
  - background base (quase preto violáceo), surface elevado, primary roxo neon, accent azul elétrico, foreground branco, muted lilás acinzentado.
  - Gradientes: `--gradient-hero` (roxo profundo → violeta → azul), `--gradient-text` (branco → lilás → azul claro), `--shadow-glow` violeta.

## Seções (ordem)

1. **Nav fixa** – logo "EPIC School" à esquerda, links âncora (Concurso, Temas, Cronograma, Prêmios, Regras) e CTA "Quero participar".
2. **Hero** – Eyebrow pill "• Concurso Epic 8 anos". Headline em duas linhas com gradiente: "Deixe sua marca / no mural da Epic." Sub: resumo do concurso. Dois CTAs: "Participar agora" (primary glow) + "Ver regulamento". Stats à direita: 8 anos, 3 temas, R$ mesa digitalizadora, deadline 12/09. Tags flutuantes ao redor: "Pintura Digital", "Ilustração Vetorial", "Mural Físico".
3. **Sobre o concurso** – Bloco com texto do objetivo (aniversário de 8 anos, arte vencedora vira mural físico na escola) + mini-cards "Individual", "Uma arte por aluno", "Alunos Epic Master / Master IA / Epic Pro".
4. **Os 3 Temas** – Três cards grandes lado a lado (bento-ish): "O Mundo que Queremos Criar", "Além do Horizonte", "Metamorfose", cada um com número (01/02/03), descrição curta gerada a partir do título e ícone/visual gradient. Nota destacada: "Identidade Epic obrigatória – elmo, gladiador, logo ou easter egg."
5. **Especificações técnicas** – Painel dark com dados-chave em grid: Tamanho 2,00 × 1,40 m, Resolução 300 DPI, Modo CMYK, Formato PDF + arquivo aberto (.PSD/.AI/.CLIP) + time-lapse (se mobile) + justificativa.
6. **Regras de IA** – Duas colunas contrastadas: "Proibido" (IA generativa, plágio, personagens com copyright) x "Liberado" (ChatGPT para brainstorm, ferramentas técnicas do software). Estilo tag verde/vermelha neon suave.
7. **Cronograma** – Timeline vertical com marcos: 03/08 Lançamento, 15/08 Workshop Vetorização, 22/08 Workshop Pintura Digital, 29/08 Workshop Técnico, 01–11/09 Reta final, 12/09 Deadline 23:59, 17–19/09 Votação Instagram, 26/09 Festa 8 anos e revelação do mural. Marco "Deadline" destacado.
8. **Critérios de avaliação** – 5 barras/cards horizontais (Conceito, Identidade Epic, Técnica, Impacto Visual, Regras Técnicas), 10 pts cada, total 50. Nota sobre desempate.
9. **Premiação** – 3 cards de pódio (1º destacado, maior, com glow). 1º: mural gigante, mesa digitalizadora/tablet, arte A3, destaque nas redes. 2º/3º: Combo Cineplay + Rodízio Heróis da Pizza, camiseta Epic, A3, destaque.
10. **Red Flags** – Lista de desclassificações em cards escuros com ícone de alerta.
11. **CTA final** – Bloco full-width com gradiente roxo → azul: "Pronto para deixar sua marca?" + botão "Enviar minha arte" (link placeholder para Google Classroom) + reforço da deadline 12/09 23:59.
12. **Footer** – Assinatura Epic School Floripa, aviso de direitos ("A arte é sempre sua"), links âncora e social.

## Escopo técnico

- Substituir `src/routes/index.tsx` com a landing completa (rota `/`).
- Atualizar `head()` de `index.tsx` com title/description/og únicos ("Concurso Sua Arte na Escola | Epic School Floripa").
- Redefinir tokens de cor em `src/styles.css` (dark-first: aplicar `.dark` no `<html>` via classe no root, ou apenas sobrescrever `:root`). Adicionar `--gradient-hero`, `--gradient-text`, `--shadow-glow`, fontes via `<link>` no `__root.tsx` head (Space Grotesk + DM Sans).
- Componentes locais em `src/components/landing/` (Hero, Themes, Specs, AiRules, Timeline, Criteria, Prizes, RedFlags, FinalCta, Nav, Footer) – todos apresentacionais, sem estado global nem backend.
- Ícones: lucide-react (já disponível).
- Sem imagens geradas nesta primeira versão – usar composições puramente de CSS (gradients, glows, grids) para performance e para bater com o visual tech do site oficial. Se necessário depois, gerar 1 imagem de hero abstrata roxa.

## Fora de escopo

- Sem formulário funcional de inscrição (a entrega real é no Google Classroom, conforme regulamento). CTA aponta para link placeholder.
- Sem Lovable Cloud, sem autenticação, sem banco de dados.
- Sem tela de administração, sem múltiplas rotas.
