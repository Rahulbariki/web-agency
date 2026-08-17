import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  BookHeart,
  Cake,
  Camera,
  Flower2,
  Gift,
  GlassWater,
  Heart,
  Leaf,
  Map,
  MapPin,
  Moon,
  Music,
  Palette,
  PartyPopper,
  Send,
  Sparkles,
  Star,
  Sun,
  Ticket,
  Video,
  Wifi,
} from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { cn } from '../../lib/utils'

export function eventThemeVars(demo: ExperienceDemo): CSSProperties {
  const c = demo.theme.c
  const light = demo.theme.mode === 'light'

  const fg = light ? '#201a12' : c.text
  const muted = light ? 'rgba(32,26,18,0.6)' : 'rgba(255,255,255,0.6)'
  const border = light ? 'rgba(32,26,18,0.14)' : 'rgba(255,255,255,0.12)'
  const surface = light ? 'rgba(32,26,18,0.05)' : 'rgba(255,255,255,0.05)'
  const bg2 = light ? 'color-mix(in srgb, var(--exp-bg) 93%, black)' : 'color-mix(in srgb, var(--exp-bg) 96%, white)'
  const btnFg = light ? '#fffaf2' : '#0b0a11'

  return {
    '--exp-bg': c.base,
    '--exp-bg-2': bg2,
    '--exp-fg': fg,
    '--exp-muted': muted,
    '--exp-border': border,
    '--exp-surface': surface,
    '--exp-a': c.a,
    '--exp-b': c.b,
    '--exp-accent': c.accent,
    '--exp-btn-fg': btnFg,
  } as CSSProperties
}

const DISPLAY_PRESETS: Record<string, { font: string; style: string }> = {
  editorial: { font: 'font-display', style: 'font-medium tracking-tight' },
  classic: { font: 'font-serif', style: 'font-medium tracking-wide' },
  modern: { font: 'font-sans', style: 'font-bold uppercase tracking-[0.12em]' },
  luxe: { font: 'font-display', style: 'font-light italic tracking-wide' },
}

export interface Typography {
  display: string
  body: string
}

export function typographyFor(demo: ExperienceDemo): Typography {
  const t = demo.typography ?? { display: 'editorial', body: 'sans' }
  const preset = DISPLAY_PRESETS[t.display] ?? DISPLAY_PRESETS.editorial
  return {
    display: cn(preset.font, preset.style),
    body: t.body === 'serif' ? 'font-serif' : 'font-sans',
  }
}

export const FEATURE_ICONS: Record<string, LucideIcon> = {
  heart: Heart,
  music: Music,
  gift: Gift,
  flower: Flower2,
  map: Map,
  book: BookHeart,
  sun: Sun,
  camera: Camera,
  star: Star,
  ticket: Ticket,
  video: Video,
  leaf: Leaf,
  moon: Moon,
  sparkles: Sparkles,
  palette: Palette,
  wifi: Wifi,
  cake: Cake,
  glass: GlassWater,
  party: PartyPopper,
  send: Send,
}

export const featureIcon = (name: string): LucideIcon => FEATURE_ICONS[name] ?? Sparkles

export const mapsUrl = (venue: string, detail: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue}, ${detail}`)}`

export { MapPin }
