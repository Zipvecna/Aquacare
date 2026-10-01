# AGENTS.md

## Project overview

This repository is a static marketing and product catalog website for Aqua Care Trading, a Bangladesh-based industrial water treatment company. The site is built with plain HTML, CSS, and JavaScript; there is no framework, build pipeline, or bundler.

## Key structure

- `index.html`, `chemicals.html`, `applications.html`, `privacy.html`, and `water-hero.html`: static pages; keep them in the repository root because their relative links and asset paths expect that location.
- `css/`: shared styles, components, and responsive overrides
- `js/`: browser-side logic, shared data, and page behavior
- `assets/`: images and branding assets
- `server.ps1`: local static HTTP server for previewing the site
- `_headers` and `SECURITY.md`: deployment security headers and security/privacy guidance
- `README.md`: project file map, editing guide, and page load order

## Important implementation details

- The site is fully client-side and is served as static files.
- Shared content is kept in `js/data.js` via the global `AQUA_DATA` object.
- Page logic is initialized with `DOMContentLoaded` listeners in each script module (`app.js`, `catalog.js`, `calculator.js`, `charts.js`, etc.).
- Most interactive behavior relies on DOM selectors, modal toggles, and event delegation rather than frameworks.
- Existing pages use consistent navigation patterns, CTA buttons, and modal IDs; preserve that structure when editing UI.

## Local workflow

Run these commands from the repository root:

- `npm run start` — starts the local PowerShell static server
- `npm run check` — validates the JavaScript files with `node --check`

The PowerShell server binds to localhost ports 8080-8099. Open the printed URL in the browser to review changes.

## Coding conventions

- Prefer vanilla JavaScript and simple DOM APIs.
- Keep styling in the shared CSS files instead of inline styling unless the existing page already uses a small inline style block for layout-specific tweaks.
- Reuse the company metadata in `AQUA_DATA.company` instead of hardcoding address, phone, or email values in new sections.
- When adding or changing chemical entries, preserve the existing schema fields such as `id`, `name`, `tradeName`, `formula`, `category`, `purpose`, `application`, `packaging`, `safety`, and `specs`.
- Keep the design responsive and consistent with the current Aqua Care branding and section structure.
- Do not introduce build tooling or frameworks unless the task explicitly requires it.

## Useful files for context

- `js/data.js`: company and product data source
- `js/app.js`: navigation, modals, toast logic, and shared UI helpers
- `js/catalog.js`: product search and category filtering
- `js/contact-widget.js`: contact widget and email/WhatsApp handoff
- `js/header.js`: shared navigation and search UI
- `js/fuse-loader.js`: Fuse.js and navigation loader
- `js/hero-ripple.js`: home-page button ripple behavior
- `js/water-ripple.js`: water animation
- `js/calculator.js`: water treatment calculations if the page uses them
- `js/charts.js`: chart rendering helpers
- `css/style.css`: shared visual theme and foundation styles

For the complete file map and recommended edit/load order, see `README.md`.

## Agent guidance

- For UI updates, inspect the relevant page HTML first and then the shared CSS/JS that affects it.
- For catalog or product data edits, update `js/data.js` and verify the templates that consume `AQUA_DATA` still render correctly.
- For cross-page changes, prefer shared JS/CSS updates over copying logic into individual pages.
- Before finishing a change, run `npm run check` and fix any syntax errors that appear.
- Keep solutions small and aligned with the existing static-site architecture.
