import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ExperienceDemo } from '../data/demos'
import { DEMOS } from '../data/demos'
import { SectionHeading } from './ui/SectionHeading'
import { CategoryFilter } from './CategoryFilter'
import { DemoCard } from './DemoCard'
import { Reveal } from './ui/Reveal'

interface DemoShowcaseProps {
  onOpen: (demo: ExperienceDemo) => void
}

export function DemoShowcase({ onOpen }: DemoShowcaseProps) {
  const [active, setActive] = useState<string>('All')

  const demos = useMemo(() => {
    if (active === 'All') return DEMOS
    return DEMOS.filter((d) => d.category === active)
  }, [active])

  const scrollToGallery = (category: string) => {
    setActive(category)
    const el = document.getElementById('experiences')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="experiences" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60% 40% at 50% 0%, rgba(171,142,192,0.08), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Showcase"
          title={
            <>
              Explore the <span className="text-gradient-gold italic">experiences</span>
            </>
          }
          subtitle="Live inside a few of the event websites we've crafted — each one a complete, interactive world your guests would actually use."
        />

        <Reveal delay={0.2} className="mt-12 scroll-mt-24" >
          <div id="categories" className="scroll-mt-32">
            <CategoryFilter active={active} onChange={scrollToGallery} />
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {demos.map((demo, i) => (
              <DemoCard key={demo.id} demo={demo} index={i} onOpen={onOpen} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-cream/50">
            These are just a few of <span className="text-cream">{DEMOS.length}</span> live experiences — and your event could be next.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-gold"
          >
            Craft yours <span aria-hidden>→</span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
