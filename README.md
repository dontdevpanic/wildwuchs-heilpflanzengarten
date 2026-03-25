# Wildwuchs — Healing Plant Garden Demo Site (EN)

A fictitious demo website for a healing plant garden, built as a real-world showcase of CSS scroll-driven animations. Part of the **DevPanicZone** vanilla web series.

🌿 **[Live Demo](https://dontdevpanic.github.io/wildwuchs-heilpflanzengarten/)**

## Features

- CSS scroll-driven animations throughout — no animation libraries
- Sticky header shrink via `animation-timeline: scroll(root)` — no JS
- Scroll progress bar via `animation-timeline: scroll(root)`
- `@property` counter animation on stats figures
- Clip-path reveal, parallax, colour shift, card rise & tilt effects
- Scrollspy via `IntersectionObserver`
- Dark mode default, light mode toggle, `prefers-color-scheme` support
- Self-hosted fonts — no Google Fonts requests
- Bilingual: DE / EN (`index.html` / `index-en.html`)
- Semantic HTML, WCAG AA contrast, axe DevTools audited
- No frameworks, no build tools, no dependencies — vanilla HTML / CSS / JS

## Browser Support

Scroll-driven animations require a Chromium-based browser (Chrome 115+, Edge 115+). Firefox and Safari receive a graceful fallback via `IntersectionObserver`.

## Structure

```
wildwuchs/
├── index.html          # German version
├── index-en.html       # English version
├── style.css
├── main.js
├── fonts/
│   └── *.woff2
└── img/
    └── *.jpg
```

## Status

🚧 Work in progress — English version and final images pending.

---

# Wildwuchs — Heilpflanzengarten Demo-Website (DE)

Eine fiktive Demo-Website für einen Heilpflanzengarten, gebaut als Real-Case-Showcase für CSS Scroll-driven Animations. Teil der **DevPanicZone** Vanilla Web Series.

🌿 **[Live Demo](https://dontdevpanic.github.io/wildwuchs-heilpflanzengarten/)**

## Features

- CSS Scroll-driven Animations durchgehend — keine Animation Libraries
- Sticky Header Shrink via `animation-timeline: scroll(root)` — kein JS
- Scroll-Fortschrittsbalken via `animation-timeline: scroll(root)`
- `@property` Counter-Animation auf den Statistik-Zahlen
- Clip-path Reveal, Parallax, Farbwechsel, Card Rise & Tilt Effekte
- Scrollspy via `IntersectionObserver`
- Dark Mode als Standard, Light Mode Toggle, `prefers-color-scheme` Support
- Selbst gehostete Fonts — keine Google Fonts Anfragen
- Zweisprachig: DE / EN (`index.html` / `index-en.html`)
- Semantisches HTML, WCAG AA Kontrast, axe DevTools geprüft
- Keine Frameworks, keine Build Tools, keine Dependencies — Vanilla HTML / CSS / JS

## Browser-Unterstützung

Scroll-driven Animations erfordern einen Chromium-basierten Browser (Chrome 115+, Edge 115+). Firefox und Safari erhalten einen sauberen Fallback via `IntersectionObserver`.

## Dateistruktur

```
wildwuchs/
├── index.html          # Deutsche Version
├── index-en.html       # Englische Version
├── style.css
├── main.js
├── fonts/
│   └── *.woff2
└── img/
    └── *.jpg
```

## Status

🚧 In Arbeit — englische Version und finale Bilder ausstehend.