import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, CalendarDays, Check, MapPin, Share2, Sparkles, Timer } from 'lucide-react'
import { DEMOS } from '../data/demos'
import { TRUST_CATEGORIES } from '../data/site'
import { useCountdown } from '../lib/countdown'
import { cn } from '../lib/utils'
import { DemoArt } from './DemoArt'

const ease = [0.22, 1, 0.36, 1] as const

function Chip({
  icon: Icon,
  label,
  value,
  className,
  delay,
}: {
  icon: typeof Sparkles
  label: string
  value: string
  className: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={cn('absolute z-20', className)}
    >
      <div className="flex items-center gap-2.5 rounded-2xl border border-cream/14 bg-ink-900/85 py-2.5 pl-3 pr-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream/40">{label}</p>
          <p className="text-xs font-medium text-cream">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

function BrowserCard({
  demo,
  className,
  floatClass,
  delay = 0,
}: {
  demo: (typeof DEMOS)[number]
  className?: string
  floatClass: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
      className={cn('absolute', className)}
    >
      <div className={cn(floatClass, 'group rounded-2xl border border-cream/12 bg-ink-850/80 p-2 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.04]')}>
        <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
          <span className="h-2 w-2 rounded-full bg-rose/70" />
          <span className="h-2 w-2 rounded-full bg-gold/70" />
          <span className="h-2 w-2 rounded-full bg-sage/70" />
          <span className="ml-2 flex-1 truncate rounded-md bg-cream/5 px-2 py-0.5 text-[0.6rem] text-cream/40">
            {demo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.live
          </span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[0.55rem] font-medium text-emerald-300">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" /> LIVE
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <DemoArt scene={demo.theme.scene} c={demo.theme.c} className="h-32 sm:h-36" showGrain={false} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
            <p className="font-display text-sm text-cream">{demo.heroTitle}</p>
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/55">{demo.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function HeroVisual() {
  const reduce = useReducedMotion()
  const wedding = DEMOS[0]
  const sunset = DEMOS[2]
  const fireworks = DEMOS[13]
  const city = DEMOS[11]
  const { countdown } = useCountdown(45)

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[620px] sm:h-[520px]">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[560px] sm:w-[560px]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(201,169,104,0.16), rgba(171,142,192,0.1) 45%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/8" style={{ width: '78%', height: '78%' }} />

      <BrowserCard
        demo={wedding}
        floatClass={reduce ? '' : 'animate-float-slow'}
        delay={0.25}
        className="left-0 top-6 w-[62%] sm:left-2 sm:top-4"
      />
      <BrowserCard
        demo={sunset}
        floatClass={reduce ? '' : 'animate-float-slower'}
        delay={0.45}
        className="right-0 top-0 w-[52%] sm:right-1"
      />
      <BrowserCard
        demo={fireworks}
        floatClass={reduce ? '' : 'animate-float-slower'}
        delay={0.6}
        className="bottom-2 left-[6%] w-[46%] sm:left-[10%]"
      />
      <BrowserCard
        demo={city}
        floatClass={reduce ? '' : 'animate-float-slow'}
        delay={0.75}
        className="bottom-10 right-[4%] w-[40%] sm:right-[8%]"
      />

      <Chip
        icon={Check}
        label="RSVP confirmed"
        value="You're on the list!"
        delay={1.05}
        className={cn('left-0 top-[38%] sm:left-[-6%]', reduce ? '' : 'animate-float-slower')}
      />
      <Chip
        icon={Timer}
        label="Countdown"
        value={`${countdown.days} days to go`}
        delay={1.2}
        className={cn('right-0 top-[30%] sm:right-[-4%]', reduce ? '' : 'animate-float-slow')}
      />
      <Chip
        icon={CalendarDays}
        label="The big day"
        value="14 · 08 · 2026"
        delay={1.35}
        className={cn('left-[-2%] bottom-[16%] sm:left-[2%]', reduce ? '' : 'animate-float-slow')}
      />
      <Chip
        icon={MapPin}
        label="Venue"
        value="The Glasshouse, Jaipur"
        delay={1.5}
        className={cn('right-0 bottom-[22%] sm:right-[-6%]', reduce ? '' : 'animate-float-slower')}
      />
      <Chip
        icon={Share2}
        label="Share"
        value="Invite a guest"
        delay={1.65}
        className={cn('bottom-0 left-1/2 z-30 -translate-x-1/2', reduce ? '' : 'animate-float-slow')}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className={cn('absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2', reduce ? '' : 'animate-pulse-soft')}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink-900/80 shadow-[0_0_50px_rgba(201,169,104,0.4)] backdrop-blur-xl">
          <Sparkles className="h-5 w-5 text-gold-soft" />
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  const go = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-24 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            'radial-gradient(70% 60% at 20% 0%, rgba(201,169,104,0.14), transparent 60%), radial-gradient(50% 45% at 85% 10%, rgba(171,142,192,0.12), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/12 bg-cream/4 px-4 py-2 text-xs font-medium tracking-wide text-cream/70"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold-soft" />
              A premium digital studio for life’s biggest moments
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-6 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-[4.4rem]"
            >
              Your event deserves
              <br />
              more than an
              <br />
              <span className="text-gradient-gold italic">invitation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-cream/60"
            >
              Create beautiful, personalized event websites for weddings, celebrations, and every
              moment worth remembering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => go('#contact')}
                className="group inline-flex h-[3.25rem] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-8 text-[0.95rem] font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(201,169,104,0.6)] transition-all duration-300 hover:brightness-110"
              >
                Create Your Website
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => go('#experiences')}
                className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-cream/15 bg-cream/4 px-8 text-[0.95rem] font-medium text-cream transition-all duration-300 hover:border-gold/40 hover:bg-cream/8"
              >
                Explore Experiences
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="mt-12 flex items-center gap-8 border-t border-cream/8 pt-6"
            >
              <div>
                <p className="font-display text-2xl text-gold-soft">240+</p>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">stories crafted</p>
              </div>
              <div className="h-10 w-px bg-cream/10" />
              <div>
                <p className="font-display text-2xl text-cream">10</p>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">event categories</p>
              </div>
              <div className="hidden h-10 w-px bg-cream/10 sm:block" />
              <div className="hidden sm:block">
                <p className="font-display text-2xl text-cream">18</p>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">live experiences</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Category strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative mt-20 overflow-hidden border-y border-cream/8 py-5"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-10">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10" aria-hidden={dup === 1}>
              {TRUST_CATEGORIES.map((item) => (
                <span key={item} className="flex items-center gap-10 whitespace-nowrap font-display text-lg italic text-cream/35">
                  {item}
                  <span className="text-gold/50">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
