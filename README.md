# Club Attendance Management System — Documentation Site

A React + TypeScript + Tailwind CSS documentation site for the **Club Attendance Management System**, built for **Karunya Institute of Technology and Sciences**.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 7 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |

## Project Structure

```
src/
├── App.tsx                          # Root component — assembles all sections
├── App.css                          # (empty — using Tailwind utilities)
├── index.css                        # Tailwind import + global base styles
├── main.tsx                         # Entry point
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx              # Fixed sidebar navigation
│   │   ├── TableOfContents.tsx      # In-page table of contents
│   │   └── index.ts                 # Barrel export
│   ├── sections/
│   │   ├── Introduction.tsx         # Section 1  — Project overview
│   │   ├── Architecture.tsx         # Section 2  — System architecture tree
│   │   ├── Features.tsx             # Section 3  — Feature cards & role table
│   │   ├── TechStack.tsx            # Section 4  — Technology tables
│   │   ├── ProjectStructure.tsx     # Section 5  — Directory tree
│   │   ├── Setup.tsx                # Section 6  — Setup & deployment guide
│   │   ├── DockerDeployment.tsx     # Section 7  — Docker compose instructions
│   │   ├── GoogleSheetsSetup.tsx    # Section 8  — Sheets auth options
│   │   ├── ApiReference.tsx         # Section 9  — Full API reference (15 endpoints)
│   │   ├── TypeSystem.tsx           # Section 10 — TS types, Pydantic, SQLAlchemy
│   │   ├── EnvVars.tsx              # Section 11 — Environment variables table
│   │   ├── SheetsStructure.tsx      # Section 12 — Google Sheets layout
│   │   ├── Guidelines.tsx           # Section 13 — Development guidelines
│   │   ├── Testing.tsx              # Section 14 — Testing checklist & accounts
│   │   ├── Contributing.tsx         # Section 15 — Contributing guide
│   │   ├── Support.tsx              # Section 16 — Authors, license, quick start
│   │   └── index.ts                 # Barrel export
│   └── ui/
│       ├── Card.tsx                 # Feature / info card
│       ├── CardGrid.tsx             # Responsive card grid wrapper
│       ├── CodeBlock.tsx            # Syntax-highlighted code block
│       ├── Endpoint.tsx             # API endpoint display (method + path)
│       ├── InlineCode.tsx           # Inline code snippet
│       ├── RoleTag.tsx              # Admin / Tutor role badge
│       ├── SectionHeading.tsx       # Anchored h2 section heading
│       ├── Table.tsx                # Data table with header row
│       ├── TreeView.tsx             # Monospace tree / directory view
│       └── index.ts                 # Barrel export
└── assets/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The documentation site runs at **http://localhost:5173**.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## License

Internal use — Karunya Institute of Technology and Sciences.

---

**Dot Dev Club** — Karunya Institute of Technology and Sciences
