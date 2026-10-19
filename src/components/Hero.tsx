import { motion } from 'framer-motion'
import { Phone, MessageCircle, ShieldCheck, Clock, HeartHandshake } from 'lucide-react'
import { phones, waLink } from '../data/content'

const trust = [
  { icon: ShieldCheck, text: '+15 años de experiencia' },
  { icon: Clock, text: 'Por día o por horas' },
  { icon: HeartHandshake, text: 'Personal de confianza' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 sm:pt-32">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua-400/20 blur-3xl" />
      <div aria-hidden className="absolute -left-24 top-60 h-72 w-72 rounded-full bg-leaf-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-leaf-500" /> Medellín y Bogotá
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-900 sm:text-6xl">
            Espacios más <span className="bg-gradient-to-r from-brand-600 to-aqua-500 bg-clip-text text-transparent">limpios</span>,
            <br className="hidden sm:block" /> servicio con transparencia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Aseo y limpieza profesional para hogares, oficinas y edificios. Tú disfrutas, nosotros nos encargamos.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
            >
              <MessageCircle size={20} /> Cotizar por WhatsApp
            </a>
            <a
              href={`tel:${phones[0].tel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-200 bg-white px-8 py-4 text-base font-bold text-brand-700 transition hover:border-brand-400 sm:w-auto"
            >
              <Phone size={20} /> Llamar ahora
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {trust.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Icon size={18} className="text-aqua-500" /> {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-brand-900/10 ring-1 ring-brand-100"
        >
          <img
            src={`${import.meta.env.BASE_URL}img/Banner-HOME.png`}
            alt="Servicios profesionales de aseo y limpieza SafeClean"
            width={1600}
            height={167}
            fetchPriority="high"
            className="h-auto w-full min-w-[640px] object-cover sm:min-w-0"
          />
        </motion.div>
      </div>
    </section>
  )
}
