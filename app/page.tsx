import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Headphones, ShieldCheck, Star } from 'lucide-react'
import FinalCTA from './components/sections/FinalCTA'
import ProductGrid from './components/sections/ProductGrid'
import SectionHeader from './components/ui/SectionHeader'
import { getAdultes, getEnfants, getFeatured } from './data/products'
import { site } from './data/site'

const categories = [
  {
    href: '/adultes',
    label: 'Adultes',
    sub: 'Pyjamas · Joggings · Combinaisons',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1000&q=85',
  },
  {
    href: '/enfants',
    label: 'Enfants',
    sub: 'Pyjamas · Combinaisons · Ensembles',
    img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1000&q=85',
  },
]

const commitments = [
  {
    icon: Star,
    title: 'Qualité sélectionnée',
    desc: 'Chaque pyjama est choisi pour sa douceur, ses finitions et sa durabilité.',
  },
  {
    icon: ShieldCheck,
    title: 'Boutique de référence',
    desc: 'Une adresse reconnue à Kindonou, simple à retrouver à Cotonou.',
  },
  {
    icon: Headphones,
    title: 'Service personnalisé',
    desc: 'Conseils disponibles en boutique, par téléphone ou directement sur WhatsApp.',
  },
]

export default function HomePage() {
  const featured = getFeatured().slice(0, 4)
  const adultesSample = getAdultes().slice(0, 4)
  const enfantsSample = getEnfants().slice(0, 4)

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--brun-nuit)] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1600&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-24"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(28,20,16,0.98)_0%,rgba(28,20,16,0.9)_48%,rgba(28,20,16,0.42)_100%)]" />
        </div>
        <div className="absolute bottom-0 right-0 top-0 hidden w-[42%] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=90"
            alt="Collection pyjamas premium"
            fill
            priority
            sizes="42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brun-nuit)_0%,transparent_34%)]" />
        </div>

        <div className="container relative z-10 pb-20 pt-32">
          <div className="max-w-xl">
            <p className="label fade-up mb-6 text-[var(--lin)]">{site.location}</p>
            <h1 className="fade-up delay-1 font-display text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[0.95] text-white">
              La Maison<br />
              <span className="text-[var(--terre)]">des Pyjamas</span>
            </h1>
            <p className="fade-up delay-2 mt-7 max-w-md font-body text-lg leading-8 text-white/68">
              Votre spécialiste du pyjama et vêtement de confort. Qualité sélectionnée, prix accessibles, pour toute la famille.
            </p>
            <div className="fade-up delay-3 mt-9 flex flex-wrap gap-3">
              <Link href="/catalogue" className="btn btn-terre">
                Voir la collection <ArrowRight size={16} />
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-white">
                Commander WhatsApp
              </a>
            </div>
            <div className="fade-up delay-3 mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-8">
              {[
                ['500+', 'Modèles'],
                ['5 ans', "D'expérience"],
                ['100%', 'Conseil'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-3xl font-semibold leading-none text-white">{value}</p>
                  <p className="mt-2 font-body text-xs font-bold uppercase text-white/38">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--creme)]">
        <div className="container">
          <SectionHeader
            eyebrow="Nos collections"
            title="Pour toute la famille"
            action={
              <Link href="/catalogue" className="arrow-link text-[var(--brun-moyen)]">
                Voir tout <ArrowRight size={15} />
              </Link>
            }
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className="group relative block min-h-[420px] overflow-hidden bg-[var(--brun-nuit)]">
                <Image
                  src={category.img}
                  alt={category.label}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="img-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="label mb-3 text-white/65">{category.sub}</p>
                  <h3 className="font-display text-5xl font-semibold text-white">{category.label}</h3>
                  <span className="arrow-link mt-5 text-white opacity-80">
                    Découvrir <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--lin)] bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Sélection"
            title="Coups de cœur"
            action={
              <Link href="/catalogue" className="arrow-link text-[var(--brun-moyen)]">
                Catalogue complet <ArrowRight size={15} />
              </Link>
            }
            className="mb-10"
          />
          <ProductGrid products={featured} />
        </div>
      </section>

      <section className="bg-[var(--terre)] py-20 text-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="label mb-5 text-white/70">Notre promesse</p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight">
              Dormez autrement avec nos pyjamas.
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-8 text-white/78">
              Chaque modèle est sélectionné pour sa douceur, sa coupe et sa durabilité.
            </p>
            <Link href="/a-propos" className="btn btn-ghost-white mt-8">
              Notre histoire <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-[var(--brun-nuit)]">
            <Image
              src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=900&q=85"
              alt="Qualité pyjama"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--creme)]">
        <div className="container">
          <SectionHeader
            eyebrow="Collection"
            title="Adultes"
            action={<Link href="/adultes" className="arrow-link text-[var(--brun-moyen)]">Voir tout <ArrowRight size={15} /></Link>}
            className="mb-10"
          />
          <ProductGrid products={adultesSample} />
        </div>
      </section>

      <section className="section border-y border-[var(--lin)] bg-[var(--lin-doux)]">
        <div className="container">
          <SectionHeader
            eyebrow="Collection"
            title="Enfants"
            action={<Link href="/enfants" className="arrow-link text-[var(--brun-moyen)]">Voir tout <ArrowRight size={15} /></Link>}
            className="mb-10"
          />
          <ProductGrid products={enfantsSample} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader eyebrow="Pourquoi nous" title="Notre engagement" align="center" className="mb-12" />
          <div className="grid gap-5 md:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="border border-[var(--lin)] bg-white p-8 transition-colors hover:border-[var(--terre)]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[var(--lin-doux)] text-[var(--terre)]">
                    <Icon size={21} />
                  </div>
                  <div className="divider mb-5" />
                  <h3 className="font-display text-2xl font-semibold text-[var(--brun-nuit)]">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-7 text-[var(--brun-moyen)]">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
