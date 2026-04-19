'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navigation, site } from '../data/site'
import BrandMark from './ui/BrandMark'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'
  const solid = scrolled || !isHome || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-[var(--lin)] bg-[var(--creme)]/95 shadow-[0_18px_55px_rgba(28,20,16,0.08)] backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <BrandMark tone={solid ? 'dark' : 'light'} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? 'active text-[var(--terre)]' : solid ? 'text-[var(--brun-moyen)]' : 'text-white/86'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors ${
              solid ? 'text-[var(--brun-moyen)] hover:text-[var(--brun-nuit)]' : 'text-white/78 hover:text-white'
            }`}
          >
            <Phone size={15} />
            {site.phone}
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-terre">
            Commander
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
            solid ? 'border-[var(--lin)] text-[var(--brun-nuit)]' : 'border-white/25 text-white'
          }`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="container border-t border-[var(--lin)] py-6">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            <Link href="/" onClick={() => setOpen(false)} className={`mobile-nav-link ${pathname === '/' ? 'text-[var(--terre)]' : ''}`}>
              Accueil
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mobile-nav-link ${pathname === item.href ? 'text-[var(--terre)]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 grid gap-3 border-t border-[var(--lin)] pt-6">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-terre justify-center">
              Commander sur WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-outline-dark justify-center">
              Appeler la boutique
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
