<div align="center">

```
████████  █████  ███    ██ ███    ███  █████  ██    ██     ██   ██  █████  ██       █████
   ██    ██   ██ ████   ██ ████  ████ ██   ██  ██  ██      ██  ██  ██   ██ ██      ██   ██
   ██    ███████ ██ ██  ██ ██ ████ ██ ███████   ████       █████   ███████ ██      ███████
   ██    ██   ██ ██  ██ ██ ██  ██  ██ ██   ██    ██        ██  ██  ██   ██ ██      ██   ██
   ██    ██   ██ ██   ████ ██      ██ ██   ██    ██        ██   ██ ██   ██ ███████ ██   ██
```

**ISSUE 01 · 2026 · INDIA**
**A·I  E·N·G·I·N·E·E·R  ·  F·O·U·N·D·E·R  ·  N·A·X·A·T·R·A   A·I**

`react 18` · `vite 4` · `tailwind` · `framer-motion` · `lenis` · `emailjs`
`~304 KB · ~98 KB gzipped · zero 3D · zero templates`

</div>

---

> **An editorial monochrome personal portfolio.**
> Designed, written, typeset, and shipped from scratch by **Tanmay Kala**.
> No templates, no tutorials, no clones — every line of code, every line of copy, every pixel is original work.

---

```
INDEX ─────────────────────────────────────────────────────────────────

  01  STACK             —  what it's made of
  02  DESIGN SYSTEM     —  tokens, themes, type
  03  SECTIONS          —  scroll order
  04  RUN LOCALLY       —  three commands, no surprises
  05  ENVIRONMENT       —  EmailJS keys
  06  BUILD             —  static, deploy anywhere
  07  FILE TREE         —  where things live
  08  REACH OUT         —  the only way to get me
```

---

## 01 — STACK

> Every dependency earns its weight. No scene graph, no router, no state library.

| Layer            | Choice                                           |
| ---------------- | ------------------------------------------------ |
| Framework        | **React 18**                                     |
| Build            | **Vite 4**                                       |
| Styling          | **Tailwind CSS** *(CSS-variable theme tokens)*   |
| Motion           | **Framer Motion**                                |
| Smooth scroll    | **Lenis**                                        |
| Mail             | **EmailJS** *(progressive — works without keys)* |
| Display type     | **Anton**                                        |
| Italic accent    | **Instrument Serif**                             |
| Body / UI        | **Inter**                                        |
| Mono / labels    | **JetBrains Mono**                               |

---

## 02 — DESIGN SYSTEM

### Tokens

The whole site flips on **five semantic CSS variables**. Tailwind utilities (`bg-ink`, `text-paper`, `border-wire` …) resolve through `var(--…)`, so theme switching is one attribute on `<html>` — no class swapping anywhere in the tree.

| Token       | Role                       | Dark        | Light       |
| ----------- | -------------------------- | ----------- | ----------- |
| `--ink`     | page background            | `#0a0a0a`   | `#f5f3ee`   |
| `--paper`   | foreground (text, borders) | `#f5f3ee`   | `#0a0a0a`   |
| `--bone`    | secondary foreground       | `#e8e4dc`   | `#1c1c1c`   |
| `--ash`     | muted labels               | `#8a8580`   | `#6b665e`   |
| `--wire`    | hairline rules             | `#1f1f1f`   | `#d9d3c3`   |

### Themes

```
   DARK            LIGHT
   ▓▓▓▓▓ ink       ░░░░░ ink
   ░░░░░ paper     ▓▓▓▓▓ paper
```

— Toggle in the navbar. First visit honors `prefers-color-scheme`.
— Choice is cached in `localStorage` after that.
— A pre-React inline script in `index.html` resolves theme **before paint** — no flash on reload.
— Light-mode photo filters override `.photo-bw*` so portraits don't muddy on cream.

---

## 03 — SECTIONS

Scroll order, top to bottom:

