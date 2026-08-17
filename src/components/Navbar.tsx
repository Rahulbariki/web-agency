import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/site'
import { cn } from '../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <div
            className={cn(
              'pointer-events-none absolute inset-0 transition-opacity duration-500',
              scrolled ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              background: 'linear-gradient(180deg, rgba(11,10,17,0.92), rgba(11,10,17,0.55))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              maskImage: 'linear-gradient(180deg, black 82%, transparent)',
            }}
          />
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              go('#home')
            }}
            className="relative z-10 flex items-center gap-2.5"
            aria-label="Aurelia home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm italic text-gold-soft">
              A
            </span>
            <span className="font-display text-xl tracking-wide text-cream">
              aurelia<span className="text-gold">.</span>
            </span>
          </a>

          <nav className="relative z-10 hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  go(link.href)
                }}
                className="rounded-full px-3.5 py-2 text-[0.82rem] font-medium text-cream/65 transition-colors duration-300 hover:bg-cream/5 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 hidden items-center gap-2.5 lg:flex">
            <button
              onClick={() => go('#experiences')}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-cream/15 bg-cream/4 px-5 text-sm font-medium text-cream transition-all duration-300 hover:border-gold/40 hover:bg-cream/8"
            >
              Explore Demos
              <ArrowUpRight className="h-4 w-4 text-cream/50" />
            </button>
            <button
              onClick={() => go('#contact')}
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-[0_8px_36px_-8px_rgba(201,169,104,0.6)]"
            >
              Create Your Website
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-950/97 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={(e) => {
                    e.preventDefault()
                    go(link.href)
                  }}
                  className="group flex items-center justify-between border-b border-cream/8 py-4 font-display text-2xl text-cream/80 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                  <ArrowUpRight className="h-5 w-5 text-cream/25 transition-all group-hover:text-gold" />
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <button
                onClick={() => go('#experiences')}
                className="flex h-14 items-center justify-center gap-2 rounded-full border border-cream/15 bg-cream/4 text-base font-medium text-cream transition-colors hover:border-gold/40"
              >
                Explore Demos <ArrowUpRight className="h-4 w-4 text-cream/50" />
              </button>
              <button
                onClick={() => go('#contact')}
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft text-base font-semibold text-ink-950"
              >
                Create Your Website <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs tracking-wide text-cream/40">weddings · celebrations · every special moment</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
