# GoBongo VC — Claude Code Guide

## Project Overview

Marketing/landing website for **GoBongo Ventures**, a venture capital firm based in Dubai.
Built with React + Vite. No external UI library — fully custom styling.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + Vite 6 |
| Routing | React Router DOM v7 |
| Animation | Framer Motion (interactive) + CSS keyframes (continuous) |
| 3D / Globe | `@splinetool/react-spline`, Three.js, custom video globe |
| Icons | React Icons |
| Styling | Plain CSS (co-located per component) + Tailwind CSS v4 |
| Fonts | Playfair Display (headings), Outfit (body/UI), Syne (logo fallbacks), Sora (global) |
| Linting | ESLint |

---

## Development Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Project Structure

```
src/
  main.jsx                    ← React root, RouterProvider
  App.jsx                     ← Unused (routing handled in main.jsx)
  index.css                   ← Global styles, design tokens, Tailwind import, Sora font
  router/
    Router.jsx                ← Route definitions (/, /about)
  layouts/
    RootLayout.jsx            ← Navbar + <Outlet /> + Footer wrapper
  pages/
    Home/
      HomePage.jsx            ← Renders Hero + About + Portfolio in sequence
      Sections/
        Hero/
          Hero.jsx            ← Full hero with animated cards, globe, counters, sparklines
          Hero.css
        About/
          About.jsx           ← Orbit visualization + clickable sector chips
          About.css
        Portfolio/
          PortfolioSection.jsx ← 8 ventures, filter bar, hover cards
          PortfolioSection.css
    About/
      AboutPage.jsx           ← Full about page — 9 sections
      Sections/
        AboutHero/            ← Hero with quote card, stats strip, gradient mesh bg
        OurStory/             ← 2-col grid, story cards (blue/gold variants)
        MissionVision/        ← 2-card grid (mission + vision)
        EcosystemMap/         ← Parent row + 8 venture child cells with real logos
        LeadershipTeam/       ← Featured founder card + 3 team cards
        InvestmentTimeline/   ← 5-milestone vertical timeline with colored dots
        Achievements/         ← 3-col grid with dark card variant
        CultureValues/        ← 4-col values grid + culture pull card
        AboutCTA/             ← Centered CTA with buttons
  common/
    components/
      Navbar/
        Navbar.jsx            ← Sticky frosted-glass nav, React Router Links, active pill via useLocation
      Footer/
        Footer.jsx            ← Copyright + 3 links
      Button/
        Button.jsx            ← Reusable button (primary/ghost/blue/outline-dark, sm/md/lg)
        Button.css
      Globe/
        Globe.jsx             ← Video globe wrapper with loading/error states
      SectionTag/
        SectionTag.jsx        ← Global section label component (color: blue | gold)
        SectionTag.css
      RevealWrapper/
        RevealWrapper.jsx     ← Global Framer Motion scroll-reveal wrapper
    styles/
      components.css          ← Shared .glass-card and .stat-divider styles

public/
  favicon.svg
  gobongoventureslogo.png
  icons.svg
  logos/                      ← All venture/partner logos (PNG)
  images/                     ← (exists, currently empty/dev)
  videos/
    globe.mp4                 ← Used in Hero section
    4.mp4                     ← Present but unused
```

---

## Styling Conventions

- Every component has its own `.css` file co-located next to its `.jsx` file
- No Tailwind utility classes in JSX — use CSS files for all styling
- CSS class naming: BEM-style with component prefix (e.g. `.venture-card__body`, `.portfolio-filter-btn`)
- **Shadows: outer drop shadows ONLY — never use `inset` box-shadows** (project-wide rule)
- Responsive breakpoint: `max-width: 768px` for mobile
- Visibility helpers: `.hide-mobile` / `.show-mobile` in `index.css`

---

## Design Tokens (`src/index.css :root`)

### Light / Content tokens (use these for all new sections)
```css
--text-primary: #0D0D0B;          /* headings, body text */
--text-muted:   #7A7A72;          /* secondary / body copy */
--text-light:   #AEADA6;          /* labels, meta, breadcrumbs */
--bg-main:      #F8F7F4;          /* main warm off-white page bg */
--bg-card:      #ffffff;          /* card backgrounds */
--border-main:  rgba(13,13,11,0.08);  /* subtle card borders */
--border-mid:   rgba(13,13,11,0.13);  /* slightly stronger borders */
```

