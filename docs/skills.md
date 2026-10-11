# Skills — Design Building Playground

## What this repo is

A playground for **building UI by hand, raw, with a fixed stack**: Next.js (App Router, TypeScript) + Tailwind CSS. Nothing else — no component-kit shortcuts, no page builders. Every design is written component by component so the craft of layout, type, color, and spacing is actually practiced.

Two kinds of work happen here, and both will continue:

1. **Design studies (replication)** — pick a real website, study how it's actually built, and rebuild its pages faithfully in our stack. For testing and learning.
2. **Original builds (from scratch)** — design complete interfaces of our own (design systems, SaaS blocks, e-commerce, whatever) with no reference site.

## The fixed stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router, Turbopack, React Compiler) |
| Styling | Tailwind CSS v4, CSS-first config (`@theme inline` tokens in `globals.css`) |
| Icons | lucide-react (brand icons are removed from lucide — write inline SVGs for those) |
| Fonts | Google Fonts via `next/font` (self-hosted, zero layout shift) |
| Icons/avatars/images | next/image with `remotePatterns` when hotlinking remote assets |

Working conventions that have held up:

- `src/components/` — reusable primitives (buttons, cards, product cards, icons)
- `src/blocks/` — page-level sections composed from components
- `src/data/` — content/catalog data separated from markup, so designs can be re-skinned against real data
- `src/app/globals.css` — all design tokens (colors, fonts, radius, shadows) as CSS variables mapped through `@theme inline`
- Always finish with `npm run build` — types, fonts, and prerendering get verified in one shot

## What we've built so far

### 1. Hearth — SaaS design system (`main` branch)

An original, human-feeling SaaS landing page ("Paper & Moss" theme) — a deliberate move away from the generic AI-generated look (no Inter, no Poppins, no purple gradients).

- **Type:** Fraunces (editorial display serif, italic accents) + Instrument Sans (UI) + Spline Sans Mono (eyebrows, numbers)
- **Palette:** warm cream paper, warm ink, deep moss green, gold highlights
- **10 shadcn-style components:** Button, Badge, Card, Input, Label, Separator, Skeleton, Switch, Tabs, Avatar
- **Blocks:** navbar, hero, logo strip, features, product showcase, stats, testimonials, pricing (monthly/yearly toggle), CTA, footer
- Lessons: distinctive fonts + warm neutrals + specific microcopy ("We cancelled our Monday status meeting") are what make UI feel authored rather than generated.

### 2. NittoNova — e-commerce home page study (`nittonova/v1` branch)

A faithful rebuild of the home page of **nittonova.com** (our own gadget store, normally a Laravel Inertia + Vue app): Navbar, Hero, Products Catalog, Footer — exact design, fonts, and live catalog data.

- **Type:** Jost everywhere; canvas `#fff9f3` cream; primary `#f26507` orange
- **Sections:** dark `#323232` top bar, sticky white header with search + cart, hover "All Categories" dropdown, category circle strip, hero banner (desktop + mobile art direction), USP features bar (`#FEF5EF`), Trending section + 10 category sections with real products, 12-column footer, floating WhatsApp/Messenger/call buttons
- **Product card spec:** remark badges (Popular/Hot/Trending), `-33%` discount badges, ৳ prices with strikethrough, star ratings, Sold Out states, image zoom on hover

### How the NittoNova study was done (the reusable method)

Replicating a site whose HTML hydrates client-side (empty `#app` div) takes a bit of forensics — this worked end to end:

1. `curl` the page HTML → find the Inertia `data-page` attribute: a JSON blob with **all page data** (categories, products, menus, settings incl. brand colors, phone, footer text, logo URLs)
2. Download the compiled CSS bundles from the live site → read them for **fonts, exact colors, and component-scoped styles**
3. Download the compiled JS chunks → extract the **static class strings and render structure** (card layout, badge styling, section order, grid columns)
4. Rebuild everything as **original React/Tailwind components** in our stack — decode the design, don't transplant the code
5. Hotlink remote images via `next/image` + `remotePatterns`, mirror catalog data into `src/data/site.ts`
6. `npm run build` + curl the dev server to verify every section renders

