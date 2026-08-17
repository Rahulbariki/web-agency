import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Check, Mail, MessageCircle, Phone, Send, User } from 'lucide-react'

const EVENT_TYPES = ['Wedding', 'Engagement', 'Pre-Wedding', 'Birthday', 'Baby Shower', 'Corporate', 'College', 'Other'] as const

const inputClasses =
  'w-full rounded-2xl border border-cream/12 bg-ink-950/60 px-4 py-3.5 text-sm text-cream placeholder-cream/30 outline-none transition-all duration-300 focus:border-gold/60 focus:bg-ink-950 focus:shadow-[0_0_0_4px_rgba(201,169,104,0.08)]'

function Label({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/50">{children}</span>
}

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-ink-900/60 p-8 backdrop-blur-sm sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/8 blur-3xl" />
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-5 py-16 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-ink-950 shadow-[0_0_50px_rgba(201,169,104,0.5)]"
            >
              <Check className="h-7 w-7" />
            </motion.span>
            <h3 className="font-display text-3xl text-cream">Beautiful. We’ve got it.</h3>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              Your message is in the studio. Expect a personal reply within 24 hours — we’ll start on the story together.
            </p>
            <button onClick={() => setSent(false)} className="mt-2 text-sm font-semibold text-gold-soft underline-offset-4 hover:underline">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="relative flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <Label>Name</Label>
                <User className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 text-cream/30" />
                <input required placeholder="Your full name" className={`${inputClasses} pl-11`} autoComplete="name" />
              </div>
              <div className="relative">
                <Label>Event type</Label>
                <select required defaultValue="" className={`${inputClasses} appearance-none`} aria-label="Event type">
                  <option value="" disabled>
                    Choose a celebration
                  </option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute bottom-4 right-4 text-cream/30">▾</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <Label>Event date</Label>
                <CalendarDays className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 text-cream/30" />
                <input type="date" required className={`${inputClasses} pl-11 [color-scheme:dark]`} aria-label="Event date" />
              </div>
              <div className="relative">
                <Label>Phone / WhatsApp</Label>
                <Phone className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 text-cream/30" />
                <input type="tel" placeholder="+91 98765 43210" className={`${inputClasses} pl-11`} autoComplete="tel" />
              </div>
            </div>

            <div className="relative">
              <Label>Email</Label>
              <Mail className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 text-cream/30" />
              <input required type="email" placeholder="you@email.com" className={`${inputClasses} pl-11`} autoComplete="email" />
            </div>

            <div>
              <Label>Your story / message</Label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your event, your date, your venue, and what you're dreaming of…"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-2 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold px-8 text-[0.95rem] font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgba(201,169,104,0.6)] transition-all duration-300 hover:brightness-110"
            >
              Send the Message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <p className="flex items-center gap-2 text-xs text-cream/40">
              <MessageCircle className="h-3.5 w-3.5" />
              Prefer WhatsApp? We reply fastest at +91 90000 12345.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
