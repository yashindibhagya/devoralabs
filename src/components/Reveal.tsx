import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  emphasis,
}: {
  eyebrow: string
  title: string
  emphasis?: string
  intro?: string
}) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-2xl">
        <span className="eyebrow mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.4rem]">
          {title} {emphasis && <span className="text-gradient">{emphasis}</span>}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1} className="max-w-md">
          <p className="text-base leading-relaxed text-ink-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
