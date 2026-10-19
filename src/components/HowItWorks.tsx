import Reveal, { SectionTitle } from './Reveal'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Cómo funciona" title="Tan fácil como tres pasos" />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <li className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-aqua-500 text-xl font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-brand-900">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
