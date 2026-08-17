import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'
import { Reveal } from './ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 0%, rgba(201,169,104,0.12), transparent 65%), radial-gradient(40% 35% at 85% 80%, rgba(171,142,192,0.1), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-soft">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Let’s begin
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
                Let’s Create
                <br />
                Something
                <br />
                <span className="text-gradient-gold italic">Beautiful</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
                Tell us about your big day — a wedding, a birthday, a launch. We’ll reply within a day with ideas, direction and a plan.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4">
                {[
                  ['Replies within 24 hours', 'Usually much faster.'],
                  ['Free consultation', 'No pressure, no obligations.'],
                  ['Let’s make it yours', 'Every quote is custom to you.'],
                ].map(([title, sub]) => (
                  <div key={title} className="flex items-center gap-4">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-gold/70" />
                    <div>
                      <p className="text-sm font-semibold text-cream">{title}</p>
                      <p className="text-xs text-cream/45">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 hidden items-center gap-3 lg:flex"
            >
              {['weddings', 'birthdays', 'corporate', 'college'].map((tag) => (
                <span key={tag} className="rounded-full border border-cream/10 px-3 py-1 text-xs text-cream/45">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
