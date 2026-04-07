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
    Router.jsx                ← Route definitions (/, /about, /contact)
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
    Contact/
      ContactPage.jsx         ← Full contact page — 6 sections, manages activeSubject state
      Sections/
        ContactHero/          ← Hero with 3 path cards (Pitch/Partnership/Press), page-load anim
        ContactForm/          ← Left: contact info list. Right: form card with subject pills
        ContactOffice/        ← 4-col office/market presence cards
        ContactProcess/       ← 3-step process (Read → Respond → Conversation)
        ContactFAQ/           ← 2-col accordion FAQ (5 items)
        ContactSocial/        ← Social follow bar (LinkedIn, Twitter/X)
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
| `/contact` | ContactPage | Complete |
| `/pitch` | — | Referenced in CTAs, not created |

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
- Built links: Home (`/`), About (`/about`), Contact (`/contact`)
- Unbuilt (rendered as `<span>`): Portfolio, Sectors, Dubai
- Desktop: Logo left | animated pill nav center | Log In + Pitch Us right
- Mobile: Hamburger → AnimatePresence dropdown

**To add a new route to the nav:** add `{ label: "X", path: "/x" }` to `NAV_LINKS` in Navbar.jsx and add the route to `Router.jsx`.

---

## About Page — Section Reference
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

**Known issues in Hero.jsx**:
- Unused import: `BiBorderRadius` from `react-icons/bi` (line 6)
- Mobile grid cards use Tailwind utility classes inline (inconsistent with project convention)

---

## Contact Page — Section Reference

All Contact sections use the same light/warm color scheme as Home and About pages.

| Section | File | Background | Notes |
|---------|------|------------|-------|
| ContactHero | `ContactHero/` | `--bg-main` + gradient mesh + dot grid | Page-load animation (`initial`/`animate`). 3 path cards (Pitch/Partnership/Press) scroll to form and pre-select subject. |
| ContactForm | `ContactForm/` | `--cream` | Left: SectionTag + contact info list. Right: form card. Subject pills controlled by `activeSubject` prop from ContactPage. |
| ContactOffice | `ContactOffice/` | `--cream2` | 4-col grid. RevealWrapper per card with staggered delay. |
| ContactProcess | `ContactProcess/` | `--bg-main` | 3-step grid. Arrow connector `→` via `::after`, flips to `↓` on mobile. |
| ContactFAQ | `ContactFAQ/` | `--cream` | 2-col: left (SectionTag + sub + Button to /pitch) + right (accordion, 5 items). |
| ContactSocial | `ContactSocial/` | `--bg-card` | Horizontal bar: label + title + LinkedIn/Twitter buttons. |

### Cross-section subject pre-selection (ContactPage)
- `ContactPage` holds `activeSubject` state
- Path cards in `ContactHero` call `onSelectSubject(subject)` + smooth-scroll to `#contact-form`
- `ContactForm` receives `activeSubject` as prop, syncs via `useEffect` → sets the active subject pill

### Local CSS vars used in Contact sections (not in index.css)
- `--teal: #0D9488` / `--teal-bg: #F0FDFB` — used in ContactHero teal path card and ContactForm teal icon
- `--coral: #E85D26` — used for required field asterisks in ContactForm

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
| Contact | `/contact` | ✅ Complete |
| Blog | `/blog` | ✅ Complete |
| Blog Post | `/blog/:id` | ✅ Complete |
| Pitch | `/pitch` | ✅ Complete |
| Portfolio | `/portfolio` | ✅ Complete (built prior to Session 7, undocumented) |
| Portfolio Company | `/portfolio/:slug` | ✅ Complete |

### Session 3 — 2026-03-19 (continued)

- Hero.jsx reworked to 2-column layout (`.hero-left` text + `.hero-right` absolute cards)
- Globe moved into Countries card instead of standalone center element
- Mobile responsive grid added (2×2, 4 compact cards, hidden on desktop)
- CTA buttons now link to `/portfolio` and `/about` (was `/pitch` and `/contact`)
- Counters swapped: Countries = 7, Portfolio = 8
- Portfolio bars updated to 10-item array
- Updated `CLAUDE.md` to reflect all current state

