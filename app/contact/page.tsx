import { Phone, MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function IconInstagram() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
}
function IconFacebook() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
}

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-[var(--noir)] min-h-[45vh] flex items-end">
        <div className="container pb-16">
          <p className="label text-white/40 mb-4">Parlons-nous</p>
          <h1 className="font-display text-white font-medium" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>Contact</h1>
        </div>
      </section>

      {/* Contacts principaux */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href="tel:+22997338843"
              className="group p-8 border border-[var(--border)] hover:border-[var(--rose)] transition-colors bg-white">
              <div className="w-12 h-12 bg-[var(--rose-pale)] flex items-center justify-center text-[var(--rose)] mb-6">
                <Phone size={20}/>
              </div>
              <div className="divider mb-5"/>
              <p className="label mb-2">Téléphone</p>
              <p className="font-display text-xl font-medium text-[var(--noir)] mb-1">+229 01 97 33 88 43</p>
              <p className="font-body text-sm text-[var(--gris)]">Appelez directement</p>
            </a>

            <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer"
              className="group p-8 border border-[var(--rose)] bg-[var(--rose)] text-white transition-all hover:bg-[var(--noir)] hover:border-[var(--noir)]">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                <MessageCircle size={20}/>
              </div>
              <div className="w-12 h-0.5 bg-white/30 mb-5"/>
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-2">WhatsApp</p>
              <p className="font-display text-xl font-medium mb-1">Commander en ligne</p>
              <p className="font-body text-sm text-white/70">Réponse rapide garantie</p>
            </a>

            <div className="p-8 border border-[var(--border)] bg-white">
              <div className="w-12 h-12 bg-[var(--rose-pale)] flex items-center justify-center text-[var(--rose)] mb-6">
                <MapPin size={20}/>
              </div>
              <div className="divider mb-5"/>
              <p className="label mb-2">Boutique</p>
              <p className="font-body text-sm text-[var(--gris)] leading-relaxed">
                Face au marché de Kindonou,<br/>
                même alignement que la Pharmacie Kindonou,<br/>
                <strong className="text-[var(--noir)]">Cotonou, Bénin</strong>
              </p>
            </div>
          </div>

          {/* Réseaux */}
          <div className="border-t border-[var(--border)] pt-16">
            <p className="label mb-4">Réseaux Sociaux</p>
            <h2 className="font-display text-3xl font-medium text-[var(--noir)] mb-10">Suivez-nous</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.instagram.com/lamaisondespyjamas2025/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-[var(--border)] hover:border-[var(--rose)] transition-colors bg-white">
                <span className="text-[var(--rose)]"><IconInstagram/></span>
                <div>
                  <p className="font-body text-xs text-[var(--gris)] uppercase tracking-wider mb-1">Instagram</p>
                  <p className="font-display text-lg font-medium text-[var(--noir)]">@lamaisondespyjamas2025</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-[var(--gris)]"/>
              </a>
              <a href="https://www.facebook.com/61563460230523/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-[var(--border)] hover:border-[var(--rose)] transition-colors bg-white">
                <span className="text-[var(--rose)]"><IconFacebook/></span>
                <div>
                  <p className="font-body text-xs text-[var(--gris)] uppercase tracking-wider mb-1">Facebook</p>
                  <p className="font-display text-lg font-medium text-[var(--noir)]">La Maison des Pyjamas</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-[var(--gris)]"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires + Process commande */}
      <section className="section bg-[var(--gris-light)] border-t border-[var(--border)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Horaires */}
          <div>
            <p className="label mb-5">Informations</p>
            <h2 className="font-display text-3xl font-medium text-[var(--noir)] mb-8">Horaires d'ouverture</h2>
            <div className="space-y-3">
              {[
                { j: 'Lundi – Vendredi', h: '08h00 – 19h00' },
                { j: 'Samedi',            h: '08h00 – 20h00' },
                { j: 'Dimanche',          h: '10h00 – 17h00' },
              ].map(item => (
                <div key={item.j} className="flex items-center justify-between py-4 border-b border-[var(--border)]">
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-[var(--rose)]"/>
                    <span className="font-body text-sm font-medium text-[var(--noir)]">{item.j}</span>
                  </div>
                  <span className="font-body text-sm font-semibold text-[var(--rose)]">{item.h}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-[var(--gris)] mt-4 italic">
              * Horaires indicatifs, susceptibles de varier.
            </p>
          </div>

          {/* Process */}
          <div className="bg-[var(--noir)] p-10">
            <p className="label text-white/40 mb-5">Commander</p>
            <h2 className="font-display text-white text-2xl font-medium mb-8">
              Comment commander par WhatsApp ?
            </h2>
            <ol className="space-y-4 mb-10">
              {[
                'Parcourez notre catalogue et notez le modèle souhaité',
                'Précisez votre taille et la quantité',
                'Envoyez un message WhatsApp avec ces informations',
                'Nous confirmons la disponibilité et les modalités de livraison',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4 font-body text-sm text-white/60">
                  <span className="font-display text-[var(--rose)] text-lg font-medium shrink-0 leading-none mt-0.5">
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center">
              Ouvrir WhatsApp <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
