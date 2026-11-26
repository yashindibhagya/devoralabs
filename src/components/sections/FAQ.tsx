import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, SectionHeader } from '../Reveal'
import { faqs } from '../../data/site'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions &"
          emphasis="Answers."
          intro="Everything you might want to know before we start working together."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-display text-lg font-semibold text-ink">{faq.question}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-lg transition-all duration-300 ${
                      isOpen ? 'rotate-45 border-brand-400 bg-brand-500 text-white' : 'text-ink-soft'
                    }`}
                  >
                    +
                  </span>
                </button>
                {/* Answers stay in the DOM (collapsed, not removed) so search engines can read every FAQ. */}
                <motion.div
                  id={`faq-answer-${i}`}
                  initial={false}
                  animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink-muted">{faq.answer}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
