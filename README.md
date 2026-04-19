# La Maison des Pyjamas — Site Web Officiel

Site web premium multi-pages pour **La Maison des Pyjamas**, boutique spécialisée en pyjamas et vêtements de confort, située à **Cotonou, Bénin**.

## Stack Technique

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — Système de design personnalisé
- **Framer Motion** — Animations
- **Lucide React** — Icônes

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Build & Déploiement

```bash
npm run build
```

Déploiement sur **Netlify** via `netlify.toml` (plugin `@netlify/plugin-nextjs` inclus).

## Structure des Pages

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, catégories, bestsellers, arguments |
| Adultes | `/adultes` | Collection pyjamas/joggings adultes |
| Enfants | `/enfants` | Collection pyjamas enfants |
| Catalogue | `/catalogue` | Toute la collection |
| À Propos | `/a-propos` | Histoire, valeurs, localisation |
| Contact | `/contact` | Téléphone, WhatsApp, réseaux sociaux |

## Données Produits

Tous les produits sont dans `app/data/products.ts`.
Remplacez les champs `image` par les vraies photos de la boutique.
Mettez à jour les `price` avec les tarifs réels.

## Contact Boutique

- **Adresse** : Quartier Kindonou, Cotonou, Bénin
- **Tél** : +229 01 97 33 88 43
- **Instagram** : [@lamaisondespyjamas2025](https://www.instagram.com/lamaisondespyjamas2025/)
- **Facebook** : [La Maison des Pyjamas](https://www.facebook.com/61563460230523/)
