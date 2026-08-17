import { motion } from 'framer-motion'
import { Compass, Gem, HeartHandshake } from 'lucide-react'
import { ABOUT_STATS } from '../data/site'
import { DEMOS } from '../data/demos'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { DemoArt } from './DemoArt'
import { cn } from '../lib/utils'

const values = [
  {
    icon: Gem,
    title: 'Crafted, never templated',
    text: 'No cookie-cutter layouts. Every experience starts with your story and ends with your signature.',
  },
  {
    icon: HeartHandshake,
    title: 'Studio-grade care',
    text: 'A small senior team, a direct line to your designer, and a personal touch on every single pixel.',
  },
  {
    icon: Compass,
    title: 'Built to be remembered',
    text: 'We obsess over how your guests feel — from the first opened link to the last scroll.',
  },
]

export function About() {
  const a = DEMOS[2].theme.c
  const b = DEMOS[0].theme.c
  const c = DEMOS[12].theme.c

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(50% 40% at 15% 30%, rgba(171,142,192,0.09), transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The studio"
              title={
                <>
                  We turn special moments into <span className="text-gradient-gold italic">digital keepsakes</span>
                </>
              }
              subtitle="Aurelia is a small creative studio of designers, developers and storytellers. We build the websites people keep open on their phones for months — because they capture something real."
            />

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {ABOUT_STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-cream/10 bg-ink-900/50 p-5 text-center transition-colors hover:border-gold/30">
                    <p className="font-display text-3xl text-gold-soft">{stat.value}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-cream/45">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/8 text-gold-soft">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-cream">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream/55">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[640px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 w-[62%] overflow-hidden rounded-3xl border border-cream/12 shadow-2xl"
              >
                <DemoArt scene="sunset" c={a} className="aspect-[4/5]" animated={false} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="font-display text-lg text-white">The light behind every launch</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-24 w-[52%] overflow-hidden rounded-3xl border border-cream/12 shadow-2xl"
              >
                <DemoArt scene="arch" c={b} className="aspect-[4/5]" animated={false} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="font-display text-lg text-white">Every story, its own world</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-[14%] w-[58%] overflow-hidden rounded-3xl border border-cream/12 shadow-2xl"
              >
                <DemoArt scene="citynight" c={c} className="aspect-[16/10]" animated={false} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="font-display text-lg text-white">240+ moments, beautifully told</p>
                </div>
              </motion.div>
              <div
                className={cn('absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl')}
                style={{ background: 'radial-gradient(circle, rgba(201,169,104,0.35), transparent 70%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
