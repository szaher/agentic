# LLM Agents Academy

A comprehensive, interactive tutorial on building LLM-powered agents — from foundations through production deployment. 13 modules, 94 lessons, built with Next.js 16, MDX, and Monaco Editor.

**Live site:** [szaher.github.io/agentic](https://szaher.github.io/agentic/)

## Curriculum

| Module | Title | Lessons |
|--------|-------|---------|
| 1 | Foundations of LLM Agents | 7 |
| 2 | Prompting & Reasoning | 6 |
| 3 | Tool Use & Function Calling | 7 |
| 4 | Agent Architectures | 7 |
| 5 | Agent Harnesses and Runtime Systems | 12 |
| 6 | Agent Design Patterns | 7 |
| 7 | Memory & Knowledge | 7 |
| 8 | Agent Frameworks & SDKs | 7 |
| 9 | Multi-Modal Agents | 7 |
| 10 | Multi-Agent Systems | 7 |
| 11 | Evaluation & Testing | 6 |
| 12 | Production, Deployment & Safety | 7 |
| 13 | Advanced Patterns & Real-World Applications | 7 |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000) to browse lessons.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build (standalone server) |
| `pnpm validate` | Content quality gates (specs, MDX, links, accessibility) |
| `pnpm test` | Run tests |
| `pnpm lint` | Run ESLint |

## Tech Stack

- **Next.js 16** with Turbopack and App Router
- **MDX** lessons with 18+ reusable learning components
- **Monaco Editor** for syntax-highlighted code blocks
- **Mermaid** diagrams (flowcharts, sequence diagrams, concept maps)
- **Tailwind CSS v4** with dark/light theme support
- **AI Tutor** chat (requires server deployment with Vertex AI credentials)

## Deployment

The site deploys to **GitHub Pages** automatically on push to `main` via `.github/workflows/deploy.yml`. The static export excludes server-only features (AI chat tutor, API routes).

For server deployment with AI tutor support, use the standalone build:

```bash
pnpm build
pnpm start
```

## Authoring

Content lives in `content/module-N/` as MDX files. See [CLAUDE.md](CLAUDE.md) for the full authoring guide, component catalog, and quality gate requirements.

## Requirements

- Node.js 22+
- pnpm
