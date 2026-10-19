import { Droplets, Layers, Wind } from 'lucide-react'
import Reveal from './Reveal'
import { waLink } from '../data/content'

const perks = [
  { icon: Layers, title: 'Gran cobertura', text: 'Alta capacidad de superficie tratada.' },
  { icon: Droplets, title: 'Distribución óptima', text: 'El agente activo llega a todo el espacio.' },
  { icon: Wind, title: 'Sin ventiladores', text: 'Alto grado de penetración por sí misma.' },
]

export default function Nebulizacion() {
  return (
    <section id="nebulizacion" className="bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <img
            src={`${import.meta.env.BASE_URL}img/Mail_SERV_1-03.png`}
            alt="Servicio de desinfección con nebulización en frío ULV"
            loading="lazy"
            className="w-full rounded-3xl bg-white shadow-xl ring-1 ring-brand-100"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-aqua-500">Nuevo servicio</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">Desinfección con nebulización en frío (ULV)</h2>
          <p className="mt-4 text-lg text-slate-600">
            Generamos una niebla de gotas de desinfectante de ultra bajo volumen, de entre 5 y 50 micrones, que cubre y penetra cada rincón.
          </p>
          <ul className="mt-8 space-y-5">
            {perks.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="font-bold text-brand-900">{title}</p>
                  <p className="text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={waLink('Hola SafeClean, quiero cotizar desinfección con nebulización ULV.')}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-full bg-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            Cotizar desinfección
          </a>
        </Reveal>
      </div>
    </section>
  )
}
