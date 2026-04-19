import Link from 'next/link'
import { Moon } from 'lucide-react'

type BrandMarkProps = {
  tone?: 'dark' | 'light'
}

export default function BrandMark({ tone = 'dark' }: BrandMarkProps) {
  const light = tone === 'light'

  return (
    <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Accueil La Maison des Pyjamas">
      <span className={`flex h-11 w-11 items-center justify-center border transition-colors ${
        light ? 'border-white/25 bg-white/10 text-white' : 'border-[var(--lin)] bg-white text-[var(--terre)]'
      }`}>
        <Moon size={21} strokeWidth={1.8} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.18rem] font-semibold tracking-normal transition-colors ${
          light ? 'text-white' : 'text-[var(--brun-nuit)]'
        }`}>
          La Maison
        </span>
        <span className={`mt-1 block font-body text-[0.64rem] font-bold uppercase transition-colors ${
          light ? 'text-[var(--lin)]' : 'text-[var(--terre)]'
        }`}>
          des Pyjamas
        </span>
      </span>
    </Link>
  )
}
