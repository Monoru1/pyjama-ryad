import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Catalogue Complet' }

export default function CataloguePage() {
  const adultes = products.filter(p => p.category === 'adulte')
  const enfants = products.filter(p => p.category === 'enfant')

  return (
    <>
      {/* Hero editorial */}
      <section className="pt-[72px] bg-[var(--creme)] border-b border-[var(--border)]">
        <div className="container py-20">
          <div className="max-w-2xl">
            <p className="label mb-4">Notre Univers</p>
            <h1 className="font-display font-medium text-[var(--noir)] mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
              Catalogue<br/><span className="text-[var(--rose)]">Complet</span>
            </h1>
            <p className="font-body text-[var(--gris)] text-lg">
              {products.length} modèles soigneusement sélectionnés — pyjamas, joggings et combinaisons pour adultes et enfants.
            </p>
          </div>
        </div>
      </section>

      {/* ADULTES */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label mb-3">Collection</p>
              <h2 className="font-display text-4xl font-medium text-[var(--noir)]">Adultes</h2>
            </div>
            <Link href="/adultes" className="arrow-link text-[var(--gris)] hover:text-[var(--rose)]">
              Page dédiée <ArrowRight size={15}/>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {adultes.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="container"><div className="border-t border-[var(--border)]"/></div>

      {/* ENFANTS */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label mb-3">Collection</p>
              <h2 className="font-display text-4xl font-medium text-[var(--noir)]">Enfants</h2>
            </div>
            <Link href="/enfants" className="arrow-link text-[var(--gris)] hover:text-[var(--rose)]">
              Page dédiée <ArrowRight size={15}/>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {enfants.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--noir)] py-20">
        <div className="container text-center">
          <h2 className="font-display text-white text-3xl font-medium mb-4">Un modèle vous intéresse ?</h2>
          <p className="font-body text-white/50 mb-8">Contactez-nous par WhatsApp ou téléphone pour commander.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Commander sur WhatsApp
            </a>
            <Link href="/contact" className="btn btn-ghost-white">Autres contacts</Link>
          </div>
        </div>
      </section>
    </>
  )
}
