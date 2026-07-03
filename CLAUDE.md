# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Anthony Ha-Anh Pham, hosted via GitHub Pages at the domain specified in `CNAME`. No build step, bundler, or package manager is used — the site is plain HTML, CSS, and a small amount of vanilla JavaScript.

## Development

To preview locally, open `index.html` directly in a browser or serve it with any static file server:

```
npx serve .
# or
python -m http.server
```

There are no tests, no linting configs, and no CI pipelines.

## Architecture

The entire site is a single-page layout in `index.html` with four full-width `<section>` elements stacked vertically:

1. **Intro** — hero with profile photo, social links, and a tech stack icon grid
2. **Projects** (`#projects`) — card grid, each card has a header (grows to fill) and a footer with tech tags
3. **Research** (`#research`) — feature cards in a two-column layout (`md:w-1/3` metadata + `md:w-2/3` detail)
4. **Teaching** (`#teaching`) — tabbed interface switching between "Teaching Positions" and "YouTube Content"; tab logic is an inline `<script>` at the bottom of the file using `showTab(tabName)`

**Styling** splits between:
- `styles.css` — custom classes for glassmorphism cards, gradient text/backgrounds, tag variants (`project-tag`, `tech-tag`, `skill-tag`), hover lift effects, the responsive `tech-grid`, and tab button states
- Tailwind CSS (loaded via CDN) — used for layout, spacing, typography, and responsive breakpoints throughout `index.html`

The accent color is `#77BBD5` / `#99ddf7` (light blue). All card types share the same glassmorphism base (`rgba(255,255,255,0.05)` background, `backdrop-filter: blur`, `rgba(255,255,255,0.1)` border) and lift on hover via the shared rule on line 124 of `styles.css`.

**Assets** (`assets/`) hold images referenced directly in `index.html`. Some tech logos are loaded from external Wikimedia/GitHub URLs rather than local files.
