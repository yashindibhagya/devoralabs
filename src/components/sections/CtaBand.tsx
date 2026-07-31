import { Reveal } from '../Reveal'
import { PillButton } from '../PillButton'
import { LogoMark } from '../Logo'

export function CtaBand() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 px-8 py-16 text-center text-white shadow-panel md:px-16 md:py-20">
            {/* decor */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute inset-0 grid-bg opacity-[0.08]" />
            </div>

            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <LogoMark className="h-8 w-8" />
              </span>
              <h2 className="mx-auto mt-7 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                Join 10+ teams already building with{' '}
                <span className="text-accent">Devora Labs.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-white/70">
                Book a free 30-minute discovery call. No commitments — just a clear plan for what we
                can build together.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <PillButton href="#contact" variant="accent">
                  Book a discovery call
                </PillButton>
                <PillButton href="#work" variant="light" icon="→">
                  See our work
                </PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
