import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../data/site'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function ProcessStep({ step, index }: { step: (typeof PROCESS_STEPS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-1"
    >
      <div className="relative rounded-3xl border border-cream/10 bg-ink-900/50 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-ink-900/80">
        <div className="flex items-center justify-between">
          <span className="font-display text-6xl font-light text-gradient-gold italic opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {step.number}
          </span>
          <span className="h-px w-10 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500 group-hover:w-16" />
        </div>
        <h3 className="mt-6 font-display text-xl font-medium text-cream sm:text-2xl">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/55">{step.description}</p>
      </div>
      {index < PROCESS_STEPS.length - 1 && (
        <span className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-gold/40 lg:block" aria-hidden>
          →
        </span>
      )}
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From dream to <span className="text-gradient-gold italic">living website</span>
            </>
          }
          subtitle="A simple, guided path — no design experience needed. You share the story, we craft the experience."
        />
        <Reveal delay={0.2} className="mt-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
