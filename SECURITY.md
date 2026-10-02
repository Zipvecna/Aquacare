# Security and Privacy

## Website behavior

This is a static website. It has no user accounts, server-side contact form, analytics, advertising trackers, or site-controlled cookie storage. Contact form entries stay in the browser until a visitor chooses WhatsApp or Email; that action opens the relevant external service and shares the entered message with that service. The website does not receive a copy of the message.

The homepage loads images from Pexels, and the shared stylesheet loads fonts from Google Fonts. Those providers may receive ordinary request information such as the visitor's IP address and browser details when those assets load. The website host may also keep request logs according to its own settings and retention policy.

See [public/privacy.html](public/privacy.html) for the visitor-facing notice. Review both documents if the site adds analytics, cookies, accounts, backend forms, or other data processing.

## Deployment

- The site is deployed on Vercel. Set the Vercel Output Directory to `public`; Vercel reads the production security headers from `vercel.json`.
- Deploy `_headers` on a static host that supports this file format, such as Netlify or Cloudflare Pages. For other hosts, configure the same response headers in that host's settings or web-server configuration; merely uploading `_headers` does not activate headers on every platform.
- Serve the production site only over HTTPS and configure the host to redirect HTTP to HTTPS. The HSTS header in `_headers` is effective only when delivered over HTTPS.
- The preview server in `server.ps1` is for local development only. It uses HTTP and is not an internet-facing production server.
- The Content Security Policy in `vercel.json` permits inline styles because the existing pages use them, but blocks inline scripts and restricts scripts to this site. Move future JavaScript into same-origin files rather than adding inline script blocks.

## Reporting

Report suspected security or privacy issues to [aquacaretrading67@gmail.com](mailto:aquacaretrading67@gmail.com). Do not include sensitive personal information in a report.