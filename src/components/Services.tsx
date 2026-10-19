import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Reveal, { SectionTitle } from './Reveal'
import { services, waLink } from '../data/content'

export default function Services() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)!

  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Servicios"
          title="Limpieza a la medida de cada espacio"
          sub="Elige tu tipo de espacio y mira exactamente qué incluye nuestro servicio."
        />

        <Reveal>
          <div role="tablist" aria-label="Tipo de servicio" className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {services.map((s) => (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={active === s.id}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition ${
                  active === s.id
                    ? 'border-brand-600 bg-brand-50 shadow-md'
                    : 'border-slate-100 bg-white hover:border-brand-200'
                }`}
              >
                <img src={s.img} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" loading="lazy" />
                <span className="text-sm font-bold leading-tight text-brand-900">{s.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 text-white shadow-xl"
        >
          <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
            <div className="flex flex-col items-center justify-center gap-5 bg-white/5 p-8 text-center">
              <img src={current.img} alt={current.title} className="h-48 w-48 rounded-full object-cover ring-4 ring-white/20" />
              <p className="text-balance text-brand-100">{current.intro}</p>
              <a
                href={waLink(`Hola SafeClean, quiero cotizar: ${current.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
              >
                Cotizar este servicio <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-8 p-8 sm:grid-cols-2 lg:p-10">
              {current.groups.map((g) => (
                <div key={g.name}>
                  <h3 className="mb-3 text-lg font-extrabold text-aqua-400">{g.name}</h3>
                  <ul className="space-y-2">
                    {g.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-brand-50">
                        <Check size={18} className="mt-0.5 shrink-0 text-leaf-500" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
