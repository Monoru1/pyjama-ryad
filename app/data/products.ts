export type Product = {
  id: string
  name: string
  category: ProductCategory
  subcategory: string
  description: string
  sizes: string[]
  price: string
  image: string
  badge?: string
}

export type ProductCategory = 'adulte' | 'enfant'

export const categoryLabels: Record<ProductCategory, string> = {
  adulte: 'Adultes',
  enfant: 'Enfants',
}

export const products: Product[] = [
  // ADULTES — Pyjamas
  {
    id: 'a1',
    name: 'Pyjama Satin Chocolat',
    category: 'adulte',
    subcategory: 'Pyjamas',
    description: 'Ensemble deux pièces en satin doux, col V élégant. Parfait pour une nuit de détente absolue.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '12 500 FCFA',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'a2',
    name: 'Combinaison Pyjama Velours',
    category: 'adulte',
    subcategory: 'Combinaisons',
    description: 'Combinaison une pièce en velours doux, capuche, fermeture zip avant. Chaleur et confort réunis.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '15 000 FCFA',
    image: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=600&q=80',
    badge: 'Nouveauté',
  },
  {
    id: 'a3',
    name: 'Pyjama Lin Naturel',
    category: 'adulte',
    subcategory: 'Pyjamas',
    description: 'Ensemble en tissu lin respirant, coupe décontractée. Idéal pour les nuits chaudes.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '11 000 FCFA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'a4',
    name: 'Pyjama Flanelle Imprimé',
    category: 'adulte',
    subcategory: 'Pyjamas',
    description: 'Douceur flanelle avec motifs discrets. Chemise boutonnée + pantalon ample.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '10 500 FCFA',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
  },
  {
    id: 'a5',
    name: 'Pyjama Coton Premium Uni',
    category: 'adulte',
    subcategory: 'Pyjamas',
    description: 'Coton 100% premium, coupe droite moderne. Disponible en plusieurs coloris.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '9 500 FCFA',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80',
    badge: 'Populaire',
  },
  {
    id: 'a6',
    name: 'Ensemble Pyjama Soie',
    category: 'adulte',
    subcategory: 'Pyjamas',
    description: 'Toucher soie, finitions raffinées. Le luxe à portée de nuit.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '18 000 FCFA',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
    badge: 'Premium',
  },
  // ADULTES — Joggings
  {
    id: 'a7',
    name: 'Jogging Molleton Brun',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Ensemble jogging en molleton doux, coupe moderne. Confort maison ou sortie casual.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '13 000 FCFA',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  },
  {
    id: 'a8',
    name: 'Jogging Oversize Coton',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Style oversize tendance, tissu coton épais. Confort et style à la maison.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '11 500 FCFA',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
  },
  {
    id: 'a9',
    name: 'Set Détente Velours Côtelé',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Pantalon + top coordonné en velours côtelé. Élégance décontractée.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '14 500 FCFA',
    image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
    badge: 'Coup de cœur',
  },
  {
    id: 'a10',
    name: 'Pantalon Détente Large',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Pantalon palazzo en tissu fluide, taille élastiquée. Confort absolu.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '7 500 FCFA',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
  },
  {
    id: 'a11',
    name: 'Hoodie Maison Premium',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Sweat à capuche épais, intérieur polaire. Chaleur et douceur garanties.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '9 000 FCFA',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
  },
  {
    id: 'a12',
    name: 'Set Loungewear Grège',
    category: 'adulte',
    subcategory: 'Joggings',
    description: 'Ensemble deux pièces coloris grège neutre. Parfait pour la maison au quotidien.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: '12 000 FCFA',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&q=80',
  },
  // ENFANTS
  {
    id: 'e1',
    name: 'Pyjama Licorne Rose',
    category: 'enfant',
    subcategory: 'Pyjamas filles',
    description: 'Ensemble pyjama motif licorne, tissu doux jersey. Rêves garantis.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans', '10 ans', '12 ans'],
    price: '6 500 FCFA',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'e2',
    name: 'Combinaison Pyjama Dino',
    category: 'enfant',
    subcategory: 'Pyjamas garçons',
    description: 'Combinaison une pièce dinosaure, capuche avec crêtes. Fun et confortable.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans', '10 ans'],
    price: '7 000 FCFA',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80',
    badge: 'Coup de cœur',
  },
  {
    id: 'e3',
    name: 'Pyjama Étoiles Bleu Nuit',
    category: 'enfant',
    subcategory: 'Pyjamas garçons',
    description: 'Imprimé étoiles sur fond bleu profond. Douceur coton pour petits explorateurs.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans', '10 ans', '12 ans'],
    price: '5 500 FCFA',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80',
  },
  {
    id: 'e4',
    name: 'Ensemble Pyjama Fraise',
    category: 'enfant',
    subcategory: 'Pyjamas filles',
    description: 'Motifs fraises acidulés, tissu jersey doux. Couleurs vives et gaies.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans'],
    price: '6 000 FCFA',
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80',
  },
  {
    id: 'e5',
    name: 'Pyjama Animaux Safari',
    category: 'enfant',
    subcategory: 'Pyjamas mixtes',
    description: 'Imprimé animaux de la savane, tissu souple. Pour les petits aventuriers.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans', '10 ans', '12 ans'],
    price: '5 800 FCFA',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80',
  },
  {
    id: 'e6',
    name: 'Combinaison Polaire Arc-en-Ciel',
    category: 'enfant',
    subcategory: 'Pyjamas filles',
    description: 'Combinaison polaire multicolore, ultra-chaude. Idéal pour les nuits fraîches.',
    sizes: ['2 ans', '4 ans', '6 ans', '8 ans'],
    price: '8 000 FCFA',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80',
    badge: 'Nouveauté',
  },
  {
    id: 'e7',
    name: 'Pyjama Super-Héros',
    category: 'enfant',
    subcategory: 'Pyjamas garçons',
    description: 'Cape intégrée, imprimé super-héros. Le pyjama qui donne des pouvoirs.',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans'],
    price: '7 500 FCFA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'Populaire',
  },
  {
    id: 'e8',
    name: 'Ensemble Jogging Enfant',
    category: 'enfant',
    subcategory: 'Joggings',
    description: 'Jogging deux pièces molleton doux, confortable au quotidien.',
    sizes: ['4 ans', '6 ans', '8 ans', '10 ans', '12 ans'],
    price: '6 500 FCFA',
    image: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80',
  },
]

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((product) => product.category === category)

export const getProductsBySubcategory = (category: ProductCategory, subcategory: string) =>
  products.filter((product) => product.category === category && product.subcategory === subcategory)

export const getSubcategories = (category: ProductCategory) =>
  Array.from(new Set(getProductsByCategory(category).map((product) => product.subcategory)))

export const getAdultes = () => getProductsByCategory('adulte')
export const getEnfants = () => getProductsByCategory('enfant')
export const getFeatured = () => products.filter((product) => product.badge)
