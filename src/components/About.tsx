import Reveal, { SectionTitle } from './Reveal'
import { values } from '../data/content'

const stats = [
  ['+15', 'años en el mercado'],
  ['3', 'tipos de espacio atendidos'],
  ['2', 'ciudades: Medellín y Bogotá'],
]

export default function About() {
  return (
    <section id="nosotros" className="bg-gradient-to-b from-white to-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Nosotros"
          title="Limpieza con propósito"
          sub="Más de 15 años cuidando hogares, empresas y edificios, por día o por horas. Gran parte de nuestro equipo son madres cabeza de hogar: cada servicio genera empleo formal y un impacto social positivo."
        />

        <Reveal>
          <dl className="mb-14 grid gap-4 sm:grid-cols-3">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-brand-100">
                <dt className="text-4xl font-extrabold text-brand-600">{n}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-600">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-brand-900 p-8 text-white">
              <h3 className="text-xl font-extrabold text-aqua-400">Misión</h3>
              <p className="mt-3 text-brand-100">
                Prestar servicios integrales de limpieza ágiles, seguros y confiables, adaptados a tus necesidades, con horarios flexibles y personal capacitado que convierte tus espacios en ambientes sanos y atractivos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-brand-600 p-8 text-white">
              <h3 className="text-xl font-extrabold text-white">Visión</h3>
              <p className="mt-3 text-brand-50">
                Ser líderes nacionales en servicios de limpieza para empresas, oficinas y hogares, con un servicio práctico y personalizado y un equipo en formación continua en habilidades laborales y personales.
              </p>
            </div>
          </Reveal>
        </div>

        <h3 className="mb-6 text-center text-2xl font-extrabold text-brand-900">Nuestros valores</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="h-full rounded-2xl border border-slate-100 bg-white p-6">
                <p className="font-extrabold text-brand-700">{t}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
