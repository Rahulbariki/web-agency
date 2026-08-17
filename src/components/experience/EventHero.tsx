import { motion } from 'framer-motion'
import { CalendarDays, Heart, Link2, MapPin, Users } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { useCountdown } from '../../lib/countdown'
import { cn } from '../../lib/utils'
import { DemoArt } from '../DemoArt'
import { typographyFor } from './theme-tokens'

const ease = [0.22, 1, 0.36, 1] as const

export function EventHero({
  demo,
  onShare,
  onRsvp,
}: {
  demo: ExperienceDemo
  onShare: () => void
  onRsvp: () => void
}) {
  const t = typographyFor(demo)
  const image = demo.hero?.image ?? demo.theme.scene
  const overline = demo.hero?.overline ?? demo.heroKicker
  const headline = demo.hero?.headline ?? demo.heroTitle
  const subline = demo.hero?.subline ?? demo.heroSubtitle
  const { countdown } = useCountdown(demo.countdownInDays)

  return (
    <header className="relative overflow-hidden">
      <DemoArt scene={image} c={demo.theme.c} className="absolute inset-0 h-full w-full opacity-75" showGrain={false} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 30%, var(--exp-bg) 90%), radial-gradient(80% 50% at 50% 0%, transparent, color-mix(in srgb, var(--exp-bg) 55%, transparent))',
        }}
      />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease }}
          className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]"
        >
          <span className="h-px w-8 bg-[var(--exp-border)]" />
          {overline}
          <span className="h-px w-8 bg-[var(--exp-border)]" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          className="mt-6 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--exp-border)] sm:h-24 sm:w-24"
          style={{ background: 'var(--exp-surface)', backdropFilter: 'blur(8px)' }}
        >
          <span className="font-display text-xl italic text-[var(--exp-a)] sm:text-2xl">{demo.monogram}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease }}
          className={cn('mt-8 text-5xl leading-[1.02] sm:text-7xl md:text-8xl', t.display, 'text-[var(--exp-fg)]')}
          style={{ textShadow: '0 4px 60px color-mix(in srgb, var(--exp-bg) 55%, transparent)' }}
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--exp-muted)]"
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[var(--exp-a)]" />
            {subline}
          </span>
          <span className="hidden h-3 w-px bg-[var(--exp-border)] sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--exp-a)]" />
            {demo.venue}, {demo.venueDetail}
          </span>
          <span className="hidden h-3 w-px bg-[var(--exp-border)] sm:block" />
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-[var(--exp-a)]" />
            {demo.guests > 0 ? `${demo.guests.toLocaleString()} guests` : 'Private celebration'}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.8, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={onRsvp}
            className="inline-flex h-14 items-center gap-2.5 rounded-full px-8 text-[0.95rem] font-semibold text-[var(--exp-btn-fg)] transition-transform duration-300 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(90deg, var(--exp-a), var(--exp-accent))' }}
          >
            <Heart className="h-4 w-4" /> RSVP for {demo.monogram}
          </button>
          <button
            onClick={onShare}
            className="inline-flex h-14 items-center gap-2.5 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-8 text-[0.95rem] font-medium text-[var(--exp-fg)] backdrop-blur-md transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <Link2 className="h-4 w-4" /> Share the invite
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-12 flex items-center gap-2 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-4 py-2 text-xs text-[var(--exp-muted)]"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--exp-a)]" />
          {countdown.days} days to go — the celebration is nearly here
        </motion.div>

        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[var(--exp-muted)]">scroll to explore</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-3 h-10 w-px"
          style={{ background: 'linear-gradient(180deg, var(--exp-a), transparent)' }}
        />
      </div>
    </header>
  )
}
