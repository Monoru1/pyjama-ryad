# AGENTS.md — La Maison des Pyjamas

## Project Overview
Premium multi-page website for "La Maison des Pyjamas", a real pyjama boutique in Cotonou, Bénin.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Design System
Colors defined in `app/globals.css` as CSS variables:
- `--brun-nuit: #1C1410` (primary dark)
- `--creme: #F5EFE6` (background/light)
- `--terre: #C8956C` (accent/CTA)
- `--lin: #E8D5B7` (borders/secondary)
- `--lin-doux: #F0E6D6` (section backgrounds)
- `--brun-moyen: #4A3728` (body text medium)

Typography:
- **Display**: `Cormorant Garamond` (serif, elegance)
- **Body**: `DM Sans` (clean, readable)

## File Structure
```
app/
  globals.css          — Design tokens, global styles
  layout.tsx           — Root layout (Navbar + Footer)
  page.tsx             — Homepage
  adultes/page.tsx     — Adults collection
  enfants/page.tsx     — Children collection
  catalogue/page.tsx   — Full catalogue
  a-propos/page.tsx    — About page
  contact/page.tsx     — Contact page
  components/
    Navbar.tsx          — Fixed navbar with scroll effect
    Footer.tsx          — Full footer with contact info
    ProductCard.tsx     — Reusable product card
  data/
    products.ts         — All product data (type: Product)
```

## Real Business Data (verified)
- **Address**: En face du petit marché de Kindonou, même alignement que la Pharmacie Kindonou, Cotonou, Bénin
- **Phone**: +229 01 97 33 88 43
- **WhatsApp**: https://wa.me/22997338843
- **Instagram**: https://www.instagram.com/lamaisondespyjamas2025/
- **Facebook**: https://www.facebook.com/61563460230523/
- **Slogan**: "Dormez Autrement Avec Nos Pyjamas"

## Image Strategy
All images are temporary from Unsplash (coherent and professional).
Images are structured for easy replacement — just swap the `image` URL in `app/data/products.ts`.

## Product Data
All products defined in `app/data/products.ts` with type:
```ts
type Product = {
  id: string
  name: string
  category: 'adulte' | 'enfant'
  subcategory: string
  description: string
  sizes: string[]
  price: string  // in FCFA, placeholder — update with real prices
  image: string
  badge?: string
}
```

## CSS Classes
- `.btn-primary` — dark filled CTA
- `.btn-outline` — transparent with border (on dark bg)
- `.btn-terre` — terracotta accent CTA
- `.product-card` — hover lift + shadow
- `.section-padding` — responsive padding utility
- `.nav-link` — underline hover animation

## Deployment
- **Netlify**: `netlify.toml` configured, uses `@netlify/plugin-nextjs`
- **Build**: `npm run build`
- **Publish dir**: `.next`

## Improvement Areas for Codex
1. Add product filtering (by subcategory, size) with client-side state
2. Add WhatsApp floating button (bottom-right)
3. Add scroll-to-top button
4. Add page transitions (Framer Motion)
5. Improve mobile product card layout
6. Add testimonials/avis section on homepage
7. Add a search bar in catalogue
8. Optimize images with Next.js `<Image>` component
