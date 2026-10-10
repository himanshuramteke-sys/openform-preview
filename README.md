# Openform — design asset library prototype

Openform is an early static prototype for a free, community-first design resource index. The visual direction combines an editorial headline and expressive, original sample artwork with a practical library interface.

## Preview
After GitHub Pages finishes building the `main` branch from the repository root, the site is available at:
https://himanshuramteke-sys.github.io/openform-preview/

## Design contract
See [DESIGN.md](DESIGN.md) for the tokens, type, spacing, art direction, component rules, motion, responsive behaviour, accessibility expectations, and acceptance checklist. The design system takes general inspiration from visual discovery platforms and expressive creative tools; it does not reuse their logos, proprietary assets, or brand identity.

## Files
- `index.html` — editorial homepage and featured resources
- `library.html` — searchable and filterable sample library
- `styles.css` — responsive design system and artwork previews
- `app.js` — sample data, search, category filters, sorting, theme toggle, detail modal, SVG export/copy
- `DESIGN.md` — design principles and implementation contract

## Use locally
Open `index.html` in a modern browser. No build step, framework, or package manager is required.

## Current prototype limits
- The 12 entries are sample compositions used to test the browsing experience, not a verified third-party asset catalogue.
- Download/copy exports original sample SVG compositions. They are not production assets or a substitute for final asset licences.
- There is no back end, upload pipeline, member account, moderation, analytics, or contribution workflow yet.
- Google Fonts are loaded externally; system fallbacks are defined.

Before a public launch, replace the sample entries with real assets and include verified file types, licence, author, attribution, preview, and download-source information for every item. Add a contribution and moderation process before accepting community submissions.
