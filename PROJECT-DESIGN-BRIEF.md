# NB Polyfilms — Project Design Brief

Living brief for the company website. Align new work with this document. Update it when the product, brand, or content rules change.

**Site:** [www.nbpolyfilms.com](https://www.nbpolyfilms.com)  
**Repo:** `nb-polyfilms-website`  
**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript

---

## 1. Purpose

NB Polyfilms is a flexible packaging converter established in 2003. The website is a B2B marketing site: it should look like a manufacturer with integrated capability, not a generic brochure template.

Primary jobs of the site:

1. Explain who we are and what we make, in language a buyer or brand owner can trust.
2. Show packaging formats, manufacturing process, industries, and quality without inventing claims.
3. Drive contact inquiries.

It is not an e-commerce catalog, a CMS-driven blog, or a customer portal.

---

## 2. Audience

- Brand owners and packaging buyers in FMCG and adjacent categories (snacks, spices, tea & coffee, dry fruits, frozen foods, agriculture & seeds, edible oil, pesticides, grocery & household).
- Specifiers who care about structure, barrier, and converting capability (printing, lamination, extrusion, slitting).
- First-time visitors who need orientation in under a minute.

Tone: industrial, precise, confident. Short sentences. No hype, no unsourced stats, no invented certifications.

---

## 3. Content rules

All copy and claims live in `src/lib/content.ts`. Every string must trace back to the supplied NB Polyfilms brochure or to an explicit product-area instruction.

Do **not** add:

- Headcount, plant size, machine counts, or output volumes unless sourced.
- Certification names (ISO, FSSAI, BRC, etc.) unless sourced.
- Client names until logos and permissions exist.
- Contact details until the business supplies them.
- Product claims that go beyond brochure language.

Photography is brochure-sourced and lives under `public/images/brochure/`. The logo is `public/images/nb-polyfilms-logo.png`. Do not use stock photography as a substitute for plant or product shots.

---

## 4. Information architecture

| Route | Role |
| --- | --- |
| `/` | Positioning, why NB, teasers to inner pages, client grid (placeholder), CTA |
| `/solutions` | Five formats: flexible laminates, pouches, rollstock, high barrier packaging, shrink sleeves |
| `/capabilities` | Process rail (raw material → finished product) plus printing, lamination, extrusion, slitting |
| `/industries` | Ten industry verticals |
| `/quality` | Quality control, testing, performance, team, continuous improvement |
| `/contact` | Contact fields (values pending) |

**Navigation notes**

- Header: Home, Solutions (with format anchors), Infrastructure → `/capabilities`, Quality (with quality anchors), Contact. Primary CTA: Get in Touch.
- Footer: Solutions, Capabilities, Industries, Quality, Contact.
- Industries is a full page and is linked from the homepage and footer, but is not a top-level header item. Keep that split unless IA is deliberately changed.
- Header label “Infrastructure” maps to the capabilities page. Footer uses “Capabilities” for the same URL. Prefer one term if the nav is unified later.

Homepage highlights are teasers only. Inner pages own the full story so content is not duplicated.

---

## 5. Visual system

### Colour

Defined in `src/app/globals.css`.

| Token | Role |
| --- | --- |
| Paper `#fafaf9`, white, mist `#eef1f4` | Page grounds |
| Navy 950–700 (`#060f1f`–`#1a3a63`) | Brand field, dark sections, footer |
| Ink / ink-soft / ink-faint | Body and secondary text |
| Blue 600 / 500 (`#1e4fd6` / `#2f63e8`) | Accent, eyebrows, links, selection |
| Silver 300–500 | Text on navy |
| Line / line-dark | Hairline dividers |

Hero and intro fields use navy/blue washes only — never black overlays. Reusable utilities: `.field-scrim` (radial navy → blue wash) and `.field-fade` (mask so photography dissolves into the section background).

### Type

- Display: Archivo (500–700), uppercase tracking on nav, eyebrows, and CTAs.
- Body: Inter (400–600).
- Eyebrows: short rule + small caps + wide tracking in brand blue.

### Layout

- Max width 1440px; horizontal padding `px-6 md:px-10 lg:px-16` via `Container`.
- Fixed 80px header; main content offset with `pt-20`. Home header is light-on-photo until scroll past ~520px, then frosted white.
- Asymmetric grids over uniform card walls. Numbered items (`01`, `02`) as structure, not decoration.
- Angular language: `.clip-notch`, `.clip-notch-sm`, `.clip-diagonal-l` / `-r` on image frames. Do not round everything into generic SaaS cards.
- `StructureLine` is a vertical hairline aligned with the container inset; use it to hold tall sections together.
- `DotGrid` is a quiet industrial motif, used sparingly.

### Motion

Keep motion modest: colour transitions on nav and buttons, image scale on hover (~700ms), opacity on highlight cards. No decorative animation libraries unless a specific interaction requires them.

### Imagery

Prefer production, rollstock, pouches, lab, and factory photography already in `/images/brochure/`. Crop with `object-cover` and explicit `sizes`. Missing shots (currently shrink sleeves) use a navy placeholder labelled “Photography to be added” — do not invent a fake photo.

---

## 6. Component and content model

| Layer | Location | Responsibility |
| --- | --- | --- |
| Routes | `src/app/*/page.tsx` | Metadata + compose one section |
| Layout | `src/components/layout/` | Header, footer |
| Sections | `src/components/sections/` | Page bodies |
| UI primitives | `src/components/ui/` | Container, headings, structure, dots |
| Content | `src/lib/content.ts` | Product areas, process, industries, quality, company meta |

New pages should follow the same pattern: metadata on the route, one section component, copy from the content store.

Anchor IDs on solutions, capabilities, and quality match the header dropdowns (`slugify` of names). Preserve `scroll-mt-28` so the fixed header does not cover headings.

---

## 7. Voice and messaging

**Tagline:** Flexible packaging solutions for a better tomorrow.  
**Positioning:** Packaging that creates possibilities.  
**Hero:** Flexible Packaging / Engineered for Performance.

Recurring idea: integrated converting — from film to finished pack — quality at every stage.

CTAs: Explore Solutions, Get in Touch, Learn more. One conversation-led close: “Great packaging starts with a conversation.”

---

## 8. Technical constraints

- App Router, server components by default. Header is a client component (scroll + mobile menu).
- Images via `next/image`. Logo is used as favicon.
- Metadata: `en_IN`, Open Graph title/description, `metadataBase` = `https://www.nbpolyfilms.com`.
- No contact form, CMS, or analytics in the current brief. Add those only with an explicit product decision.
- Do not expand copy or stats in UI files; edit `content.ts`.

---

## 9. Out of scope (unless requested)

- Online quoting or SKU-level product database
- Multilingual site
- Blog / news
- Authenticated areas
- Invented client case studies

---

## 10. Handoff checklist for new UI work

1. Does the claim exist in the brochure or `content.ts`?
2. Does the layout use the existing type, colour, clip, and container system?
3. Does the homepage still teaser rather than duplicate inner pages?
4. Are contact, clients, and missing photography still honest placeholders until assets arrive?
5. Does mobile nav (full-screen, body scroll lock) still work with the new page?
