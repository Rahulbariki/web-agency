import type { LucideIcon } from 'lucide-react'
import {
  CalendarRange,
  GalleryHorizontalEnd,
  HeartHandshake,
  Layers,
  Link2,
  MapPinned,
  Music,
  QrCode,
  Share2,
  Smartphone,
  Sparkles,
  Timer,
  Video,
} from 'lucide-react'
import { FEATURES } from '../data/site'
import { cn } from '../lib/utils'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const ICONS: Record<string, LucideIcon> = {
  Countdown: Timer,
  'Event Schedule': CalendarRange,
  'Photo Gallery': GalleryHorizontalEnd,
  RSVP: HeartHandshake,
  'Venue & Directions': MapPinned,
  Music: Music,
  Video: Video,
  'QR Code': QrCode,
  'WhatsApp Sharing': Share2,
  'Multiple Events': Layers,
  'Mobile Optimization': Smartphone,
  'Custom URL': Link2,
}

export function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[number]; index: number }) {
  const Icon = ICONS[feature.title] ?? Sparkles
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <div
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream/10 bg-ink-900/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30',
        )}
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/6 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/8 text-gold-soft transition-all duration-500 group-hover:scale-105 group-hover:bg-gold/15">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-lg font-medium text-cream">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream/55">{feature.description}</p>
      </div>
    </Reveal>
  )
}

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 45% at 80% 20%, rgba(201,169,104,0.07), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Everything included"
          title={
            <>
              Everything your guests <span className="text-gradient-gold italic">need</span>
            </>
          }
          subtitle="From the countdown to the QR code — every feature a real event website needs, polished and beautifully integrated."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
