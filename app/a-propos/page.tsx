import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'À Propos' }

export default function AProposPage() {
  return (
    <>
      <section className="pt-[72px] bg-[var(--noir)] min-h-[50vh] flex items-end">
        <div className="container pb-16">
          <p className="label text-white/40 mb-4">Notre histoire</p>
          <h1 className="font-display text-white font-medium" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
            À Propos
          </h1>
        </div>
      </section>

      {/* Histoire */}
      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label mb-5">Qui sommes-nous</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--noir)] mb-8 leading-tight">
              La référence du confort<br/>à Cotonou
            </h2>
            <div className="space-y-5 font-body text-[var(--gris)] leading-relaxed">
              <p>La Maison des Pyjamas est un espace spécialisé reconnu à Cotonou pour l'excellence de sa sélection en pyjamas, combinaisons et vêtements de confort pour toute la famille.</p>
              <p>Implantée face au marché de Kindonou, notre boutique est devenue une adresse de référence dans le quartier — un lieu que l'on recommande, où l'on revient avec plaisir.</p>
              <p>Notre philosophie : offrir à chacun, enfant comme adulte, la possibilité de vivre le confort autrement, dans des vêtements qui allient qualité des matières, beau design et prix accessibles.</p>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80"
              alt="Boutique" className="w-full object-cover" style={{ aspectRatio: '4/5' }}/>
            <div className="absolute -bottom-6 -left-6 bg-[var(--rose)] p-6 hidden md:block">
              <p className="font-display text-3xl font-medium text-white">5+</p>
              <p className="font-body text-xs text-white/70 uppercase tracking-wider mt-1">Ans à Cotonou</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section bg-[var(--gris-light)] border-t border-[var(--border)]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="label mb-4">Ce qui nous définit</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--noir)]">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Qualité', desc: 'Chaque produit est sélectionné avec soin. Seuls les meilleurs tissus et finitions entrent dans notre boutique.' },
              { num: '02', title: 'Accessibilité', desc: 'Le confort ne devrait pas être un luxe. Des prix justes pour des produits d\'exception.' },
              { num: '03', title: 'Diversité', desc: 'Des centaines de modèles pour tous les goûts, tous les âges, tous les styles de vie.' },
              { num: '04', title: 'Service', desc: 'Accompagnement personnalisé en boutique, par téléphone ou WhatsApp.' },
            ].map(v => (
              <div key={v.num} className="p-8 bg-white border border-[var(--border)] hover:border-[var(--rose)] transition-colors">
                <p className="font-body text-xs text-[var(--gris)] opacity-50 mb-4">{v.num}</p>
                <div className="divider mb-5"/>
                <h3 className="font-display text-xl font-medium text-[var(--noir)] mb-3">{v.title}</h3>
                <p className="font-body text-sm text-[var(--gris)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="section border-t border-[var(--border)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80"
            alt="Boutique Cotonou" className="w-full object-cover" style={{ aspectRatio: '4/3' }}/>
          <div>
            <p className="label mb-5">Nous trouver</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--noir)] mb-8">
              Venez nous rendre visite
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Adresse', val: 'Face au marché de Kindonou, même alignement que la Pharmacie Kindonou, Cotonou, Bénin' },
                { label: 'Téléphone', val: '+229 01 97 33 88 43' },
                { label: 'WhatsApp', val: 'Commandes et renseignements disponibles' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-5 border border-[var(--border)]">
                  <p className="label shrink-0 w-24">{item.label}</p>
                  <p className="font-body text-sm text-[var(--gris)]">{item.val}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                Nous contacter <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--rose)] py-20 text-center">
        <div className="container">
          <h2 className="font-display text-white text-3xl font-medium mb-4">Découvrez notre collection</h2>
          <p className="font-body text-white/70 mb-8">Pyjamas, joggings et combinaisons pour toute la famille.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/catalogue" className="btn btn-dark">Voir le catalogue</Link>
            <Link href="/contact" className="btn btn-ghost-white">Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}