### Brand
```css
--brand-blue:   #1A56E8;
--brand-blue-m: #3B6FF0;
--brand-blue-l: #EEF3FF;          /* tinted blue bg */
--gold:         #B8892A;          /* use on light backgrounds */
--gold-l:       #D4A84B;          /* use on dark backgrounds only */
--gold-bg:      #FBF5E8;          /* tinted gold bg */
```

### Alternating section backgrounds (light)
```css
--cream:   #FAFAF7;   /* section bg variant A */
--cream2:  #F2F1EC;   /* section bg variant B */
```

### Dark theme tokens (AboutHero, AboutCTA use light now — these are for future dark sections)
```css
--bg-dark:      #0A0A08;
--bg-dark2:     #111110;
--surface-dark: #171715;
--text-d:       rgba(255,255,255,0.88);
--text-d2:      rgba(255,255,255,0.55);
--text-d3:      rgba(255,255,255,0.30);
--glass-dark:   rgba(255,255,255,0.04);
--bd-dark:      rgba(255,255,255,0.07);
```

---

## Assets

- Logos live in `public/logos/` — reference as `/logos/filename.png` (not JS imports)
- Videos in `public/videos/` — reference as `/videos/filename.mp4`
- Globe video (`globe.mp4`) must be `muted`, `autoPlay`, `loop` for browser autoplay

### Logo Files in `public/logos/`

| File | Venture |
|------|---------|
| bongologo.png | GoBongo Shop |
| tezzlogo.png | Tezz Logistics |
| scoodalogo.png | Thescooda |
| hooqxlogo.png | Hooqx LLC |
| tradeflinklogo.png | Tradeflink |
| calltawklogo.png | CallTawk (primary) |
| calltawklogo2.png | CallTawk (alt) |
| gmilogo.png | GMI Trading |
| stratigi360logo.png | Stratigi 360 |
| gobongoventureslogo.png | GoBongo Ventures (brand — used in Navbar, AboutHero, EcosystemMap parent row) |

---

## Routing

| Route | Component | Status |
|-------|-----------|--------|
| `/` | HomePage | Complete |
| `/about` | AboutPage | Complete |
| `/pitch` | — | Referenced in CTAs, not created |
| `/contact` | — | Referenced in CTAs, not created |

All routes use `RootLayout` (Navbar + Footer) as parent via `<Outlet />`.

---

## Global Components

