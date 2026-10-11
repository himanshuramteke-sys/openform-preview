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


## 1.0 — Gradient Lab and interaction sound
- Hero background embeds the provided Backgrounds Supply Gradient Lab “curtains” configuration, recoloured with Openform blue/cyan/mint/lavender stops.
- Animation speed increases from 0.07 to 0.10. Light/dark mode switches between dedicated embedded palettes.
- Page content uses the same responsive gutter token and maximum content width to keep the header, hero, idea section, featured resources and footer aligned.
- Hover and click feedback sounds are synthesized locally through Web Audio; no third-party sound assets are copied or downloaded. The sound toggle is persistent, and browsers unlock audio only after a user gesture.


## 1.2 — Final footer and gradient cleanup
- Removed the duplicate Community links, while retaining the primary footer CTA.
- Removed the descriptive tagline beside the Openform wordmark and its dividing line.
- Added a “Made by Himanshu Ramteke” credit linked to the portfolio.
- Removed overlapping custom gradient captions so the Gradient Lab attribution stays legible.
- Increased curtain movement speed to 0.18. Dark mode starts with deeper near-black colour stops and a more pronounced dark fade at the top.
- Rebuilt both Gradient Lab presets from valid JSON, preserving the same settings structure.


## 1.3 — Accessibility and contrast pass
- Updated against WCAG 2.2 AA with relevant UXDT guidance for visual accessibility, keyboard operation and responsive reflow.
- Raised core interface/body type to a readable scale with 16px body/search copy, 1.5–1.75 line-height and larger controls.
- Reworked light/dark semantic colours and the hero contrast veil. Restored the earlier blue/cyan/mint/lavender palette at the earlier 0.10 speed.
- Added skip links, visible keyboard focus, a live result count, mobile navigation access at narrow widths, forced-colour styling and a static hero fallback for reduced-motion users.
- Sound effects are opt-in by default; both sound controls stay in sync.
- References: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [UXDT visual accessibility](https://www.uxdt.nic.in/guidelines/ux-design-guidelines/enhancing-visual-accessibility/), and [UXDT accessibility testing checklist](https://www.uxdt.nic.in/guidelines/ux-design-guidelines/accessibility-testing-checklist/).


## 1.4 — Homepage interaction and composition polish
- Centered the desktop Library/About links between the wordmark and right-side controls.
- Converted the two hero information points into distinct, contrast-aware frosted cards for both themes.
- Removed the secondary “What is Openform?” hero link and the “Take a look around” CTA; rewrote the idea paragraph in plain language.
- Removed the duplicated footer wordmark and the unnecessary “Independent design resource library” bottom label.
- Increased the Gradient Lab shader speed to 0.20 and added a restrained moving colour veil as a visible animation layer. Reduced-motion users still receive the static gradient.
- Interface sounds default to on but only play in response to user interaction. Each sound control switches the icon/state, persists the preference, and supports pointer and keyboard activation.


## 1.5 — Gradient motion fix
- Corrected the dark Gradient Lab preset to use dedicated near-black, deep-blue, cyan, mint, and indigo colour stops.
- Increased the shader speed to 0.20 in both themes and tightened the supplemental ambient motion from 16 seconds to 14 seconds.


## 1.6 — Library interaction polish
- Removed the redundant “Design” heading so search and sort align to the content row.
- Harmonized sidebar filter active states with category chips, including icon and count colors; hover no longer obscures the selected state.
- Assigned a distinct Layout Grid icon to UI & components instead of reusing the All resources stack icon.
- Corrected select padding, arrow alignment, hover/focus styles, and theme-specific option colours.
- Simplified card metadata: category stays on the preview; the duplicate category badge is removed from the info row, and the format appears as a compact badge in that right-side position.
- The card arrow appears on hover and keyboard focus rather than permanently on every card.
