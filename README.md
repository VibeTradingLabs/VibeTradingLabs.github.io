# VibeTradingLabs.github.io

Static website for [vibetrading.dev](https://vibetrading.dev). Built with Next.js 14 and deployed to GitHub Pages via the `gh-pages` branch.

## Prerequisites

- Node.js >= 18
- npm

## Development

```bash
npm install
npm run dev
```

Opens a local dev server at `http://localhost:3000` with hot reload.

## Build & Deploy

```bash
# 1. Build the static site into out/
npm run build

# 2. (Optional) Preview the build locally
npx serve out

# 3. Deploy to GitHub Pages
npx gh-pages -d out --dotfiles
```

`--dotfiles` ensures `.nojekyll` is included (required for Next.js `_next/` paths).

The `CNAME` file lives in `public/` so it is automatically copied to `out/` on every build.

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page (assembles sections)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── home/             # Page sections (Hero, Capabilities, Quickstart, ...)
│   ├── shell/            # Layout shell (Header, Footer)
│   └── ui/               # Reusable UI components (CodeBlock, ExternalLink, ...)
├── lib/i18n/             # Internationalization (EN, ES, ZH-CN, ZH-TW, JA, KO)
├── public/
│   └── CNAME             # Custom domain for GitHub Pages
├── out/                  # Build output (git-ignored, deployed via gh-pages)
├── next.config.mjs       # Static export config
├── tailwind.config.ts
└── package.json
```