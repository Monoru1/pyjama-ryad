import ProductCard from '../components/ProductCard'
import { getEnfants } from '../data/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Collection Enfants' }

export default function EnfantsPage() {
  const enfants = getEnfants()
  return (
    <>
      <section className="relative bg-[var(--noir)] pt-[72px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="flex items-center px-8 md:px-16 py-20">
            <div>
              <p className="label text-white/40 mb-4">Collection</p>
              <h1 className="font-display text-white font-medium mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
                Enfants
              </h1>
              <p className="font-body text-white/50 text-lg mb-8 max-w-md">
                Pyjamas doux et combinaisons colorées pour les enfants de 2 à 12 ans. Tissus testés, designs adorables.
              </p>
              <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Commander <ArrowRight size={16}/>
              </a>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=900&q=85"
              alt="Collection enfants" className="w-full h-full object-cover opacity-75"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--noir)] via-transparent to-transparent hidden lg:block"/>
          </div>
        </div>
      </section>

      <div className="border-b border-[var(--border)]">
        <div className="container py-3 flex items-center gap-2 text-xs font-body text-[var(--gris)]">
          <Link href="/" className="hover:text-[var(--rose)] transition-colors">Accueil</Link>
          <span>/</span><span className="text-[var(--noir)]">Enfants</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label mb-2">Tous les modèles</p>
              <h2 className="font-display text-3xl font-medium text-[var(--noir)]">Collection Enfants</h2>
            </div>
            <span className="font-body text-sm text-[var(--gris)]">{enfants.length} modèles</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {enfants.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--rose-pale)] border-t border-[var(--rose-muted)] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Tissus doux', desc: 'Sélectionnés pour la peau sensible des enfants.' },
              { title: '2 à 12 ans', desc: 'Toutes les tailles pour accompagner leur croissance.' },
              { title: 'Designs amusants', desc: 'Motifs et couleurs qui font sourire les petits.' },
            ].map(item => (
              <div key={item.title} className="p-6">
                <div className="divider mx-auto mb-5"/>
                <h3 className="font-display text-xl font-medium text-[var(--noir)] mb-3">{item.title}</h3>
                <p className="font-body text-sm text-[var(--gris)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
