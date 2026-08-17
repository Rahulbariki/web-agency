import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { DemoArt } from '../DemoArt'
import { WEDDING } from '../../data/wedding'
import type { ExperienceDemo } from '../../data/demos'

export function WeddingHero({ demo }: { demo: ExperienceDemo }) {
  const scroll = () => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0">
        <DemoArt scene={demo.theme.scene} c={demo.theme.c} className="h-full w-full" animated />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--exp-bg) 42%, transparent) 0%, color-mix(in srgb, var(--exp-bg) 82%, transparent) 72%, var(--exp-bg) 100%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-[var(--exp-muted)] sm:text-xs"
        >
          {WEDDING.hero.kicker}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-center"
        >
          <h1 className="text-center font-display text-6xl font-light leading-[0.95] tracking-tight sm:text-8xl">
            {WEDDING.hero.names[0]}
            <span className="mx-4 inline-block align-middle font-display text-2xl italic text-[var(--exp-a)] sm:text-4xl">&</span>
            {WEDDING.hero.names[1]}
          </h1>
          <div className="mt-8 flex items-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-xl italic text-[var(--exp-fg)] sm:text-2xl"
        >
          {WEDDING.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--exp-fg)]">{WEDDING.hero.date}</p>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[var(--exp-muted)]">{WEDDING.hero.place}</p>
        </motion.div>
      </div>

      <motion.button
        onClick={scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to our story"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1.5 text-[var(--exp-muted)] transition-colors hover:text-[var(--exp-fg)]"
      >
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  )
}
