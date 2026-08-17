import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { WEDDING } from '../../data/wedding'
import { cn } from '../../lib/utils'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
]

export function WeddingNav({ scrolled, onClose }: { scrolled: boolean; onClose: () => void }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled ? 'border-b border-[var(--exp-border)]' : 'border-b border-transparent',
        )}
        style={scrolled ? { background: 'color-mix(in srgb, var(--exp-bg) 82%, transparent)', backdropFilter: 'blur(18px)' } : undefined}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => go('#home')}
            className="group flex items-center gap-2.5 font-display text-lg tracking-[0.18em]"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border text-[0.6rem] tracking-widest"
              style={{ borderColor: 'color-mix(in srgb, var(--exp-a) 55%, transparent)' }}
            >
              {WEDDING.monogram.replace(' ', '')}
            </span>
            <span className="hidden text-sm font-medium uppercase tracking-[0.3em] sm:inline">Rahul &amp; Priya</span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--exp-muted)] transition-colors hover:text-[var(--exp-fg)]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-3 py-1.5 text-[0.65rem] font-medium text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] text-[var(--exp-fg)] md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col justify-center px-8 md:hidden"
            style={{ background: 'color-mix(in srgb, var(--exp-bg) 96%, transparent)', backdropFilter: 'blur(20px)' }}
            data-capture-escape
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => go(link.href)}
                  className="border-b border-[var(--exp-border)] py-4 text-left font-display text-3xl font-light"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <p className="mt-10 text-center text-[0.6rem] uppercase tracking-[0.4em] text-[var(--exp-muted)]">{WEDDING.dateShort} · Hyderabad</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
