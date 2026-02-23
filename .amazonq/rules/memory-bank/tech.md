# Technology Stack

## Languages

- TypeScript 5.4+ — used in all challenges (backend and frontend)
- JavaScript (ES2020+) — scaffold.js utility script only
- TSX — React component files in frontend challenges

## Backend Challenges (01–13, 26–38, 51–63, 76–88)

| Tool | Version | Role |
|------|---------|------|
| TypeScript | ^5.4.0 | Primary language |
| ts-node | ^10.9.2 | Run `.ts` files directly |
| Node.js | LTS | Runtime |

TypeScript compiler options (strict mode):
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "."
  }
}
```

## Frontend Challenges (14–25, 39–50, 64–75, 89–100)

| Tool | Version | Role |
|------|---------|------|
| React | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM rendering |
| Vite | ^5.0.0 | Dev server and bundler |
| @vitejs/plugin-react | ^4.0.0 | React fast refresh |
| TypeScript | ^5.4.0 | Type safety |

## Development Commands

```bash
# Install dependencies for a specific challenge
node scaffold.js <1-100>

# Backend challenges — run the file
npm run dev        # ts-node <main-file>.ts

# Backend challenges — compile
npm run build      # tsc

# Frontend challenges — start dev server
npm run dev        # vite

# Frontend challenges — production build
npm run build      # tsc && vite build
```

## Per-Challenge Isolation

Each challenge has its own `package.json` and `node_modules`. There is no root-level `package.json` or shared dependency management — every challenge is fully self-contained.

## Testing (Hard tier, desafios 74–75)

- Vitest or Jest (check individual `package.json` per challenge)
- Test files follow `*.test.ts` / `*.test.tsx` naming convention
