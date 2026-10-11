# Openform Design System

Version 0.3 — visual direction based on the supplied references.

## Product premise
Openform is an open, community-first index of useful design resources and visual experiments. The aim is a place designers want to browse, not a generic SaaS marketing page or another download directory.

## Taste references and how to interpret them
- **Recent Design** — the library reference. Image-led discovery, compact navigation, category chips, varied preview sizes, low-noise chrome, and a clear sort control. Preserve the sense of a changing visual wall; do not copy its branding or duplicate its exact page.
- **Sommerfest 25 / Fonts In Use** — the selected type pairing is Cormorant Garamond + DM Sans. The reference uses size contrast, alternate/slanted letterforms, and a blend of expressive display typography with practical sans-serif information.
- **Supplied hero screenshot and clip** — quiet outer canvas, floating white panel, compact navigation, a clear headline, restrained supporting details, and one expansive colour field that moves slowly. The field is blue/cyan-led, subtly gridded, and integrated into the panel rather than a floating decorative blob.

## Principles
1. **Art is the primary content.** The library must feel like a curated archive because the resource previews have varied character. Cards should not all be identical boxes.
2. **One hero gesture.** Keep the hero clean. The animated gradient/grid is the major visual event; do not add competing stickers, random shapes, or extra animation.
3. **Elegant contrast, not loud UI.** Warm grey exterior, clean white panel, near-black text, understated borders, and a blue/cyan colour field. Let resource artwork introduce other colours.
4. **Typography does the work.** Cormorant Garamond adds a distinctive editorial voice. DM Sans handles navigation, body copy, controls, labels, and metadata. Avoid adding a third font family.
5. **Keep the library practical.** Categories, search, sort, previews, details, and downloads remain easy to find. Inspiration from Recent Design informs discovery structure, not an exact clone.
6. **Be honest about the prototype.** Current entries and downloads are original samples used to test the experience. Never imply they are a reviewed, production-ready external catalogue.
7. **No decorative noise.** Borders and shadows are for structure. Motion, gradients, and ornament must support the work or explain the space.

## Tokens
- Page exterior: `#EFEEEB`
- Main surface: `#FFFFFF`
- Library surface: `#F7F7F5`
- Main ink: `#171818`
- Muted text: `#858681`
- Border: `#E5E4DF`
- Hero blue: `#4386F5`
- Hero cyan: `#A5E8F4`
- Accent blue: `#3468E9`
- Supporting asset colours: mint `#B8EFDF`, coral `#FF8977`, lavender `#DCDFFB`, lime `#D5F58E`

## Typography
- **Cormorant Garamond:** primary display headlines, selected section headings, and occasional expressive words. Use regular or italic; do not bold it.
- **DM Sans:** navigation, body, resource titles, labels, and controls.
- Hero headline: responsive ~62–103px, tight line-height and modest negative tracking.
- Body copy: 12–15px in the prototype. Keep text short and legible.
- Metadata: 7–9px, always supplementary to a clear title/category.
- No third font family. Use serif/sans contrast rather than many sizes or weights.

## Layout
- Homepage: warm grey surround, large centered white hero panel with rounded corners, compact header, editorial content row, low-key facts to the right, and an animated colour field along the lower panel. Follow with a short purpose section and a few featured resources.
- Library: fixed/sticky left sidebar at desktop, title and concise description at top, search/sort controls, category pills, then a varied masonry-like asset grid. Keep the browser chrome quiet so resource previews remain the focal point.
- Use generous whitespace outside the library grid and tighter spacing inside it.
- On smaller screens, collapse the sidebar into a small brand header; place categories in a horizontally scrollable row and use two gallery columns when practical.

## Interaction and motion
- The hero colour field uses slow, low-amplitude blue/cyan shifts and a fine perspective grid. No sound, forced scroll, or content-blocking intro animation.
- Cards lift only slightly on hover. The open arrow is visible at the lower corner like a gallery affordance.
- Respect `prefers-reduced-motion`.
- Search, category filtering, sorting, modal open/close, Escape handling, focus restoration, keyboard navigation, theme switching, and sample SVG export/copy must work.

## Asset card guidance
- Vary image aspect ratios to create a visual rhythm.
- Distinguish the samples by composition, not just by changing background colours.
- Put the title and format below the image; keep metadata modest and accurate.
- Always label sample resources as samples until the real library is curated.
- Do not copy screenshots or assets from the reference sites. Create an original Openform visual language.

## Acceptance checklist
- [ ] Homepage is clean, spacious, and visually memorable without extra decoration.
- [ ] Cormorant Garamond + DM Sans load correctly.
- [ ] Hero gradient field animates softly and remains secondary to the headline.
- [ ] Library reads like an image archive with uneven preview heights.
- [ ] Category filters, search, sort, dialog, and downloads still work.
- [ ] Mobile layout is usable and has no horizontal page overflow.
- [ ] Reduced-motion preference is respected.
- [ ] Sample status is transparent.


## 0.4 — Latest reference-led update
- The hero uses the Cormorant Garamond + DM Sans pairing and a clean floating-panel composition in both light and dark modes.
- A procedural animated, heat-map-like gradient field replaces the earlier soft static gradient. It changes palette with the theme, has restrained contour/grid detail, and respects reduced-motion settings.
- The library remains a quiet, image-first masonry archive with category chips, search, sorting, and visible artwork.
- The footer now follows an Outway-inspired information architecture: a closing statement/CTA, clear navigation groups, community status, and a concise legal/meta rail. It adapts the structure for Openform and avoids a fake newsletter form when no signup backend exists.


## 0.5 — Interface refinement
- Removed decorative section numbers and serial labels. Category badges show plain counts rather than padded sequence numbers.
- Raised non-headline interface and metadata typography by approximately 2 CSS pixels. Display/headline sizes remain unchanged.
- Increased section separation, card gaps, and footer breathing room while retaining the image-first density of the library.
- Adopted Mage Icons stroke SVGs for navigation and interface actions. The selected icons are used as CSS masks so they inherit current text colour in light and dark themes. Sources are linked from the official [Mage Icons repository](https://github.com/Mage-Icons/mage-icons), licensed under Apache 2.0.


## 0.7 — Full-width hero and integrated footer
- Removed the contained white-card treatment from the homepage hero. Navigation and hero content now sit on a full-bleed canvas.
- Replaced the per-pixel canvas animation with a CSS-only, layered mesh gradient informed by Backgrounds Supply Gradient Lab's soft/mesh shader vocabulary. Separate light and dark palettes preserve readable text and require no external iframe, video download, or animation dependency.
- The gradient uses multiple colour fields, controlled saturation, a subtle grid, and slow motion. Motion stops when reduced motion is requested.
- Consolidated the home footer CTA, brand, navigation, and community links into one grid and one bottom rail. The library footer omits the large CTA section and stays compact.
- Tightened footer copy and adjusted type size/leading, section margins, and layout rhythm at desktop, tablet, and mobile widths.


## 0.9 — Font pairing update
- Display serif: Cormorant Garamond (regular and italic).
- Interface/body sans: DM Sans (400–700).
- The pairing follows the supplied Fontpair reference. Keep the serif for editorial headlines and expressive display moments; use DM Sans for body copy, navigation, filters, metadata, and controls.