### Session 4 — 2026-03-20

#### Contact page built from scratch (6 sections)
- `ContactHero` — warm off-white hero with blue/gold gradient mesh + dot grid overlay, kicker badge ("We respond within 5 business days"), large Playfair heading, 3 path cards (Pitch/Partnership/Press). Page-load `initial`/`animate` animation.
- `ContactForm` — 2-col: left has `SectionTag` + sub-copy + 3 contact info items (email addresses). Right is a white form card (border-radius 32px, large shadow) with subject pill selection, 6 input fields, and submit button.
- `ContactOffice` — 4-col grid of office/market presence cards with flag emoji, city name, country, detail lines. Gold badge on Dubai HQ card.
- `ContactProcess` — 3-step grid. Each step has a large watermark number (`01`/`02`/`03`), icon, title, desc, and a blue time-badge pill. Connector arrow `→` via `::after` pseudo-element (flips to `↓` on mobile stacked layout).
- `ContactFAQ` — 2-col: left has SectionTag + heading + sub + "Go to Pitch Page →" button. Right is a CSS accordion (max-height transition) with 5 FAQ items. Open state toggled via `useState`. Icon rotates 45° when open.
- `ContactSocial` — horizontal strip: left text block + right social buttons (LinkedIn, Twitter/X). Matches HTML original layout exactly.

#### Cross-section interactivity
- `ContactPage` lifts `activeSubject` state — path card clicks in `ContactHero` pre-select the matching subject pill in `ContactForm` via prop + `useEffect`.
- Smooth scroll to `#contact-form` on path card click.

#### Routing & Navbar wired
- Added `{ path: "contact", element: <ContactPage /> }` to `Router.jsx`
- `Contact` nav link in `Navbar.jsx` updated from `path: null` → `path: "/contact"` (now renders as `<Link>`, shows active pill, closes mobile menu on click)

### Session 5 — 2026-03-23

#### Blog page built from scratch (5 sections + single post page)

**Architecture decisions:**
- Blog is fully static — all content hardcoded, no backend
- Single post pages route via `/blog/:id`, content matched by ID from `posts.js`
- Search bar removed (not functional on static site)
- Client-side category filtering via `POSTS.filter(p => p.category === activeFilter)` in BlogGrid
- Filter pills moved from BlogHero → BlogGrid header (more logical placement)

**Files created:**
- `src/pages/Blog/BlogPage.jsx` — holds `activeFilter` state, renders all 5 sections
- `src/pages/Blog/Sections/BlogHero/BlogHero.jsx` + `BlogHero.css`
- `src/pages/Blog/Sections/BlogFeatured/BlogFeatured.jsx` + `BlogFeatured.css`
- `src/pages/Blog/Sections/BlogGrid/BlogGrid.jsx` + `BlogGrid.css`
- `src/pages/Blog/BlogPost/BlogPost.jsx` — single post page using `useParams`
- `src/pages/Blog/BlogPost/posts.js` — static content for all 6 posts keyed by ID

**BlogHero:**
- 2-col layout: left (SectionTag + heading with `.shimmer-blue` on "Publicly Shared." + sub-copy) | right (floating card cluster + stat badges)
- Left side: each element staggered individually (delays 0, 0.12, 0.26)
- 3 preview cards slide in from right one by one (delays 0.3, 0.55, 0.82s) then continuously float via CSS keyframes
- CSS float animations use `animation-delay` (0.4s/0.6s/0.9s) so they start only after Framer Motion entry
- 3 stat badges animate in last (delay 1.2s+) with `scale: 0.8 → 1`
- Grain texture: SVG `feTurbulence` fractalNoise as inline `data:image/svg+xml` background-image
- Animated gradient mesh (`bh-mesh::before/after`) with `bh-mesh-drift` keyframe

