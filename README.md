# Aqua Care Website

Static website for Aqua Care Trading, built with HTML, CSS, and browser JavaScript.

## Project map

```text
aquaCare/
|-- public/                    Vercel Output Directory and public site root
|   |-- index.html             Home page
|   |-- chemicals.html         Product catalog
|   |-- applications.html      Treatment applications
|   |-- privacy.html            Privacy notice
|   |-- water-hero.html         Standalone water-hero page
|   |-- css/
|   |   |-- style.css          Shared base styles and theme
|   |   |-- components.css     Shared component styles
|   |   `-- responsive.css     Responsive overrides
|   |-- js/
|   |   |-- data.js            Company and product data
|   |   |-- app.js             Shared interactions and rendering
|   |   |-- header.js          Shared navigation and search
|   |   |-- catalog.js         Catalog search and filters
|   |   |-- contact-widget.js  Contact widget and message handoff
|   |   |-- calculator.js      Treatment calculator
|   |   |-- charts.js          Chart helpers
|   |   |-- fuse-loader.js     Loads Fuse.js and the shared header
|   |   |-- water-ripple.js    Water animation
|   |   `-- hero-ripple.js     Home-page button ripple effect
|   |-- assets/
|   |   |-- images/            Website photos
|   |   `-- ...                Logos and other image assets
|   `-- 404.html               Custom not-found page
|-- server.ps1                Local static preview server
|-- package.json              Project scripts and dependencies
|-- package-lock.json         Locked dependency versions
|-- vercel.json               Vercel deployment and security headers
|-- _headers                  Security headers for compatible static hosts
|-- SECURITY.md               Security and deployment notes
|-- ARCHITECTURE.md           Runtime components, dependencies, and boundaries
|-- ERROR_HANDLING.md         Error handling conventions and checks
|-- phases.md                 Project roadmap and delivery phases
|-- Database.md               Current data source and future database design
`-- AGENTS.md                 Contributor and coding instructions
```

The site is deployed on Vercel. Set the Vercel Output Directory to `public`; the HTML pages, styles, browser scripts, and images live together there so their relative paths remain valid. Keep deployment and project documentation at the repository root.

## Which file to edit

1. Change product or company content in `public/js/data.js`.
2. Change catalog searching or filtering in `public/js/catalog.js`.
3. Change shared page behavior in `public/js/app.js` or navigation/search in `public/js/header.js`.
4. Change the contact form handoff in `public/js/contact-widget.js`.
5. Change shared visual foundations in `public/css/style.css`, component rules in `public/css/components.css`, and breakpoint overrides in `public/css/responsive.css`.
6. Change page structure and text in the corresponding HTML file under `public/`.
7. Keep Vercel security headers in `vercel.json`; `_headers` remains for static hosts that support that format, and deployment caveats are in `SECURITY.md`.
8. Follow `ERROR_HANDLING.md` when adding behavior that can fail or needs user input.
9. Review `phases.md` before planning larger feature work; consult `Database.md` before proposing persistent data storage.
10. Use `ARCHITECTURE.md` as the overview of runtime components and their dependencies.

## Page load order

- Pages load styles in this order: `public/css/style.css`, `public/css/components.css`, then `public/css/responsive.css`.
- Load `public/js/data.js` before scripts that consume company or product data.
- `public/js/fuse-loader.js` provides Fuse.js and loads `public/js/header.js`.
- Load shared behavior from `public/js/app.js`, then the page-specific scripts such as `public/js/catalog.js` or `public/js/hero-ripple.js`.
- `public/js/contact-widget.js` adds the contact widget on pages that include it.
- `privacy.html` is a standalone information page and does not need the site scripts.

The HTML files remain responsible for their script tags; preserve these dependencies when editing or adding scripts.

## Run and check

Run these commands from the project root:

```powershell
npm run start
npm run check
```

The local server prints its `127.0.0.1` URL and tries ports 8080 through 8099. It serves `public/` for development only; use HTTPS and configure production response headers on Vercel.

`node_modules/` is installed dependency output. Do not edit it by hand; add or update packages through npm instead.