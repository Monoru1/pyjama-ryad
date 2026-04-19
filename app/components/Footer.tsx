import Link from 'next/link'
import { Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--noir)] text-white">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M22 14c0 4.418-3.582 8-8 8a8 8 0 110-16c.3 0 .597.017.888.05A6 6 0 1022 14z" fill="#E8187A"/>
                <circle cx="18" cy="8" r="1.5" fill="#E8187A" opacity=".6"/>
              </svg>
              <div>
                <p className="font-display font-semibold text-sm text-white">La Maison</p>
                <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--rose)]">des Pyjamas</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Votre spécialiste pyjama et vêtement de confort à Cotonou, Bénin. Qualité et douceur pour toute la famille.
            </p>
            <p className="label opacity-40 italic normal-case tracking-normal font-body text-xs">
              "Dormez Autrement"
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="label mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[['/', 'Accueil'], ['/adultes', 'Collection Adultes'], ['/enfants', 'Collection Enfants'],
                ['/catalogue', 'Catalogue'], ['/a-propos', 'À Propos'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-white/50 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits */}
          <div>
            <p className="label mb-6">Nos Produits</p>
            <ul className="flex flex-col gap-3 font-body text-sm text-white/50">
              {['Pyjamas Adultes', 'Joggings & Loungewear', 'Combinaisons', 'Pyjamas Enfants', 'Ensembles Enfants', 'Chaussons & Accessoires'].map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-6">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--rose)] mt-0.5 shrink-0"/>
                <span className="font-body text-sm text-white/50 leading-relaxed">
                  Face au marché de Kindonou,<br/>même alignement que la Pharmacie Kindonou,<br/>Cotonou, Bénin
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--rose)] shrink-0"/>
                <a href="tel:+22997338843" className="font-body text-sm text-white/50 hover:text-white transition-colors">
                  +229 01 97 33 88 43
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={15} className="text-[var(--rose)] shrink-0"/>
                <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              {[
                { href: 'https://www.instagram.com/lamaisondespyjamas2025/', label: 'Instagram',
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
                { href: 'https://www.facebook.com/61563460230523/', label: 'Facebook',
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[var(--rose)] hover:text-[var(--rose)] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-white/25">© 2025 La Maison des Pyjamas — Cotonou, Bénin. Tous droits réservés.</p>
        <p className="font-body text-xs text-white/20">Qualité · Douceur · Confiance</p>
      </div>
    </footer>
  )
}
