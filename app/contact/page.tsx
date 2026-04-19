import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MapPin, MessageCircle, Phone, ShoppingBag } from 'lucide-react'
import { site } from '../data/site'

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export const metadata = {
  title: 'Contact',
  description: 'Contactez La Maison des Pyjamas à Cotonou par téléphone, WhatsApp ou en boutique à Kindonou.',
}

const contactActions = [
  {
    title: 'WhatsApp',
    text: 'Commande, taille, disponibilité',
    href: site.whatsapp,
    label: 'Écrire maintenant',
    icon: MessageCircle,
    featured: true,
  },
  {
    title: 'Téléphone',
    text: 'Conseil rapide et renseignements',
    href: site.phoneHref,
    label: site.phone,
    icon: Phone,
  },
  {
    title: 'Boutique',
    text: 'Essayage et choix sur place',
    href: '#adresse',
    label: 'Voir l’adresse',
    icon: MapPin,
  },
]

const orderSteps = [
  'Choisissez un modèle dans le catalogue.',
  'Indiquez la taille, la quantité et la couleur souhaitée.',
  'Envoyez votre demande sur WhatsApp.',
  'Recevez la confirmation de disponibilité et les modalités.',
]

const hours = [
  ['Lundi - vendredi', '08h00 - 19h00'],
  ['Samedi', '08h00 - 20h00'],
  ['Dimanche', '10h00 - 17h00'],
]

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brun-nuit)] pt-[76px] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1500&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(28,20,16,0.98)_0%,rgba(28,20,16,0.88)_48%,rgba(28,20,16,0.4)_100%)]" />
        </div>
        <div className="container relative grid min-h-[68vh] items-end pb-14 pt-20 md:pb-18">
          <div className="max-w-3xl">
            <p className="label mb-5 text-[var(--lin)]">Contact</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] text-white">
              Parlons pyjamas, tailles et confort.
            </h1>
            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-white/72">
              Passez en boutique à Kindonou ou commandez directement par WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-terre">
                Commander sur WhatsApp <ArrowRight size={16} />
              </a>
              <a href={site.phoneHref} className="btn btn-ghost-white">
                Appeler la boutique
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--creme)]">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {contactActions.map((action) => {
              const Icon = action.icon
              const external = action.href.startsWith('http')
              return (
                <a
                  key={action.title}
                  href={action.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={`group border p-7 transition-all ${
                    action.featured
                      ? 'border-[var(--terre)] bg-[var(--terre)] text-white shadow-[0_24px_70px_rgba(200,149,108,0.28)]'
                      : 'border-[var(--lin)] bg-white text-[var(--brun-nuit)] hover:border-[var(--terre)]'
                  }`}
                >
                  <span className={`flex h-12 w-12 items-center justify-center ${
                    action.featured ? 'bg-white/14 text-white' : 'bg-[var(--lin-doux)] text-[var(--terre)]'
                  }`}>
                    <Icon size={21} />
                  </span>
                  <p className={`mt-6 font-display text-2xl font-semibold ${action.featured ? 'text-white' : 'text-[var(--brun-nuit)]'}`}>
                    {action.title}
                  </p>
                  <p className={`mt-2 font-body text-sm ${action.featured ? 'text-white/76' : 'text-[var(--brun-moyen)]'}`}>
                    {action.text}
                  </p>
                  <span className={`mt-6 inline-flex items-center gap-2 font-body text-xs font-bold uppercase ${
                    action.featured ? 'text-white' : 'text-[var(--terre)]'
                  }`}>
                    {action.label}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section id="adresse" className="section border-y border-[var(--lin)] bg-white">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="label mb-5">Nous trouver</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-tight text-[var(--brun-nuit)]">
              Boutique à Kindonou, Cotonou.
            </h2>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4 border-l-2 border-[var(--terre)] pl-5">
                <MapPin className="mt-1 shrink-0 text-[var(--terre)]" size={21} />
                <p className="font-body text-base leading-8 text-[var(--brun-moyen)]">
                  {site.address.line1}<br />
                  {site.address.line2}<br />
                  <strong className="text-[var(--brun-nuit)]">{site.address.city}</strong>
                </p>
              </div>
              <p className="font-body text-sm leading-7 text-[var(--brun-moyen)]">
                Repérez le petit marché de Kindonou, puis suivez le même alignement que la Pharmacie Kindonou.
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[var(--brun-nuit)]">
            <Image
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1100&q=85"
              alt="Boutique de vêtements"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,20,16,0.85),rgba(28,20,16,0.08))]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
              <p className="font-display text-3xl font-semibold">Cotonou</p>
              <p className="mt-2 max-w-sm font-body text-sm leading-7 text-white/72">
                Une adresse simple à retrouver pour choisir vos pyjamas sur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--lin-doux)]">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="label mb-5">Commander</p>
            <h2 className="font-display text-4xl font-semibold text-[var(--brun-nuit)]">
              Par WhatsApp en quelques messages.
            </h2>
            <ol className="mt-8 space-y-4">
              {orderSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-[var(--lin)] pb-4">
                  <span className="font-display text-2xl font-semibold leading-none text-[var(--terre)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-sm leading-7 text-[var(--brun-moyen)]">{step}</span>
                </li>
              ))}
            </ol>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-8">
              Ouvrir WhatsApp <ShoppingBag size={16} />
            </a>
          </div>

          <div className="bg-[var(--brun-nuit)] p-7 text-white md:p-10">
            <p className="label mb-5 text-[var(--lin)]">Horaires</p>
            <h2 className="font-display text-3xl font-semibold">Passez quand c’est pratique.</h2>
            <div className="mt-8 space-y-3">
              {hours.map(([day, hour]) => (
                <div key={day} className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
                  <span className="inline-flex items-center gap-3 font-body text-sm text-white/72">
                    <Clock size={16} className="text-[var(--terre)]" />
                    {day}
                  </span>
                  <span className="font-body text-sm font-bold text-white">{hour}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 font-body text-xs leading-6 text-white/45">
              Horaires indicatifs. Un message WhatsApp permet de confirmer la disponibilité avant votre passage.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-4">Réseaux sociaux</p>
            <h2 className="font-display text-4xl font-semibold text-[var(--brun-nuit)]">
              Retrouvez nos nouveautés.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="social-card">
              <IconInstagram />
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="social-card">
              <IconFacebook />
              Facebook
            </a>
            <Link href="/catalogue" className="social-card">
              Catalogue
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
