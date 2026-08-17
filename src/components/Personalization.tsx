import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bell, CalendarDays, Heart, Home, MapPin, Music, Share2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const ease = [0.22, 1, 0.36, 1] as const

type ThemeName = 'Elegant' | 'Royal' | 'Minimal' | 'Floral' | 'Traditional'
type ColorName = 'Ivory' | 'Burgundy' | 'Gold' | 'Sage' | 'Rose'
type StyleName = 'Classic' | 'Modern' | 'Cinematic' | 'Luxury'

const THEMES: Record<ThemeName, { bg: string; fg: string; font: string }> = {
  Elegant: { bg: '#f7f1e6', fg: '#2a2520', font: 'font-serif' },
  Royal: { bg: '#3a1020', fg: '#f5e9d6', font: 'font-serif' },
  Minimal: { bg: '#f2f2ef', fg: '#171717', font: 'font-sans' },
  Floral: { bg: '#f9eef0', fg: '#6d3a44', font: 'font-serif' },
  Traditional: { bg: '#f3e2c4', fg: '#7a2a2a', font: 'font-serif' },
}

const COLORS: Record<ColorName, string> = {
  Ivory: '#e9dfc9',
  Burgundy: '#6b2135',
  Gold: '#c9a968',
  Sage: '#8fa388',
  Rose: '#d98b93',
}

const STYLES: Record<StyleName, string> = {
  Classic: '',
  Modern: 'uppercase tracking-[0.06em]',
  Cinematic: 'italic',
  Luxury: 'font-light tracking-wide',
}

function luminance(hex: string) {
  const n = hex.replace('#', '')
  const r = parseInt(n.slice(0, 2), 16) / 255
  const g = parseInt(n.slice(2, 4), 16) / 255
  const b = parseInt(n.slice(4, 6), 16) / 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  layoutId,
}: {
  label: string
  options: readonly T[]
  value: T
  onChange: (v: T) => void
  layoutId: string
}) {
  return (
    <div>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-cream/45">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                active ? 'text-ink-950' : 'text-cream/60 hover:text-cream',
              )}
            >
              {active && (
                <motion.span
                  layoutId={layoutId}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-soft shadow-[0_6px_24px_-6px_rgba(201,169,104,0.6)]"
                />
              )}
              {!active && <span className="absolute inset-0 rounded-full border border-cream/12" />}
              <span className="relative z-10">{option}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function PhonePreview({ theme, color, style }: { theme: ThemeName; color: ColorName; style: StyleName }) {
  const t = THEMES[theme]
  const dark = luminance(t.bg) < 0.4
  const accent = dark ? `color-mix(in srgb, ${COLORS[color]} 72%, white)` : COLORS[color]
  const accentFg = luminance(COLORS[color]) < 0.35 ? '#fff' : '#17130c'
  const dim = dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'
  const rule = dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)'

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${COLORS[color]}55, transparent 70%)` }}
      />
      <motion.div
        key={`${theme}-${color}-${style}`}
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="relative mx-auto w-[300px] sm:w-[330px]"
      >
        <div className="rounded-[2.6rem] border border-ink-700 bg-ink-800 p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]">
          <div className="relative overflow-hidden rounded-[2.1rem]" style={{ background: t.bg, color: t.fg, transition: 'background 0.6s ease, color 0.6s ease' }}>
            <div className="flex items-center justify-between px-5 pt-4">
              <span className={cn('font-display text-sm', t.font)} style={{ color: accent }}>
                aurelia<span>.</span>
              </span>
              <div className="flex items-center gap-2">
                <Music className="h-3.5 w-3.5" style={{ color: dim }} />
                <Bell className="h-3.5 w-3.5" style={{ color: dim }} />
              </div>
            </div>

            <div className="px-6 pb-6 pt-5 text-center">
              <span
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border"
                style={{ borderColor: rule, color: accent }}
              >
                <span className={cn('font-display text-lg italic', t.font)}>R & P</span>
              </span>
              <p className="mt-4 text-[0.55rem] font-semibold uppercase tracking-[0.3em]" style={{ color: dim }}>
                Together with their families
              </p>
              <h3 className={cn('mt-2 font-display text-[1.7rem] leading-tight', t.font, STYLES[style])} style={{ color: t.fg }}>
                Rahul <span style={{ color: accent }}>&</span> Priya
              </h3>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-[0.68rem]" style={{ color: dim }}>
                <CalendarDays className="h-3 w-3" style={{ color: accent }} /> 12 December 2026
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-[0.68rem]" style={{ color: dim }}>
                <MapPin className="h-3 w-3" style={{ color: accent }} /> Udaipur · Rajasthan
              </p>

              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {[['116', 'days'], ['08', 'hrs'], ['42', 'min'], ['18', 'sec']].map(([v, l]) => (
                  <div key={l} className="rounded-lg py-1.5" style={{ background: rule }}>
                    <p className={cn('font-display text-xs', t.font)} style={{ color: t.fg }}>{v}</p>
                    <p className="text-[0.45rem] uppercase tracking-[0.15em]" style={{ color: dim }}>{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span
                  className="inline-flex h-9 items-center gap-1.5 rounded-full px-6 text-xs font-semibold"
                  style={{ background: accent, color: accentFg }}
                >
                  <Heart className="h-3.5 w-3.5" /> RSVP
                </span>
                <span
                  className="inline-flex h-9 items-center rounded-full border px-4 text-xs font-medium"
                  style={{ borderColor: rule, color: t.fg }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {['#d9825c', '#8fa388', '#ab8ec0'].map((c) => (
                  <span key={c} className="h-12 rounded-lg" style={{ background: c }} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 rounded-full py-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em]" style={{ background: rule, color: dim }}>
                <Home className="h-3 w-3" style={{ color: accent }} /> Open invitation
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Personalization() {
  const [theme, setTheme] = useState<ThemeName>('Elegant')
  const [color, setColor] = useState<ColorName>('Gold')
  const [style, setStyle] = useState<StyleName>('Classic')

  return (
    <section id="personalize" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Make it yours"
          title={
            <>
              One experience, <span className="text-gradient-gold italic">every way you want it</span>
            </>
          }
          subtitle="Theme, colour and style — watch the invitation reshape itself as you choose. Every event ships with a fully custom design system."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <Reveal>
              <OptionGroup label="Theme" options={['Elegant', 'Royal', 'Minimal', 'Floral', 'Traditional'] as const} value={theme} onChange={setTheme} layoutId="pill-theme" />
            </Reveal>
            <Reveal delay={0.08}>
              <OptionGroup label="Colour" options={['Ivory', 'Burgundy', 'Gold', 'Sage', 'Rose'] as const} value={color} onChange={setColor} layoutId="pill-color" />
            </Reveal>
            <Reveal delay={0.16}>
              <OptionGroup label="Style" options={['Classic', 'Modern', 'Cinematic', 'Luxury'] as const} value={style} onChange={setStyle} layoutId="pill-style" />
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-2 text-sm text-cream/55">
                <span>Your combo:</span>
                <AnimatePresence mode="popLayout">
                  {[theme, color, style].map((v) => (
                    <motion.span
                      key={v}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-soft"
                    >
                      {v}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PhonePreview theme={theme} color={color} style={style} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
