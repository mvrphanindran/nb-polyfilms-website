# NB Polyfilms — Project Status

Snapshot of what is built versus what is still waiting on assets or decisions. Last updated **31 August 2026**.

**Branch:** `main` (baseline commit: *Initial NB Polyfilms website baseline*)  
**Remote:** `https://github.com/mvrphanindran/nb-polyfilms-website.git`

---

## Current state

The marketing site is a complete structural baseline: six routes, shared header/footer, design tokens, brochure photography on most sections, and a central content store. It is suitable as a visual and IA foundation. It is **not** launch-complete: contact details, client logos, one product image, and several unused brochure assets still need wiring or supply from the business.

---

## Done

### Platform

- Next.js 16 App Router, React 19, Tailwind 4, TypeScript
- Global layout: Archivo + Inter, paper/navy/blue tokens, clip utilities, field scrim/fade
- Fixed header (home light-on-hero → frosted after scroll; desktop dropdowns; mobile overlay with scroll lock)
- Footer with nav, tagline, copyright, est. 2003
- SEO metadata and Open Graph on the root layout; per-page titles/descriptions on inner routes
- Content centralized in `src/lib/content.ts` with a no-unsourced-claims rule

### Pages

| Route | Status |
| --- | --- |
| `/` | Hero, positioning, why NB, highlights, clients placeholder, CTA |
| `/solutions` | Featured lineup + five product areas (shrink sleeves image missing) |
| `/capabilities` | Six-step process rail + factory band + four capabilities |
| `/industries` | Ten industries; page exists, not in header |
| `/quality` | Lab split + five quality pillars with header anchors |
| `/contact` | Layout complete; field **values** are placeholders |

### Photography in use

Brochure stills for hero, facility, why-NB products, solutions (laminates, pouches, rollstock, barrier), process steps, factory floor, capability thumbs, quality lab, industries materials roll. Logo in header, footer, and favicon.

---

## Open / blocked on the business

These are visible on the site as honest placeholders. Do not fake data.

| Item | Where | Need |
| --- | --- | --- |
| Corporate office, manufacturing unit, phone, email, website | Contact page + footer | Real addresses and numbers |
| Client logos | Home “Our Clients” (6 slots) | Approved logo files and permission |
| Shrink sleeves photography | `/solutions#shrink-sleeves` | Product/production still |

Until those arrive, keep “To be added” / “Client logos to be added” / “Photography to be added”.

---

## Code and content gaps (engineering)

| Gap | Notes |
| --- | --- |
| `structures` in `content.ts` unused | PET/PE, MET PET, foil, BOPP/MET CPP, BOPA/PE plus `structure-01.jpg`–`05.jpg` are ready but not rendered |
| Unused brochure files | `formats-lineup.jpg`, `materials-stack-render.jpg` (and the structure set above) |
| Header vs footer labels | Header: “Infrastructure”; footer: “Capabilities”; both point at `/capabilities` |
| Industries not in header | Reachable from home highlights and footer only |
| No contact form | Page is address-only; no submit, no email integration |
| README | Still the create-next-app default; does not describe this product |
| Tests / CI | No test suite; lint script exists (`npm run lint`) |
| Analytics | Not implemented |
| Production deploy | `metadataBase` assumes `www.nbpolyfilms.com`; hosting/DNS not documented here |

---

## Suggested next work (priority)

1. **Drop in real contact details** once supplied — single source if possible so header CTA, contact page, and footer stay in sync.
2. **Client logos** — replace the six patterned slots; do not invent brand names.
3. **Shrink sleeves image** — remove the navy placeholder.
4. **Decide whether to show laminate structures** — content and images exist; either add a structures module (likely on solutions or capabilities) or delete unused data/assets.
5. **IA polish** — one name for capabilities/infrastructure; optional Industries in header.
6. **Replace README** with how to run, content rules, and links to this brief and status file.
7. **Launch extras** (when asked): contact form, analytics, deploy checklist.

---

## How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build: `npm run build`.

---

## How to keep this file honest

When a placeholder is filled, a page ships, or scope changes, update the tables above in the same PR. The design rules live in `PROJECT-DESIGN-BRIEF.md`; this file is only status.