**BlogFeatured (full redesign — innovative/creative):**
- Full-bleed dark navy gradient card (no more white/dark split)
- 3 animated glow orbs (`.bf-orb--1/2/3`) with `bf-orb-drift` keyframe
- Huge faint "01" watermark bottom-left
- Left: category badge + ★ Featured badge sliding from opposite directions + large Playfair title with italic gold `<em>` + author strip
- Right: frosted glass panel (blur + translucent border, 340px wide) with gold top accent line, "Editor's Pick" label, excerpt, 3 stats row, full-width blue CTA button

**BlogGrid (major redesign — innovative editorial cards):**
- Full-bleed gradient cards (gradient IS the card background, content overlaid via absolute positioning)
- Mixed grid: 3 columns, first card `grid-column: span 2` / 460px tall (hero), others 380px
- 6 gradient color variants: blue, gold, dark, teal, indigo, slate
- **Permanent bottom panel** (`.bg-card__base`) with title + author — fades out on hover
- **Hover drawer** (`.bg-card__drawer`) slides up from bottom via CSS `translateY(100% → 0)` with gold accent line at top
- Gold `::before` accent line at top of drawer
- Category badge + read time badge always visible (z-index 4, above spotlight)
- Large watermark number (`.bg-card__num`) fades out on hover

**BlogGrid animations (3 layers):**
1. **Staggered cascade entry** — `ENTRY_VARIANTS` array with different `{x, y}` per index (bottom/right-bottom/left-bottom alternating)
2. **3D magnetic tilt** — `useMotionValue` + `useSpring` + `useTransform` on `rotateX/rotateY` tracking normalized mouse position (-0.5 to 0.5) → ±6 degrees, stiffness 260 damping 28, `transformPerspective: 900`
3. **Cursor spotlight glow** — separate `.bg-card__spotlight` div with inline `radial-gradient(circle 180px at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.13), transparent 70%)` tracking mouse %

**BlogPost (single post page):**
- `useParams` gets `:id`, looks up `POST_CONTENT[id]` from `posts.js`
- 404 fallback if ID not found
- `renderBlock()` handles content types: `p`, `h2`, `h3`, `ul` (with `items[]`), `pullquote`
- "More posts" grid reuses full-bleed `bg-card` design (imports `BlogGrid.css`)
- Static content for all 6 posts with: category, title, imgVariant, author, date, readTime, tags, stats[], body[]

**posts.js content keys:**
- `tezz-logistics-investment`, `building-in-dubai`, `year-in-review-2024`
- `b2b-trade-finance-mena`, `how-we-evaluate-startups`, `hooqx-global-digital-layer`

**Routing & Navbar:**
- Added `{ path: "blog", element: <BlogPage /> }` and `{ path: "blog/:id", element: <BlogPost /> }` to `Router.jsx`
- Added `{ label: "Blog", path: "/blog" }` to `NAV_LINKS` in `Navbar.jsx` (between About and Portfolio)

#### Bugs fixed this session
- **JSX closing tag mismatch in BlogPost "More posts" grid** — `</article>` inside `</Link>`, `</motion.div>` instead of `</motion.article>`. Fixed closing tag order and element names.
- **Missing `LuArrowRight` import in BlogPost.jsx** — added alongside existing `LuArrowLeft` import.
- **Unused `IMG_CLASS` constant in BlogPost.jsx** — removed dead constant left from earlier draft.
- **Badge positioning (2 rounds)** — badges were visually separated from card cluster. Adjusted `top` values from 4%/12% → 20%/24% → 30%/33%.
- **BlogHero right section alignment** — added `align-self: center; margin: auto 0` to `.bh-right` and `min-height: 460px` to `.bh-inner`.

---

## Blog Page — Section Reference

All Blog sections use the same light/warm color scheme as the rest of the site.

