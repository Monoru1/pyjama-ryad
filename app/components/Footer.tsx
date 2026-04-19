import Link from 'next/link'
import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { navigation, site } from '../data/site'
import BrandMark from './ui/BrandMark'

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const productLinks = [
  'Pyjamas adultes',
  'Joggings et loungewear',
  'Combinaisons',
  'Pyjamas enfants',
  'Ensembles enfants',
  'Chaussons et accessoires',
]

export default function Footer() {
  return (
    <footer className="bg-[var(--brun-nuit)] text-white">
      <div className="border-b border-white/10">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.15fr] lg:py-20">
          <div>
            <BrandMark tone="light" />
            <p className="mt-6 max-w-sm font-body text-sm leading-7 text-white/62">
              Pyjamas, combinaisons et vêtements de confort sélectionnés à Cotonou pour toute la famille.
            </p>
            <p className="mt-5 font-display text-2xl italic leading-tight text-[var(--lin)]">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="footer-title">Navigation</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="footer-link">Accueil</Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Collections</p>
            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item} className="font-body text-sm text-white/52">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Boutique</p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[var(--terre)]" />
                <span className="font-body text-sm leading-7 text-white/62">
                  {site.address.line1}<br />
                  {site.address.line2}<br />
                  {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-[var(--terre)]" />
                <a href={site.phoneHref} className="footer-link">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={17} className="shrink-0 text-[var(--terre)]" />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-link">
                  WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-7 flex gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <IconInstagram />
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <IconFacebook />
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex h-10 items-center gap-2 border border-white/12 px-4 font-body text-xs font-bold uppercase text-white/70 transition-colors hover:border-[var(--terre)] hover:text-white">
                Commander
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-3 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-body text-xs text-white/35">
          © 2026 La Maison des Pyjamas. Cotonou, Bénin.
        </p>
        <p className="font-body text-xs text-white/30">
          Qualité sélectionnée · Service direct · Confort familial
        </p>
      </div>
    </footer>
  )
}
