# BuyBack Capital

German public landing site for BuyBack Capital private-debt / working-capital financing (Re-Commerce).

**Pipeline:** Depth Dashboard admin edits CMS JSON → Mongo `CmsContent` (`key = buyback-capital`) → this Next.js app fetches `GET /api/v1/cms/buyback-capital` (30s ISR) → merges with local defaults → renders landing `/` and share dashboard `/dashboard`.

This app is **frontend-only**. There is no Express server here. Persistence and CMS writes live in [`../Depth_Dashboard/server`](../Depth_Dashboard/server/README.md). The authenticated investor portal is [`../Depth_Dashboard/client`](../Depth_Dashboard/client/README.md) — **do not** share `/dashboard` here with prospects; share `/`.

UI language is German. Branding: purple + white.

**Live:** [https://buy-back-capital.vercel.app](https://buy-back-capital.vercel.app)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

| Symbol | Piece | Choice |
|--------|-------|--------|
| ⬛ | Framework | Next.js 16 App Router (React Server Components) |
| ⚛️ | UI | React 19, TypeScript, Tailwind CSS v4 |
| ✨ | Motion | Framer Motion (`Reveal`) |
| 🎨 | Icons | Lucide |
| 📡 | CMS | Fetch Depth Dashboard `GET /api/v1/cms/buyback-capital` |
| ☁️ | Hosting | Vercel |

No Redux, Zustand, auth, or Mongo in this repo. Copy is CMS-driven (with hardcoded defaults as fallback).

---

## Structure

| Path | Role |
|------|------|
| `src/app/page.tsx` | Public landing (share this with prospects) |
| `src/app/dashboard/page.tsx` | Lightweight “Investor Area” — share card + stats (not the Depth portal) |
| `src/lib/cms/` | Types, default JSON, fetch + deep-merge |
| `src/components/sections/` | Landing sections (Hero → CTA) |
| `src/components/` | Chrome: `SiteHeader`, `SiteFooter`, `BrandMark`, share widgets |

There is **no** `client/` or `server/` package. Depth Dashboard owns those.

---

## Quick start

```bash
cd BuyBack-Capital
npm install
# .env.local (optional): NEXT_PUBLIC_API_URL=http://localhost:5000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

Point `NEXT_PUBLIC_API_URL` at a running Depth Dashboard API so CMS edits from **BuyBack Landing CMS** (`/admin/buyback-cms`) show up here. If the fetch fails, the site still renders `src/lib/cms/defaults.ts`.

---

## How CMS data works

```text
Admin (Depth Dashboard)
  PUT /api/v1/cms/buyback-capital  { content }
        ↓
Mongo CmsContent { key: "buyback-capital", version, content }
        ↓
BuyBack Capital  getBuybackCmsContent()
  GET {NEXT_PUBLIC_API_URL}/api/v1/cms/buyback-capital
  next: { revalidate: 30 }
        ↓
mergeWithDefaults(api.content, defaultBuybackContent)
        ↓
Landing + dashboard sections
```

| Rule | Behavior |
|------|----------|
| Public read | `GET /cms/buyback-capital` is unauthenticated |
| Admin write | Depth Dashboard only (`PUT` + `POST …/reset`) |
| Merge | Nested objects deep-merge; arrays **replace** |
| Fallback | Network / invalid payload → `defaultBuybackContent` |
| Cache | ISR 30 seconds (`fetch` `revalidate: 30`) |

Edit live copy in Depth Dashboard → **Website → BuyBack Landing CMS**. Sections: `site`, `chrome`, `landing`, `dashboard`. Reset restores server defaults (same shape as this repo’s `defaults.ts`).

---

## Content shape (`BuybackCmsContent`)

| Key | Used by | What’s inside |
|-----|---------|----------------|
| `site` | layout metadata, share, WhatsApp, brand | `locale`, `brand` (monogram / BuyBack / Capital), `contact`, `share`, `metadata.landing` + `metadata.dashboard` |
| `chrome` | `SiteHeader`, `SiteFooter` | Header nav label/href; footer tagline + links |
| `landing` | `/` | Hero, how-it-works, key facts, business model, investment structure, security, private placement, team, share block, CTA |
| `dashboard` | `/dashboard` | Intro, share card, stat tiles, next steps, quick-access CTAs |

Default pitch numbers (until CMS overrides): **12,5 %** financing fee, **12–24** months, **ab 50.000 €**, round **2,5 Mio €** / max **20** investors, WhatsApp `+49 173 214 2293`.

---

## Pages

| Route | Who | What it does |
|-------|-----|----------------|
| `/` | public | Full pitch page. **This** is the link investors should forward. |
| `/dashboard` | public | Share-focused “Investor Area”: open/copy landing URL, condition tiles, next steps, WhatsApp. No login. |

`/` section order: Hero → HowItWorks → KeyFacts → BusinessModel → InvestmentStructure → Security → PrivatePlacement → Team → ShareLandingSection → CTA.

`html lang=de`. Fonts: Inter + Playfair Display.

---

## Coding structure

```text
BuyBack-Capital/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # fonts, lang=de, default metadata
│   │   ├── globals.css             # Tailwind v4, purple tokens
│   │   ├── page.tsx                # landing (RSC, CMS fetch)
│   │   └── dashboard/
│   │       ├── layout.tsx          # passthrough
│   │       └── page.tsx            # share dashboard (RSC, CMS fetch)
│   ├── components/
│   │   ├── BrandMark.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── Reveal.tsx              # Framer Motion in-view
│   │   ├── SectionLabel.tsx
│   │   ├── ShareLandingSection.tsx
│   │   ├── dashboard/DashboardShareCard.tsx
│   │   └── sections/               # Hero, HowItWorks, KeyFacts, …
│   └── lib/cms/
│       ├── types.ts                # BuybackCmsContent
│       ├── defaults.ts             # fallback JSON
│       └── fetch.ts                # getBuybackCmsContent + deepMerge
├── public/                         # static images referenced by CMS (logos, team, warehouse)
└── README.md
```

### Patterns to follow

- **RSC first.** Pages call `getBuybackCmsContent()` and pass slices into presentational components. Do not add a client store for CMS.
- **Defaults as types.** New fields belong in `types.ts` **and** `defaults.ts`, and in Depth Dashboard `server/src/constants/defaultBuybackContent.ts` so admin reset stays in sync.
- **Share `/`, not `/dashboard`.** Copy on both pages says prospects should get the landing URL.
- **No auth.** Login, portfolios, and repayment schedules belong in Depth Dashboard.

---

## Implemented features

| Feature | Status |
|---------|--------|
| CMS fetch + deep-merge + 30s revalidate | Implemented |
| Offline / API-down fallback to `defaults.ts` | Implemented |
| Landing sections (hero through CTA) | Implemented |
| Share landing (Web Share API + clipboard) | Implemented |
| Dashboard share card + stats + WhatsApp CTA | Implemented |
| Dynamic `generateMetadata()` from CMS | Implemented |
| Investor login / schedules / documents | **Not here** — Depth Dashboard |
| CMS write UI | **Not here** — Depth `/admin/buyback-cms` |

Static assets expected under `public/` as referenced by CMS (`/images/…` for partners, team photos, warehouse). Missing files 404 in the browser; copy still renders.

---

## Production

```text
NEXT_PUBLIC_API_URL=https://your-depth-api.example.com
```

No cookies or JWT in this app. The API GET is public. Keep Depth `CORS_ORIGIN` updated only if you add browser-side fetches; the current fetch runs on the Next server.

Companion: Depth portal [https://private-debt-investor-frontend.vercel.app](https://private-debt-investor-frontend.vercel.app)

<!--
## Keeping this README current
When landing sections, CMS types, or fetch behavior change, update this file
and keep Depth Dashboard CMS defaults in sync.
-->
