import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  CalendarRange,
  GalleryHorizontalEnd,
  HeartHandshake,
  MapPin,
  MapPinned,
  Music2,
  Timer,
  UsersRound,
  Video,
} from 'lucide-react'
import { DEMOS } from '../data/demos'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { DemoArt } from './DemoArt'

const ease = [0.22, 1, 0.36, 1] as const

const REVEALED = [
  { icon: CalendarRange, label: 'Event schedule' },
  { icon: GalleryHorizontalEnd, label: 'Photo gallery' },
  { icon: Timer, label: 'Countdown' },
  { icon: MapPin, label: 'Venue' },
  { icon: HeartHandshake, label: 'RSVP' },
  { icon: MapPinned, label: 'Maps' },
  { icon: Music2, label: 'Music' },
  { icon: Video, label: 'Videos' },
  { icon: UsersRound, label: 'Family information' },
]

function InviteCard({ hidden }: { hidden: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      animate={
        hidden
          ? { opacity: 0, x: 90, y: -10, scale: 0.7, rotate: 6 }
          : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
      }
      transition={{ duration: 0.9, ease }}
      className="absolute left-1/2 top-1/2 z-10 w-[230px] -translate-x-[95%] -translate-y-1/2 sm:w-[260px]"
    >
      <div className="rounded-[1.6rem] border border-gold/35 bg-gradient-to-b from-ink-800 to-ink-900 p-6 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <span className="font-display text-lg italic text-gold-soft">A & D</span>
        </div>
        <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-cream/45">Together with their families</p>
        <p className="mt-3 font-display text-2xl leading-tight text-cream">A Garden in Amber</p>
        <p className="mt-3 text-xs tracking-wide text-cream/50">Saturday · 14 August 2026</p>
        <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <p className="mt-4 text-[0.62rem] uppercase tracking-[0.25em] text-cream/35">The Glasshouse · Jaipur</p>
      </div>
      <p className="mt-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-cream/40">A traditional card</p>
    </motion.div>
  )
}

function WebsiteMock({ show }: { show: boolean }) {
  const demo = DEMOS[0]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, x: 40 }}
      animate={show ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.88, x: 40 }}
      transition={{ duration: 0.8, delay: show ? 0.45 : 0, ease }}
      className="absolute left-1/2 top-1/2 w-[320px] -translate-x-[5%] -translate-y-1/2 sm:w-[400px]"
    >
      <div className="overflow-hidden rounded-3xl border border-cream/14 bg-ink-900 shadow-[0_40px_100px_-24px_rgba(0,0,0,0.95)]">
        <div className="flex items-center gap-1.5 border-b border-cream/8 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-rose/70" />
          <span className="h-2 w-2 rounded-full bg-gold/70" />
          <span className="h-2 w-2 rounded-full bg-sage/70" />
          <span className="ml-2 truncate rounded-md bg-cream/5 px-2 py-0.5 text-[0.6rem] text-cream/40">aurelia.dev.live</span>
          <span className="ml-auto rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.55rem] font-medium text-emerald-300">LIVE</span>
        </div>
        <DemoArt scene={demo.theme.scene} c={demo.theme.c} className="h-32 w-full" showGrain={false} animated={false} />
        <div className="p-5 text-center">
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold-soft">We are getting married</p>
          <p className="mt-2 font-display text-2xl text-cream">A Garden in Amber</p>
          <p className="mt-1 text-xs text-cream/50">14 August 2026 · The Glasshouse, Jaipur</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[['120', 'days'], ['08', 'hrs'], ['42', 'min'], ['18', 'sec']].map(([v, l]) => (
              <div key={l} className="rounded-xl border border-cream/10 bg-cream/5 py-2">
                <p className="font-display text-sm text-cream">{v}</p>
                <p className="text-[0.5rem] uppercase tracking-[0.2em] text-cream/40">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 inline-flex h-9 items-center rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 text-xs font-semibold text-ink-950">
            RSVP for A & D
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-gold-soft">An interactive event website</p>
    </motion.div>
  )
}

function Transform() {
  const reduce = useReducedMotion()
  const [stage, setStage] = useState<'idle' | 'playing' | 'done'>('idle')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      onViewportEnter={() => !reduce && setStage('playing')}
      transition={{ duration: 0.8, ease }}
      className="relative mx-auto mt-16 h-[380px] max-w-4xl sm:h-[420px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[520px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,169,104,0.22), transparent 70%)' }}
      />
      <AnimatePresence mode="wait">
        {stage === 'done' ? (
          <motion.div key="check" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/15">
                <span className="font-display text-xl italic text-gold-soft">✦</span>
              </span>
              <p className="mt-3 text-center text-xs font-medium text-cream/50">…into a living experience</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {stage !== 'done' && <InviteCard hidden={stage === 'playing'} />}
      </AnimatePresence>
      <WebsiteMock show={stage === 'playing' || stage === 'done'} />

      <div className="absolute inset-x-0 -bottom-2 flex items-center justify-center gap-3">
        <span className="text-xs text-cream/35">Guest receives an invite</span>
        <span className="text-gold/60">→</span>
        <span className="text-xs text-cream/35">Opens a whole world</span>
      </div>
    </motion.div>
  )
}

export function NotJustACard() {
  return (
    <section id="transformation" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The idea"
          title={
            <>
              Your invitation is no longer
              <br className="hidden sm:block" /> <span className="text-gradient-gold italic">just a card.</span>
            </>
          }
          subtitle="We turn the invitation into an interactive digital experience — everything a guest needs, living behind a single beautiful link."
        />
        <Transform />
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {REVEALED.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 0.07} y={18}>
              <div className="group flex items-center gap-3 rounded-2xl border border-cream/10 bg-ink-900/50 px-4 py-3.5 transition-colors duration-300 hover:border-gold/30">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/8 text-gold-soft transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-cream/80">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
