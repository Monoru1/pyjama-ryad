import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { site } from '../../data/site'

type FinalCTAProps = {
  title?: string
  text?: string
}

export default function FinalCTA({
  title = 'Prêt à dormir autrement ?',
  text = 'Visitez notre boutique ou commandez directement par WhatsApp.',
}: FinalCTAProps) {
  return (
    <section className="bg-[var(--brun-nuit)] py-20 text-white">
      <div className="container text-center">
        <p className="label mb-4 text-[var(--lin)]">Cotonou, Bénin</p>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-tight">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-8 text-white/62">
          {text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/catalogue" className="btn btn-terre">
            Voir le catalogue <ArrowRight size={16} />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-white">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
