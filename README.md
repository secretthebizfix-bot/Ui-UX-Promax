# Better Business Solutions — Digital Agency Website

An ultra-premium, production-ready marketing website for **Better Business Solutions**, a digital agency helping local businesses grow through websites, SEO, Google Business Profile optimization, Google Guaranteed (LSA), graphic design, and social media marketing.

Built to compete with the design quality of Apple, Stripe, Linear, and Awwwards-winning sites — featuring glassmorphism, soft neumorphism, real-time 3D, scroll-based storytelling, and fully responsive dark/light themes.

## ✨ Highlights

- **Interactive 3D hero** — React Three Fiber scene with floating distortion sphere, glass torus, and orbs, plus mouse parallax (self-contained lighting, no external assets, graceful WebGL fallback + error boundary).
- **Premium motion** — Framer Motion reveals, staggered lists, magnetic buttons, animated counters, marquee, page-level scroll progress, and a custom animated cursor.
- **Smooth scroll** — Lenis, with anchor support and full `prefers-reduced-motion` compliance.
- **Dark + Light mode** — `next-themes` class-based theming with semantic design tokens and persisted preference.
- **Complete UX kit** — loading screen, back-to-top, floating CTA, toast notifications, sticky glass navbar with mega-menu, mobile drawer, custom scrollbar.
- **SEO** — per-page metadata, OpenGraph/Twitter cards, JSON-LD (`ProfessionalService` + `ItemList`), canonical URLs, `sitemap.xml`, `robots.txt`, and a PWA manifest.
- **Accessibility** — skip link, focus states, aria labels, semantic landmarks, keyboard-friendly components, WCAG-minded contrast in both themes.

## 🧱 Tech Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS with semantic token layer |
| Animation | Framer Motion + GSAP-style easing, Lenis smooth scroll |
| 3D | Three.js via React Three Fiber + Drei |
| Icons | React Icons (Feather) |
| Theming | next-themes (dark default, light + system) |

## 📄 Pages

Home · About · Services · Pricing · Contact · Refund Policy · Privacy Policy · Terms & Conditions · custom 404

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## 📁 Project Structure

```
app/                 # App Router pages, layout, sitemap, robots, manifest, icon
components/
  common/            # Logo, Cursor, LoadingScreen, ScrollProgress, BackToTop, FloatingCTA, ThemeToggle, PageHero, AnimatedBackground
  layout/            # Navbar, Footer
  providers/         # ThemeProvider, SmoothScroll (Lenis), ToastProvider
  sections/          # Hero, Stats, WhyChooseUs, ServicesShowcase, PricingSection, Process, Portfolio, Testimonials, FAQ, ContactCTA, ContactForm, ServiceDetail, LegalContent, TrustedBy
  three/             # HeroCanvas (dynamic + error boundary) + HeroScene (R3F)
  ui/                # Button, MagneticButton, Reveal, SectionHeading, Counter, Stars, ServiceCard, PricingTiers, PricingExplorer
lib/
  site.ts            # central site config (contact, nav, socials)
  utils.ts           # cn() + helpers
  data/              # services, content, legal copy
public/              # og-image.svg
```

## 🎨 Brand Palette

| Token | Hex |
| --- | --- |
| Primary (navy) | `#0F172A` |
| Secondary (blue) | `#2563EB` |
| Accent (cyan) | `#06B6D4` |
| Highlight (teal) | `#14B8A6` |
| Background | `#F8FAFC` |

## 🔧 Customization

- **Contact / brand details** live in `lib/site.ts`.
- **Services, plans, and pricing** live in `lib/data/services.ts`.
- **Testimonials, stats, FAQ, portfolio** live in `lib/data/content.ts`.
- **Legal copy** lives in `lib/data/legal.ts`.
- The contact form is wired with client-side validation and toasts; connect the `handleSubmit` in `components/sections/ContactForm.tsx` to your email/API provider to receive submissions.

---

© Better Business Solutions. All rights reserved.
