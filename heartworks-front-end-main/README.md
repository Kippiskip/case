# Heartworks front end

React + TypeScript (strict) + Vite web app for the Heartworks capstone project.

## Install

Requires Node 20.19+ or 22.12+ (Vite 8).

```bash
npm install
cp .env.example .env
```

## Run

```bash
npm run dev
```

Opens at http://localhost:5173 (the port the backend allows through CORS).

## Test and check

```bash
npm test           # Vitest + Testing Library
npm run lint       # ESLint
npm run typecheck  # tsc
npm run build
npm run format     # Prettier
```

## Windows

- **Node:** install Node 20.19+ or 22.12+ from nodejs.org (or nvm-windows). Check with `node --version`.
- **Copy the env file:** `copy .env.example .env` in cmd.exe (`cp` also works in PowerShell). All npm scripts work as is.
- **Line endings:** the repo has a `.gitattributes` that keeps LF endings; without it Git for Windows can check files
  out as CRLF and `npm run format:check` fails on every file. If that happens, run `git add --renormalize .`
  or re-clone.
- **Backend:** follow the Windows section of the backend README (Docker Desktop, WSL 2). The API is then reachable at
  `http://localhost:8000`, the default `VITE_API_URL`.
- **Port clashes:** if `npm run dev` cannot bind 5173 (the port is fixed), list reserved ports with
  `netsh interface ipv4 show excludedportrange protocol=tcp` and stop whatever uses it.

## API URL

Set `VITE_API_URL` in `.env` (default `http://localhost:8000`, the backend from `Heartworks-backend`).

## Docs

User stories go in `docs/user-stories/`, interview notes in `docs/interviews/`.
Data files never go in this repo.