| Section | File | Background | Notes |
|---------|------|------------|-------|
| BlogHero | `BlogHero/` | `--bg-main` + gradient mesh + grain | Page-load `initial`/`animate`. 2-col: left text, right floating card cluster + badges. |
| BlogFeatured | `BlogFeatured/` | Dark navy gradient (card-level) | Full-bleed dark editorial card. Left content + right glass panel. |
| BlogGrid | `BlogGrid/` | `--bg-main` | Filter pills in header. Full-bleed gradient cards with 3D tilt + spotlight + staggered entry. `AnimatePresence` on filter change. |
| BlogTopics | `BlogTopics/` | `--cream` | Topic tag cloud (if built) |
| BlogNewsletter | `BlogNewsletter/` | `--cream2` | Newsletter CTA (if built) |

### Blog routing
- `/blog` → `BlogPage` (all sections)
- `/blog/:id` → `BlogPost` (single post, content from `posts.js`)
- `BlogPost` imports `BlogGrid.css` for shared card styles in "more posts" section

### Static content location
- `src/pages/Blog/BlogPost/posts.js` — all 6 post bodies keyed by slug ID
- `src/pages/Blog/Sections/BlogGrid/BlogGrid.jsx` — `POSTS` array with card metadata (exported for reuse)

---

## Pitch Page — Section Reference

All Pitch sections use the light/warm color scheme (`--bg-main`, `--cream`).

| Section | File | Background | Notes |
|---------|------|------------|-------|
| PitchHero | `PitchHero/` | `--bg-main` + radial mesh | Page-load `initial`/`animate`. 2-col: left text/stats, right floating app card + 3 badges. `premiumFloat` keyframe. |
| PitchThesis | `PitchThesis/` | `--cream` | **Carousel** — 6 cards (3×2 duplicate) scrolling via `@keyframes ptScroll`. RAF loop applies 3D `scale/rotateY/translateZ/opacity` per card based on distance from center. Hover freezes scroll. |
| PitchCriteria | `PitchCriteria/` | `--bg-main` | 2×2 grid. Per-card magnetic tilt (`useMotionValue` + `useSpring`). Moving top bar (55% wide, drifts ±28px with slower spring). 3D icon badge (stacked box-shadow layers). Cursor sheen via `useMotionTemplate`. |
| PitchProcess | `PitchProcess/` | `--cream` | 4 horizontal steps with `→` connectors. Blue/gold alternating accents. Time badge pills. |
| PitchForm | `PitchForm/` | `--bg-main` | 2-col: sticky left info panel + right form card. `AnimatePresence` success state. 3 field groups (Company / Pitch / Contact). |
| PitchCTA | `PitchCTA/` | `--cream` | Centered pull-quote from GoBongo Ventures team + 2 CTAs. |

### PitchThesis carousel architecture
- `.pt-carousel-outer` — `overflow: hidden`, `mask-image` edge fade, `ref` for RAF
- `.pt-carousel-track` — `display: flex; width: max-content; animation: ptScroll 20s linear infinite`
- `.pt-col-wrap` — JS writes `transform + opacity + z-index` every frame (no CSS transition)
- `.pt-col` — CSS only manages `box-shadow` transition; fixed `width: 390px`
- RAF formula: `progress = max(0, 1 − |cardCenter − containerCenter| / halfWidth)`

### PitchCriteria tilt architecture
- `rawX/rawY` → `useSpring(SPRING)` → `rotateX/rotateY` via `useTransform`
- Bar: separate `barSX = useSpring(rawX, SPRING_SLOW)` → `barX = useTransform(barSX, [-0.5,0.5], [-28,28])`
- Icon parallax: `iconX/iconY` inverse of tilt direction
- On `mouseLeave`: all values reset to `0` (flat, no resting tilt)

---

## Pending / Next Steps

