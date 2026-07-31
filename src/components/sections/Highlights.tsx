import { Reveal } from '../Reveal'

const items = [
  { icon: '⚡', label: '14-day first delivery', sub: 'See first concepts, fast' },
  { icon: '⟳', label: 'Unlimited revisions', sub: "Iterate until it's right" },
  { icon: '⏸', label: 'Cancel anytime', sub: 'No contracts, no lock-in' },
  { icon: '◇', label: 'Fixed monthly pricing', sub: 'No surprises, ever' },
]

export function Highlights() {
  return (
    <section className="border-y border-ink/[0.06] bg-white py-10">
      <div className="container-x">
        <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink/[0.08]">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="flex items-center gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-xl text-brand-600 ring-1 ring-inset ring-brand-500/10">
                  {item.icon}
                </span>
                <div>
                  <div className="font-display text-[0.98rem] font-bold leading-tight tracking-tight text-ink">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-sm text-ink-muted">{item.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
