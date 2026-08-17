import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Crown } from 'lucide-react'
import { PRICING_PLANS } from '../data/site'
import type { PricingPlan } from '../data/site'
import { cn } from '../lib/utils'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative flex flex-col rounded-[2rem] border p-8 transition-all duration-500 sm:p-9',
        plan.highlight
          ? 'border-gold/40 bg-gradient-to-b from-gold/10 via-ink-900 to-ink-900 shadow-[0_30px_90px_-30px_rgba(201,169,104,0.35)] lg:-translate-y-4'
          : 'border-cream/10 bg-ink-900/60 hover:border-cream/20',
      )}
    >
      {plan.highlight && (
        <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink-950 shadow-lg">
          <Crown className="h-3.5 w-3.5" /> Most loved
        </span>
      )}
      <h3 className="font-display text-xl font-medium text-cream">{plan.name}</h3>
      <p className="mt-2 min-h-10 text-sm leading-relaxed text-cream/55">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-medium text-cream sm:text-5xl">{plan.price}</span>
        <span className="text-xs uppercase tracking-wider text-cream/40">{plan.cadence}</span>
      </div>
      <ul className="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-cream/70">
            <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', plan.highlight ? 'bg-gold/15 text-gold-soft' : 'bg-cream/8 text-cream/60')}>
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={cn(
          'group mt-9 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300',
          plan.highlight
            ? 'bg-gradient-to-r from-gold to-gold-soft text-ink-950 hover:shadow-[0_10px_36px_-8px_rgba(201,169,104,0.7)]'
            : 'border border-cream/15 bg-cream/4 text-cream hover:border-gold/40 hover:bg-cream/8',
        )}
      >
        {plan.name === 'Bespoke' ? 'Request a Quote' : `Create with ${plan.name}`}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Beautiful experiences, <span className="text-gradient-gold italic">honest pricing</span>
            </>
          }
          subtitle="One-time price per event. Hosting, your custom link and a guest experience they’ll talk about — included."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-cream/50">
            Not sure which fits? <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="font-semibold text-gold-soft underline-offset-4 hover:underline">Talk to the studio</button> — we’ll help you choose.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
