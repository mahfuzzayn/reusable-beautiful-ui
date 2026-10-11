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

### 4. Donezo — task-management dashboard study (`main` branch)

A faithful static replication of a **"Donezo" task-management dashboard overview** (reference: a 736×552 Muzli-blog inspiration JPEG, the only asset — no live site existed to inspect). Only the Overview page works; all sidebar destinations are decorative. Built entirely server-side — zero client JS.

- **Type:** Google Sans Flex (variable 100–900, self-hosted via `next/font`) — swapped in over the initial Poppins pick; a two-file change (`layout.tsx` variable + `--font-sans` in `globals.css`)
- **Palette:** canvas `#F4F6F5`, white cards, primary green `#227D52`, deep green `#1E5B3C` (stat card 1, app banner, Time Tracker gradient), bright green `#41B970`, mist `#A6DFC0`, orange `#F0A435`
- **Structure:** 248px sidebar (MENU/GENERAL nav, active pill, badge, phone-mock download banner) → sticky topbar (search, bell, Invite, avatar) → 4 stat cards (first is deep green) → 12-col grid `5/4/3` at `xl` (Tasks overview chart / Reminders + Weekly Plan donut / Project tasks + Time Tracker), 2-col at `md`, stacked with a pill-nav below `lg`
- **Charts, hand-rolled SVG:** grouped bars (7 day-pairs, rounded data-ends, square baseline, hairline grid, dashed orange "vs last month" line), donut (74% = Products 49 + On Hold 25, arc offsets computed as pure `slice`/`reduce` sums), progress meters
- **Content:** every string/value lives in `src/data/dashboard.ts` — 46 rendered strings verified by curl against the built page

#### How the study was done (replication from a thumbnail, not a live site)

The NittoNova flow starts at rendered HTML; here step one was **reconstructing the reference itself**:

1. **Region-by-region vision extraction** — upscale the JPEG 8–22×, crop ~25 tight regions (sidebar, header, each stat card + its caption strip, chart title, each column band), transcribe each separately. Keep only readings confirmed by **≥2 independent passes** — single passes hallucinated confidently ("My Schedule" card and "74% Weekly Goal vs 41% Project Progress" both appeared once and nowhere else).
2. **Deterministic pixel forensics to settle contested layout** — where transcripts disagreed, decide by code, not eyes: color clustering (found the exact green families + which elements share them), white-fraction row/column scans (card gutters → 3 columns × 2 rows, col A stacks three cards), edge probes (separated the Muzli screenshot's white matte from real UI), point color probes (confirmed the near-black-green Time Tracker sits bottom of column 3).
3. **Rebuild as original components** — tokens in `globals.css`, blocks in `src/blocks/dashboard/`, data in `src/data/`; nav links are `href="#"` placeholders.
4. **Verify like the NittoNova flow, plus visual checks** — `npm run build` (types + fonts + prerender), curl 46 expected strings, headless-Chrome screenshots at 1440px and 390px, pixel-verify the chart hues actually render, mobile horizontal-overflow probe, and a side-by-side reference-vs-ours comparison.
5. **Dataviz discipline carried over** — palette run through the CVD validator (adjacent-pair ΔE passes; the light-green step knowingly sits outside the categorical lightness band because the reference owns the palette — covered with legend labels, a value axis, and `<title>` values on every bar), thin marks, solid hairline grid, `tabular-nums` only in the timer.

#### Our output vs the reference

- **Matched:** full card structure and grid, exact palette families, all visible copy (headings, names, dates, times, badge "16", 01:24:08), chart forms (bar pairs per day, donut proportions, meters), responsive behavior
- **Scored ~82/100 in a blind side-by-side vision comparison** — the residual gap is micro-spacing, the Time Tracker's wavy texture (we used gradient + rings instead), and details that were simply unreadable at thumbnail resolution (a few caption texts and small icon shapes are best-consensus, not certain)
- **Caught and fixed during review:** stat numbers resized to 36px; one green gotcha below

#### Lessons added to the pile

- **React Compiler forbids mutation during render** (`react-hooks/immutability`): the donut's running `offset += len` accumulator inside `.map()` was rejected — precompute cumulative starts with `slice().reduce()` instead.
- **Canonical Tailwind v4 classes again:** the IDE linter asks for `pl-62` over `pl-[248px]` and `max-w-290` over `max-w-[1160px]` — arbitrary values that land on the 4px scale should use scale names.
- **Never screenshot a stale `next start`**: a prod server that survived a rebuild served mismatched HTML/CSS and rendered a garbage green wall; always restart the server before visual verification, and sanity-check the screenshot's color histogram (canvas gray present) before trusting it.
- **Font swaps are cheap when tokens are respected** — one variable + one `--font-sans` line moved the whole page from Poppins to Google Sans Flex (~44k pixels re-rendered, verified by diff).

## Where this goes next

- More **replication studies** of other websites — each one teaches a different design vocabulary (e-commerce, SaaS, editorial — dashboard now done via Donezo)
- More **from-scratch builds** with no reference — design systems, blocks, and full pages invented here
- Reusable patterns accumulate in `src/components/` and the token setup in `globals.css`, so every study starts faster than the last
