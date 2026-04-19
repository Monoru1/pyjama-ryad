import Image from 'next/image'
import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  image?: string
  action?: ReactNode
  compact?: boolean
}

export default function PageHero({ eyebrow, title, description, image, action, compact = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--brun-nuit)] pt-[76px] text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(28,20,16,0.98)_0%,rgba(28,20,16,0.84)_52%,rgba(28,20,16,0.32)_100%)]" />
        </div>
      )}
      <div className={`container relative flex items-end ${compact ? 'min-h-[46vh] pb-14 pt-16' : 'min-h-[62vh] pb-16 pt-20'}`}>
        <div className="max-w-3xl">
          <p className="label mb-5 text-[var(--lin)]">{eyebrow}</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-white/72">
              {description}
            </p>
          )}
          {action && <div className="mt-9 flex flex-wrap gap-3">{action}</div>}
        </div>
      </div>
    </section>
  )
}
