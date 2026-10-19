import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { nav, waLink } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2" aria-label="SafeClean, inicio">
          <img src="/img/logo-03.png" alt="" className="h-10 w-10" />
          <span className="text-lg font-extrabold tracking-tight text-brand-900">
            Safe<span className="text-leaf-600">Clean</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-600">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700 sm:inline-flex"
          >
            <MessageCircle size={16} /> Cotizar
          </a>
          <button
            className="rounded-lg p-2 text-brand-900 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 pb-5 pt-2 md:hidden" aria-label="Móvil">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-semibold text-slate-700">
              {n.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-brand-600 py-3 text-center font-bold text-white">
            Solicitar cotización
          </a>
        </nav>
      )}
    </header>
  )
}
