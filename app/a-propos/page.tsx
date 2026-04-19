import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/ui/Breadcrumb'
import FinalCTA from '../components/sections/FinalCTA'
import PageHero from '../components/sections/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import { site } from '../data/site'

export const metadata = { title: 'À Propos' }

const values = [
  { num: '01', title: 'Qualité', desc: 'Chaque produit est sélectionné avec soin pour la douceur, les finitions et la tenue.' },
  { num: '02', title: 'Accessibilité', desc: 'Des modèles confortables et soignés, pensés pour rester accessibles au quotidien.' },
  { num: '03', title: 'Diversité', desc: 'Des coupes, tailles et styles pour les adultes, les enfants et toute la famille.' },
  { num: '04', title: 'Service', desc: 'Un accompagnement direct en boutique, par téléphone ou sur WhatsApp.' },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre histoire"
        title="À Propos"
        description="Une boutique de référence à Kindonou pour les pyjamas et vêtements de confort."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1500&q=85"
        compact
      />
      <Breadcrumb current="À propos" />

      <section className="section bg-[var(--creme)]">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Qui sommes-nous"
              title={<>La référence du confort à Cotonou</>}
              description="La Maison des Pyjamas est un espace spécialisé reconnu à Cotonou pour sa sélection en pyjamas, combinaisons et vêtements de confort."
            />
            <div className="mt-7 space-y-5 font-body text-[var(--brun-moyen)] leading-8">
              <p>
                Implantée face au marché de Kindonou, notre boutique est devenue une adresse que l&apos;on recommande et où l&apos;on revient avec plaisir.
              </p>
              <p>
                Notre philosophie: permettre à chacun de vivre le confort autrement, avec des vêtements qui allient qualité des matières, beau design et prix justes.
              </p>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden bg-[var(--lin-doux)]">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85"
              alt="Boutique de vêtements"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-[var(--terre)] p-6 text-white">
              <p className="font-display text-4xl font-semibold leading-none">5+</p>
              <p className="mt-1 font-body text-xs font-bold uppercase text-white/78">Ans à Cotonou</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--lin)] bg-[var(--lin-doux)]">
        <div className="container">
          <SectionHeader eyebrow="Ce qui nous définit" title="Nos valeurs" align="center" className="mb-12" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.num} className="border border-[var(--lin)] bg-white p-7 transition-colors hover:border-[var(--terre)]">
                <p className="font-body text-xs font-bold text-[var(--brun-moyen)] opacity-60">{value.num}</p>
                <div className="divider my-5" />
                <h3 className="font-display text-2xl font-semibold text-[var(--brun-nuit)]">{value.title}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-[var(--brun-moyen)]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden bg-[var(--lin-doux)]">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85"
              alt="Accueil en boutique"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Nous trouver"
              title="Venez nous rendre visite"
              description="La boutique est située face au petit marché de Kindonou, sur le même alignement que la Pharmacie Kindonou."
            />
            <div className="mt-8 space-y-4">
              {[
                ['Adresse', `${site.address.line1}, ${site.address.line2}, ${site.address.city}`],
                ['Téléphone', site.phone],
                ['WhatsApp', 'Commandes et renseignements disponibles'],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 border border-[var(--lin)] p-5 sm:grid-cols-[8rem_1fr]">
                  <p className="label">{label}</p>
                  <p className="font-body text-sm leading-7 text-[var(--brun-moyen)]">{value}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-terre mt-8">
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA title="Découvrez notre collection" text="Pyjamas, joggings et combinaisons pour toute la famille." />
    </>
  )
}
