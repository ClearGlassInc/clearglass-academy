# ClearGlass Academy

Professional learning and certification portal for [ClearGlass Inc.](https://www.clearglassinc.com/)

**Canonical live URL after merge into the main site:** https://www.clearglassinc.com/academy.html

## What’s in this repository

| Path | Purpose |
|---|---|
| `academy.html` | Production Academy page (search, filters, paths, progress, compare, certificate preview) |
| `index.html` | Same page, for GitHub Pages root |
| `data/academy.json` | Course catalog |
| `data/clearglass_learning_navigation.json` | Portal navigation JSON |
| `site-patches/` | Drop-in replacements for the main site repo (`nav.js`, `products.html`, `sitemap.xml`, `data/products.json`, `data/catalog.json`) |

## Honesty

Certificates are issued by ClearGlass Inc. as professional development credentials. They are **not** university degrees, **not** security clearances, and **not** a substitute for licensed designations.

## Merge into `ClearGlassIncorporated-Desmond`

Copy:

- `academy.html` → repo root
- `data/academy.json` → `data/academy.json`
- `data/clearglass_learning_navigation.json` → `data/`
- `site-patches/nav.js` → `nav.js`
- `site-patches/products.html` → `products.html`
- `site-patches/sitemap.xml` → `sitemap.xml`
- `site-patches/products.json` → `data/products.json`
- `site-patches/catalog.json` → `data/catalog.json`

The GitHub App token cannot write `main` on the live site repository (contents write blocked by integration/ruleset). This repo is the writable delivery vehicle.
