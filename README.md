# candacewoodbury.com

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A minimalist personal site for someone with no interest in branding, optimizing, or monetizing their personality.

Built with plain HTML and CSS—because it's enough.

---

## What This Is

A small, quiet corner of the internet.

There are no life hacks here. No productivity pyramids. No call to *smash the button*. This exists because disappearing entirely didn’t feel quite right.

You might find:
- The occasional note, posted irregularly
- A list of still-breathing side projects
- Sentences I don’t entirely hate

---

## What This Isn’t

- A blog (please)
- A startup
- A personal brand
- A funnel, pipeline, or ecosystem

---

## Project Structure

candacewoodbury/
├── assets/
│ └── favicon.svg
├── pages/
│ ├── about.html
│ └── notes/
│ ├── retirement.html
│ └── stillness.html
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
- `pages/`: Static pages and notes
- `styles.css`: Global styles (automatic dark/light mode via OS preferences)
- No JS except a single-line redirect on the 404 page

---

## Maintenance

- Edit HTML in VS Code or GitHub’s web editor
- Add notes to `/pages/notes/`
- Link new notes manually from `index.html`
- Update `notes.xml` and `sitemap.xml` manually
- Keep everything human-readable and intentionally quiet

---

## Hosting & Metadata

- Hosted via GitHub Pages
- Custom domain defined in `CNAME`
- Minimal metadata for SEO/link previews (`description`, `og:title`, `og:description`, etc.)
- Atom feed at `/notes.xml`
- No tracking, no analytics, no cookie warnings
- Just HTML and CSS

---

## Accessibility

- Text-based, fully navigable without JavaScript
- Responsive layout with semantic HTML
- Automatic dark/light mode via `prefers-color-scheme`
- Tested for keyboard navigation and screen reader basics

---

## Local Preview

Just open `index.html` in a browser. No server or build step required.

---

## License

MIT License  
Reuse or adapt the code freely, with or without attribution.  
All original writing remains © Candace Woodbury.

---

## Author

Candace Woodbury  
https://candacewoodbury.com

Writing quietly. Nothing to sell. No mailing list. Just passing thoughts.

---

## Contributors

None—and that’s kind of the point.

---

## Support

No tips, no sponsors, no affiliate links.  
If you found something here worth sitting with, that’s enough.
