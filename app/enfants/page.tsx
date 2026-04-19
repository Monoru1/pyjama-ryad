import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/ui/Breadcrumb'
import FinalCTA from '../components/sections/FinalCTA'
import PageHero from '../components/sections/PageHero'
import ProductGrid from '../components/sections/ProductGrid'
import SectionHeader from '../components/ui/SectionHeader'
import { getEnfants } from '../data/products'
import { site } from '../data/site'

export const metadata = { title: 'Collection Enfants' }

const promises = [
  { title: 'Tissus doux', desc: 'Sélectionnés pour la peau sensible des enfants.' },
  { title: '2 à 12 ans', desc: 'Toutes les tailles pour accompagner leur croissance.' },
  { title: 'Designs joyeux', desc: 'Motifs et couleurs qui plaisent aux petits.' },
]

export default function EnfantsPage() {
  const products = getEnfants()

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Enfants"
        description="Pyjamas doux, combinaisons et ensembles confortables pour les enfants de 2 à 12 ans."
        image="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=1500&q=85"
        action={
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-terre">
            Commander <ArrowRight size={16} />
          </a>
        }
      />
      <Breadcrumb current="Enfants" />

      <section className="section bg-[var(--creme)]">
        <div className="container">
          <SectionHeader
            eyebrow="Tous les modèles"
            title="Collection Enfants"
            description={`${products.length} modèles pour accompagner les nuits et les moments détente.`}
            className="mb-10"
          />
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="section border-y border-[var(--lin)] bg-[var(--lin-doux)]">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((item) => (
              <div key={item.title} className="bg-white p-8">
                <div className="divider mb-5" />
                <h3 className="font-display text-2xl font-semibold text-[var(--brun-nuit)]">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[var(--brun-moyen)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Un pyjama enfant vous plaît ?" />
    </>
  )
}
