# Devora Labs — Website Redesign

A redesign of [devoralabs-company.vercel.app](https://devoralabs-company.vercel.app/),
rebuilt from the ground up in **React**.

Original build: Next.js (see [Pixel-Studio](https://github.com/yashindibhagya/Pixel-Studio)).
This version is a lean single-page **Vite + React + TypeScript** app with a fresh
**light, modern** visual identity drawn from the new DevoraLabs logo — **electric-blue
+ lime-green accents**, rounded pill buttons with circular arrow badges, a fanned
**floating-card hero arc**, and bento-style stat cards (design cues taken from the
Catalis / Pallet-Ross reference designs).

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling (custom brand theme in `tailwind.config.js`)
- **Framer Motion** for scroll & entrance animation
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (accents)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  App.tsx                 # page composition
  index.css               # Tailwind layers + design system
  data/site.ts            # all copy & content (single source of truth)
  components/
    Logo.tsx              # SVG brand mark + wordmark
    Navbar.tsx            # sticky nav + mobile menu
    PillButton.tsx        # pill button with circular arrow badge
    Reveal.tsx            # scroll-reveal + section header helpers
    sections/             # Hero (card arc), LogoCloud, Services, Bento,
                          # Benefits, Work, Process, Testimonials, CtaBand,
                          # FAQ, Contact, Footer
                          # Pricing.tsx exists but is currently unused
                          #   (re-add to App.tsx + nav to enable)
public/
  logo.png                # provided DevoraLabs logo (favicon)
  mawprint.png, dashboard.png   # project imagery
```

## Notes

- **Content** is preserved from the original site (services, benefits, projects,
  testimonials, FAQs, contact details) and lives entirely in `src/data/site.ts`.
- The **contact form** is backend-free: it composes a pre-filled `mailto:` to
  `infodevoralabs@gmail.com`. Swap `handleSubmit` in `sections/Contact.tsx` for
  EmailJS or an API endpoint if you want server-side delivery.
- To **deploy** (e.g. Vercel), point it at this folder — framework preset "Vite",
  build command `npm run build`, output `dist`.
# devoralabs
# devoralabs
