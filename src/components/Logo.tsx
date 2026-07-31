type LogoProps = {
  className?: string
  variant?: 'light' | 'dark'
  showWord?: boolean
}

/**
 * DevoraLabs mark — an electric-blue code-bracket "D".
 * A navy `<` chevron paired with a blue bracket that curls into a D,
 * echoing the provided brand logo (see /public/logo.png).
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="dl-grad" x1="14" y1="8" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5c81ff" />
          <stop offset="1" stopColor="#1d42f0" />
        </linearGradient>
      </defs>
      {/* left chevron */}
      <path
        d="M18.5 13 L9 24 L18.5 35"
        stroke="#0a0f1e"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right bracket curling into a D */}
      <path
        d="M23 12 H29 a12 12 0 0 1 0 24 H23 L33.5 24 Z"
        fill="url(#dl-grad)"
      />
    </svg>
  )
}

export function Logo({ className = '', variant = 'light', showWord = true }: LogoProps) {
  const wordColor = variant === 'dark' ? 'text-white' : 'text-ink'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      {showWord && (
        <span className={`font-display text-[1.28rem] font-bold leading-none tracking-tight ${wordColor}`}>
          Devora<span className="text-brand-500">Labs</span>
        </span>
      )}
    </span>
  )
}
