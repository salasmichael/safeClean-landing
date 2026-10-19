import { useState, type FormEvent } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { email, phones, services, waLink } from '../data/content'

const field =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100'

export default function QuoteForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const text = `Hola SafeClean, soy ${d.get('name')}. Quiero cotizar: ${d.get('service')} en ${d.get('city')}.${
      d.get('msg') ? ` ${d.get('msg')}` : ''
    }`
    window.open(waLink(text), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-gradient-to-br from-brand-700 to-brand-900 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-aqua-400">Contacto</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Comunícate con nosotros y cotiza nuestros servicios</h2>
          <p className="mt-4 text-lg text-brand-100">Cuéntanos qué necesitas y te respondemos por WhatsApp con tu cotización.</p>
          <ul className="mt-8 space-y-4">
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-3 font-semibold hover:text-aqua-400">
                  <Phone size={20} className="text-aqua-400" /> {p.display} <span className="text-sm font-normal text-brand-200">· {p.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className="flex items-center gap-3 break-all font-semibold hover:text-aqua-400">
                <Mail size={20} className="shrink-0 text-aqua-400" /> {email}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 text-slate-700 shadow-2xl sm:p-8">
          <label className="block text-sm font-bold text-brand-900">
            Nombre
            <input name="name" required autoComplete="name" className={field} placeholder="Tu nombre" />
          </label>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-bold text-brand-900">
              Servicio
              <select name="service" className={field}>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
                <option>Desinfección con nebulización ULV</option>
              </select>
            </label>
            <label className="block text-sm font-bold text-brand-900">
              Ciudad
              <select name="city" className={field}>
                <option>Medellín</option>
                <option>Bogotá</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm font-bold text-brand-900">
            Mensaje (opcional)
            <textarea name="msg" rows={3} className={field} placeholder="Metros cuadrados, frecuencia, horarios…" />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-leaf-500"
          >
            <MessageCircle size={20} /> Solicitar cotización
          </button>
          <p role="status" className="mt-3 min-h-5 text-center text-sm text-slate-500">
            {sent ? 'Abrimos WhatsApp con tu mensaje. ¡Gracias!' : 'Te abriremos WhatsApp con tu solicitud lista.'}
          </p>
        </form>
      </div>
    </section>
  )
}