### SectionTag (`src/common/components/SectionTag/`)
- Small uppercase label with a 16px accent bar before it
- Props: `color` — `"blue"` (default) or `"gold"`
- Gold variant uses `--gold` (#B8892A) for contrast on light backgrounds
- Usage: `<SectionTag color="gold">What's Next</SectionTag>`

### RevealWrapper (`src/common/components/RevealWrapper/`)
- Wraps any element in a Framer Motion `whileInView` fade+slide reveal
- Props: `delay` (default 0), `amount` (default 0.08), `className`, `style`
- Do NOT use for hero sections (page-load) — use `initial`/`animate` there instead
- Usage: `<RevealWrapper className="my-class" delay={0.1}>...</RevealWrapper>`

### Button (`src/common/components/Button/Button.jsx`)
- Props: `variant`, `size`, `to` (Router Link), `href` (anchor — opens new tab), `disabled`
- `to` → renders as `<Link>` (internal navigation), `href` → renders as `<a target="_blank">`
- **For in-page hash links** (`href="#section"`), use a plain `<a>` with btn CSS classes directly — Button's `href` forces `target="_blank"`

| Variant | Use case |
|---------|----------|
| `primary` | Dark gradient, white text |
| `ghost` | Semi-transparent, slate text — **use on light backgrounds** |
| `blue` | Brand blue gradient, white text — use on any background |
| `outline-dark` | White border + text — **dark backgrounds only** |

Sizes: `sm`, `md` (default), `lg`

---

## Navbar (`src/common/components/Navbar/Navbar.jsx`)

- Sticky, top 0, z-index 100, frosted glass background
- Nav links defined as `{ label, path }` objects — `path: null` for unbuilt pages
- Active pill detected via `useLocation()` — no manual state tracking
- Built links: Home (`/`), About (`/about`)
- Unbuilt (rendered as `<span>`): Portfolio, Sectors, Dubai, Contact
- Desktop: Logo left | animated pill nav center | Log In + Pitch Us right
- Mobile: Hamburger → AnimatePresence dropdown

**To add a new route to the nav:** add `{ label: "X", path: "/x" }` to `NAV_LINKS` in Navbar.jsx and add the route to `Router.jsx`.

---

## About Page — Section Reference

All About sections use the light/warm color scheme matching the home page.

| Section | File | Background | Notes |
|---------|------|------------|-------|
| AboutHero | `AboutHero/` | `--bg-main` + gradient mesh | Page-load animation (`initial`/`animate`), no `whileInView` |
| OurStory | `OurStory/` | `--cream` | 2-col layout, story cards |
| MissionVision | `MissionVision/` | `--bg-main` | 2-card grid |
| EcosystemMap | `EcosystemMap/` | `--cream2` | Real logos from `/logos/`, dark parent row with inverted logo |
| LeadershipTeam | `LeadershipTeam/` | `--cream` | Featured card spans 3 cols |
| InvestmentTimeline | `InvestmentTimeline/` | `--cream2` | Colored dots/years, white cards |
| Achievements | `Achievements/` | `--cream2` | 3-col grid, `ach-card--dark` variant |
| CultureValues | `CultureValues/` | `--bg-main` | 4-col values grid + pull card |
| AboutCTA | `AboutCTA/` | `--cream2` | Centered CTA |

---

## Home Page — Section Reference

### Hero (`src/pages/Home/Sections/Hero/`)
- Full-viewport, animated floating glass cards, video globe center
- Background: `#F8F7F4` with radial gradient mesh + grain overlay
- 4 floating cards: Countries, Portfolio Growth, New Venture, Sectors
- Sub-components: `Counter` (Framer Motion number), `Sparkline` (SVG)

### About (`src/pages/Home/Sections/About/`)
- Orbit visualization with 3 concentric rings of portfolio logos
- Clickable sector chips with `activeTag` state
- Pure CSS orbit rotations (no canvas/Three.js)

### Portfolio (`src/pages/Home/Sections/Portfolio/`)
- 8 venture cards with category filter bar
- Featured card (GoBongo Shop) spans 2 cols with sparkline + stat panel
- Mouse spotlight hover effect, staggered reveal animation
- All shadows are outer drop shadows (no inset)

---

## Key Architecture Decisions

1. **No external UI library** — shadcn, MUI etc. not used; everything custom
2. **Co-located CSS** — each component owns its stylesheet, no global component styles
3. **No inset shadows** — project-wide rule, all shadows are outer drop shadows
4. **Public assets by path** — logos/videos referenced as `/logos/file.png`, never imported as JS modules
5. **Framer Motion for interactive** — nav pill, section reveals, filter animations
6. **CSS keyframes for continuous** — floats, rotations, pulses (performance)
7. **Component-level state only** — no Redux/Context needed yet
8. **Layout route pattern** — `RootLayout` as parent with `<Outlet />` for Navbar+Footer
9. **App.jsx is unused** — routing is handled entirely in `main.jsx` via `RouterProvider`
10. **Orbit system is pure CSS** — no canvas or Three.js; absolute positioning + transforms
11. **RevealWrapper for scroll reveals** — replaces copy-pasted `whileInView` motion.div blocks
12. **SectionTag for section labels** — replaces copy-pasted label CSS across sections

---

## Session Log

### Session 1 — 2026-03-18
- About section (home): logos, label, fixed boxes, chip active state
- Navbar: premium frosted glass
- Portfolio: extracted CSS, converted inset → outer shadows
- Created `CLAUDE.md`

### Session 2 — 2026-03-18
- Full codebase scan and deep analysis
- Updated `CLAUDE.md` with comprehensive component + section reference

### Session 3 — 2026-03-19

#### About page built from scratch (9 sections)
- `AboutHero` — warm off-white hero with blue/cyan gradient mesh + grain overlay, quote card, 3-stat strip, floating "8 Ventures Active" tag. Uses page-load `initial`/`animate` (not `whileInView`).
- `OurStory` — 2-col grid, large watermark year, story cards with blue/gold variants
- `MissionVision` — 2-card grid (mission + vision) with subtle radial glow accents
- `EcosystemMap` — dark parent row + 8 venture child cells in a 4-col bordered grid
- `LeadershipTeam` — featured founder card spanning 3 cols + 3 standard team cards
- `InvestmentTimeline` — vertical timeline, 5 milestones (2022–2026), each with a coloured dot/year label
- `Achievements` — 3-col grid, alternating dark card variant (`ach-card--dark`)
- `CultureValues` — 4-col values grid + culture pull card with blockquote + 2×2 stats
- `AboutCTA` — centered CTA section with heading + two buttons

#### Global components created
- `SectionTag` — uppercase label with accent bar; replaces 9 duplicated CSS blocks. Accepts `color="blue|gold"`.
- `RevealWrapper` — Framer Motion `whileInView` wrapper; replaces copy-pasted `motion.div` reveal code in every section.

#### Button.css — new variants added
- `btn-blue` — brand blue gradient, white text (works on any background)
- `btn-outline-dark` — white border + text (dark backgrounds only)

#### Color scheme alignment — About page → light/warm theme
All About sections previously used pure black/dark backgrounds. Converted to match the home page warm off-white palette:
- Added 7 shared content tokens to `index.css`: `--text-primary`, `--text-muted`, `--text-light`, `--bg-main`, `--bg-card`, `--border-main`, `--border-mid`
- `MissionVision` — dark glass cards → white cards on `--bg-main`
- `InvestmentTimeline` — dark bg → `--cream2`, dark cards → white cards
- `CultureValues` — dark bg → `--bg-main`, dark value cards → white cards, quote card → white
- `AboutHero` — dark bg → `--bg-main` with gradient mesh; all text/cards to light tokens
- `AboutCTA` — dark bg → `--cream2` with blue radial glow
- Swapped all `outline-dark` buttons (white text) → `ghost` (slate text) in light sections
- SectionTag gold variant: `--gold-l` (#D4A84B) → `--gold` (#B8892A) for better contrast on light bg

#### Company logos in EcosystemMap
- Replaced all emoji icons with real `<img>` logos from `/logos/`
- Venture → logo mapping: Thescooda→`scoodalogo.png`, Tezz→`tezzlogo.png`, Hooqx→`hooqxlogo.png`, GoBongo Shop→`bongologo.png`, Tradeflink→`tradeflinklogo.png`, CallTawk→`calltawklogo.png`, GMI→`gmilogo.png`, Stratigi360→`stratigi360logo.png`
- Parent row: added `gobongoventureslogo.png` with `filter: brightness(0) invert(1)` to appear white on dark row
- AboutHero quote card: replaced 💬 emoji with `gobongoventureslogo.png` brand mark

#### Navbar — made fully functional with React Router
- Imported `Link` and `useLocation` from `react-router-dom`
- `NAV_LINKS` refactored from string array → `{ label, path }` objects
- Home (`/`) and About (`/about`) render as `<Link>` — navigate via existing Router.jsx
- Portfolio, Sectors, Dubai, Contact render as `<span>` (unbuilt — no route yet)
- Active pill state derived from `useLocation().pathname` — removed `useState("Home")` manual tracking
- Mobile menu: `<Link>` items close menu `onClick`, unbuilt items are non-clickable `<span>`

#### Bugs fixed
- **EcosystemMap nth-child border** — `eco-child:nth-child(4n + 2)` was wrong (removed border from 1st cell in each row instead of last). Fixed to `nth-child(4n + 1)` — `eco-parent` is grid item 1, so rows end at items 5 and 9.
- **Git merge conflict in `index.css`** — conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) left by a git merge were causing a Vite parse error. Resolved by writing the clean HEAD version keeping all design tokens.
- **Unescaped apostrophes in JSX strings** (earlier session) — `'don't'`, `'Dubai's'` etc. inside single-quoted JS strings caused Babel parse errors. Fixed by switching to double-quoted strings.

---

## Completed Pages

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Pitch | `/pitch` | ❌ Not built |
| Contact | `/contact` | ❌ Not built |

---

## Pending / Next Steps

- [ ] Build `/pitch` page — referenced in Hero, AboutHero, AboutCTA, Navbar "Pitch Us" button
- [ ] Build `/contact` page — referenced in AboutCTA "Get in Touch" button
- [ ] Wire Portfolio, Sectors, Dubai, Contact nav links once pages are built (change `path: null` → real path in Navbar `NAV_LINKS` + add route to `Router.jsx`)
- [ ] Add responsive / mobile styles across Hero and Portfolio sections
- [ ] Fix: `index.html` references `/logo-dark.png` for dark mode favicon — file does not exist in `public/`
- [ ] Fix: `App.jsx` is unused but imports a missing `App.css` — clean up or remove
- [ ] Connect live data / CMS when ready
- [ ] SEO meta tags and page titles via React Router
