import Link from 'next/link'

type BreadcrumbProps = {
  current: string
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <div className="border-b border-[var(--lin)] bg-white">
      <div className="container flex items-center gap-2 py-3 font-body text-xs text-[var(--brun-moyen)]">
        <Link href="/" className="transition-colors hover:text-[var(--terre)]">
          Accueil
        </Link>
        <span>/</span>
        <span className="font-semibold text-[var(--brun-nuit)]">{current}</span>
      </div>
    </div>
  )
}
