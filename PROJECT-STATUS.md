# NB Polyfilms — Project Status

Snapshot of what is built versus what is still waiting on assets or decisions. Last updated **3 September 2026**.

**Branch:** `main`
**Remote:** `https://github.com/mvrphanindran/nb-polyfilms-website.git`

---

## Current state

The site has been fully restructured into seven pages with real generated photography integrated across nearly every section — Home, About NB, Solutions, Capabilities (partial), Industries, and Quality all now carry finished images rather than brochure stills or empty placeholders. It is **not** launch-complete: contact details, client logos, two capability images, and a handful of dead links on the Solutions page still need attention.

---

## Done

### Platform

- Next.js 16 App Router, React 19, Tailwind 4, TypeScript
- Fonts: Archivo (`.font-display`), Inter (body), Inter Tight (`.font-hero`, large display headlines)
- Global design tokens: paper/navy/blue/silver palette, no border-radius anywhere (angular industrial aesthetic), `.field-scrim` / `.field-fade` reusable blue→white photographic transition system (used on Home, About, and Solutions heroes)
- Fixed translucent header: light-on-hero on Home only, frosted glass elsewhere; desktop hover dropdowns (including one nested level under Solutions); mobile overlay menu
- Compact footer with nav, tagline, and copyright bar
- Content centralized in `src/lib/content.ts`, including a full `aboutNB` block sourced from real company material
- SEO metadata per route

### Pages

| Route | Status |
| --- | --- |
| `/` | Hero (image), Positioning (image), Why NB (3 pillars, no images by design), Highlights (4 image tiles), Clients (currently renders nothing), CTA |
| `/about` | New page. Hero, Profile, Why NB, Requirement band, Vision/Mission, Sustainability, closing CTA — 4 images integrated |
| `/solutions` | Rewritten as a standalone page (no longer uses `PackagingSolutions.tsx`, which is now unused). Flexible Laminates hero, Pouches, Rollstock, Shrink Sleeves — all 4 sections now have images. Pouches/Shrink Sleeves "Application" cards still link to routes that don't exist |
| `/capabilities` | Lead image + six-step process rail (all 6 images) + four capability cards (2 of 4 have images — Extrusion and Slitting & Rewinding are intentionally empty, no source asset yet) |
| `/industries` | Ten industries, one supporting image added; still not linked from the header nav (reachable via footer + Home highlight tile only) |
| `/quality` | Intro + one supporting image + five quality pillars (text only) |
| `/contact` | Layout complete; contact **values** are still placeholders ("Contact information will be published once confirmed by NB Polyfilms") |

### Photography in use

All brochure-extracted images have been removed from the codebase (verified — zero references anywhere in `src/`). In their place, 24 newly generated images are wired in:

- **Home:** hero (`brochure/hero-rollstock.png` — an approved upload, not brochure-derived, despite the folder name), Positioning close-up, 4 Highlights tile backgrounds
- **About:** hero, profile hands-on-process shot, requirement-band material cross-section, sustainability mono-material shot
- **Solutions:** Flexible Laminates hero, Pouches lead image, Rollstock lead image, Shrink Sleeve lead image
- **Capabilities:** page lead, 6 process-rail images, 2 of 4 key-capability images (Rotogravure Printing, Lamination)
- **Industries:** one supporting pouch-range image
- **Quality:** one supporting testing-detail image

Logo (`nb-polyfilms-logo.png`) unchanged, used only in header and footer.

---

## Open / blocked on the business

| Item | Where | Need |
| --- | --- | --- |
| Corporate office, manufacturing unit, phone, email, website | Contact page + footer | Real addresses and numbers |
| Client logos | Home "Clients" section | Component currently renders nothing (`Clients.tsx` → `return null`); needs real logos and the section rebuilt, or a decision to drop it |
| Extrusion capability image | `/capabilities` | No generated asset yet |
| Slitting & Rewinding capability image | `/capabilities` | No generated asset yet — do **not** reuse `Process 04-Slitting.png` (that belongs to the process rail) |
| Duplicate-candidate images need a decision | See below | Three sections each have an unused alternate image sitting in `public/images/` |
| Third-party machinery branding visible in two images | `About-hero.png`, `capabilities-hero.png` | Both show a legible "WINDMÖLLER & HÖLSCHER" nameplate. Needs confirming this is genuinely NB Polyfilms' own equipment before publishing |
| `nb-polyfilms-product-range.png` | Approved asset, currently unused | No section has a clearly appropriate slot for it yet |
| Stray file in `public/` | `Videos - Shortcut.lnk` | A Windows shortcut file, not a real asset. Deliberately **excluded** from the latest commit — still present on disk, untracked, pending a decision to delete |

**Duplicate-candidate images (each pair: one used, one unused alternate sitting in the same folder):**
- About hero → used `About-hero.png`; `Production Floor-Wide Aisle View.png` unused
- Solutions hero → used `Printed Laminate-In-Process.png`; `solutions-hero.png` unused
- Capabilities lead → used `capabilities-hero.png`; `Converting-Line-FullView.png` unused

---

## Code and content gaps (engineering)

| Gap | Notes |
| --- | --- |
| Dead links on `/solutions` | "Application 0X" cards under Pouches and Shrink Sleeves link to `/solutions/pouches/application-0X` and `/solutions/shrink-sleeves/application-0X` — none of these routes exist |
| `PackagingSolutions.tsx` unused | Orphaned since `/solutions` was rewritten as a standalone page |
| Duplicate "Why NB" content | Home's `WhyNB.tsx` (3 pillars) and About's `#why-nb` section (5 different points) both exist under the same anchor id, with different content |
| Duplicate commitments in About | `aboutNB.commitments` (5 items) is rendered twice in the Requirement band — once as generic cards, once individually titled with the same text |
| `structures` in `content.ts` unused | PET/PE, MET PET, foil, BOPP/MET CPP, BOPA/PE — data exists, never rendered |
| Industries not in header nav | Reachable from Home highlights and footer only |
| Contact not in header/footer nav | Only reachable via "Get in Touch" buttons scattered across pages |
| No contact form | Page is address-only; no submit, no email integration |
| Tests / CI | No test suite; lint script exists (`npm run lint`) |
| Production deploy | `metadataBase` assumes `www.nbpolyfilms.com`; hosting/DNS not documented here |

---

## Suggested next work (priority)

1. **Generate the 2 missing capability images** (Extrusion, Slitting & Rewinding) to complete the Capabilities page.
2. **Confirm the 3 duplicate-candidate images** — pick the intended one, decide what to do with the unused alternate.
3. **Confirm machinery branding** in `About-hero.png` / `capabilities-hero.png` is genuinely NB's own equipment.
4. **Decide on `nb-polyfilms-product-range.png`** placement, or leave it as a reserved asset.
5. **Fix the dead Solutions application links**, or build the sub-pages they point to.
6. **Resolve the Why-NB duplication** between Home and About.
7. **Drop in real contact details** once supplied.
8. **Client logos** — rebuild the Clients section or formally remove it.
9. **Delete or relocate** `Videos - Shortcut.lnk`.

---

## How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build: `npm run build`.

**Note:** this project lives inside a OneDrive-synced folder. The dev server's file watcher can occasionally miss changes — restart `npm run dev` if edits stop reflecting.

---

## How to keep this file honest

When a placeholder is filled, a page ships, or scope changes, update the tables above in the same commit. The design rules live in `PROJECT-DESIGN-BRIEF.md`; this file is only status.
