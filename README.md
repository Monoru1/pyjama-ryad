# La Maison des Pyjamas

Site officiel de **La Maison des Pyjamas**, boutique de pyjamas et vêtements de confort située à **Kindonou, Cotonou, Bénin**.

## Stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS 4 avec tokens dans `app/globals.css`
- Lucide React pour les icônes
- Netlify avec `@netlify/plugin-nextjs`

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Vérification

```bash
npm run lint
npm run build
```

## Architecture

```text
app/
  components/
    sections/       Sections réutilisables de page
    ui/             Primitives UI simples
    Footer.tsx
    Navbar.tsx
    ProductCard.tsx
  data/
    products.ts     Catalogue typé + helpers de filtrage
    site.ts         Coordonnées, réseaux, navigation
  adultes/
  enfants/
  catalogue/
  a-propos/
  contact/
  globals.css       Design system et utilitaires globaux
```

## Données boutique

- Adresse: En face du petit marché de Kindonou, même alignement que la Pharmacie Kindonou, Cotonou, Bénin
- Téléphone: +229 01 97 33 88 43
- WhatsApp: https://wa.me/22997338843
- Instagram: https://www.instagram.com/lamaisondespyjamas2025/
- Facebook: https://www.facebook.com/61563460230523/

Les coordonnées et liens globaux sont centralisés dans `app/data/site.ts`.

## Catalogue

Les produits sont définis dans `app/data/products.ts`.

Chaque produit contient:

```ts
type Product = {
  id: string
  name: string
  category: 'adulte' | 'enfant'
  subcategory: string
  description: string
  sizes: string[]
  price: string
  image: string
  badge?: string
}
```

Les images actuelles viennent d’Unsplash et sont temporaires. Remplacez les URLs `image` par les photos réelles de la boutique avant une mise en ligne commerciale durable.

## Déploiement Netlify

Le fichier `netlify.toml` configure:

- build: `npm run build`
- publish: `.next`
- Node.js: 20
- plugin: `@netlify/plugin-nextjs`
