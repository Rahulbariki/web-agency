import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Easing } from 'framer-motion'
import { WEDDING } from '../../data/wedding'

const TIMINGS = [1500, 1700, 2100, 1600, 1900]

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

function Monogram() {
  return (
    <motion.div key="monogram" {...fade({})} className="flex flex-col items-center">
      <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-[var(--exp-muted)]">Wedding Invitation</p>
      <div
        className="mt-6 flex h-28 w-28 items-center justify-center rounded-full border sm:h-32 sm:w-32"
        style={{ borderColor: 'color-mix(in srgb, var(--exp-a) 55%, transparent)', boxShadow: '0 0 0 10px color-mix(in srgb, var(--exp-a) 10%, transparent)' }}
      >
        <span className="font-display text-2xl font-light tracking-[0.2em] sm:text-3xl">{WEDDING.monogram}</span>
      </div>
      <p className="mt-6 text-[0.65rem] font-medium uppercase tracking-[0.45em] text-[var(--exp-muted)]">{WEDDING.dateShort}</p>
    </motion.div>
  )
}

function Line({ text, big = false }: { text: string; big?: boolean }) {
  return (
    <motion.p
      key={`line-${text}`}
      {...fade({})}
      className={
        big
          ? 'font-display text-4xl font-light tracking-[0.14em] sm:text-6xl'
          : 'text-sm font-medium uppercase tracking-[0.4em] text-[var(--exp-muted)] sm:text-base'
      }
    >
      {text}
    </motion.p>
  )
}

function Names() {
  return (
    <motion.div key="names" {...fade({})} className="flex items-baseline gap-4 sm:gap-6">
      <span className="font-display text-5xl font-light sm:text-7xl">{WEDDING.hero.names[0]}</span>
      <span className="font-display text-2xl italic text-[var(--exp-a)] sm:text-3xl">&</span>
      <span className="font-display text-5xl font-light sm:text-7xl">{WEDDING.hero.names[1]}</span>
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
      Enter Invitation
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
    </motion.button>
  )
}

export function WeddingOpening({ onEnter, onClose }: { onEnter: () => void; onClose: () => void }) {
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
        {stage === 0 && <Monogram />}
        {stage === 1 && <Line text="Together with their families" />}
        {stage === 2 && <Names />}
        {stage === 3 && <Line text="are getting married" />}
        {stage === 4 && <Line text={WEDDING.dateShort} big />}
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
