import { Reveal } from '../Reveal'
import { LogoMark } from '../Logo'

export function Bento() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-4 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
            About Us
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            A design partner dedicated to building{' '}
            <span className="text-gradient">smarter</span> and shipping{' '}
            <span className="relative whitespace-nowrap">
              faster
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent" />
            </span>
            .
          </h2>
        </Reveal>

        {/* bento grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {/* big blue feature card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-4xl bg-gradient-to-br from-brand-500 to-brand-800 p-8 text-white shadow-panel">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="flex items-center justify-between">
                <LogoMark className="h-9 w-9" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/60">
                  Since 2017
                </span>
              </div>
              <div>
                <div className="font-display text-7xl font-bold tracking-tight">120+</div>
                <p className="mt-3 max-w-xs text-white/70">
                  Products, brands and platforms shipped for teams across 14 industries worldwide.
                </p>
              </div>
            </div>
          </Reveal>

          {/* light stat card */}
          <Reveal delay={0.06} className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-4xl border border-ink/[0.07] bg-surface-soft p-8">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-muted">
                Client Retention
              </span>
              <div className="mt-6 flex items-end gap-4">
                <span className="font-display text-6xl font-bold tracking-tight">98%</span>
                <p className="pb-2 text-sm text-ink-muted">
                  Most clients return for another project. We build for the long run.
                </p>
              </div>
            </div>
          </Reveal>

          {/* lime data card */}
          <Reveal delay={0.12}>
            <div className="flex h-full min-h-[150px] flex-col justify-between rounded-4xl bg-accent p-7 text-ink">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/60">
                Avg. Rating
              </span>
              <div>
                <div className="font-display text-5xl font-bold tracking-tight">4.9★</div>
                <p className="mt-1 text-sm text-ink/70">Across published apps</p>
              </div>
            </div>
          </Reveal>

          {/* dark card */}
          <Reveal delay={0.18}>
            <div className="flex h-full min-h-[150px] flex-col justify-between rounded-4xl bg-ink p-7 text-white">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/50">
                First Delivery
              </span>
              <div>
                <div className="font-display text-5xl font-bold tracking-tight">
                  14<span className="text-accent">d</span>
                </div>
                <p className="mt-1 text-sm text-white/60">Average turnaround</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
