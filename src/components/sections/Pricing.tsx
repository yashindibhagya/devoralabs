import { Reveal } from '../Reveal'
import { PillButton } from '../PillButton'

type Plan = {
  name: string
  price: string
  cadence: string
  blurb: string
  features: string[]
  featured?: boolean
  cta: string
  variant: 'primary' | 'accent' | 'dark'
}

const plans: Plan[] = [
  {
    name: 'Essentials',
    price: '$2,500',
    cadence: '/month',
    blurb: 'For focused, single-track design needs.',
    features: [
      'One request at a time',
      'UI/UX & brand design',
      '48-hour average turnaround',
      'Unlimited revisions',
      'Pause or cancel anytime',
    ],
    cta: 'Choose Essentials',
    variant: 'primary',
  },
  {
    name: 'Growth',
    price: '$4,500',
    cadence: '/month',
    blurb: 'For teams shipping product fast.',
    features: [
      'Two requests in parallel',
      'UI/UX + web development',
      'Priority turnaround',
      'Organized design portal',
      'Dedicated designer',
      'Unlimited revisions',
    ],
    featured: true,
    cta: 'Choose Growth',
    variant: 'accent',
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    blurb: 'For funded startups & enterprises.',
    features: [
      'Everything in Growth',
      'Mobile app development',
      'Full brand & design systems',
      'Private Slack channel',
      'Quarterly strategy sessions',
    ],
    cta: 'Book a call',
    variant: 'dark',
  },
]

function Check({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] ${
        dark ? 'bg-accent text-ink' : 'bg-brand-500/10 text-brand-600'
      }`}
    >
      ✓
    </span>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-soft py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
            Pricing
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Simple, flat <span className="text-gradient">monthly pricing.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            No hourly billing, no surprises. Pick a plan, get unlimited design, and pause whenever you
            need.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-4xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-ink text-white shadow-panel lg:-translate-y-4'
                    : 'border border-ink/[0.08] bg-white shadow-card hover:-translate-y-1.5 hover:shadow-card-hover'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${plan.featured ? 'text-white/60' : 'text-ink-muted'}`}>
                  {plan.blurb}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`pb-1.5 text-sm ${plan.featured ? 'text-white/50' : 'text-ink-muted'}`}>
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check dark={plan.featured} />
                      <span className={plan.featured ? 'text-white/80' : 'text-ink-soft'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <PillButton
                    href="#contact"
                    variant={plan.variant}
                    icon={plan.variant === 'dark' ? '→' : '↗'}
                    className="w-full justify-between"
                  >
                    {plan.cta}
                  </PillButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
