import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, Send } from 'lucide-react'
import { BIRTHDAY } from '../../data/birthday'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

interface FormState {
  name: string
  contact: string
  guests: number
  attending: 'yes' | 'no' | null
  message: string
}

const INITIAL: FormState = { name: '', contact: '', guests: 1, attending: null, message: '' }

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--exp-muted)]">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

const inputCls =
  'w-full rounded-xl border border-[var(--exp-border)] bg-[var(--exp-bg)] px-4 py-3 text-sm text-[var(--exp-fg)] placeholder:text-[var(--exp-muted)] outline-none transition-colors focus:border-[var(--exp-a)]'

export function BirthdayRsvp() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.contact.trim()) {
      setError('Please add your name and a phone or email so we can reach you.')
      return
    }
    if (!form.attending) {
      setError('Please let us know if you can make it.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="rsvp" className="scroll-mt-20 border-t border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
        <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: 'color-mix(in srgb, var(--exp-a) 18%, transparent)', border: '1px solid var(--exp-a)' }}
          >
            <Check className="h-9 w-9" style={{ color: 'var(--exp-a)' }} />
          </motion.div>
          <h2 className="mt-8 font-display text-3xl font-light italic sm:text-4xl">
            Thank you, {form.name.trim()}!
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--exp-muted)]">
            {form.attending === 'yes'
              ? "You're on the guest list! We can't wait to celebrate with you."
              : "We'll miss you! Thank you for letting us know."}
          </p>
          <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--exp-a)]">
            {BIRTHDAY.dateShort} · {BIRTHDAY.venue}, {BIRTHDAY.city}
          </p>
          <button
            onClick={() => {
              setForm(INITIAL)
              setSubmitted(false)
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--exp-border)] px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-surface)]"
          >
            Send another response
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="scroll-mt-20 border-t border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">RSVP</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{BIRTHDAY.rsvp.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">
            {BIRTHDAY.rsvp.sub} <span className="mt-2 block font-medium" style={{ color: 'var(--exp-a)' }}>{BIRTHDAY.rsvp.confirmBy}</span>
          </p>
        </Fade>

        <Fade delay={0.1} className="mt-12">
          <form onSubmit={submit} className="rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6 sm:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your Name *">
                <input className={inputCls} value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="What should we call you?" />
              </Field>
              <Field label="Phone / Email *">
                <input className={inputCls} value={form.contact} onChange={(e) => set('contact', e.target.value)} placeholder="So we can reach you" />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Number of Guests">
                <select className={inputCls} value={form.guests} onChange={(e) => set('guests', Number(e.target.value))}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Will you attend? *">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => set('attending', 'yes')}
                    className={cn(
                      'flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all',
                      form.attending === 'yes'
                        ? 'border-[var(--exp-a)] bg-[var(--exp-fg)] text-[var(--exp-btn-fg)]'
                        : 'border-[var(--exp-border)] hover:border-[var(--exp-a)]/50',
                    )}
                  >
                    <Heart className={cn('h-5 w-5', form.attending === 'yes' ? 'text-[var(--exp-a)]' : 'text-[var(--exp-muted)]')} />
                    <span>
                      <span className="block text-sm font-semibold">Yes! Can't wait 🎉</span>
                      <span className={cn('block text-xs', form.attending === 'yes' ? 'opacity-75' : 'text-[var(--exp-muted)]')}>
                        We'll be there
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => set('attending', 'no')}
                    className={cn(
                      'flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all',
                      form.attending === 'no'
                        ? 'border-[var(--exp-a)] bg-[var(--exp-fg)] text-[var(--exp-btn-fg)]'
                        : 'border-[var(--exp-border)] hover:border-[var(--exp-a)]/50',
                    )}
                  >
                    <Heart className={cn('h-5 w-5', form.attending === 'no' ? 'text-[var(--exp-a)]' : 'text-[var(--exp-muted)]')} />
                    <span>
                      <span className="block text-sm font-semibold">Sorry, can't make it</span>
                      <span className={cn('block text-xs', form.attending === 'no' ? 'opacity-75' : 'text-[var(--exp-muted)]')}>
                        We'll celebrate from afar
                      </span>
                    </span>
                  </button>
                </div>
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Optional message">
                <textarea
                  rows={3}
                  className={cn(inputCls, 'resize-none')}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="A note for the birthday boy..."
                />
              </Field>
            </div>

            {error && <p className="mt-5 text-sm text-[var(--exp-b)]">{error}</p>}

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-90 sm:w-auto"
              style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
            >
              <Send className="h-4 w-4" />
              Confirm Attendance
            </button>
          </form>
        </Fade>
      </div>
    </section>
  )
}
