import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, Mail } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

const inputClasses =
  'w-full rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] px-4 py-3.5 text-sm text-[var(--exp-fg)] placeholder-[var(--exp-muted)] outline-none transition-colors focus:border-[var(--exp-a)]'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--exp-muted)]">{label}</span>
      {children}
    </label>
  )
}

export function RsvpSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  const [done, setDone] = useState(false)

  return (
    <ExpSection alt id="rsvp">
      <ExpHeading
        eyebrow="RSVP"
        title={demo.rsvp.prompt}
        sub={demo.rsvp.note}
        display={t.display}
      />
      <Fade>
        <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-8 backdrop-blur-md sm:p-10">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--exp-a)]"
                style={{ background: 'color-mix(in srgb, var(--exp-a) 18%, transparent)' }}
              >
                <Check className="h-7 w-7 text-[var(--exp-a)]" />
              </motion.span>
              <h3 className="font-display text-2xl text-[var(--exp-fg)]">You’re on the list!</h3>
              <p className="text-sm leading-relaxed text-[var(--exp-muted)]">
                Thank you for your response. A confirmation is on its way to your inbox — {demo.monogram} can’t wait to see you.
              </p>
              <button onClick={() => setDone(false)} className="mt-2 text-sm font-semibold text-[var(--exp-a)] underline-offset-4 hover:underline">
                Submit another response
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setDone(true)
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <input required placeholder="Your name" className={inputClasses} autoComplete="name" />
                </Field>
                <Field label="Email">
                  <input required type="email" placeholder="you@email.com" className={inputClasses} autoComplete="email" />
                </Field>
              </div>
              <Field label="Guests joining">
                <input type="number" min={1} max={8} placeholder="2" className={inputClasses} />
              </Field>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--exp-muted)]">Attendance</span>
                <div className="grid grid-cols-2 gap-3">
                  {['Joyfully accepts', 'Regretfully declines'].map((opt) => (
                    <label key={opt} className="group relative cursor-pointer">
                      <input type="radio" name="attendance" value={opt} required className="peer sr-only" />
                      <span className="flex items-center justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-4 py-3 text-center text-sm text-[var(--exp-muted)] transition-all peer-checked:border-[var(--exp-a)] peer-checked:text-[var(--exp-fg)]">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <Field label="A note for the hosts">
                <textarea rows={3} placeholder="Write something heartfelt…" className={`${inputClasses} resize-none`} />
              </Field>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-[var(--exp-btn-fg)] transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(90deg, var(--exp-a), var(--exp-accent))' }}
                >
                  <Heart className="h-4 w-4" /> Send RSVP
                </button>
                <a
                  href={`mailto:${demo.rsvp.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--exp-border)] py-3.5 text-sm font-medium text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
                >
                  <Mail className="h-4 w-4" /> Or email us
                </a>
              </div>
              <p className="text-center text-xs text-[var(--exp-muted)]">{demo.rsvp.confirmBy}</p>
            </form>
          )}
        </div>
      </Fade>
    </ExpSection>
  )
}
