import { Reveal, SectionHeader } from '../Reveal'
import { testimonials } from '../../data/site'

export function Testimonials() {
  return (
    <section id="reviews" className="bg-surface-soft py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Reviews"
          title="Loved by"
          emphasis="Founders."
          intro="Don't take our word for it — here's what the teams we've partnered with have to say."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card-base flex h-full flex-col p-8">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-ink-soft">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-ink/[0.06] pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display font-bold">{t.name}</span>
                    <span className="block text-sm text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
