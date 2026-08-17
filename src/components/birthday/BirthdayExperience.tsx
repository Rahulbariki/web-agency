import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { ExperienceDemo } from '../../data/demos'
import { BirthdayOpening } from './BirthdayOpening'
import { BirthdayNav } from './BirthdayNav'
import { BirthdayHero } from './BirthdayHero'
import { BirthdayCountdown } from './BirthdayCountdown'
import { BirthdayStory } from './BirthdayStory'
import { BirthdayMilestones } from './BirthdayMilestones'
import { BirthdayParty } from './BirthdayParty'
import { BirthdayGallery } from './BirthdayGallery'
import { BirthdayParents } from './BirthdayParents'
import { BirthdayWishes } from './BirthdayWishes'
import { BirthdayCake } from './BirthdayCake'
import { BirthdayRsvp } from './BirthdayRsvp'
import { BirthdayFooter } from './BirthdayFooter'
import { BirthdayFloating } from './BirthdayFloating'

export function BirthdayExperience({ demo, onClose }: { demo: ExperienceDemo; onClose: () => void }) {
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
        <BirthdayOpening onEnter={() => setEntered(true)} onClose={onClose} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <BirthdayNav scrolled={scrolled} onClose={onClose} />
          <BirthdayHero demo={demo} />
          <BirthdayCountdown />
          <BirthdayStory demo={demo} />
          <BirthdayMilestones demo={demo} />
          <BirthdayParty />
          <BirthdayGallery demo={demo} />
          <BirthdayCake />
          <BirthdayParents />
          <BirthdayWishes />
          <BirthdayRsvp />
          <BirthdayFooter onClose={onClose} />
          <BirthdayFloating />
        </motion.div>
      )}
    </div>
  )
}