The same flow generalizes to any site: rendered HTML → embedded JSON → CSS/JS bundles → original implementation.

### 3. Design 01 — Gradient Button Kit (`starter` branch)

An original, from-scratch component kit: **10 reusable blue-gradient buttons** in a shadcn-style structure (`src/components/ui/`, one component per file, `cn()` + native `React.ComponentProps<"button">` + size variants, CSS-only motion — no client JS).

- **Type:** Space Grotesk (display) + Manrope (UI) — via `next/font` variables
- **Palette:** deep-navy canvas `#040918`, azure → blue → indigo gradients (`#22d3ee → #3b82f6 → #6366f1`)
- **The ten:** Gradient (panning bg), Aurora (flowing keyframe gradient), Glow (halo bloom), Shine (light sweep), Glass (backdrop blur), Ring (animated conic border via `@property --angle`), Press (3D edge), Outline (gradient-clipped label), Icon (sizes + solid/soft), Pill (status dot)
- **Tokens:** `@theme inline` in `globals.css` — `--color-canvas/panel/line`, `--animate-aurora`, `conic-ring` `@utility`
- Lesson: Tailwind v4 canonical names (`bg-linear-to-r`, `bg-size-[…]`, `mask-[…]`) are what this toolchain's linter expects — the `bg-gradient-*`/`bg-[length:*]` spellings trigger deprecation warnings.

### 4. CRM Admin Dashboard — overview page replication (`dashboard-design-01` branch)

A faithful rebuild of a 2017-era "CRM Admin Dashboard" admin template (the reference shot in `public/images/CRM-01.jpeg`) — black sidebar, navy utility strip, teal stat tiles, and light-gray "window" panels on a `#ececec` canvas.

- **Type:** Roboto (UI) + Great Vibes (the stock-template watermark) via `next/font`
- **Chrome:** near-black fixed sidebar with 30 nav links (source spellings kept: `payroll`, `Calender`), navy `#2a3f54` strip with badged cart/mail/bell/clipboard icons + gear + avatar, white header with teal gauge roundel ("CRM Admin Dashboard / Very detailed & featured admin.")
- **Cards:** Upcoming Events (navy/teal date chips + teal action pills), Running Projects (status pills + hairline progress bars), Pending Works, Works Deadlines / Works Announcements / Notice Board (tables with `#d9edf7` highlighted rows), This Year Earnings & Expenses + Weekly Earnings (hand-rolled SVG bar charts, dashed gridlines, 0–90 axis), Google Map (hand-drawn inline-SVG world map with pin + info card), Calender (JUL 2017 grid, teal today circle, yellow event dots), script watermark + copyright footer
- **Responsive:** sidebar → off-canvas drawer below `lg`, tiles 2×2 → 4-up, card rows 1-col → 2-equal (`md`) → 2fr/1fr (`xl`)
- Structure: `src/components/dashboard/` (Panel, Pill, DateChip, ProgressBar, BarChart, WorldMap) + `src/blocks/dashboard/` (shell, sidebar, topbar, stat-tiles, list-panels, charts-row, bottom-row) + all content in `src/data/dashboard.ts`

**Forensics lesson:** the vision tool hallucinated an entire modern-CRM design when given the full reference image. Ground truth came from splitting the image into bands and tight per-card crops (consistent across passes), plus direct pixel sampling for exact colors (`#2a3f54`, `#009688`, `#ececec`, `#d9edf7`, `#bdc3c7`, bootstrap badge colors) and geometry (sidebar 18.8% of width, ~50/50 card columns for rows 1–3, ~68/32 for rows 4–5). Never trust a single whole-image description when crops + pixels can confirm.

## Where this goes next

- More **replication studies** of other websites — each one teaches a different design vocabulary (e-commerce, SaaS, editorial, dashboard…)
- More **from-scratch builds** with no reference — design systems, blocks, and full pages invented here
- Reusable patterns accumulate in `src/components/` and the token setup in `globals.css`, so every study starts faster than the last
