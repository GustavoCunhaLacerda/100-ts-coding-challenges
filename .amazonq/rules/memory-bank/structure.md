# Project Structure

## Root Layout

```
coding-challenges/
├── easy/
│   ├── backend/    desafios 01–13  (TypeScript utilities, Clean Code, async)
│   └── frontend/   desafios 14–25  (React basics, hooks, forms, a11y)
├── medium/
│   ├── backend/    desafios 26–38  (SOLID, OOP, algorithms)
│   └── frontend/   desafios 39–50  (state management, custom hooks, performance)
├── hard/
│   ├── backend/    desafios 51–63  (Design Patterns, graphs, DP, concurrency)
│   └── frontend/   desafios 64–75  (advanced patterns, optimization, testing)
├── expert/
│   ├── backend/    desafios 76–88  (architecture, DDD, CQRS, data structures)
│   └── frontend/   desafios 89–100 (micro-frontends, SSR, i18n, headless UI)
├── scaffold.js     CLI to install deps for any challenge
├── README.md       Full index and usage instructions
└── task.md         Additional task notes
```

## Per-Challenge Structure

Every challenge folder follows the same convention:

```
desafio-XX/
├── CHALLENGE.md        Problem statement + evaluation criteria (DO NOT MODIFY)
├── <main-file>.ts/.tsx Broken/problematic starting code to fix
├── package.json        Challenge-specific dependencies
└── tsconfig.json       TypeScript configuration
```

Some challenges include additional files:
- Test files: `*.test.ts` / `*.test.tsx` (desafios 74, 75)
- Multiple source files when the challenge involves multiple modules

## Solution Convention

- Create solution files as `<filename>.solution.ts` or `<filename>.solution.tsx`
- Or place solutions inside a `solution/` subfolder
- Never alter `CHALLENGE.md`

## Architectural Patterns by Tier

- Easy: standalone pure functions and simple React components — no cross-file dependencies
- Medium: introduces classes, interfaces, service layers, and multi-hook components
- Hard: multi-class design pattern implementations, algorithm modules, component composition
- Expert: full architectural patterns (Hexagonal, CQRS, Event Sourcing, DDD aggregates)

## Notable Grouped Challenge Files

- `expert/backend/CHALLENGES_77_88.md` — consolidated challenge descriptions for desafios 77–88
- `hard/frontend/CHALLENGES_66_75.md` — consolidated challenge descriptions for desafios 66–75
- `expert/frontend/CHALLENGES_89_100.md` — consolidated challenge descriptions for desafios 89–100
