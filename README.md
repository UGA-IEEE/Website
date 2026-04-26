# UGA IEEE Website

Vite + React site for the UGA IEEE student branch.

## Project Structure

- `src/App.jsx`: top-level app shell and hash-route rendering.
- `src/components/`: shared UI such as the header, footer, and icons.
- `src/pages/`: page-level views for home, galleries, directories, and contact.
- `src/data/siteContent.js`: centralized people, links, calendar, and gallery content.
- `src/utils/siteContent.js`: helpers for gallery grouping, shuffling, and calendar generation.
- `src/styles.css`: shared site styling.

## Getting Started

```bash
npm install
npm run dev
```

## Collaboration Notes

- Update club members, links, and event data in `src/data/siteContent.js` instead of editing page components.
- Keep comments focused on intent or non-obvious behavior; avoid line-by-line narration.
- Optimized images live under `src/assets_optimized/` and are the preferred source for page content.

## Available Scripts

- `npm run dev`: start the local Vite dev server.
- `npm run build`: create a production build in `dist/`.
- `npm run lint`: run ESLint across the project.
- `npm run preview`: preview the production build locally.
