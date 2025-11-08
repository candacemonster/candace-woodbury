# candacewoodbury.com

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A minimalist site, maintained (sporadically) by someone allergic to branding, optimization, and digital hustle.

Built with plain HTML and CSS. No frameworks, no pipelines, no "growth hacks." That's intentional.

---

## What This Is

A small, quiet, intentionally undramatic corner of the internet.

There are no life hacks. No productivity pyramids. No "join the tribe" buttons. This exists because disappearing entirely felt overdramatic.

You might find:

- An about page (reluctantly updated)
- A password-protected emergency medical page (practical pessimism)
- A contract work page (occasionally accepting projects, emphasis on "occasionally")
- Five buttons on the homepage. That's it.

---

## What This Isn't

- A blog (please, no)
- A startup
- "Personal brand" territory
- A funnel, pipeline, or ecosystem
- An AI productivity tool (or any other sin)
- A place for engagement metrics, analytics, or growth hacking

---

## Project Structure

## Project Structure

candacewoodbury/
├── assets/
│ └── favicon.svg
├── css/
│ ├── about.css
│ ├── contract-work.css
│ ├── index.css
│ └── med.css
├── pages/
│ ├── about.html
│ ├── contract-work.html (noindex, unlisted)
│ └── med.html (noindex, password-protected)
├── .gitignore
├── .htaccess
├── .htpasswd
├── 404.html
├── CNAME
├── humans.txt
├── index.html
├── README.md
├── robots.txt
└── sitemap.xml

- `index.html`: Homepage with five sardonic buttons
- `/pages/about.html`: About and contact information
- `/pages/contract-work.html`: Unlisted page for contract work inquiries
- `/pages/med.html`: Password-protected emergency medical information
- All CSS is custom, written by hand. No preprocessors, no build tools.
- Minimal JavaScript (password protection, 404 redirect timer, icon loader)
- No CMS. No database. No analytics. No cookies.

---

## Site Architecture

**Public & Indexed:**

- Homepage (`/`)
- About page (`/pages/about.html`)

**Private & Not Indexed:**

- Contract work page (`/pages/contract-work.html`)
- Emergency medical page (`/pages/med.html`)

**Redirects:**

- Old `/pages/notes/*` → Homepage
- Old `/pages/projects.html` → Homepage
- Old `/pages/work-with-me.html` → `/pages/contract-work.html`

---

## Color Palette (December 2025)

- **Irish Cream** `#D4C9B4` — Background
- **Spruce** `#25330F` — Headlines, buttons, primary text
- **Vintage Gold** `#B78C56` — Hover states
- **Midnight** `#042D29` — (reserved)
- **Eucalyptus** `#929079` — Footer text
- **Cranberry** `#741102` — Accents, links, critical alerts

Typography: Space Grotesk (Google Fonts)

---

## Maintenance

- Edit HTML/CSS in VS Code or GitHub's web UI
- No build process, no deployment pipeline
- Update `.htaccess` for redirects and password protection
- Update `sitemap.xml` and `robots.txt` as needed
- Keep it simple, quiet, and human-readable

---

## Hosting & Metadata

- Hosted on GitHub Pages
- Custom domain defined in `CNAME`
- Minimal SEO (`description`, `og:title`, favicon)
- No analytics, tracking, cookie banners, or email pop-ups
- Password protection via `.htaccess` and client-side JavaScript

---

## Accessibility

- Pure semantic HTML, keyboard accessible everywhere
- Light color palette optimized for readability
- No critical content behind JavaScript (except password-protected med page)
- Regularly previewed with keyboard navigation
- Icon links include `aria-label` and `title` attributes

---

## Local Preview

Just open `index.html` in your browser.  
No server, build tool, or special incantation required.

For testing `.htaccess` redirects and password protection, use a local Apache server or push to GitHub Pages.

---

## Security Notes

- `med.html` uses both client-side password protection (4-digit code) and server-side `.htaccess` authentication
- `.htpasswd` file stores encrypted passwords
- `robots.txt` and `<meta name="robots" content="noindex, nofollow">` prevent indexing of private pages
- Emergency medical page designed for quick access during medical emergencies

---

## License

MIT License  
Reuse or adapt any of the HTML/CSS as you like, with or without attribution.  
All original writing remains © Candace Woodbury.

---

## Author

Candace Woodbury  
[https://candacewoodbury.com](https://candacewoodbury.com)

Sardonic by nature. Writing quietly. No newsletter, no sponsors, no affiliate links. Moving on.

---

## Contributors

None. This is by design.

---

## Support

There's no Patreon, tip jar, "Buy Me a Coffee" widget, or NFT.  
If you found something meaningful here, hang on to that feeling for yourself.
