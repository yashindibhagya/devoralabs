import { Reveal } from '../Reveal'
import { benefits } from '../../data/site'

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[130px]" />
      </div>

      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow mb-4 text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Benefits
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.4rem]">
              Our <span className="text-gradient">Benefits.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-base leading-relaxed text-white/60">
              Get unlimited design work for a simple monthly rate. No hourly billing, no surprises —
              pause or cancel whenever you need.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.id} delay={(i % 3) * 0.06}>
              <article className="group relative h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-white/40">{b.num} /</span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-brand-300 transition-all duration-300 group-hover:border-brand-400/40 group-hover:bg-brand-500/10">
                    {b.icon}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight">{b.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/55">{b.description}</p>
                <div className="mt-6 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/35 transition-colors group-hover:text-brand-300">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-white/45">
              Pause or cancel anytime — no contracts, no lock-in
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/70">
              <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" />
              Currently accepting new clients
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
