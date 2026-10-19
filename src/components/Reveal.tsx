import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-aqua-500">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-slate-600">{sub}</p>}
    </div>
  )
}
