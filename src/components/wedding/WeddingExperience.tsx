import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { ExperienceDemo } from '../../data/demos'
import { WeddingOpening } from './WeddingOpening'
import { WeddingNav } from './WeddingNav'
import { WeddingHero } from './WeddingHero'
import { WeddingCountdown } from './WeddingCountdown'
import { WeddingStory } from './WeddingStory'
import { WeddingEvents } from './WeddingEvents'
import { WeddingGallery } from './WeddingGallery'
import { WeddingFamily } from './WeddingFamily'
import { WeddingVenue } from './WeddingVenue'
import { WeddingRsvp } from './WeddingRsvp'
import { WeddingFooter } from './WeddingFooter'
import { MobileBar, MusicToggle, ShareButton } from './WeddingFloating'

export function WeddingExperience({ demo, onClose }: { demo: ExperienceDemo; onClose: () => void }) {
  const [entered, setEntered] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => setScrolled(el.scrollTop > 360)
    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-auto overscroll-contain pb-28 md:pb-0"
      style={{
        background: 'var(--exp-bg)',
        color: 'var(--exp-fg)',
        scrollbarColor: 'var(--exp-a) var(--exp-bg)',
      }}
    >
      {!entered ? (
        <WeddingOpening onEnter={() => setEntered(true)} onClose={onClose} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <WeddingNav scrolled={scrolled} onClose={onClose} />
          <WeddingHero demo={demo} />
          <WeddingCountdown />
          <WeddingStory demo={demo} />
          <WeddingEvents />
          <WeddingGallery demo={demo} />
          <WeddingFamily demo={demo} />
          <WeddingVenue />
          <WeddingRsvp />
          <WeddingFooter onClose={onClose} />
          <MusicToggle />
          <ShareButton />
          <MobileBar visible={scrolled} />
        </motion.div>
      )}
    </div>
  )
}
