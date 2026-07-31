import { Logo } from '../Logo'
import { nav, contact } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] bg-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed text-ink-muted">
              A creative digital agency crafting design that ships. Build. Solve. Elevate.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted">
              <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-500" />
              Available for projects
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-muted">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-ink-soft transition-colors hover:text-brand-600">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-muted">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink-soft transition-colors hover:text-brand-600"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-ink-soft transition-colors hover:text-brand-600"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href="#contact" className="btn-primary mt-2">
                  Start a project ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/[0.07] pt-8 sm:flex-row">
          <span className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Devora Labs. All rights reserved.
          </span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-muted">
            Build · Solve · Elevate
          </span>
        </div>
      </div>
    </footer>
  )
}
