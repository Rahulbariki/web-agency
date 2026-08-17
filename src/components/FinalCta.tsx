import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { DemoArt } from './DemoArt'

const ease = [0.22, 1, 0.36, 1] as const

export function FinalCta() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden">
      <DemoArt
        scene="fireworks"
        c={{ base: '#0b0a11', a: '#c9a968', b: '#ab8ec0', accent: '#ddc184', text: '#f6efe2' }}
        className="absolute inset-0 h-full w-full opacity-40"
        showGrain={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:py-36">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
        >
          <Sparkles className="h-5 w-5 text-gold-soft" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-8 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Some moments happen once.
          <br />
          <span className="text-gradient-gold italic">Make the invitation unforgettable.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/60"
        >
          Your guests will open the link, hear the music, see the story and feel what’s coming — before they ever arrive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.38, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={() => go('#contact')}
            className="group inline-flex h-[3.4rem] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-9 text-[0.95rem] font-semibold text-ink-950 shadow-[0_12px_50px_-12px_rgba(201,169,104,0.7)] transition-all duration-300 hover:brightness-110"
          >
            Create Your Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => go('#experiences')}
            className="group inline-flex h-[3.4rem] items-center justify-center gap-2 rounded-full border border-cream/18 bg-cream/4 px-9 text-[0.95rem] font-medium text-cream backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-cream/8"
          >
            Explore Demos
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