- [ ] Wire Portfolio, Sectors, Dubai nav links once pages are built (change `path: null` → real path in `NAV_LINKS` + add route to `Router.jsx`)
- [ ] Add `/portfolio` route (referenced in Hero CTA "Explore Portfolio →")
- [ ] Add BlogTopics and BlogNewsletter sections to BlogPage (stubs exist in BlogPage.jsx but sections not built)
- [ ] Clean up Hero.jsx: remove unused `BiBorderRadius` import
- [ ] Migrate Hero mobile grid inline Tailwind → CSS classes (for consistency)
- [ ] Fix: `index.html` references `/logo-dark.png` for dark mode favicon — file does not exist in `public/`
- [ ] Fix: `App.jsx` is unused but imports a missing `App.css` — clean up or remove
- [ ] Connect live data / CMS when ready (contact form has no backend submission yet)
- [ ] SEO meta tags and page titles via React Router
- [ ] PitchProcess and PitchForm sections — verify styles, test form submit flow
- [ ] Pitch page full mobile responsive pass (all 6 sections)
- [ ] BlogPost animations — verify word-cascade + parallax watermark on all post IDs
- [ ] Fill in missing founder names for GoBongo Shop, GMI Trading, Tradeflink in `portfolioData.js` (currently blank)
- [ ] Full mobile responsive pass — review all non-hero sections on small screens after global font override

---

### Session 6 — 2026-03-24

#### Pitch page built from scratch (6 sections)

**Files created:**
- `src/pages/Pitch/PitchPage.jsx` — orchestrator, imports all 6 sections
- `src/pages/Pitch/Sections/PitchHero/PitchHero.jsx` + `PitchHero.css`
- `src/pages/Pitch/Sections/PitchThesis/PitchThesis.jsx` + `PitchThesis.css`
- `src/pages/Pitch/Sections/PitchCriteria/PitchCriteria.jsx` + `PitchCriteria.css`
- `src/pages/Pitch/Sections/PitchProcess/PitchProcess.jsx` + `PitchProcess.css`
- `src/pages/Pitch/Sections/PitchForm/PitchForm.jsx` + `PitchForm.css`
- `src/pages/Pitch/Sections/PitchCTA/PitchCTA.jsx` + `PitchCTA.css`

**Routing:** `/pitch` route was already wired in `Router.jsx` (imported as `Pitchpage` from `../pages/Pitch/PitchPage`).

#### PitchHero
- 2-col layout: left (SectionTag "For Founders", h1 heading, sub-copy, CTAs, stats strip) | right (floating card cluster + 3 badges)
- `leftItemVariants` with `custom` delay per element, h1 wrapped in `overflow: hidden` with `y: '100%' → 0` reveal
- App card: GoBongo logo, 3 stats, "Applications open" status dot, 4 criteria checklist, blue CTA button
- 3 floating badges: Investment Stage (top-left), Latest Portfolio — Tezz Logistics (bottom-left), MENA + South Asia (right)
- `@keyframes premiumFloat` — 3D floating animation with subtle `rotateX/rotateY`
- `.pch-app-card:hover` pauses float animation + applies `rotateX(10deg) rotateY(-8deg)` tilt
- `em` in heading uses `.shimmer-gold` class from `index.css`

#### PitchThesis — Redesigned twice, final version: animated carousel

**v1 (grid):** 3-col bordered grid with Framer Motion `whileInView` stagger per column.

**v2 (innovative dark):** Dark bg (`--bg-dark`), glowing card borders, teal/gold/blue ambient mesh. User rejected dark background — reverted to light/cream.

**v3 (final — carousel):** Continuous CSS marquee carousel replacing the 3-col grid.
- Cards duplicated (6 total = 3 × 2) for seamless `@keyframes ptScroll` loop (`translateX(0 → -50%)`)
- Speed: `20s linear infinite`
- Edge fade via `mask-image: linear-gradient(to right, transparent 7%, black, black, transparent 93%)`
- Hover freezes: `.pt-carousel-outer:hover .pt-carousel-track { animation-play-state: paused }`
- **3D RAF depth effect** — `requestAnimationFrame` loop reads each `.pt-col-wrap` position, computes distance from carousel center, applies `perspective(1000px) translateZ() scale() rotateY()` per card:
  - Center card: `scale 1.04`, `translateZ 40px`, `rotateY 0°`, `opacity 1.0`
  - Edge cards: `scale 0.82`, `translateZ 0`, `rotateY ±14°`, `opacity 0.50`
