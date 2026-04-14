# Marketing by Besic — Full Site Execution Plan

**Date:** 2026-04-14  
**Audited by:** Roo (Architect Mode)  
**Status:** Plan only — no changes made yet

---

## 🔍 Root Cause Diagnosis

### Issue 1 — Broken Navigation Links (All nav items 404)

**What's broken:**  
The header and footer in [`src/layouts/LayoutAuthority.astro`](../src/layouts/LayoutAuthority.astro) hardcodes links to `/about`, `/architecture`, `/proof`, `/contact`. However, **none of these pages exist at the root level** in `src/pages/`. They only exist under `src/pages/[lang]/` (e.g. `/en/about`, `/de/about`).

**Affected links:**
- `/about` → 404 (page only at `/en/about`, `/de/about`, etc.)
- `/architecture` → 404 (page only at `/en/architecture`, etc.)
- `/proof` → 404 (page only at `/en/proof`, etc.)
- `/contact` → 404 (page only at `/en/contact`, etc.)
- `/proof` in [`newsletter-thank-you.astro`](../src/pages/newsletter-thank-you.astro) → 404
- `/architecture` in root [`index.astro`](../src/pages/index.astro) → 404
- `hero.ctaPrimary.url` = `/contact` in `home.json` → 404 (used in both root and `[lang]` index pages)

**Root cause:** The site architecture uses `[lang]` dynamic routing for all main pages, but the layout still links to non-prefixed paths.

---

### Issue 2 — Translations Never Render

**What's broken:**  
i18n JSON files exist (`src/i18n/en.json`, `de.json`, `fr.json`, `es.json`, `it.json`, `hr.json`) but are **never imported or used** in any component or layout. All text in `LayoutAuthority.astro` is hardcoded English.

**Secondary problem:**  
`astro.config.mjs` defines locales as `['en', 'de', 'fr', 'es', 'it']` — **Croatian (`hr`) is missing**. The `[lang]/` pages include `hr` in `getStaticPaths()`, so Croatian routes will either 404 or not be recognized by Astro's i18n system.

**Also:** `LanguageSwitcher.astro` uses `Astro.currentLocale` which only works correctly when Astro's i18n routing is properly configured and the page is served from a `[lang]` route.

---

### Issue 3 — TinaCMS Admin Not Working

