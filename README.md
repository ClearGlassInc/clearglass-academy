# ClearGlass Academy

Professional learning and certification portal for [ClearGlass Inc.](https://www.clearglassinc.com/)

**Canonical live URL after merge into the main site:** https://www.clearglassinc.com/academy.html

**Staging copy (this repo):** https://clearglassinc.github.io/clearglass-academy/

## What’s in this repository

| Path | Purpose |
|---|---|
| `academy.html` | Production drop-in for the live site (relative `/nav.js` and `/assets`) |
| `index.html` | Same portal, asset URLs pointed at www.clearglassinc.com for GitHub Pages |
| `data/academy.json` | Course catalog (16 programs, 6 categories, 4 paths) |
| `data/clearglass_learning_navigation.json` | Portal navigation JSON |
| `site-patches/` | Drop-in replacements for `ClearGlassInc/ClearGlassIncorporated-Desmond` |

## Honesty

Certificates are issued by ClearGlass Inc. as professional development credentials. They are **not** university degrees, **not** security clearances, and **not** a substitute for licensed designations.

## Merge into the live site (`ClearGlassIncorporated-Desmond`)

Copy these files onto `main`:

```
academy.html                                     → academy.html
data/academy.json                                → data/academy.json
data/clearglass_learning_navigation.json         → data/clearglass_learning_navigation.json
site-patches/nav.js                              → nav.js
site-patches/products.html                       → products.html
site-patches/sitemap.xml                         → sitemap.xml
site-patches/products.json                       → data/products.json
site-patches/catalog.json                        → data/catalog.json
```

That adds Academy to the Products mega-menu and the top bar, registers product `cg-077`, and lists `/academy.html` in the sitemap.

The Grok GitHub App is installed only on `ClearGlassInc/clearglass-academy` and `ClearGlassInc/Gaurdian`. It does **not** have contents:write on `ClearGlassIncorporated-Desmond`, so this repo is the writable delivery vehicle until that repo is added to the App.
