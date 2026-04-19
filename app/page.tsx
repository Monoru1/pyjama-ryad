import Link from 'next/link'
import { ArrowRight, Star, ShieldCheck, Headphones } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { getFeatured, getAdultes, getEnfants } from './data/products'

export default function HomePage() {
  const featured = getFeatured().slice(0, 4)
  const adultesSample = getAdultes().slice(0, 3)
  const enfantsSample = getEnfants().slice(0, 3)

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--noir)' }}>
        {/* BG image full — right half on desktop, subtle on mobile */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1400&q=85"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.85) 45%, rgba(13,13,13,0.4) 100%)'
          }}/>
        </div>

        {/* Right photo panel — desktop only */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block" style={{ width: '42%' }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90"
            alt="Collection pyjamas premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, var(--noir) 0%, transparent 30%)'
          }}/>
        </div>

        {/* Content */}
        <div className="relative z-10 container" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="label fade-up" style={{ color: 'rgba(232,24,122,0.9)', marginBottom: '1.5rem' }}>
              Cotonou, Bénin · Depuis 2020
            </p>

            <h1 className="fade-up delay-1" style={{
              fontFamily: '"Playfair Display", serif',
              color: 'white',
              fontWeight: 500,
              lineHeight: 1.06,
              marginBottom: '1.75rem',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)'
            }}>
              La Maison<br/>
              <span style={{ color: 'var(--rose)' }}>des Pyjamas</span>
            </h1>

            <p className="fade-up delay-2" style={{
              fontFamily: '"DM Sans", sans-serif',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: '440px'
            }}>
              Votre spécialiste du pyjama et vêtement de confort.
              Qualité sélectionnée, prix accessibles, pour toute la famille.
            </p>

            <div className="fade-up delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/catalogue" className="btn btn-primary">
                Voir la collection <ArrowRight size={15}/>
              </Link>
              <a href="https://wa.me/22997338843" target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost-white">
                Commander WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="fade-up delay-3" style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              flexWrap: 'wrap'
            }}>
              {[['500+', 'Modèles'], ['5 ans', "D'expérience"], ['100%', 'Satisfaction']].map(([val, label]) => (
                <div key={label}>
                  <p style={{
                    fontFamily: '"Playfair Display", serif',
                    color: 'white',
                    fontSize: '1.875rem',
                    fontWeight: 500,
                    lineHeight: 1
                  }}>{val}</p>
                  <p style={{
                    fontFamily: '"DM Sans", sans-serif',
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginTop: '0.4rem'
                  }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)' }}>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, transparent, rgba(232,24,122,0.6))',
            margin: '0 auto',
            animation: 'fadeUp 2s ease infinite'
          }}/>
        </div>
      </section>

      {/* ═══ CATÉGORIES ═════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--creme)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="label" style={{ marginBottom: '0.75rem' }}>Nos Collections</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 500, color: 'var(--noir)', lineHeight: 1.15 }}>
                Pour toute la famille
              </h2>
            </div>
            <Link href="/catalogue" className="arrow-link" style={{ color: 'var(--gris)' }}>
              Voir tout <ArrowRight size={14}/>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {[
              { href: '/adultes', label: 'Adultes', sub: 'Pyjamas · Joggings · Combinaisons', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=85' },
              { href: '/enfants', label: 'Enfants', sub: 'Pyjamas · Combinaisons · Ensembles', img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=900&q=85' },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} className="group" style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: 'var(--noir)'
              }}>
                <img src={cat.img} alt={cat.label} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  opacity: 0.7,
                  transition: 'transform 0.7s ease, opacity 0.4s ease',
                  display: 'block'
                }}
                className="group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="img-overlay" style={{ position: 'absolute', inset: 0 }}/>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>{cat.sub}</p>
                  <h3 style={{
                    fontFamily: '"Playfair Display", serif',
                    color: 'white',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: 500,
                    marginBottom: '0.75rem'
                  }}>{cat.label}</h3>
                  <span className="arrow-link group-hover:opacity-100" style={{ color: 'white', opacity: 0, transition: 'opacity 0.3s ease' }}>
                    Découvrir <ArrowRight size={14}/>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BESTSELLERS ════════════════════════════════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="label" style={{ marginBottom: '0.75rem' }}>Sélection</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 500, color: 'var(--noir)' }}>
                Coups de cœur
              </h2>
            </div>
            <Link href="/catalogue" className="arrow-link" style={{ color: 'var(--gris)' }}>
              Catalogue complet <ArrowRight size={14}/>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
            className="lg:grid-cols-4 md:grid-cols-2">
            {featured.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* ═══ BRAND STATEMENT ════════════════════════════════ */}
      <section style={{ background: 'var(--rose)' }}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
            className="lg:grid-cols-2">
            <div>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '1.5rem'
              }}>Notre Promesse</p>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                color: 'white',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                fontSize: 'clamp(1.875rem, 4vw, 3rem)'
              }}>
                "Dormez autrement<br/>avec nos pyjamas"
              </h2>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '440px'
              }}>
                Chaque modèle est sélectionné pour sa douceur, sa coupe et sa durabilité.
                Nous croyons que le confort est un droit accessible à tous.
              </p>
              <Link href="/a-propos" className="btn btn-ghost-white">
                Notre histoire <ArrowRight size={15}/>
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=700&q=85"
                alt="Qualité pyjama"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: '-1.25rem', left: '-1.25rem',
                background: 'white', padding: '1.25rem 1.5rem'
              }} className="hidden md:block">
                <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 500, color: 'var(--rose)', lineHeight: 1 }}>5+</p>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.3rem' }}>Ans de confiance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ APERÇU ADULTES ═════════════════════════════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="label" style={{ marginBottom: '0.6rem' }}>Collection</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: 'var(--noir)' }}>Adultes</h2>
            </div>
            <Link href="/adultes" className="arrow-link" style={{ color: 'var(--gris)' }}>
              Voir tout <ArrowRight size={14}/>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
            className="md:grid-cols-3 grid-cols-1">
            {adultesSample.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* ═══ APERÇU ENFANTS ═════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--rose-pale)', borderTop: '1px solid var(--rose-muted)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="label" style={{ marginBottom: '0.6rem' }}>Collection</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: 'var(--noir)' }}>Enfants</h2>
            </div>
            <Link href="/enfants" className="arrow-link" style={{ color: 'var(--gris)' }}>
              Voir tout <ArrowRight size={14}/>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
            className="md:grid-cols-3 grid-cols-1">
            {enfantsSample.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        </div>
      </section>

      {/* ═══ ARGUMENTS ══════════════════════════════════════ */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="label" style={{ marginBottom: '0.75rem' }}>Pourquoi nous</p>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 500, color: 'var(--noir)' }}>
              Notre engagement
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="md:grid-cols-3 grid-cols-1">
            {[
              { icon: <Star size={20}/>, title: 'Qualité sélectionnée', desc: 'Chaque pyjama est rigoureusement choisi pour sa douceur, ses finitions et sa durabilité.' },
              { icon: <ShieldCheck size={20}/>, title: 'Boutique de référence', desc: 'Implantés à Kindonou depuis plusieurs années, adresse reconnue à Cotonou.' },
              { icon: <Headphones size={20}/>, title: 'Service personnalisé', desc: 'Disponibles par téléphone, WhatsApp ou en boutique pour vous accompagner.' },
            ].map(item => (
              <div key={item.title} style={{
                padding: '2.25rem',
                border: '1px solid var(--border)',
                transition: 'border-color 0.25s ease',
              }}
              className="hover:border-rose">
                <div style={{
                  width: '2.75rem', height: '2.75rem',
                  background: 'var(--rose-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--rose)',
                  marginBottom: '1.5rem'
                }}>{item.icon}</div>
                <div className="divider" style={{ marginBottom: '1.25rem' }}/>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', fontWeight: 500, color: 'var(--noir)', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--gris)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ══════════════════════════════════════ */}
      <section style={{ background: 'var(--noir)' }}>
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem' }}>Cotonou, Bénin</p>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            color: 'white',
            fontWeight: 500,
            marginBottom: '1.25rem',
            fontSize: 'clamp(1.875rem, 5vw, 3.5rem)'
          }}>
            Prêt à dormir autrement ?
          </h2>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.5rem',
            maxWidth: '400px',
            margin: '0 auto 2.5rem'
          }}>
            Visitez notre boutique ou commandez directement par WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalogue" className="btn btn-primary">Voir le catalogue</Link>
            <Link href="/contact" className="btn btn-ghost-white">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
