import { Reveal, SectionHeader } from '../Reveal'
import { steps } from '../../data/site'

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="How It Works"
          title="A Simple"
          emphasis="Process."
          intro="No bloated onboarding, no endless meetings. Three clear steps from first hello to first concepts."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="relative">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-ink/[0.08] bg-white font-display text-2xl font-bold text-brand-600 shadow-card">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <a href="#contact" className="btn-primary">
              Book your free discovery call →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
