'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/adultes', label: 'Adultes' },
  { href: '/enfants', label: 'Enfants' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || !isHome
          ? 'bg-white border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M22 14c0 4.418-3.582 8-8 8a8 8 0 110-16c.3 0 .597.017.888.05A6 6 0 1022 14z" fill="#E8187A"/>
              <circle cx="18" cy="8" r="1.5" fill="#E8187A" opacity=".6"/>
              <circle cx="22" cy="11" r="1" fill="#E8187A" opacity=".4"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-semibold text-[15px] tracking-tight transition-colors ${scrolled || !isHome ? 'text-[var(--noir)]' : 'text-white'}`}>
                La Maison
              </span>
              <span className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--rose)]">
                des Pyjamas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`nav-link transition-colors ${pathname === l.href ? 'text-[var(--rose)] active' : scrolled || !isHome ? 'text-[var(--noir)]' : 'text-white'}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+22997338843"
              className={`font-body text-xs font-500 transition-colors ${scrolled || !isHome ? 'text-[var(--gris)]' : 'text-white/70'}`}>
              +229 01 97 33 88 43
            </a>
            <Link href="/contact" className="btn btn-primary text-xs">
              Commander
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}
            style={{ color: scrolled || !isHome ? 'var(--noir)' : 'white' }}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-[72px]">
          <div className="container py-8 flex flex-col gap-6">
            <Link href="/" onClick={() => setOpen(false)} className="nav-link text-[var(--noir)] text-base">Accueil</Link>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`nav-link text-base ${pathname === l.href ? 'text-[var(--rose)]' : 'text-[var(--noir)]'}`}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--border)]">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">
                Commander
              </Link>
            </div>
            <a href="tel:+22997338843" className="font-body text-sm text-[var(--gris)] text-center">
              +229 01 97 33 88 43
            </a>
          </div>
        </div>
      )}
    </>
  )
}