```
   ┌─ NAVBAR              fixed · scroll-aware · theme toggle
   ├─ HERO                typographic mask · TANMAY / KALA
   ├─ MARQUEE             six-token status band
   ├─ ABOUT               curved-text ribbon · editorial bio
   ├─ STATS               INDIA word + four-tile counter row
   ├─ SKILLS              three-column stack list
   ├─ EXPERIENCE          résumé timeline
   ├─ WORKS               six professional project image cards
   ├─ CERTIFICATIONS
   ├─ MARQUEE (reversed)
   ├─ MANIFESTO           pull quote
   ├─ CONTACT             EmailJS form · direct channels
   └─ FOOTER              live IST clock · giant monogram band
```

All copy lives in **`src/constants/index.js`**. Edit one file, retheme the entire site.

---

## 04 — RUN LOCALLY

> **Prerequisites:** Node ≥ 18, npm.

```bash
git clone <your-repo-url>
cd project_3D_developer_portfolio
npm install
npm run dev          # → http://localhost:5173
```

---

## 05 — ENVIRONMENT

The contact form is **progressive**: with no keys configured it shows a friendly fake-success in dev so the UI is testable. For production, drop a `.env` at the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

Get the values from your dashboard → https://www.emailjs.com.

---

## 06 — BUILD

```bash
npm run build        # → dist/    (fully static)
npm run preview      # serve dist/ locally
```

Drop `dist/` onto **Vercel · Netlify · Cloudflare Pages · GitHub Pages** — anywhere that serves static files. No backend, no functions, no SSR.

```
PRODUCTION BUNDLE
─────────────────
   index.html                    3.64 KB     (gzip   1.45 KB)
   assets/index-*.css           18.39 KB     (gzip   4.80 KB)
   assets/index-*.js           303.86 KB     (gzip  98.44 KB)
                                ─────────────────────────────
                  TOTAL        ≈ 326   KB     (gzip ≈104 KB)
```

---

## 07 — FILE TREE

```
project_3D_developer_portfolio/
├── public/
│   └── me.png                   # hero portrait
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # nav + theme toggle
│   │   ├── Hero.jsx             # typographic mask hero
│   │   ├── Marquee.jsx          # infinite running band
│   │   ├── CurvedText.jsx       # SVG curved ribbon
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   ├── ProjectPoster.jsx    # six image-driven project hero cards
│   │   ├── Certifications.jsx
│   │   ├── Manifesto.jsx
│   │   ├── Contact.jsx          # EmailJS form
│   │   ├── Footer.jsx           # live IST clock + colophon
│   │   ├── Grain.jsx            # SVG turbulence overlay
│   │   ├── ScrollProgress.jsx   # top progress bar
│   │   └── index.js             # barrel
│   ├── constants/
│   │   └── index.js             # ALL copy lives here
│   ├── lib/
│   │   └── useLenis.js          # smooth-scroll hook
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css                # tokens · themes · type utilities
│   └── styles.js                # shared layout class strings
├── index.html                   # pre-React theme init + meta
├── tailwind.config.cjs          # tokens → CSS vars
├── vite.config.js
└── package.json
```

---

## 08 — REACH OUT

```
   ↗  EMAIL        tanmaykala171206@gmail.com
   ↗  LINKEDIN     linkedin.com/in/tanmay-kala
   ↗  GITHUB       github.com/tanmayai23
```

---

<div align="center">

```
─────────────────────────────────────────────
              C O L O P H O N
─────────────────────────────────────────────
         set in   ANTON · INSTRUMENT SERIF
                  INTER · JETBRAINS MONO
        palette   INK · PAPER · BONE · ASH · WIRE
         build    VITE 4    ·    ESM   ·   STATIC
        bundle    ≈ 304 KB  /  ≈ 98 KB GZIPPED
       hosting    ANY STATIC HOST
─────────────────────────────────────────────
```

**© 2026 TANMAY KALA · ALL WORKS RESERVED**
DESIGNED · WRITTEN · CODED · DEPLOYED FROM INDIA

</div>
