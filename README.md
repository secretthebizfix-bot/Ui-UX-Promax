# Better Business Solutions — Premium Agency Website

An ultra-premium, production-ready marketing website for **Better Business Solutions**, a full-service digital agency helping local businesses grow. Built to compete with Apple / Stripe / Linear / Framer / Vercel-grade experiences: glassmorphism, real-time 3D, scroll storytelling, and buttery motion — with light/dark mode, full SEO, and accessibility baked in.

## ✨ Highlights

- **Real-time 3D hero** — an animated, shader-driven gradient orb with floating glass shards and mouse parallax (vanilla Three.js, lazy-loaded, `prefers-reduced-motion` aware).
- **Premium motion system** — Framer Motion + GSAP easing, Lenis smooth scroll, magnetic buttons, text reveal, scroll-triggered fades, animated counters, page transitions.
- **Interactive pricing** — service selector + monthly/annual billing toggle across all six services (Starter / Professional / Enterprise).
- **Glassmorphism + neumorphism** design language with an animated aurora background, custom cursor, scroll progress, floating CTA, back-to-top, and a branded loading screen.
- **Light & dark mode** with system detection and persistence (`next-themes`).
- **SEO complete** — per-page metadata, OpenGraph + Twitter cards, JSON-LD (Organization, Website, Service, FAQ, Breadcrumbs), dynamic `sitemap.xml`, `robots.txt`, canonical URLs, web manifest.
- **Accessible** — semantic landmarks, skip link, keyboard-friendly nav, focus rings, `aria` labels, reduced-motion support, AA contrast.
- **Fully responsive** — mobile-first, tested at 375 / 768 / 1024 / 1440.

## 🧱 Tech Stack

| Area | Choice |
|------|--------|
| Framework | **Next.js 15** (App Router) + React 19 |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS** + CSS variables (design tokens) |
| UI primitives | **shadcn/ui**-style components on **Radix UI** |
| Animation | **Framer Motion**, **GSAP** easing, **Lenis** smooth scroll |
| 3D | **Three.js** (vanilla, dynamically imported) |
| Icons | **lucide-react** + **react-icons** |
| Toasts | **sonner** |
| Theming | **next-themes** |

> 3D uses vanilla Three.js (not React Three Fiber) so the dependency tree stays clean and installs reliably. The scene lives in a client-only, dynamically imported component with an SSR-safe fallback.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## 📁 Project Structure

```
app/                      # App Router pages, layout, SEO routes
  page.tsx                # Home (all sections)
  about/  services/  services/[slug]/
  pricing/  contact/
  refund-policy/  privacy-policy/  terms/
  not-found.tsx           # Custom 404
  sitemap.ts  robots.ts  manifest.ts  globals.css
components/
  ui/                     # Button, Card, Accordion, inputs, SpotlightCard, ...
  layout/                 # Navbar, Footer, mega menu, mobile nav, logo
  sections/               # Hero, Pricing, Portfolio, Testimonials, FAQ, ...
  three/                  # Three.js hero scene + dynamic wrapper
  common/                 # Cursor, Reveal, Counter, Magnetic, ScrollProgress, ...
  providers/              # Theme, smooth scroll, toasts, chrome
hooks/                    # media query, mounted, mouse position, scroll spy
lib/                      # utils, constants, SEO helpers
data/                     # services, testimonials, FAQ, portfolio, legal copy
types/                    # shared TypeScript types
public/                   # favicon.svg, og.svg
styles/
```

## 🎨 Design Tokens

The brand palette is defined as HSL CSS variables in `app/globals.css` and mapped in `tailwind.config.ts`:

| Token | Light | Role |
|-------|-------|------|
| Primary | `#0F172A` | Deep slate — text & dark surfaces |
| Secondary | `#2563EB` | Blue — primary actions |
| Accent | `#06B6D4` | Cyan — highlights & 3D |
| Highlight | `#14B8A6` | Teal — success & accents |
| Background | `#F8FAFC` | App background |

Fonts: **Sora** (display), **Inter** (body), **JetBrains Mono** (mono) via `next/font`.

## 🔌 Wiring Up Real Data

A few spots are intentionally front-end only and ready to connect:

- **Contact form** (`components/sections/contact-form.tsx`) and **newsletter** (`components/layout/newsletter-form.tsx`) simulate submission. Point them at a Next.js Route Handler, CRM, or email service (e.g. Resend).
- Update business details, socials, and the production domain in `lib/constants.ts`.
- The contact map uses a keyless Google Maps embed centred on the office address.

## ♿ Accessibility & Performance

- `prefers-reduced-motion` disables the 3D loop, smooth scroll, cursor motion, and carousels.
- Fonts use `display: swap`; the 3D bundle is code-split and lazy-loaded.
- Images/embeds are lazy where appropriate; layout shift is minimized with reserved space.

---

© Better Business Solutions. Built with Next.js, Tailwind, Framer Motion & Three.js.
