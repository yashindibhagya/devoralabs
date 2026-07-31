import { useState } from 'react'
import { Reveal } from '../Reveal'
import { contact } from '../../data/site'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [pricing, setPricing] = useState(contact.pricingOptions[0])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const website = String(form.get('website') || '')
    const message = String(form.get('message') || '')

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Website: ${website}`,
      `Interested in: ${pricing}`,
      '',
      message,
    ].join('\n')

    // No backend required — opens the visitor's mail client pre-filled.
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `New project enquiry — ${name || 'Devora Labs'}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-600/30 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-brand-400/20 blur-[120px]" />
      </div>

      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* left — pitch + details */}
        <Reveal>
          <span className="eyebrow mb-4 text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Contact
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.4rem]">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
            Tell us about your project and we'll get back within 24 hours. No pressure, no
            obligations — just a conversation about what's possible.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                ✉
              </span>
              <span>
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                  Write to sales
                </span>
                <span className="font-medium">{contact.email}</span>
              </span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                ☎
              </span>
              <span>
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                  Call us
                </span>
                <span className="font-medium">{contact.phone}</span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* right — form */}
        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:p-9">
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-3xl">
                  ✓
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">Almost there!</h3>
                <p className="mt-3 max-w-xs text-white/60">
                  Your email draft is ready — just hit send. We'll reply within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-8 !bg-transparent !text-white !border-white/20">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Your name" name="name" placeholder="Jane Founder" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field label="Website (optional)" name="website" placeholder="yourcompany.com" />

                <div>
                  <label className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contact.pricingOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setPricing(opt)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          pricing === opt
                            ? 'border-brand-400 bg-brand-500 text-white'
                            : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send message →
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </div>
  )
}
