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
      AboutPage.jsx           ← Stub page (placeholder only)
  common/
    components/
      Navbar/
        Navbar.jsx            ← Sticky frosted-glass nav, desktop pill + mobile menu
      Footer/
        Footer.jsx            ← Copyright + 3 links
      Button/
        Button.jsx            ← Reusable button (primary / ghost, sm/md/lg, Link/anchor/button)
        Button.css
      Globe/
        Globe.jsx             ← Video globe wrapper with loading/error states
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
- Design tokens in `src/index.css `:root`:
  - `#0D0D0B` — near-black (primary text)
  - `#1A56E8` — brand blue
  - `#F8F7F4` — off-white background
  - `#7A7A72` — muted text
  - `#AEADA6` — light muted text
- Responsive breakpoint: `max-width: 768px` for mobile
- Visibility helpers: `.hide-mobile` / `.show-mobile` in `index.css`

---

## Assets

- Logos live in `public/logos/` — reference as `/logos/filename.png` (not JS imports)
- Videos in `public/videos/` — reference as `/videos/filename.mp4`
- Globe video (`globe.mp4`) must be `muted`, `autoPlay`, `loop` for browser autoplay

### Logo Files in `public/logos/`

| File | Venture |
|------|---------|
| bongologo.png | Bongo (inner ring ×2) |
| tezzlogo.png | Tezz Logistics |
| scoodalogo.png | Scooda |
| hooqxlogo.png | Hooqx LLC |
| tradeflinklogo.png | Tradeflink |
| calltawklogo.png | CallTawk (primary) |
| calltawklogo2.png | CallTawk (alt) |
| gmilogo.png | GMI Trading |
| stratigi360logo.png | Stratigi 360 |
| gobongoventureslogo.png | GoBongo Ventures (brand) |

---

## Routing

| Route | Component | Status |
|-------|-----------|--------|
| `/` | HomePage | Complete |
| `/about` | AboutPage | Stub only |
| `/pitch` | — | Referenced in Hero, not created |
| `/contact` | — | Referenced in Hero, not created |

All routes use `RootLayout` (Navbar + Footer) as parent via `<Outlet />`.

---

## Components — Full Reference

### Navbar (`src/common/components/Navbar/Navbar.jsx`)
- Sticky, top 0, z-index 100
- Background: semi-transparent white (0.55 opacity), `backdrop-filter: blur(24px)`, subtle border-bottom — **premium frosted glass**
- Nav links: ["Home", "About", "Portfolio", "Sectors", "Dubai", "Contact"]
- Desktop: Logo left | pill nav center (Framer Motion `layoutId` animated active pill) | CTA buttons right
- Mobile: Hamburger button (3-line → X animation) + dropdown menu with AnimatePresence
- State: `activeLink` (string), `isMobileMenuOpen` (boolean)

### Footer (`src/common/components/Footer/Footer.jsx`)
- Flex space-between, white background, 1px top border
- Left: copyright with dynamic year
- Right: Privacy Policy, Terms of Use, Contact links

### Button (`src/common/components/Button/Button.jsx`)
- Props: `variant` (primary/ghost), `size` (sm/md/lg), `to` (Router Link), `href` (anchor), `disabled`
- Primary: Blue gradient, white text, shimmer `::before` on hover
- Ghost: Semi-transparent white, blur backdrop, blue on hover
- Fully rounded (border-radius 999px)

### Globe (`src/common/components/Globe/Globe.jsx`)
- Wraps an `<video>` element for the animated globe
- Props: `src`, `width`, `height`, `autoPlay`, `loop`, `muted`, `controls`, `bgColor`
- Shows spinner while loading, error state on failure
- `mix-blend-mode: multiply` to blend white background away
- Usage: `<Globe src="/videos/globe.mp4" width={520} height={520} />`

---

## Sections — Full Reference

### Hero (`src/pages/Home/Sections/Hero/`)

**Purpose**: Full-viewport landing section with animated floating glass cards and stats.

**Key data**:
- `BARS`: [38, 62, 44, 80, 52, 94, 68] — bar chart heights (used in mobile notification card)
- `SPARKDATA`: [22, 35, 28, 45, 38, 55, 48, 62, 58, 72] — sparkline points (used in mobile countries card)
- `CATEGORIES`: 3 items with color dots (blue, green, amber)
- `TAGS`: ["E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Comms", "Trading"]
- `AVATARS`: 4 items with initials + gradient backgrounds
- `STATS`: 40K+ users, 2300+ signups, $4.6B volume

