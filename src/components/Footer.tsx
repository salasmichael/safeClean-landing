import { MessageCircle } from 'lucide-react'
import { nav, phones, social, waLink } from '../data/content'

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
  </svg>
)
const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 md:flex-row">
          <div className="text-center md:text-left">
            <img src="/img/limpiezasegura.com_.co_logo-footer.png" alt="SafeClean Limpieza Segura" className="mx-auto h-14 md:mx-0" />
            <p className="mt-3 text-sm">{phones.map((p) => `${p.display} (${p.label})`).join(' · ')}</p>
          </div>
          <nav aria-label="Pie de página" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-3 transition hover:bg-brand-600 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-3 transition hover:bg-brand-600 hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs">© {YEAR} SafeClean Limpieza Segura S.A.S · Todos los derechos reservados</p>
      </footer>

      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-xl transition hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
