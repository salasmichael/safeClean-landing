import { ChevronDown } from 'lucide-react'
import { SectionTitle } from './Reveal'
import { faqs } from '../data/content'

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-brand-200 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-900">
                {q}
                <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
              </summary>
              <p className="mt-3 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
