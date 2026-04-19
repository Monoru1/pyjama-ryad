import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/ui/Breadcrumb'
import FinalCTA from '../components/sections/FinalCTA'
import PageHero from '../components/sections/PageHero'
import ProductGrid from '../components/sections/ProductGrid'
import SectionHeader from '../components/ui/SectionHeader'
import { getAdultes, getEnfants, products } from '../data/products'

export const metadata = { title: 'Catalogue Complet' }

export default function CataloguePage() {
  const collections = [
    { title: 'Adultes', href: '/adultes', products: getAdultes() },
    { title: 'Enfants', href: '/enfants', products: getEnfants() },
  ]

  return (
    <>
      <PageHero
        eyebrow="Notre univers"
        title={<>Catalogue<br />Complet</>}
        description={`${products.length} modèles soigneusement sélectionnés: pyjamas, joggings et combinaisons pour adultes et enfants.`}
        image="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1500&q=85"
        compact
      />
      <Breadcrumb current="Catalogue" />

      {collections.map((collection, index) => (
        <section key={collection.title} className={`section ${index % 2 === 0 ? 'bg-[var(--creme)]' : 'bg-white'} border-b border-[var(--lin)]`}>
          <div className="container">
            <SectionHeader
              eyebrow="Collection"
              title={collection.title}
              description={`${collection.products.length} modèles disponibles.`}
              action={
                <Link href={collection.href} className="arrow-link text-[var(--brun-moyen)]">
                  Page dédiée <ArrowRight size={15} />
                </Link>
              }
              className="mb-10"
            />
            <ProductGrid products={collection.products} />
          </div>
        </section>
      ))}

      <FinalCTA title="Un modèle vous intéresse ?" text="Contactez-nous par WhatsApp ou téléphone pour vérifier la disponibilité." />
    </>
  )
}
