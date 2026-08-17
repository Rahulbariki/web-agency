import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={cn('flex flex-col gap-4', centered ? 'items-center text-center' : 'items-start text-left', className)}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold-soft">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={cn('max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg', centered && 'mx-auto')}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
