import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { DemoArt } from '../DemoArt'
import { BIRTHDAY } from '../../data/birthday'
import type { ExperienceDemo } from '../../data/demos'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

const RATIOS: Record<string, string> = {
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[4/3]',
}

export function BirthdayGallery({ demo }: { demo: ExperienceDemo }) {
  const [index, setIndex] = useState<number | null>(null)
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i === null ? i : (i + dir + BIRTHDAY.gallery.length) % BIRTHDAY.gallery.length))
  }, [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, close, step])

  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Memories</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">The Gallery</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">
            A year of joy, captured in one place — tap any photo to view it up close.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 columns-2 gap-4 [column-fill:_balance] sm:columns-3 sm:gap-5">
          {BIRTHDAY.gallery.map((item, i) => (
            <Fade key={item.caption} delay={(i % 6) * 0.05} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--exp-border)] text-left"
              >
                <DemoArt scene={item.scene} c={demo.theme.c} className={cn('w-full', RATIOS[item.ratio])} />
                <div
                  className="absolute inset-x-0 bottom-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(20,16,12,0.78))' }}
                >
                  <span className="text-xs font-medium text-[#f6efe2] sm:text-sm">{item.caption}</span>
                </div>
              </button>
            </Fade>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0a08]/[0.97] px-4 text-[#f6efe2]"
            data-capture-escape
            onClick={close}
          >
            <div className="absolute left-4 top-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#e8735a]">
              {index + 1} / {BIRTHDAY.gallery.length}
            </div>
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f6efe2] transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) step(1)
                else if (info.offset.x > 70) step(-1)
              }}
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-3xl flex-col items-center"
            >
              <DemoArt
                scene={BIRTHDAY.gallery[index].scene}
                c={demo.theme.c}
                animated={false}
                className="aspect-[4/3] max-h-[68vh] w-full rounded-xl border border-white/10 shadow-2xl"
              />
              <p className="mt-5 text-center font-display text-lg italic text-[#e8d6b4]">{BIRTHDAY.gallery[index].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
