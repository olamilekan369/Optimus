# Optimus Ecosystem Admin

A clean, organized admin dashboard starter for tracking your projects and connecting developer tools.

## Stack
- Next.js App Router
- TypeScript
- React
- Plain CSS (no UI framework required)
- Lucide icons

## Features in this starter
- Dashboard overview and project health
- Projects list with search
- Integrations directory for GitHub, Supabase, OpenAI, n8n, Vercel, and Docker
- Activity feed
- Settings screen
- Responsive layout
- Clear component and styling organization

## Requirements
- Node.js LTS (Node.js 20+ recommended)
- npm
- VS Code (recommended)
- Git

## Run locally
1. Extract this folder.
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open `http://localhost:3000`.

## Push to GitHub
Create an empty repository on GitHub, then run these commands from this folder:
```bash
git init
git add .
git commit -m "Initial Optimus Ecosystem Admin"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
Replace the remote URL with your own repository URL.

## Project structure
```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    app-shell.tsx
    sidebar.tsx
    topbar.tsx
    dashboard-view.tsx
    projects-view.tsx
    integrations-view.tsx
    activity-view.tsx
    settings-view.tsx
  data/
    mock-data.ts
  lib/
    types.ts
```

## Important
This is a front-end starter with sample data. Integration cards are UI placeholders and do not connect accounts yet. Add secure server-side OAuth/API routes and environment variables before connecting real services. Never put private API keys in client-side code or commit `.env` files.
