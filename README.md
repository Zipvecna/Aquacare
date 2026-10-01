# Aqua Care Website

Static website for Aqua Care Trading, built with HTML, CSS, and browser JavaScript.

## Project map

```text
aquaCare/
|-- index.html                 Home page
|-- chemicals.html             Product catalog
|-- applications.html          Treatment applications
|-- privacy.html               Privacy notice
|-- water-hero.html            Standalone water-hero page
|-- css/
|   |-- style.css              Shared base styles and theme
|   |-- components.css         Shared component styles
|   `-- responsive.css         Responsive overrides
|-- js/
|   |-- data.js                Company and product data
|   |-- app.js                 Shared interactions and rendering
|   |-- header.js              Shared navigation and search
|   |-- catalog.js             Catalog search and filters
|   |-- contact-widget.js      Contact widget and message handoff
|   |-- calculator.js          Treatment calculator
|   |-- charts.js              Chart helpers
|   |-- fuse-loader.js         Loads Fuse.js and the shared header
|   |-- water-ripple.js        Water animation
|   `-- hero-ripple.js         Home-page button ripple effect
|-- assets/
|   |-- images/                Website photos
|   `-- ...                    Logos and other image assets
|-- server.ps1                Local static preview server
|-- package.json              Project scripts and dependencies
|-- package-lock.json         Locked dependency versions
|-- _headers                  Security headers for compatible static hosts
|-- SECURITY.md               Security and deployment notes
|-- ARCHITECTURE.md           Runtime components, dependencies, and boundaries
|-- ERROR_HANDLING.md         Error handling conventions and checks
|-- phases.md                 Project roadmap and delivery phases
|-- Database.md               Current data source and future database design
`-- AGENTS.md                 Contributor and coding instructions
```

Keep the HTML pages at the project root. Their relative navigation and asset paths expect that location, and static hosts commonly use the root `index.html` as the site entry page. Keep styles in `css/`, browser scripts in `js/`, and images in `assets/`.

## Which file to edit

1. Change product or company content in `js/data.js`.
2. Change catalog searching or filtering in `js/catalog.js`.
3. Change shared page behavior in `js/app.js` or navigation/search in `js/header.js`.
4. Change the contact form handoff in `js/contact-widget.js`.
5. Change shared visual foundations in `css/style.css`, component rules in `css/components.css`, and breakpoint overrides in `css/responsive.css`.
6. Change page structure and text in the corresponding root HTML file.
7. Keep third-party host security settings in `_headers`; deployment caveats are in `SECURITY.md`.
8. Follow `ERROR_HANDLING.md` when adding behavior that can fail or needs user input.
9. Review `phases.md` before planning larger feature work; consult `Database.md` before proposing persistent data storage.
10. Use `ARCHITECTURE.md` as the overview of runtime components and their dependencies.

## Page load order

- Pages load styles in this order: `css/style.css`, `css/components.css`, then `css/responsive.css`.
- Load `js/data.js` before scripts that consume company or product data.
- `js/fuse-loader.js` provides Fuse.js and loads `js/header.js`.
- Load shared behavior from `js/app.js`, then the page-specific scripts such as `js/catalog.js` or `js/hero-ripple.js`.
- `js/contact-widget.js` adds the contact widget on pages that include it.
- `privacy.html` is a standalone information page and does not need the site scripts.

The HTML files remain responsible for their script tags; preserve these dependencies when editing or adding scripts.

## Run and check

Run these commands from the project root:

```powershell
npm run start
npm run check
```

The local server prints its URL and tries ports 8080 through 8099. It is for development only; use HTTPS and configure production response headers on the hosting provider.

`node_modules/` is installed dependency output. Do not edit it by hand; add or update packages through npm instead.