**Layout**:
- Desktop: 2-column flex — `.hero-left` (text/CTAs, 520px) + `.hero-right` (relative 530px container with 4 absolute-positioned cards)
- Globe (`/videos/globe.mp4`) lives inside the Countries card (not centered standalone)
- Mobile (≤768px): `.hero-right` hidden, `.hero-mobile-grid` shown — 2×2 grid of 4 compact cards

**CTA buttons** (in `.hero-ctas`):
- "Explore Portfolio →" → `/portfolio` (dark pill)
- "Our Story" → `/about` (ghost pill)

**4 desktop floating cards** (all absolutely positioned within `.hero-right`):
1. **Countries of Operation** — Globe video, Counter(7), label "Countries of operation"
2. **Portfolio Growth** — Counter(8), "Ventures across 7 countries", 10-bar chart `[30,45,35,55,42,65,50,80,60,100]`, 3 CATEGORIES rows
3. **New Venture Notification** — rocket emoji, "Tezz Logistics · India"
4. **Sectors (dark)** — 6 TAGS pills, no live dot on desktop

**Mobile grid cards** (use Tailwind utility classes directly in JSX — exception to convention):
1. Countries — Counter(4), Sparkline, UAE/India/KSA/UK tags
2. Portfolio — Counter(8), 10-bar chart
3. Notification — rocket icon, Tezz Logistics, BARS chart, "↑ 12.4% this month"
4. Sectors (dark) — TAGS pills + live-dot

**Animations (CSS keyframes in Hero.css)**:
- `floatA` — 5.5s vertical bounce (−10px at 50%)
- `floatB` — 7s vertical bounce (−7px at 50%)
- `growBar` — scaleY 0→1 for bar charts
- `pulseDot` — opacity pulse for live indicators (1.8s)
- `shimmer` — gradient text animation on h1 spans
- `shimmer-blue` / `shimmer-amber` — CSS classes for heading `<em>` elements

**Sub-components**:
- `Counter` — Framer Motion animated number, supports prefix/suffix/delay
- `Sparkline` — SVG line+fill chart with linearGradient

**Background**: `.fin-bg` fixed radial gradients (blue/cyan/white) + `.fin-grain` noise overlay (opacity 0.25)

**Known issues in Hero.jsx**:
- Unused import: `BiBorderRadius` from `react-icons/bi` (line 6)
- Mobile grid cards use Tailwind utility classes inline (inconsistent with project convention)

---

### About (`src/pages/Home/Sections/About/`)

**Purpose**: About GoBongo Ventures with rotating orbit of portfolio logos + sector chips.

**Key data**:
- `ABOUT_TAGS`: ["E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Communications", "Commodity Trading"]
- `ORBIT_BARS`: [30, 55, 42, 70, 50, 85, 60] — center card bar heights
- `RING_LOGOS` — 3 rings: inner(2), mid(4), outer(4) logos
- `RING_RADII`: [90, 160, 230] — orbit circle radii in px
- Orbit animations: 18s CW / 26s CCW / 34s CW; logos counter-rotate to stay upright

**Layout**:
- Desktop: 2-column flex (left text 480px fixed, right orbit flex-1)
- Mobile: Stacked, orbit scales to 62%

**OrbitSystem sub-component**:
- 500×500px container, 3 concentric rings
- Center card: "Expenses Total — 2024", $28,380 value, 7-bar chart
- Logo positions: `angle = (index/count) * 2π - π/2` (pure CSS transforms)

**State**:
- `activeTag` — index of selected chip (default: 3 = "B2B Trade")
- Chip click updates `activeTag` → active styling applied

**Animations (Framer Motion)**:
- Section reveal: opacity + translateY on `whileInView`
- Left content: 6 elements staggered (delays: 0, 0.1, 0.2, 0.3, 0.38, 0.46s)
- Tags: scale 0.9→1 staggered
- Orbit: scale 0.92→1, opacity 0→1

**Completed work on About**:
- Labels added above logo rows
- Logos imported from `public/logos/` correctly
- Square boxes around logos removed
- Logo sizes increased
- Filter chips made clickable with active state (useState)

