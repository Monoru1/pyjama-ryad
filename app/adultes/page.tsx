import ProductCard from '../components/ProductCard'
import { getAdultes } from '../data/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Collection Adultes' }

export default function AdultesPage() {
  const adultes = getAdultes()
  const pyjamas = adultes.filter(p => p.subcategory === 'Pyjamas')
  const combinaisons = adultes.filter(p => p.subcategory === 'Combinaisons')
  const joggings = adultes.filter(p => !['Pyjamas','Combinaisons'].includes(p.subcategory))

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--noir)] pt-[72px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="flex items-center px-8 md:px-16 py-20">
            <div>
              <p className="label text-white/40 mb-4">Collection</p>
              <h1 className="font-display text-white font-medium mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
                Adultes
              </h1>
              <p className="font-body text-white/50 text-lg mb-8 max-w-md">
                Pyjamas, joggings et combinaisons de qualité. Tailles S à XXL. Confort absolu pour femmes et hommes.
              </p>
              <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Commander <ArrowRight size={16}/>
              </a>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=85"
              alt="Collection adultes" className="w-full h-full object-cover opacity-80"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--noir)] via-transparent to-transparent hidden lg:block"/>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-[var(--border)]">
        <div className="container py-3 flex items-center gap-2 text-xs font-body text-[var(--gris)]">
          <Link href="/" className="hover:text-[var(--rose)] transition-colors">Accueil</Link>
          <span>/</span><span className="text-[var(--noir)]">Adultes</span>
        </div>
      </div>

      {/* Pyjamas */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div><p className="label mb-2">Catégorie</p><h2 className="font-display text-3xl font-medium text-[var(--noir)]">Pyjamas</h2></div>
            <span className="font-body text-sm text-[var(--gris)]">{pyjamas.length} modèles</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pyjamas.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* Combinaisons */}
      {combinaisons.length > 0 && (
        <section className="section bg-[var(--gris-light)] border-t border-[var(--border)]">
          <div className="container">
            <div className="flex items-end justify-between mb-10">
              <div><p className="label mb-2">Catégorie</p><h2 className="font-display text-3xl font-medium text-[var(--noir)]">Combinaisons</h2></div>
              <span className="font-body text-sm text-[var(--gris)]">{combinaisons.length} modèles</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {combinaisons.map(p => <ProductCard key={p.id} product={p}/>)}
            </div>
          </div>
        </section>
      )}

      {/* Joggings */}
      <section className="section border-t border-[var(--border)]">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div><p className="label mb-2">Catégorie</p><h2 className="font-display text-3xl font-medium text-[var(--noir)]">Joggings & Loungewear</h2></div>
            <span className="font-body text-sm text-[var(--gris)]">{joggings.length} modèles</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {joggings.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* Tailles */}
      <section className="bg-[var(--rose)] py-16">
        <div className="container text-center">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">Guide des tailles</p>
          <h2 className="font-display text-white text-3xl font-medium mb-8">Disponibles en S — XXL</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['S','M','L','XL','XXL'].map(s => (
              <div key={s} className="w-14 h-14 border-2 border-white/40 flex items-center justify-center font-display text-white text-lg hover:border-white hover:bg-white/10 transition-all">
                {s}
              </div>
            ))}
          </div>
          <p className="font-body text-white/50 text-sm mt-6">Besoin de conseils ? Contactez-nous par WhatsApp.</p>
        </div>
      </section>
    </>
  )
}
