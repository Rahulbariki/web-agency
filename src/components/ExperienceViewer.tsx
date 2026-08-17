import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Check, Music2, Share2 } from 'lucide-react'
import type { ExperienceDemo } from '../data/demos'
import { EqBars } from './experience/theme'
import { eventThemeVars } from './experience/theme-tokens'
import { EventHero } from './experience/EventHero'
import { WelcomeSection } from './experience/WelcomeSection'
import { CountdownSection } from './experience/CountdownSection'
import { StorySection } from './experience/StorySection'
import { TimelineSection } from './experience/TimelineSection'
import { GallerySection } from './experience/GallerySection'
import { VenueSection } from './experience/VenueSection'
import { MapsCtaSection } from './experience/MapsCtaSection'
import { FamilySection } from './experience/FamilySection'
import { RsvpSection } from './experience/RsvpSection'
import { ContactSection } from './experience/ContactSection'
import { ShareSection } from './experience/ShareSection'
import { EventFooter } from './experience/EventFooter'
import { WeddingExperience } from './wedding/WeddingExperience'

interface ExperienceViewerProps {
  demo: ExperienceDemo
  onClose: () => void
}

export function ExperienceViewer({ demo, onClose }: ExperienceViewerProps) {
  const [playing, setPlaying] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.querySelector('[data-capture-escape]')) onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const share = useCallback(async () => {
    const url = `${window.location.origin}${window.location.pathname}#experience-${demo.id}`
    try {
      if (navigator.share) {
        await navigator.share({ title: demo.name, text: demo.tagline, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }
    } catch {
      /* user cancelled */
    }
  }, [demo])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100]"
      style={eventThemeVars(demo)}
    >
      {demo.id === 'wedding' ? (
        <WeddingExperience demo={demo} onClose={onClose} />
      ) : (
      <div
        className="h-full w-full overflow-y-auto overscroll-contain"
        style={{
          background: 'var(--exp-bg)',
          color: 'var(--exp-fg)',
          scrollbarColor: 'var(--exp-a) var(--exp-bg)',
        }}
      >
        {/* ---------- Top bar: small, out of the way, keeps the business site one click away ---------- */}
        <div className="sticky top-0 z-30 border-b border-[var(--exp-border)]">
          <div
            className="absolute inset-0"
            style={{ background: 'color-mix(in srgb, var(--exp-bg) 80%, transparent)', backdropFilter: 'blur(20px)' }}
          />
          <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
            <button
              onClick={onClose}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-4 py-2 text-sm font-medium text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">Back to Experiences</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="flex items-center gap-2.5">
              <span className="hidden items-center gap-1.5 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--exp-muted)] sm:inline-flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--exp-a)]" />
                Live preview
              </span>
              <button
                onClick={() => setPlaying((v) => !v)}
                aria-label={playing ? 'Pause music' : 'Play music'}
                className="flex h-10 items-center gap-2 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-4 text-sm text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
              >
                {playing ? <EqBars /> : <Music2 className="h-4 w-4" />}
                <span className="hidden max-w-[120px] truncate text-xs text-[var(--exp-muted)] sm:inline">{demo.track}</span>
              </button>
              <button
                onClick={share}
                aria-label="Share this experience"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
              >
                {copied ? <Check className="h-4 w-4 text-[var(--exp-a)]" /> : <Share2 className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* ---------- 01 · Hero ---------- */}
        <EventHero demo={demo} onShare={share} onRsvp={() => scrollTo('#rsvp')} />

        {/* ---------- 02 · Welcome ---------- */}
        <WelcomeSection demo={demo} />

        {/* ---------- 03 · Countdown ---------- */}
        <CountdownSection demo={demo} />

        {/* ---------- 04 · Story ---------- */}
        <StorySection demo={demo} />

        {/* ---------- 05 · Timeline ---------- */}
        <TimelineSection demo={demo} />

        {/* ---------- 06 · Gallery ---------- */}
        <GallerySection demo={demo} />

        {/* ---------- 07 · Venue ---------- */}
        <VenueSection demo={demo} />

        {/* ---------- 08 · Family ---------- */}
        <FamilySection demo={demo} />

        {/* ---------- 09 · Google Maps CTA ---------- */}
        <MapsCtaSection demo={demo} />

        {/* ---------- 10 · RSVP ---------- */}
        <RsvpSection demo={demo} />

        {/* ---------- 11 · Contact ---------- */}
        <ContactSection demo={demo} />

        {/* ---------- 12 · Share ---------- */}
        <ShareSection demo={demo} />

        {/* ---------- 13 · Footer ---------- */}
        <EventFooter demo={demo} onBack={onClose} />
      </div>
      )}
    </motion.div>
  )
}

export function ExperienceLayer({
  demo,
  onClose,
}: {
  demo: ExperienceDemo | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {demo && <ExperienceViewer key={demo.id} demo={demo} onClose={onClose} />}
    </AnimatePresence>
  )
}
