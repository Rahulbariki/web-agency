import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function ExpSection({
  id,
  children,
  className,
  alt = false,
}: {
  id?: string
  children: ReactNode
  className?: string
  alt?: boolean
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24', alt && 'bg-[var(--exp-bg-2)]', className)}
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">{children}</div>
    </section>
  )
}

export function ExpHeading({
  eyebrow,
  title,
  sub,
  display = 'font-display',
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
  display?: string
}) {
  return (
    <div className="mb-12 text-center">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-muted)]">{eyebrow}</p>
      <h2 className={cn('mt-3 text-4xl sm:text-5xl', display, 'text-[var(--exp-fg)]')}>{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{sub}</p>}
      <div className="mx-auto mt-6 h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a), transparent)' }} />
    </div>
  )
}

export function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] px-3 py-4 backdrop-blur-md sm:px-5">
      <span className="font-display text-3xl font-light tabular-nums text-[var(--exp-fg)] sm:text-5xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-[var(--exp-muted)]">{label}</span>
    </div>
  )
}

export function EqBars() {
  return (
    <span className="flex h-3.5 items-end gap-[3px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[3px] rounded-full"
          style={{
            height: '100%',
            background: 'var(--exp-a)',
            animation: `eq ${1 + i * 0.25}s ease-in-out infinite`,
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </span>
  )
}

export function Fade({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
