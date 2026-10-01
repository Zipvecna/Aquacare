# Project Phases

This roadmap describes the current static website and sensible growth steps. Phases 2 onward are proposals, not features that are already implemented. Move a phase to active only when its goals are approved.

## Phase 1: Static website foundation - current

- Public pages, product catalog, treatment applications, and shared navigation are served as static files.
- Product and company content is maintained in `js/data.js` as `AQUA_DATA`.
- Contact enquiries are prepared in the browser and handed off to the visitor's email app or WhatsApp; there is no website-side contact submission endpoint.
- Security and privacy documentation, response-header configuration, and a local preview server are present.

## Phase 2: Content and release reliability - recommended next

- Confirm product details, contact channels, image rights, and public claims with the business owner.
- Test all navigation, catalog filters, contact handoffs, and responsive layouts before publishing.
- Configure HTTPS, redirects, security headers, backups, and deployment previews on the selected host.
- Define who approves product content and how corrections are published.

## Phase 3: Decide whether a backend is needed - only if requirements demand it

- Gather concrete requirements such as staff-managed products, saved enquiries, user accounts, or order workflows.
- Decide what personal data is truly needed, who can access it, and how long it is retained.
- Select a supported backend and database, hosting, authentication, backup, and monitoring approach.
- Update the privacy notice and operational/security procedures before collecting data server-side.

## Phase 4: Backend and database - conditional

- Implement server-side APIs and a database only after Phase 3 decisions are approved.
- Keep credentials and authorization checks on the server; never place database credentials in browser code.
- Add migrations, input validation, access control, backups, error handling, and automated tests.
- Migrate the catalog from `js/data.js` only after comparing the new API output with the current page behavior.

## Phase 5: Operate and improve

- Monitor availability and server errors without recording unnecessary personal data.
- Patch dependencies and review access controls, retention, backups, and restore procedures regularly.
- Add analytics or other data collection only with a clear purpose and an updated privacy notice.

## Phase completion checklist

- Requirements and an owner are identified.
- User-visible behavior and privacy impact are reviewed.
- Tests and security checks pass.
- Deployment and rollback steps are documented.
- Documentation matches the behavior that actually shipped.