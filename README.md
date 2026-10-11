# Openform — design asset library prototype

Openform is an early static prototype for a free, community-first design resource library.

## Preview
https://himanshuramteke-sys.github.io/openform-preview/

## Design direction
See [DESIGN.md](DESIGN.md). The current direction is based on the supplied references:
- Recent Design for a visual archive with a quiet interface and uneven, image-led browsing.
- Cormorant Garamond + DM Sans from the Fonts In Use reference.
- A spacious floating hero panel and slowly moving blue/cyan grid-gradient field inspired by the supplied hero screenshot and clip.

## Files
- `index.html` — homepage
- `library.html` — image-led searchable library
- `styles.css` — design system and responsive layouts
- `app.js` — sample resource data, filters, search, sort, details, theme, SVG export/copy
- `DESIGN.md` — visual principles and acceptance criteria

## Current limitations
The 12 resource entries are original sample compositions; they are not a verified third-party catalogue. The download/export actions generate original sample SVG files. There is no backend, upload pipeline, member account, contribution workflow, or moderation yet. Before launch, real resources need verified file types, licences, attribution, and author information.


## Current reference pass
Cormorant Garamond + DM Sans, a quiet light/dark hero with a procedural moving gradient field, an image-led library, and an Outway-inspired structured footer. See [DESIGN.md](DESIGN.md).


## Icon system
The interface uses selected Mage Icons stroke SVGs via the official Mage Icons project. They are rendered as CSS masks to inherit the current text colour. Mage Icons is licensed under Apache License 2.0; see the [official licence](https://github.com/Mage-Icons/mage-icons/blob/main/License.txt). The icons are used as part of the website interface, not sold or presented as a standalone icon pack.


## Latest refinement
The homepage uses a full-width, open hero with a CSS mesh gradient inspired by Gradient Lab's mesh mode. The implementation is local CSS rather than an embedded third-party iframe. The homepage footer CTA and navigation now share one footer grid; the library page uses a simpler footer without the CTA block.


## Type pairing
Cormorant Garamond for expressive display typography and DM Sans for readable interface/body text, based on the supplied Fontpair reference.
