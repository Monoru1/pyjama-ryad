import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/ui/Breadcrumb'
import FinalCTA from '../components/sections/FinalCTA'
import PageHero from '../components/sections/PageHero'
import ProductGrid from '../components/sections/ProductGrid'
import SectionHeader from '../components/ui/SectionHeader'
import { getAdultes, getProductsBySubcategory } from '../data/products'
import { site } from '../data/site'

export const metadata = { title: 'Collection Adultes' }

const sections = [
  { title: 'Pyjamas', subcategory: 'Pyjamas', background: 'bg-[var(--creme)]' },
  { title: 'Combinaisons', subcategory: 'Combinaisons', background: 'bg-[var(--lin-doux)]' },
  { title: 'Joggings & Loungewear', subcategory: 'Joggings', background: 'bg-[var(--creme)]' },
]

export default function AdultesPage() {
  const products = getAdultes()

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Adultes"
        description="Pyjamas, joggings et combinaisons de qualité. Tailles S à XXL, pour femmes et hommes."
        image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1500&q=85"
        action={
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-terre">
            Commander <ArrowRight size={16} />
          </a>
        }
      />
      <Breadcrumb current="Adultes" />

      {sections.map((section) => {
        const sectionProducts = getProductsBySubcategory('adulte', section.subcategory)
        if (sectionProducts.length === 0) return null

        return (
          <section key={section.subcategory} className={`section border-b border-[var(--lin)] ${section.background}`}>
            <div className="container">
              <SectionHeader
                eyebrow="Catégorie"
                title={section.title}
                description={`${sectionProducts.length} modèle${sectionProducts.length > 1 ? 's' : ''} disponible${sectionProducts.length > 1 ? 's' : ''}.`}
                className="mb-10"
              />
              <ProductGrid products={sectionProducts} />
            </div>
          </section>
        )
      })}

      <section className="bg-[var(--terre)] py-16 text-white">
        <div className="container text-center">
          <p className="label mb-4 text-white/70">Guide des tailles</p>
          <h2 className="font-display text-4xl font-semibold">Disponibles en S - XXL</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <span key={size} className="flex h-14 w-14 items-center justify-center border border-white/40 font-display text-xl font-semibold">
                {size}
              </span>
            ))}
          </div>
          <p className="mt-6 font-body text-sm text-white/72">
            {products.length} modèles adultes référencés. Besoin de conseils ? Contactez-nous par WhatsApp.
          </p>
        </div>
      </section>

      <FinalCTA title="Un modèle adulte vous intéresse ?" />
    </>
  )
}
