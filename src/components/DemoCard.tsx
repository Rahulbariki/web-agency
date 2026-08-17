import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, MapPin, Users } from 'lucide-react'
import type { ExperienceDemo } from '../data/demos'
import { DemoArt } from './DemoArt'

interface DemoCardProps {
  demo: ExperienceDemo
  index: number
  onOpen: (demo: ExperienceDemo) => void
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Weddings': { bg: 'rgba(201,169,104,0.15)', text: '#ddc184', border: 'rgba(201,169,104,0.3)' },
  'Engagement': { bg: 'rgba(171,142,192,0.15)', text: '#c4a5d8', border: 'rgba(171,142,192,0.3)' },
  'Pre-Wedding': { bg: 'rgba(143,182,201,0.15)', text: '#a8ccd8', border: 'rgba(143,182,201,0.3)' },
  'Birthdays': { bg: 'rgba(231,165,152,0.15)', text: '#e8a598', border: 'rgba(231,165,152,0.3)' },
  'Baby & Family': { bg: 'rgba(169,191,157,0.15)', text: '#b8ccaa', border: 'rgba(169,191,157,0.3)' },
  'Corporate': { bg: 'rgba(127,168,217,0.15)', text: '#95bde0', border: 'rgba(127,168,217,0.3)' },
  'College': { bg: 'rgba(232,160,201,0.15)', text: '#e8a0c9', border: 'rgba(232,160,201,0.3)' },
  'Special Events': { bg: 'rgba(232,201,160,0.15)', text: '#e0c89a', border: 'rgba(232,201,160,0.3)' },
}

export function DemoCard({ demo, index, onOpen }: DemoCardProps) {
  const cat = CATEGORY_COLORS[demo.category] || CATEGORY_COLORS['Weddings']

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-900/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_70px_-24px_rgba(0,0,0,0.85)]"
    >
      <button
        onClick={() => onOpen(demo)}
        className="relative block cursor-pointer overflow-hidden"
        aria-label={`View ${demo.name}`}
      >
        <DemoArt
          scene={demo.theme.scene}
          c={demo.theme.c}
          className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.05]"
          animated={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-90" />

        {/* Top badges */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span
            className="rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
            style={{
              borderColor: cat.border,
              backgroundColor: cat.bg,
              color: cat.text,
            }}
          >
            {demo.category}
          </span>
          <span className="rounded-full bg-ink-950/60 px-3 py-1 text-[0.62rem] font-medium tracking-wide text-cream/70 backdrop-blur-md">
            {demo.style}
          </span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between">
            <div className="min-w-0 flex-1">
              <p className="font-display text-2xl font-medium leading-tight text-cream">{demo.heroTitle}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                {demo.dateDisplay && (
                  <span className="flex items-center gap-1 text-[0.7rem] text-cream/60">
                    <Calendar className="h-3 w-3" />
                    {demo.dateDisplay}
                  </span>
                )}
                <span className="flex items-center gap-1 text-[0.7rem] text-cream/60">
                  <MapPin className="h-3 w-3" />
                  {demo.venue}
                </span>
              </div>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-ink-950/50 text-cream backdrop-blur-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink-950">
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-medium text-cream">{demo.name}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-cream/55">{demo.tagline}</p>

        {/* Highlights */}
        {demo.highlights && demo.highlights.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {demo.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="rounded-full bg-cream/5 px-2.5 py-0.5 text-[0.6rem] font-medium text-cream/45"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-cream/8 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-cream/45">
              <Users className="h-3.5 w-3.5" />
              {demo.guests > 0 ? `${demo.guests.toLocaleString()}` : 'Private'}
            </span>
            {demo.timeDisplay && (
              <span className="flex items-center gap-1 text-xs text-cream/45">
                <Clock className="h-3 w-3" />
                {demo.timeDisplay}
              </span>
            )}
          </div>
          <button
            onClick={() => onOpen(demo)}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft transition-colors hover:text-gold"
          >
            View
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
