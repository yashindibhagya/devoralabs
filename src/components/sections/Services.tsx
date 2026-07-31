import { Reveal, SectionHeader } from '../Reveal'
import { services } from '../../data/site'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Services"
          title="What We"
          emphasis="Do."
          intro="We combine strategy, speed, and skill to deliver exceptional design — every time. One flat fee, unlimited revisions, real results."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <article className="card-base group h-full p-8 hover:-translate-y-1.5 hover:shadow-card-hover">
                {/* accent bar */}
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-brand-500 transition-transform duration-300 group-hover:scale-y-100" />
                {/* orb */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-400/10 blur-2xl transition-all duration-500 group-hover:bg-brand-400/25" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-brand-600">{service.num} /</span>
                  <span className="text-xl text-ink-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500">
                    ↗
                  </span>
                </div>

                <div className="mt-10 font-display text-7xl font-bold text-surface-muted transition-colors duration-300 group-hover:text-brand-100">
                  {service.num}
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{service.title}</h3>
                <div className="my-4 h-px w-10 bg-brand-500" />
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/[0.08] bg-surface-soft px-3 py-1 font-mono text-[0.66rem] uppercase tracking-wider text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-ink/[0.07] bg-surface-soft px-8 py-6 sm:flex-row">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-muted">
              All services available on a flat monthly subscription
            </span>
            <a href="#contact" className="btn-primary">
              Contact us ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
