# Heartworks front end

Stack: React 19, TypeScript (strict), Vite, ESLint, Prettier, Vitest + Testing Library, npm.
No charting, state-management, router, or UI libraries yet; ask before adding one.

## Commands

`npm run dev`, `lint`, `typecheck`, `test`, `build`, `format`.

## Config

`VITE_API_URL` (see `.env.example`) points at the backend API.

## Data rules (strict)

- Research data is sensitive. Never put data files (CSV, parquet) in this repo.
- Never send data contents to an external service.
- Do not commit, push, or create branches unless explicitly asked.