- Cards wrapped in `.pt-col-wrap` (JS owns transform) + `.pt-col` inner (CSS owns box-shadow only)
- Each column has distinct color identity: `pt-col--blue` / `pt-col--gold` / `pt-col--teal`
  - Tinted gradient background per variant (`#f0f5ff`, `#fdf7ea`, `#edfaf8`)
  - 4px top accent bar with glowing `box-shadow` beneath
  - Faint watermark number `01/02/03` (140px Playfair, 6–12% opacity)
- `shimmer-gold` applied to heading `em` (`What We Back`)

#### PitchCriteria — Redesigned 3× for 3D tilt effect

**v1:** Basic 2×2 grid with `whileInView` stagger.

**v2:** Framer Motion magnetic tilt per card (`useMotionValue` + `useSpring` + `useTransform`) with sheen overlay (`useMotionTemplate` radial-gradient cursor spotlight) and ambient orb parallax.

**v3 (resting tilt):** Each of 4 cards had a unique rest angle so the grid looked like physical cards on a table. User reported cards overlapping — reverted resting tilt.

**v4 (final):** Cards start flat (rawX/rawY = 0). Tilt only on hover. Key additions:
- **Moving top accent bar** — `<div className="pc-card__bar" />` JSX element (replaces `::before`). Framer Motion `x` style maps `barSX` (slower spring: stiffness 180) to `±28px` horizontal drift. Bar is 55% wide, centered by default via `left: 50%; transform: translateX(-50%)`. Mouse right → bar drifts right; mouse left → bar drifts left.
- **3D floating icon badge** — white `58×58px` rounded square, absolutely positioned top-right. Stacked `box-shadow` at 1/3/5/8px offsets with colored rgba layers simulate physical depth/thickness. On hover, shadow layers deepen to appear more lifted.
- **Icon parallax** — badge moves opposite to tilt direction (inverse `useTransform`) for depth illusion.
- **Soft card backgrounds** — `rgba(26,86,232,0.05)` blue wash, `rgba(184,137,42,0.06)` gold wash into white. No overlap.
- `shimmer-gold` on heading `em` (`Four Non-Negotiables`).

#### PitchCTA
- Centered quote section: giant `"` decorative mark, Playfair italic quote from GoBongo Ventures team, cite with logo
- Blue radial glow mesh, two CTAs: "Submit Your Pitch →" (primary) + "Reach Out Directly" (ghost → `/contact`)

#### BlogPost — Animations added (previous session, documented here)
- Reading progress bar: `useScroll` + `useSpring` + `scaleX` on fixed top bar
- Word-cascade title: `post.title.split(' ')` → each word in `.bp-word-wrap` overflow:hidden + `motion.span` animating `y: '115%' → '0%'`
- Watermark parallax: `useTransform(scrollY, [0, 700], [0, 110])` applied via `style={{ y: wmY }}`
- Per-block animations: `motion.h2` clip-path wipe, `motion.ul` staggered list items, `motion.blockquote` scale+blur+rotating quote mark, `motion.p` fade+slide

#### Key decisions
- **`shimmer-gold` class** (from `index.css`) used on all Pitch page `em` italic headings — consistent gold shimmer pattern across PitchHero, PitchThesis, PitchCriteria
- **Carousel over grid for PitchThesis** — the 3-col grid felt static; continuous carousel with 3D depth gives motion and premium feel
- **RAF loop for carousel 3D** — Framer Motion `whileInView` doesn't suit a moving carousel; raw `requestAnimationFrame` is the right tool for per-frame positional calculations
- **Two-layer wrapper for carousel cards** — `.pt-col-wrap` (JS transform) + `.pt-col` (CSS shadow) prevents transform ownership conflicts
- **Separate spring speeds** for card tilt vs bar movement in PitchCriteria — bar uses slower spring (stiffness 180) so it trails the tilt, creating a layered fluid feel
- **No inset shadows** maintained throughout — all depth effects use outer `box-shadow` stacked layers

