import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Easing } from 'framer-motion'
import { BIRTHDAY } from '../../data/birthday'

const TIMINGS = [1400, 1600, 2000, 1400, 1800, 1600]

function fade(variant: { delay?: number }) {
  const transition: { duration: number; ease: Easing; delay?: number } = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
    ...variant,
  }
  return {
    initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -12, filter: 'blur(6px)' },
    transition,
  }
}

function OnceUponATime() {
  return (
    <motion.div key="once" {...fade({})} className="flex flex-col items-center">
      <p className="font-display text-3xl font-light italic tracking-wide text-[var(--exp-fg)] sm:text-5xl">
        {BIRTHDAY.opening.stage1}
      </p>
    </motion.div>
  )
}

function DateLine() {
  return (
    <motion.p
      key="date"
      {...fade({})}
      className="font-display text-4xl font-light tracking-[0.14em] sm:text-6xl"
    >
      {BIRTHDAY.opening.stage2}
    </motion.p>
  )
}

function ArrivalLine() {
  return (
    <motion.p
      key="arrival"
      {...fade({})}
      className="text-sm font-medium uppercase tracking-[0.4em] text-[var(--exp-muted)] sm:text-base"
    >
      {BIRTHDAY.opening.stage3}
    </motion.p>
  )
}

function YearLater() {
  return (
    <motion.p
      key="year-later"
      {...fade({})}
      className="font-display text-2xl italic text-[var(--exp-a)] sm:text-4xl"
    >
      {BIRTHDAY.opening.stage4}
    </motion.p>
  )
}

function NameReveal() {
  return (
    <motion.div key="name" {...fade({})} className="flex flex-col items-center gap-4">
      <h1 className="font-display text-6xl font-light tracking-tight sm:text-8xl">
        {BIRTHDAY.opening.stage5}
      </h1>
      <div className="flex items-center gap-3" style={{ color: 'var(--exp-a)' }}>
        <span className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
        <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
        <span className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
      </div>
      <p className="font-display text-3xl font-light tracking-wider text-[var(--exp-b)] sm:text-5xl">
        {BIRTHDAY.opening.stage6}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--exp-muted)]">
        {BIRTHDAY.dateShort}
      </p>
    </motion.div>
  )
}

function EnterButton({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.button
      key="enter"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => {
        e.stopPropagation()
        onEnter()
      }}
      className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--exp-fg)] transition-colors"
      style={{ border: '1px solid var(--exp-border)', background: 'var(--exp-surface)' }}
    >
      Let's Celebrate
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </motion.button>
  )
}

export function BirthdayOpening({ onEnter, onClose }: { onEnter: () => void; onClose: () => void }) {
  const reduce = useReducedMotion()
  const [stage, setStage] = useState(0)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (reduce || closed) return
    if (stage >= TIMINGS.length) return
    const t = setTimeout(() => setStage((s) => s + 1), TIMINGS[stage])
    return () => clearTimeout(t)
  }, [stage, reduce, closed])

  const skip = () => setStage(TIMINGS.length)
  const close = () => {
    setClosed(true)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-20 flex cursor-pointer flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--exp-bg)', color: 'var(--exp-fg)' }}
      onClick={skip}
    >
      <AnimatePresence mode="wait">
        {stage === 0 && <OnceUponATime />}
        {stage === 1 && <DateLine />}
        {stage === 2 && <ArrivalLine />}
        {stage === 3 && <YearLater />}
        {stage === 4 && <NameReveal />}
        {stage === 5 && <EnterButton onEnter={onEnter} />}
      </AnimatePresence>

      {stage < 5 && (
        <p className="absolute bottom-8 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-[var(--exp-muted)]">Tap anywhere to skip</p>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation()
          close()
        }}
        aria-label="Close invitation"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-sm text-[var(--exp-muted)] transition-colors hover:bg-[var(--exp-surface)] hover:text-[var(--exp-fg)]"
      >
        ✕
      </button>
    </motion.div>
  )
}
