# Candace Woodbury’s Website 🚀

A minimalist, self-coded Astro-powered website with caffeine-fueled observations, and an online bookshelf.  

This site is:
- **Hand-coded in Astro** – because why not.
- **Devoid of algorithms** – no social media tracking, just pure internet.
- **A work in progress** – because websites, like people, are never really finished.

---

## 📂 Project Structure

```text
/
├── public/              # Static assets (favicons, images, scripts)
│   ├── favicon.svg
│   ├── images/
│   └── scripts/
├── src/
│   ├── components/      # Reusable UI components (e.g., BlogPost, Bookshelf)
│   ├── layouts/         # Page layouts (e.g., BlogPostLayout, BookLayout)
│   ├── pages/           # Actual website pages
│   │   ├── index.astro  # Homepage
│   │   ├── blog.astro   # Blog roll
│   │   ├── books.astro  # Bookshelf page
│   │   ├── privacy.astro # Privacy Policy
│   │   ├── blog/
│   │   │   ├── [slug].astro # Individual blog posts (dynamic)
│   │   └── books/
│   │       ├── [slug].astro # Individual book entries (planned)
│   ├── styles/          # CSS files (global, bookshelf, etc.)
│   └── content/         # Markdown content (blog posts)
│       ├── blog/
│       ├── books/
│       └── config.ts    # Astro content schema for validation
├── astro.config.mjs     # Astro project config
└── package.json         # Dependencies and scripts

🏗 Features
✅ Custom Blog System
✅ Bookshelf Section 
✅ Privacy Policy 
✅ Sticky Back Arrows & Footer
✅ Dark & Light Mode (Upcoming) – Not everyone lives in a coffee shop at midnight.

🧞 Commands
All commands are run from the root of the project, in a terminal:

Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Builds your production site to ./dist/
npm run preview	Previews the site before deploying
npm run astro ...	Runs CLI commands like astro add, astro check
npm run astro -- --help	Displays help for Astro CLI

🚀 Deployment
This site is not beholden to social media platforms, but it does need a place to live. 
Deployment is planned via Netlify or Vercel.

📖 Want to Learn More About Astro?
Check out Astro’s documentation or dive into Astro's Discord.

🎭 Final Thoughts
This site is not a blog.
But it is.
Just don’t call it that.
Enjoy.