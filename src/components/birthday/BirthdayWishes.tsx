import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import { BIRTHDAY, type BirthdayWish } from '../../data/birthday'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

export function BirthdayWishes() {
  const [wishes, setWishes] = useState<BirthdayWish[]>(BIRTHDAY.wishes.preloaded)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('Please fill in your name and a birthday wish.')
      return
    }
    setError('')
    const newWish: BirthdayWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
    }
    setWishes((prev) => [newWish, ...prev])
    setName('')
    setMessage('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="wishes" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Birthday Wishes</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{BIRTHDAY.wishes.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{BIRTHDAY.wishes.sub}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        {/* Wish Form */}
        <Fade delay={0.1} className="mt-12">
          <form onSubmit={submit} className="mx-auto max-w-lg rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--exp-muted)]">Your Name</span>
                <input
                  className="mt-2 w-full rounded-xl border border-[var(--exp-border)] bg-[var(--exp-bg)] px-4 py-3 text-sm text-[var(--exp-fg)] placeholder:text-[var(--exp-muted)] outline-none transition-colors focus:border-[var(--exp-a)]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What's your name?"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--exp-muted)]">Birthday Message</span>
                <textarea
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-[var(--exp-border)] bg-[var(--exp-bg)] px-4 py-3 text-sm text-[var(--exp-fg)] placeholder:text-[var(--exp-muted)] outline-none transition-colors focus:border-[var(--exp-a)]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a wish for Aarav..."
                />
              </label>
            </div>
            {error && <p className="mt-3 text-sm text-[var(--exp-b)]">{error}</p>}
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-90 sm:w-auto"
              style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
            >
              <Send className="h-4 w-4" />
              Send Wish
            </button>
          </form>
        </Fade>

        {/* Success Toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto mt-6 flex max-w-lg items-center gap-3 rounded-2xl border border-[var(--exp-a)] bg-[color-mix(in_srgb,var(--exp-a)_10%,var(--exp-bg))] p-4"
            >
              <Sparkles className="h-5 w-5 text-[var(--exp-a)]" />
              <p className="text-sm font-medium text-[var(--exp-fg)]">Your wish has been added! Thank you!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishes.map((wish, i) => (
            <Fade key={wish.id} delay={i * 0.04}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <p className="text-sm leading-relaxed text-[var(--exp-fg)]">"{wish.message}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[0.55rem] font-bold"
                    style={{ background: 'color-mix(in srgb, var(--exp-a) 15%, transparent)', color: 'var(--exp-a)' }}
                  >
                    {wish.name[0]}
                  </div>
                  <span className="text-xs font-semibold text-[var(--exp-muted)]">{wish.name}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
