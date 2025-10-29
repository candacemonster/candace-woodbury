# candacewoodbury.com

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A minimalist site, maintained (sporadically) by someone allergic to branding, optimization, and digital hustle.

Built with plain HTML and CSS. No frameworks, no pipelines, no “growth hacks.” That’s intentional.

---

## What This Is

A small, quiet, intentionally undramatic corner of the internet.

There are no life hacks. No productivity pyramids. No “join the tribe” buttons. This exists because disappearing entirely felt overdramatic.

You might find:
- The occasional note (posted irregularly, edited liberally, deleted quietly)
- A listing of side projects yet to be abandoned
- Sentences I almost like

---

## What This Isn’t

- A blog (please, no)
- A startup
- “Personal brand” territory
- A funnel, pipeline, or ecosystem
- An AI productivity tool (or any other sin)

---

## Project Structure

candacewoodbury/
├── assets/
│   └── favicon.svg
├── css/
│   ├── about.css
│   ├── notes.css
│   ├── projects.css
│   └── work-with-me.css
├── pages/
│   ├── about.html
│   ├── projects.html
│   ├── notes/
│   │   ├── index.html
│   │   ├── retirement.html
│   │   └── stillness.html
├── .gitignore
├── 404.html
├── CNAME
├── humans.txt
├── index.html
├── notes.xml
├── README.md
├── robots.txt
├── sitemap.xml
└── styles.css

- `index.html`: Home
- `/pages/`: Static pages for about, notes, projects, etc.
- `/pages/notes/`: Each note is a single HTML file—no markdown, no build step
- All CSS is custom, written by hand. No CSS-in-JS, no vendor lock-in.
- Tiny sprinkles of JavaScript (literally a redirect on 404, Lucide icons loader)
- No CMS. No database. No search.

---

## Maintenance

- Edit HTML/CSS in VS Code or GitHub’s web UI
- Add notes: drop HTML files in `/pages/notes/`
- Link new notes manually on notes index
- Update `notes.xml` (RSS) and `sitemap.xml` as needed
- Keep it simple, quiet, and as human-readable as possible

---

## Hosting & Metadata

- Hosted on GitHub Pages
- Custom domain defined in `CNAME`
- Minimal SEO (`description`, `og:title`, original favicon)
- Atom-compatible RSS at `/notes.xml`
- No analytics, tracking, cookie banners, or email pop-ups

---

## Accessibility

- Pure semantic HTML, keyboard accessible everywhere
- Light/dark mode via OS `prefers-color-scheme`
- No critical content behind JavaScript or dynamic loading
- Regularly previewed with VoiceOver and keyboard nav

---

## Local Preview

Just open `index.html` in your browser.  
No server, build tool, or special incantation required.

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

There’s no Patreon, tip jar, “Buy Me a Coffee” widget, or NFT.  
If you found something meaningful here, hang on to that feeling for yourself.
