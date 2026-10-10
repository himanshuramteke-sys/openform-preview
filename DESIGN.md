# Openform Design System

Version: 0.2  
Status: prototype design contract

## Product idea
Openform is a community-first visual index for design resources: small things that help people move from browsing to making. The site should feel like a carefully edited creative archive, not a SaaS dashboard, a generic asset marketplace, or a developer template.

## Principles
1. **The work is the interface's main event.** Resource previews should occupy meaningful space, be distinct from one another, and be legible before clicking.
2. **Editorial, not empty.** Big typography, deliberate composition, and generous negative space establish hierarchy. Empty space must feel intentional, not like missing content.
3. **Colour carries meaning.** The interface uses a quiet warm-paper base; cobalt, coral, acid lime, and lavender are reserved for artwork and a few deliberate moments.
4. **Play without clutter.** Use asymmetry, overlapping forms, controlled rotation, and low-amplitude motion. No random blobs, gratuitous gradients, ornamental rules, or effects without a purpose.
5. **Browse first, interact clearly.** Search, category filtering, sorting, previews, format labels, and download actions are consistent and easy to discover.
6. **Community is a promise, not decoration.** Be transparent that current entries are samples. Never imply the placeholder content is a curated, production-ready library.

## Visual references, interpreted rather than copied
- Pinterest: image-first discovery, visible artwork, easy scanning, and card-based exploration.
- Figma: clean structural chrome interrupted by expressive colour blocks and confident type.
- Miro: visual play, diagrammatic compositions, and an energetic creative-tool sensibility.

These references inform general patterns only. Do not reproduce their brand marks, distinctive layouts, copy, assets, or proprietary typefaces.

## Foundations

### Colour tokens
- `--paper`: `#F5F3ED` — main warm canvas.
- `--surface`: `#FFFDF7` — elevated surface and controls.
- `--ink`: `#1B1B19` — primary text and dark actions.
- `--muted`: `#74746D` — secondary text.
- `--line`: `#D6D4CC` — low-contrast borders only when they support structure.
- `--cobalt`: `#4646E8` — strong editorial accent and selected states.
- `--coral`: `#F35D43` — energetic accent.
- `--acid`: `#C7F464` — highlight / ticker / small surface accents.
- `--lavender`: `#E4DFFB` — occasional sample artwork.
- `--dark`: `#1B1B19` — manifesto or inverse sections.

Do not use every accent in every module. Each artwork may use a separate palette, while the controls and navigation remain stable. Check text contrast before placing text on accent colours.

### Typography
- Primary: DM Sans; use variable or available weights sparingly.
- Utility: DM Mono for short metadata, labels, indices, and technical annotations only.
- Display headlines: responsive fluid scale, tight but readable tracking, compact line-height.
- Body: 14–16px with a comfortable line-height. Do not reduce useful text to tiny editorial labels.
- Metadata: typically 8–10px, uppercase, letter-spaced; metadata is supplementary, never the only source of meaning.
- Limit the interface to these two font families. Never use tiny type to create false sophistication.

### Layout and spacing
- Main content max width: 1600px.
- Desktop edge padding: fluid, approximately 5vw; small screens: 18–20px.
- Use a consistent spacing rhythm based on 4px increments.
- Separate sections with whitespace and tonal changes; borders are only for controls or meaningful separation.
- The home page hero is editorial and art-directed. The library page is more utility-led but uses the same type, palette, art language, and hover states.
- Library cards use a responsive 3-column grid on desktop, 2 columns on smaller screens, and one column only where readability requires it. Keep card information aligned and scannable.

### Shape and depth
- Buttons and interactive controls: mostly 4px corners or full pill where the pill is the actual interaction concept; avoid rounding every surface.
- Artwork may use circles, cut shapes, line studies, grid forms, and overlapping geometric shapes.
- Keep interface shadows rare. Artwork can have subtle separation shadows if layering needs them.
- Avoid glassmorphism and overly soft card chrome.

### Motion
- Hover: small lift (2–4px), slight rotation, colour shift, or arrow movement.
- Hero collage: slow low-amplitude movement where it reinforces a tangible, layered composition.
- Timing: 180–350ms for UI; ambient art motion can be longer and subtle.
- Respect `prefers-reduced-motion`. No forced scrolling, auto-playing audio, or animation that delays interaction.

### Components
- Header: wordmark, compact navigation, resource count, theme switch. Keep it visually light.
- Primary CTA: high contrast, plain language, obvious action.
- Search: high-visibility input with keyboard hint; clear button appears only after input.
- Filter chip: visible idle state, strong selected state, real pressed/selected semantics.
- Resource card: image/artwork first, title second, type/category metadata last. Entire card is keyboard-operable.
- Detail dialog: meaningful preview, title, description, category/tags, clear close path, keyboard focus management, sample download and copy actions.
- Empty state: explain the issue simply and offer reset.
- Footer: minimal, consistent, no filler links.

### Accessibility and behaviour
- Semantic HTML and descriptive accessible names.
- Visible keyboard focus indicators.
- 44px target size for primary touch interactions.
- Keep search, filtering, sorting, theme preference, modal open/close, Escape handling, focus restoration, and keyboard shortcut functional.
- Dark mode must preserve contrast and artwork labels.
- Honour reduced-motion preferences.
- No interaction should pretend to fetch a real asset from a server; current downloads are generated local SVG samples.

### Responsive behaviour
- At tablet widths, stack the homepage hero copy above the art panel if side-by-side layout becomes cramped.
- On mobile, maintain the bold headline, simplify labels, reduce collage overlap only as needed, and preserve legible type.
- Library controls wrap or stack cleanly; filter chips remain reachable without tiny hit areas.
- Avoid horizontal page overflow at 320px.

## Content rules
- Mark sample items as samples until real assets replace them.
- Provide asset name, category, format, a plain-language description, and licensing/attribution details before public launch.
- Prefer genuinely usable files over decorative placeholders. Each preview should communicate what the asset actually is.
- Do not scrape or redistribute assets from reference sites without permission.

## Acceptance checklist
- [ ] Homepage has a clear concept and a visually memorable first viewport.
- [ ] Featured resources look distinct, not like copies of one abstract shape.
- [ ] Library search, filters, sorting, details, sample download/copy work.
- [ ] Mobile layout has no clipped type or horizontal overflow.
- [ ] Reduced motion and keyboard navigation are respected.
- [ ] Sample/placeholder status is explicit.
- [ ] No unused decorations, broken links, duplicate IDs, or console errors.
