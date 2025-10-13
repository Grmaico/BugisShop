## Project snapshot

- Framework: Next.js (App Router) + TypeScript + React 18
- Styling: Tailwind CSS (utility classes throughout components)
- Important folders: `app/` (pages/layout), `components/` (UI pieces), `public/images` (static assets)

## Quick commands

- Start dev server: `npm run dev` (runs `next dev`)
- Build: `npm run build` (runs `next build`)
- Start production: `npm run start` (runs `next start`)

## What to change when updating site copy to "vendas" (sales)

Focus on these files — they contain the visible copy and call-to-action elements that should be swapped to sales-focused content:

- `components/Header.jsx` — main headline, subheadline and primary CTA URL/text. Example currently: "Domine o Poder das IAs" / `Quero começar agora` and `https://sualandingdevendas.com`.
- `components/Benefits.jsx` — card titles (`benefits` array) and descriptions. Replace with product/offer benefits like "Entrega rápida", "Garantia", "Suporte 24/7".
- `components/AudienceLab.jsx` — audience bullets and CTA button `QUERO O LABORATÓRIO`.
- `components/FeedbackCarousel.jsx` — feedback objects (name/text/image). Populate with product testimonials or product images in `public/images/`.
- `app/layout.tsx` — site `metadata.title` and `metadata.description`.
- `app/page.tsx` — entry point wiring — this just composes components; no copy here but keep structure.

Replacement guidance and examples (concrete edits agents can make):

- Header: change `h1` to a sales headline (e.g. "Ofertas Imperdíveis: [Produto]"), update `p` with a concise 1–2 sentence value proposition, and point the CTA `href` to the final landing or placeholder `/#comprar`.
- Benefits: replace the `benefits` array with objects matching { title: string, desc: string } and preserve markup.
- AudienceLab: keep icons and layout; swap copy to target buyer personas (e.g. "Para quem quer economizar" / "Para empreendedores").
- FeedbackCarousel: populate `feedbacks` with real testimonials and images in `public/images/feedback-*.png`.

Notes on conventions to preserve when changing copy:

- Components are JSX files using default exports; keep `export default function ...` signatures to avoid breaking imports.
- Styling relies on Tailwind utility classes — modify text but retain classNames for spacing/visuals.
- Strings are inline in JSX (no i18n): search components for plain Portuguese text to replace.
- Images referenced under `public/` use paths like `/images/feedback1.png` — add new assets there and reference with the same absolute path.

Search patterns for locating visible text quickly:

- Regex: `"[A-Za-zÀ-ú \-\'\"\?\!]{6,}"` inside `components/*` and `app/*` (quick manual scan recommended)
- Plain searches: `quero`, `laboratório`, `Feedbacks`, `Por que participar`, `Domine o Poder`

Edge cases and gotchas

- `FeedbackCarousel.jsx` is client-side only (`"use client"`) and imports `swiper`. When editing images or slides, maintain the `feedbacks` array shape. If you add new packages, update `package.json` and run `npm install`.
- Do not change file extensions: components are `.jsx` currently. Converting to `.tsx` is possible but requires TypeScript types and small build adjustments (not recommended for quick copy swaps).
- `app/layout.tsx` sets the global HTML structure and background gradients — avoid moving or removing the `children` render.

Examples of safe replacements (illustrative):

- Header.jsx — swap the h1 to: `Lançamento: Produto X — Oferta por tempo limitado` and CTA to `href="/#comprar"` with text `COMPRAR AGORA`.
- Benefits.jsx — replace titles with: `Entrega em 24h`, `Satisfação garantida`, `Suporte dedicado`.

Developer workflows relevant to edits

- Dev loop: `npm run dev` (hot reload). Edit `.jsx` files in `components/` and the site updates in the browser.
- Images: place new product images into `public/images/` and reference as `/images/name.png` in components.
- Lint/types: project contains TypeScript setup but many components are `.jsx`. No strict type checking is enforced by the repo scripts; building (`npm run build`) will surface TypeScript/Next.js errors.

When unsure, small safe edits pattern

1. Change copy in a single component (e.g., `components/Header.jsx`).
2. Run dev server locally and visually confirm layout and CTA functionality.
3. Commit with message: `docs(copy): update header for product launch`

Files to reference for examples

- `components/Header.jsx` — primary example of headline, CTA and link.
- `components/Benefits.jsx` — data-driven benefits array.
- `components/AudienceLab.jsx` — persona bullets and CTA.
- `components/FeedbackCarousel.jsx` — image-driven carousel slides.
- `app/layout.tsx` — global metadata and document wrapper.

If you add a new landing or purchase flow

- Add a route under `app/` (e.g., `app/comprar/page.tsx`) that reuses existing components or creates new ones. Keep it server-renderable unless it needs client interactivity.

Ask me to iterate if any section is unclear or if you want the tool to perform bulk copy replacements across files.