**What's broken:**  
[`tina/config.ts`](../tina/config.ts) reads `clientId` and `token` from env vars `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`. These are **not present in `.env`** — only `SENDFOX_API_TOKEN` is defined (and it's set to a placeholder `your_token_here`).

Without valid Tina credentials, the `/admin` panel cannot authenticate with tina.io cloud.

---

### Issue 4 — Image Placeholders Throughout the Site

Every major page uses either emoji placeholders (🧠, ⚡, 📊) or the `ImagePlaceholder` component with dashed-border boxes. No real images exist in `public/` beyond the logo and favicon.

---

## 📋 Execution Plan

---

### PHASE 1 — Fix Broken Links

**Goal:** Make all navigation links work correctly for both root (`/`) and localized (`/en/`, `/de/`, etc.) routes.

**Strategy:** Create root-level redirect pages for `/about`, `/architecture`, `/proof`, `/contact` that redirect to `/en/[page]`. This preserves the `[lang]` architecture while making the hardcoded header links functional.

#### Tasks

| # | Task | File to Create/Edit |
|---|------|---------------------|
| 1.1 | Create `src/pages/about.astro` — redirect to `/en/about` | `src/pages/about.astro` (new) |
| 1.2 | Create `src/pages/architecture.astro` — redirect to `/en/architecture` | `src/pages/architecture.astro` (new) |
| 1.3 | Create `src/pages/proof.astro` — redirect to `/en/proof` | `src/pages/proof.astro` (new) |
| 1.4 | Create `src/pages/contact.astro` — redirect to `/en/contact` | `src/pages/contact.astro` (new) |
| 1.5 | Fix `/proof` link in `newsletter-thank-you.astro` → `/en/proof` | `src/pages/newsletter-thank-you.astro` line 29 |
| 1.6 | Fix `/architecture` link in root `index.astro` → `/en/architecture` | `src/pages/index.astro` line 26 |
| 1.7 | Fix `ctaSection.ctaUrl` usage in root `index.astro` — `home.json` has `/contact`, needs to be `/en/contact` | `src/content/pages/home.json` line 28 OR `src/pages/index.astro` |
| 1.8 | Fix `hero.ctaPrimary.url` in `home.json` — currently `/contact`, needs to be `/en/contact` for root page | `src/content/pages/home.json` line 8 |

**Implementation pattern for redirect pages:**
```astro
---
// src/pages/about.astro
return Astro.redirect('/en/about', 301);
---
```

---

### PHASE 2 — Fix i18n / Translations

**Goal:** Make the site actually translate based on the current language, and fix the Croatian locale.

#### Tasks

| # | Task | File to Create/Edit |
|---|------|---------------------|
| 2.1 | Add `hr` to `astro.config.mjs` locales array | `astro.config.mjs` line 15 |
| 2.2 | Create `src/i18n/utils.ts` — translation loader utility | `src/i18n/utils.ts` (new) |
| 2.3 | Update `LayoutAuthority.astro` to accept `lang` prop and load translations | `src/layouts/LayoutAuthority.astro` |
| 2.4 | Update all `[lang]/*.astro` pages to pass `lang` prop to layout | All files in `src/pages/[lang]/` |
| 2.5 | Fix `LanguageSwitcher.astro` locale detection — use URL path instead of `Astro.currentLocale` for reliability | `src/components/LanguageSwitcher.astro` |
| 2.6 | Verify `src/i18n/hr.json` exists and has all required keys | `src/i18n/hr.json` |

**Translation utility pattern:**
```typescript
// src/i18n/utils.ts
export function getTranslations(lang: string) {
  const translations: Record<string, any> = {
    en: () => import('./en.json'),
    de: () => import('./de.json'),
    fr: () => import('./fr.json'),
    es: () => import('./es.json'),
    it: () => import('./it.json'),
    hr: () => import('./hr.json'),
  };
  return translations[lang] ? translations[lang]() : translations['en']();
}
```

**Layout update pattern:**
```astro
---
// LayoutAuthority.astro
interface Props {
  title: string;
  description?: string;
  lang?: string;
}
const { title, description, lang = 'en' } = Astro.props;
const t = await getTranslations(lang);
---
<!-- Then use t.nav.about, t.nav.contact, etc. -->
```

---

### PHASE 3 — Fix TinaCMS Admin

**Goal:** Make the `/admin` panel accessible and functional.

#### Tasks

| # | Task | File to Edit |
|---|------|-------------|
| 3.1 | Add `NEXT_PUBLIC_TINA_CLIENT_ID=<your-value>` to `.env` | `.env` |
| 3.2 | Add `TINA_TOKEN=<your-value>` to `.env` | `.env` |
| 3.3 | Add `SENDFOX_API_TOKEN=<your-real-token>` to `.env` | `.env` |

**How to get Tina credentials:**
1. Go to [tina.io](https://tina.io) → Log in → Your project
2. Go to **Settings → API Tokens**
3. Copy `Client ID` → paste as `NEXT_PUBLIC_TINA_CLIENT_ID`
4. Copy `Content Token` → paste as `TINA_TOKEN`

**Note:** TinaCMS admin works in local dev without credentials (local mode). For production, credentials are required.

---

### PHASE 4 — Fix Remaining Broken Internal Links

**Goal:** Fix all remaining hardcoded links that bypass the `[lang]` prefix.

| # | Location | Current Link | Fix |
|---|----------|-------------|-----|
| 4.1 | `[lang]/index.astro` line 41 | `hero.ctaPrimary.url` = `/contact` | Change to `/${lang}/contact` |
| 4.2 | `[lang]/index.astro` line 38 | `/architecture` (hardcoded) | Already fixed as `/${lang}/architecture` ✅ |
| 4.3 | `[lang]/index.astro` line 233 | `/${lang}/contact` | Already correct ✅ |
| 4.4 | `home.json` `ctaPrimary.url` | `/contact` | Change to `/en/contact` (for root page) OR handle in template |

---

### PHASE 5 — Replace Image Placeholders

**Goal:** Replace all emoji/placeholder boxes with real images.

#### Step 5.1 — Create the images folder

Create `public/images/` directory and place all images there.

#### Step 5.2 — Complete Image List

Place all images in **`public/images/`**. Recommended format: `.jpg` or `.webp` for photos, `.svg` for diagrams.

| Filename | Dimensions | Page | Section | Description |
|----------|-----------|------|---------|-------------|
| `about-team-photo.jpg` | 800×500 | `[lang]/about.astro` | Our Identity | Team or founder photo |
| `nlp-framework-visual.jpg` | 600×600 | `index.astro` + `[lang]/index.astro` | NLP Advantage | Brain/psychology concept visual |
| `architecture-pillar-1-nlp.jpg` | 600×600 | `[lang]/architecture.astro` | Pillar I | NLP media / scripting visual |
| `architecture-pillar-2-conversion.jpg` | 600×600 | `[lang]/architecture.astro` | Pillar II | Conversion funnel / flow diagram |
| `architecture-pillar-3-tracking.jpg` | 600×600 | `[lang]/architecture.astro` | Pillar III | CRM dashboard / tracking visual |
| `case-study-1.jpg` | 800×200 | `[lang]/proof.astro` | Case Studies | Case study 1 cover |
| `case-study-2.jpg` | 800×200 | `[lang]/proof.astro` | Case Studies | Case study 2 cover |
| `case-study-3.jpg` | 800×200 | `[lang]/proof.astro` | Case Studies | Case study 3 cover |
| `case-study-4.jpg` | 800×200 | `[lang]/proof.astro` | Case Studies | Case study 4 cover |
| `offer-clinics-hero.jpg` | 1200×600 | `offer-clinics/index.astro` | Hero | Clinic hero image |
| `offer-clinics-problem.jpg` | 800×400 | `offer-clinics/index.astro` | Problem | Revenue leak visual |
| `offer-clinics-solution.jpg` | 800×400 | `offer-clinics/index.astro` | Solution | NRA framework visual |
| `offer-fitness-hero.jpg` | 1200×600 | `offer-fitness/index.astro` | Hero | Fitness/gym hero image |
| `offer-fitness-problem.jpg` | 800×400 | `offer-fitness/index.astro` | Problem | Fitness problem visual |
| `offer-luxury-hero.jpg` | 1200×600 | `offer-luxury/index.astro` | Hero | Luxury brand hero image |
| `offer-luxury-problem.jpg` | 800×400 | `offer-luxury/index.astro` | Problem | Luxury problem visual |
| `offer-restaurant-hero.jpg` | 1200×600 | `offer-restaurant/index.astro` | Hero | Restaurant hero image |
| `offer-restaurant-problem.jpg` | 800×400 | `offer-restaurant/index.astro` | Problem | Restaurant problem visual |
| `blog-post-1-thumbnail.jpg` | 800×450 | `blog.astro` | Blog Grid | "Death of the Marketing Retainer" thumbnail |
| `blog-post-2-thumbnail.jpg` | 800×450 | `blog.astro` | Blog Grid | "EMR Integration" thumbnail |
| `blog-post-3-thumbnail.jpg` | 800×450 | `blog.astro` | Blog Grid | "NLP in Aesthetic Marketing" thumbnail |

#### Step 5.3 — Update ImagePlaceholder component

Once images are added, replace `ImagePlaceholder` component usage with real `<img>` tags:

```astro
<!-- Replace this: -->
<ImagePlaceholder imageName="about-team-photo.jpg" height="500px" />

<!-- With this: -->
<img 
  src="/images/about-team-photo.jpg" 
  alt="Marketing by Besic team" 
  class="w-full h-full object-cover rounded-xl"
  loading="lazy"
/>
```

Also replace emoji placeholder boxes in `index.astro` and `architecture.astro`:

```astro
<!-- Replace this: -->
<div class="bg-bg-secondary border border-white/5 rounded-xl p-8 aspect-square flex items-center justify-center">
  <div class="text-center">
    <div class="text-6xl mb-4">🧠</div>
    <p class="text-text-secondary text-sm">NLP Framework Visual</p>
  </div>
</div>

<!-- With this: -->
<img 
  src="/images/nlp-framework-visual.jpg" 
  alt="NLP Framework Visual" 
  class="w-full rounded-xl object-cover aspect-square"
  loading="lazy"
/>
```

---

## 🗺️ Site Architecture Overview

```mermaid
graph TD
  Root[/ root index.astro] -->|redirect| EN[/en/ index]
  Root -->|nav links broken| About404[/about 404]
  Root -->|nav links broken| Arch404[/architecture 404]
  Root -->|nav links broken| Proof404[/proof 404]
  Root -->|nav links broken| Contact404[/contact 404]

  EN --> ENAbout[/en/about]
  EN --> ENArch[/en/architecture]
  EN --> ENProof[/en/proof]
  EN --> ENContact[/en/contact]

  Fix1[Phase 1 Fix: Add redirect pages] --> About404
  Fix1 --> Arch404
  Fix1 --> Proof404
  Fix1 --> Contact404
```

---

## 📊 Priority Order

| Priority | Phase | Impact | Effort |
|----------|-------|--------|--------|
| 🔴 Critical | Phase 1 — Fix broken links | All nav broken | Low |
| 🔴 Critical | Phase 2 — Fix translations | Site not multilingual | Medium |
| 🟡 High | Phase 3 — TinaCMS credentials | Admin inaccessible | Low (just add env vars) |
| 🟡 High | Phase 4 — Remaining link fixes | Some CTAs broken | Low |
| 🟢 Medium | Phase 5 — Replace image placeholders | Visual quality | High (need real images) |

---

## ✅ Files to Create (New)

| File | Purpose |
|------|---------|
| `src/pages/about.astro` | Redirect → `/en/about` |
| `src/pages/architecture.astro` | Redirect → `/en/architecture` |
| `src/pages/proof.astro` | Redirect → `/en/proof` |
| `src/pages/contact.astro` | Redirect → `/en/contact` |
| `src/i18n/utils.ts` | Translation loader utility |
| `public/images/` | Directory for all real images |

## ✅ Files to Edit (Existing)

| File | Changes |
|------|---------|
| `astro.config.mjs` | Add `hr` to locales array |
| `src/layouts/LayoutAuthority.astro` | Accept `lang` prop, use translations, fix nav links |
| `src/components/LanguageSwitcher.astro` | Fix locale detection |
| `src/pages/index.astro` | Fix `/architecture` and CTA links |
| `src/pages/newsletter-thank-you.astro` | Fix `/proof` link |
| `src/content/pages/home.json` | Fix CTA URLs |
| `src/pages/[lang]/index.astro` | Fix `hero.ctaPrimary.url` usage |
| `src/pages/[lang]/about.astro` | Pass `lang` to layout, replace ImagePlaceholder |
| `src/pages/[lang]/proof.astro` | Pass `lang` to layout, replace ImagePlaceholders |
| `src/pages/[lang]/architecture.astro` | Pass `lang` to layout, replace emoji placeholders |
| `.env` | Add Tina credentials + real SendFox token |