#### Bugs fixed
- **Unused `React` import in PitchHero.jsx** — removed `import React from "react"` (unused in modern JSX transform)
- **Dark background on PitchThesis** — user rejected dark bg; fully reverted to `--cream` with light card styles
- **PitchCriteria card overlap** — caused by `overflow: visible` + resting tilt angles; fixed by returning cards to flat (rawX/rawY = 0 at rest) and `overflow: hidden`
- **`::before` conflict for moving bar** — `::before` was used for both the top accent bar AND the card ambient bg; resolved by moving accent bar to explicit JSX `<div className="pc-card__bar" />`

---

### Session 7 — 2026-03-28

#### Global mobile font-size overrides

**Problem:** Site headings were too large on mobile viewports (≤768px). Specifically, the `.premium-quote` in CultureValues was raised first, then a site-wide pass was done.

**Approach:** Single centralized `@media (max-width: 768px)` block added to `src/index.css` covering all section heading classes across every page. This avoids modifying each individual CSS file and keeps mobile typography in one place.

**Files changed:**
- `src/index.css` — new global mobile override block (last rule in file)
- `src/pages/Home/Sections/Hero/Hero.css` — updated existing 768px + 480px breakpoints for `.hero-heading`

**Font-size tiers applied on mobile:**

| Tier | Classes | Desktop max | Mobile max |
|------|---------|------------|------------|
| Hero-scale | `.about-hero-h`, `.ch-heading`, `.bh-heading`, `.pch-hero__heading`, `.about-cta-h` | 64–72px | 44–48px |
| Large section | `.portfolio-heading`, `.mv-h`, `.pt-thesis__heading`, `.pc-criteria__heading`, `.cf-heading` | 52–56px | 28–30px |
| Standard section | `.story-h`, `.team-h`, `.tl-h`, `.ach-h`, `.culture-h`, `.eco-h`, `.bf-title` | 46px | 26px |
| Pull quote | `.premium-quote` | 48px | 28px |
| Home hero | `.hero-heading` (768px) | 46px | 44px |
| Home hero | `.hero-heading` (480px) | 38px | 38px |

**Iteration note:** Hero-scale headings were first reduced too aggressively (max ~34–38px). User reviewed on 400px-wide viewport and requested increase — bumped back up to 44–48px range for hero classes. Section headings left at smaller values.

#### Portfolio — Founder field added

**Files changed:**
- `src/pages/Home/Sections/Portfolio/portfolioData.js` — `founder` field added to all 8 venture objects
- `src/pages/Home/Sections/Portfolio/PortfolioSection.jsx` — founder row rendered in `VentureCard` between sector label and description
- `src/pages/Home/Sections/Portfolio/PortfolioSection.css` — `.venture-card__founder` styles added

**UI:** Small inline row with a person SVG icon (11px, `#AEADA6`). Only renders when `v.founder` is a non-empty string — cards without founder data show nothing (no broken UI).

**Founder data (confirmed by client):**

| Venture | Founder |
|---------|---------|
| Hooqx LLC | MD. Sharique Furqan |
| CallTawk | Sami Ahmed |
| Tezz Logistics | Shadab Ahmed Shah |
| Stratigi 360 | Sarah Khan |
| Scooda | Aftab Ahmed |
| GoBongo Shop | *(blank — not provided)* |
| GMI Trading | *(blank — not provided)* |
| Tradeflink | *(blank — not provided)* |

#### Key decisions
- **Global override block in `index.css`** rather than modifying each component's CSS — single source of truth for mobile typography scale
- **`!important` on all mobile overrides** — ensures they win over any component-level `clamp()` values without needing specificity battles
- **Founder field is opt-in** — empty string `""` suppresses the row entirely; no placeholder text shown to users
- **`.venture-card__founder` placed before description** — gives the card a "founding context" before the longer copy, consistent with how investor profiles typically read (who → what)

#### Completed this session
- ✅ Global mobile font-size pass (all pages, all section headings)
- ✅ Hero heading mobile sizes tuned after user feedback
- ✅ Founder field added to portfolio data + card UI
- ✅ Real founder names populated from client-provided list

