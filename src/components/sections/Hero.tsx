import { motion } from 'framer-motion'
import { PillButton } from '../PillButton'
import { LogoMark } from '../Logo'

type Tone = 'white' | 'blue' | 'lime' | 'dark'

type Card = {
  kicker: string
  big?: string
  sub: string
  tone: Tone
  rot: number
  ty: number
  z: number
  onMobile: boolean
  chart?: boolean
}

const cards: Card[] = [
  { kicker: 'Projects', big: '10+', sub: 'Shipped & live', tone: 'white', rot: -15, ty: 30, z: 10, onMobile: false },
  { kicker: 'Growth', sub: 'Avg. conversion lift', tone: 'white', rot: -7, ty: 10, z: 20, onMobile: true, chart: true },
  { kicker: 'Satisfaction', big: '100%', sub: 'Client happiness', tone: 'blue', rot: 0, ty: -20, z: 30, onMobile: true },
  { kicker: 'Support', big: '24/7', sub: 'Always on', tone: 'lime', rot: 7, ty: 10, z: 20, onMobile: true },
  { kicker: 'Revisions', big: '∞', sub: 'Unlimited requests', tone: 'dark', rot: 15, ty: 30, z: 10, onMobile: false },
]

const toneClass: Record<Tone, string> = {
  white: 'bg-white text-ink border border-ink/[0.07]',
  blue: 'bg-gradient-to-br from-brand-500 to-brand-700 text-white',
  lime: 'bg-accent text-ink',
  dark: 'bg-ink text-white',
}

function CardFace({ card }: { card: Card }) {
  const mutedText =
    card.tone === 'blue' || card.tone === 'dark'
      ? 'text-white/55'
      : card.tone === 'lime'
        ? 'text-ink/60'
        : 'text-ink-muted'
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[0.58rem] uppercase tracking-[0.18em] ${mutedText}`}>
          {card.kicker}
        </span>
        <LogoMark className="h-5 w-5 opacity-70" />
      </div>

      {card.chart ? (
        <svg viewBox="0 0 120 48" className="w-full" fill="none">
          <polyline
            points="2,42 22,34 42,38 62,22 82,26 102,10 118,6"
            stroke="#2f5bff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="118" cy="6" r="3.5" fill="#c6f24e" stroke="#2f5bff" strokeWidth="2" />
        </svg>
      ) : (
        <div className="font-display text-5xl font-bold tracking-tight">{card.big}</div>
      )}

      <div className={`text-xs ${mutedText}`}>{card.sub}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_10%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-6rem] h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-brand-300/25 blur-[130px]" />
        <div className="absolute left-[12%] top-40 h-72 w-72 rounded-full bg-accent/25 blur-[110px]" />
      </div>

      <div className="container-x pb-8 pt-16 text-center md:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-ink/[0.08] bg-white/70 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-500" />
          Available for projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-4xl font-display text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-[5rem]"
        >
          World-Class <span className="text-gradient">Design</span>
          <br />
          Partner<span className="text-accent-600">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          Design subscriptions for AI-powered startups. Strategy, UI/UX, branding and motion — all in
          one flat monthly fee. <span className="font-semibold text-ink">Ship faster, grow with confidence.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <PillButton href="#contact" variant="accent">
            Start a project
          </PillButton>
          <PillButton href="#work" variant="dark" icon="→">
            View our work
          </PillButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-muted"
        >
          <span className="text-amber-400">★★★★★</span>
          Rated 4.9/5 by 10+ happy clients
        </motion.div>

        {/* fanned card arc */}
        <div className="relative mt-14 flex h-[300px] items-center justify-center md:mt-16 md:h-[330px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{ opacity: 1, y: card.ty, rotate: card.rot }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: card.ty - 18, rotate: card.rot, scale: 1.04, zIndex: 40 }}
              style={{ zIndex: card.z }}
              className={`-mx-3 flex h-[220px] w-[168px] flex-col rounded-3xl p-5 shadow-float md:h-[240px] md:w-[186px] ${
                toneClass[card.tone]
              } ${card.onMobile ? '' : 'hidden lg:flex'}`}
            >
              <CardFace card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
