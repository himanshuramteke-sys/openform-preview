# Openform accessibility notes

## Target
WCAG 2.2 Level AA, with relevant UXDT guidance for visual accessibility and usability. This document records the implementation baseline; it is not a conformance certificate.

## Implemented
- 16px core body and search copy with generous line-height; smaller text is limited to secondary metadata and artwork annotations.
- Higher-contrast light/dark semantic palettes, secondary text, controls, placeholders, input borders and footer text.
- Contrast veil over the hero gradient.
- Skip links and 3px visible keyboard focus indicators.
- 44px practical targets for theme/sound controls, primary actions and resource-card affordances.
- Search result count announced politely without announcing the full changing grid.
- Resource cards with accessible names and keyboard activation; dialog with accessible name, close control, Escape dismissal, focus restoration and Tab trapping.
- Sound effects play only in response to user interactions. They are enabled by default as requested, with synchronized toggles to mute them.
- Reduced-motion and forced-colour modes hide the animated cross-origin gradient and show a static fallback.
- Navigation and resource browsing reflow at narrow widths.

## Contrast targets
WCAG AA requires at least 4.5:1 contrast for normal text and 3:1 for large text, with defined exceptions. The hero uses a contrast veil, but its changing cross-origin gradient still needs visual checking in both themes.

## Manual validation still required
- NVDA with Chrome/Firefox and VoiceOver with Safari.
- 200% and 400% browser zoom; 320 CSS-pixel reflow.
- Keyboard-only traversal and focus order.
- Hero text contrast at different gradient positions in both themes.
- Real device touch testing.


## Contrast calculation snapshot (token-level)
The selected body and muted text colours are above 4.5:1 against the corresponding flat light/dark surfaces. The light-mode hero display blue is set to a darker accessible accent. Because the embedded gradient changes over time and is cross-origin, the resulting hero must still be checked visually in a browser; the contrast overlay is intended to keep text above the required threshold across the canvas.


## Latest visual refinements
- Two hero information points use a restrained frosted-glass surface with separate light/dark colour values.
- Navigation links are centred at wide desktop widths while remaining in normal flow at narrower widths.
- The gradient has a CSS motion layer as well as the Gradient Lab animation, and both are disabled in reduced-motion mode.
