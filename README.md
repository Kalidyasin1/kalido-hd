# KALIDO HD

Vite + React + TypeScript scaffold for the KALIDO HD website (Learn • Create • Earn).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Structure

- `src/components/` — shared layout pieces (Header, Footer, IntroScreen, ParticleBackground, Chatbot, etc.)
- `src/pages/` — one file per route, including `src/pages/admin/` for the admin login + dashboard
- `src/stores/` — Zustand stores (auth, theme, gallery)
- `src/i18n.ts` — English + Amharic translation strings
- `public/images/`, `public/videos/` — static assets. Placeholder `.jpg` files are included for the gallery/blog; replace them with your real images, and drop your videos into `public/videos/` (e.g. `kalido-hd.mp4`) to match the paths referenced in `src/pages/HomePage.tsx`.

## Admin login

Hardcoded for now in `src/stores/useAuthStore.ts`:
- username: `kalido`
- password: `kalido2026`

Replace this with real authentication before going to production.

## Notes

- Theme switching, language toggle, particle background, and a simple keyword-based chatbot are wired up.
- Pages are intentionally kept as skeletons so you can flesh out real content (blog posts, job listings, courses, etc.) file by file.