---

### Portfolio (`src/pages/Home/Sections/Portfolio/`)

**Purpose**: Showcase all 8 GoBongo portfolio ventures with category filtering.

**8 Ventures**:

| # | Name | Sector | Location | Accent | Featured |
|---|------|--------|----------|--------|---------|
| 1 | GoBongo Shop | Commerce | Dubai, UAE | #1B4FD8 | Yes |
| 2 | Hooqx LLC | Tech | USA | #7C3AED | No |
| 3 | CallTawk | Tech | Global | #6D28D9 | No |
| 4 | GMI Trading | Trade | Dubai, UAE | #16a34a | No |
| 5 | Tezz Logistics | Trade | India | #DC2626 | No |
| 6 | Stratigi 360 | Consulting | Dubai | #E11D48 | No |
| 7 | Tradeflink | Trade | ME+Asia | #1A56E8 | No |
| 8 | Scooda | Trade | — | #1A56E8 | No |

**Filters**: All (7), Commerce (1), Tech (2), Trade (3), Consulting (1)

**VentureCard sub-component**:
- Featured: 2-column grid, spans 2 cols, 28px padding, includes sparkline + stats panel
- Regular: Flex column, 28px padding
- Hover effects: mouse spotlight radial gradient, top stripe scaleX 0→1, arrow rotates 45°, stat slides in, shadow deepens
- State: `hov` (hover boolean), `mp` (mouse % position for spotlight)

**Featured panel (right side)**:
- Sparkline card: order volume label, value, YoY %
- 2×2 stat tiles (accent + neutral colors)
- Dark categories card (#0B1D3A) with 5 category tags

**Filter animation flow**:
- `triggerReveal()`: clears visible[], sets animating=true for 200ms, staggers card reveals at 90ms intervals from 150ms
- IntersectionObserver on section at 0.07 threshold

**Completed work on Portfolio**:
- CSS fully separated into `PortfolioSection.css`
- All `inset` shadows converted to outer drop shadows (both CSS and inline JSX styles)

**Sub-components**:
- `Sparkline` — SVG line chart with gradient fill, endpoint dot
- `VentureLogo` — renders image or 2-letter initial fallback with accent colors

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

---

## Session Log

### Session 1 — 2026-03-18

**Completed:**
- About section: imported logos from `public/logos/`, added section label
- About section: fixed square boxes around logos
- About section: increased logo sizes
- Navbar: premium frosted glass (`backdrop-filter: blur`, semi-transparent bg, border, shadow)
- About section: made filter chips clickable with active state (useState)
- Portfolio: extracted all CSS into `PortfolioSection.css`
- Portfolio: converted all `inset` shadows → outer drop shadows (CSS + JSX)
- Created `CLAUDE.md`

### Session 2 — 2026-03-18

- Full codebase scan and deep analysis of every file
- Updated `CLAUDE.md` with comprehensive record of everything built

### Session 3 — 2026-03-19

- Hero.jsx reworked to 2-column layout (`.hero-left` text + `.hero-right` absolute cards)
- Globe moved into Countries card instead of standalone center element
- Mobile responsive grid added (2×2, 4 compact cards, hidden on desktop)
- CTA buttons now link to `/portfolio` and `/about` (was `/pitch` and `/contact`)
- Counters swapped: Countries = 7, Portfolio = 8
- Portfolio bars updated to 10-item array
- Updated `CLAUDE.md` to reflect all current state

---

## Pending / Next Steps

- [ ] Build out `/about` page (currently stub)
- [ ] Add `/portfolio` route (referenced in Hero CTA "Explore Portfolio →", not created yet)
- [ ] Build `/contact` page (referenced in Navbar)
- [ ] Clean up Hero.jsx: remove unused `BiBorderRadius` import
- [ ] Migrate Hero mobile grid inline Tailwind → CSS classes (for consistency)
- [ ] Portfolio card hover state & animation review
- [ ] Fix: `index.html` references `/logo-dark.png` for dark mode favicon — file does not exist in `public/`
- [ ] Fix: `App.jsx` is unused but imports a missing `App.css` — clean up or remove
- [ ] Connect live data / CMS when ready
- [ ] SEO meta tags and page titles via React Router
