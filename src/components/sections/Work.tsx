import { Reveal, SectionHeader } from '../Reveal'
import { projects } from '../../data/site'

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected Work"
          title="Recent"
          emphasis="Projects."
          intro="A look at products, brands, and platforms we've shipped for founders who needed to move fast without cutting corners."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const featured = i === 0
            const Wrapper = project.url ? 'a' : 'div'
            return (
              <Reveal key={project.id} delay={(i % 2) * 0.08} className={featured ? 'md:col-span-2' : ''}>
                <Wrapper
                  {...(project.url ? { href: project.url, target: '_blank', rel: 'noreferrer' } : {})}
                  className="card-base group block h-full hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div
                    className={`relative overflow-hidden ${featured ? 'aspect-[21/8]' : 'aspect-[16/9]'} bg-gradient-to-br from-brand-500 to-brand-800`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-display text-6xl font-bold text-white/90">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 p-7">
                    <div>
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-brand-600">
                        {project.label}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
