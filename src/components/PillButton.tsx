import type { ReactNode } from 'react'

type Variant = 'accent' | 'primary' | 'dark' | 'light'

const wrap: Record<Variant, string> = {
  accent:
    'bg-accent text-ink shadow-[0_12px_34px_-10px_rgba(167,217,47,0.95)] hover:bg-accent-400',
  primary:
    'bg-brand-500 text-white shadow-[0_12px_34px_-10px_rgba(47,91,255,0.7)] hover:bg-brand-600',
  dark: 'bg-ink text-white hover:bg-ink-soft',
  light: 'bg-white text-ink border border-ink/10 hover:border-brand-300',
}

const badge: Record<Variant, string> = {
  accent: 'bg-ink text-accent',
  primary: 'bg-white/20 text-white',
  dark: 'bg-white/15 text-white',
  light: 'bg-ink text-white',
}

export function PillButton({
  children,
  href,
  variant = 'accent',
  className = '',
  icon = '↗',
}: {
  children: ReactNode
  href: string
  variant?: Variant
  className?: string
  icon?: string
}) {
  return (
    <a
      href={href}
      className={`group/btn inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 font-display text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${wrap[variant]} ${className}`}
    >
      {children}
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-base leading-none transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${badge[variant]}`}
      >
        {icon}
      </span>
    </a>
  )
}