---

### Session 8 — 2026-04-07

#### Brand terminology rebrand — site-wide

**Three changes applied in sequence:**

1. **"Year Founded" metric in PortfolioMetrics** — `2022` → `2017`
   - File: `src/pages/Portfolio/Sections/PortfolioMetrics/PortfolioMetrics.jsx` (line 21)

2. **"VC" → "V" and "Venture Capital" → "Venture"** — first pass across all visible text
   - `VC` suffix removed from: Footer wordmark, EcosystemMap parent name, LeadershipTeam roles, InvestmentTimeline milestones, OurStory body copy, AboutHero sub-copy + attribution, PortfolioGrid subtext, companies.js quotes + highlights, Leadership.jsx testimonial, TermsPage.jsx investment disclaimer
   - `Venture Capital` → `Venture` in: AboutHero sub-copy, PortfolioHero kicker badge, TermsPage.jsx

3. **"GoBongo V" → "GoBongo Venture"** — second pass renaming the brand shorthand
   - Applied everywhere "GoBongo V" appeared after step 2 (same file set as above)

4. **Footer wordmark exception** — user reviewed and requested footer giant wordmark stay as `GoBongoV` (the `.rf-vc` span content reverted to `"V"`). All other instances remain "GoBongo Venture".

**Files changed:**
- `index.html` — browser tab title: `GoBongoVC` → `GoBongo Venture`
- `src/common/components/Footer/Footer.jsx` — wordmark visible text: `VC` → `V` (kept), screen reader span: `GoBongo Venture`
- `src/pages/About/Sections/AboutHero/AboutHero.jsx`
- `src/pages/About/Sections/OurStory/OurStory.jsx`
- `src/pages/About/Sections/EcosystemMap/EcosystemMap.jsx`
- `src/pages/About/Sections/LeadershipTeam/LeadershipTeam.jsx`
- `src/pages/About/Sections/InvestmentTimeline/InvestmentTimeline.jsx`
- `src/pages/Portfolio/Sections/PortfolioMetrics/PortfolioMetrics.jsx`
- `src/pages/Portfolio/Sections/PortfolioHero/PortfolioHero.jsx` — kicker badge: `Venture Capital · Est. 2022` → `Venture · Est. 2017`
- `src/pages/Portfolio/Sections/PortfolioGrid/PortfolioGrid.jsx`
- `src/pages/Portfolio/data/companies.js`
- `src/pages/Home/Sections/Leadership/Leadership.jsx`
- `src/pages/Legal/TermsPage.jsx`

#### Key decisions
- **Footer wordmark stays "V"** — the oversized decorative wordmark (`GoBongoV`) is a typographic design element; spelling it out as "Venture" caused layout overflow at that font size. The `.rf-vc` span keeps `"V"` while the screen reader span says `"GoBongo Venture"` for accessibility.
- **"VC-friendly" in posts.js left unchanged** — this is an industry term in a blog post body ("most VC-friendly legal framework in the region"), not the brand name. Changing it to "V-friendly" would be meaningless.
- **"GoBongo Ventures" (with S) left unchanged** — `GoBongo Ventures` is the full legal entity name used in Legal pages, Footer portfolio list, BlogPost, PitchCTA, and About.jsx. Only the shorthand brand references ("GoBongo VC" / "GoBongo V") were updated.
- **PortfolioHero `Est.` year also corrected** — the kicker badge said `Est. 2022`; corrected to `Est. 2017` to match the PortfolioMetrics stat and the OurStory founding year.

#### Completed this session
- ✅ PortfolioMetrics "Year Founded" corrected: 2022 → 2017
- ✅ All "VC" brand references removed site-wide → replaced with "Venture" / "GoBongo Venture"
- ✅ All "Venture Capital" text replaced with "Venture"
- ✅ Footer wordmark kept as "GoBongoV" per user preference (design constraint)
- ✅ PortfolioHero kicker badge year corrected: Est. 2022 → Est. 2017
