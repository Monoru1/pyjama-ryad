import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  action?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-6 ${align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'} ${className}`}>
      <div className={align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
        <p className="label mb-3">{eyebrow}</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight text-[var(--brun-nuit)]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 font-body text-base leading-8 text-[var(--brun-moyen)]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
