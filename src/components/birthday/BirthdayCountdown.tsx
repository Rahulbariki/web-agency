import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useCountdownTo } from '../../lib/countdown'
import { BIRTHDAY } from '../../data/birthday'
import { Fade } from '../experience/theme'

function Number({ value }: { value: number }) {
  const text = String(value).padStart(2, '0')
  return (
    <span className="relative inline-block overflow-hidden font-display text-5xl font-light tabular-nums sm:text-7xl">
      <motion.span
        key={text}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  )
}

function Cell({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <Number value={value} />
      <span className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--exp-muted)]">{label}</span>
    </div>
  )
}

export function BirthdayCountdown() {
  const target = useMemo(() => new Date(BIRTHDAY.target), [])
  const { days, hours, minutes, seconds } = useCountdownTo(target)

  return (
    <section id="countdown" className="relative scroll-mt-24 border-b border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <Fade>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Save the date</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">The big day is almost here!</h2>
          <p className="mt-3 text-sm text-[var(--exp-muted)]">{BIRTHDAY.dateDisplay} · {BIRTHDAY.venue}, {BIRTHDAY.city}</p>
        </Fade>

        <div className="mt-12 flex items-center justify-center gap-5 sm:gap-12">
          <Cell label="Days" value={days} />
          <span className="hidden text-3xl text-[var(--exp-a)] sm:block">·</span>
          <Cell label="Hours" value={hours} />
          <span className="hidden text-3xl text-[var(--exp-a)] sm:block">·</span>
          <Cell label="Minutes" value={minutes} />
          <span className="hidden text-3xl text-[var(--exp-a)] sm:block">·</span>
          <Cell label="Seconds" value={seconds} />
        </div>
      </div>
    </section>
  )
}
