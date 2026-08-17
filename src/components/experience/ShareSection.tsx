import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, MessageCircle, Share2 } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function ShareSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  const [copied, setCopied] = useState(false)

  const url = `${window.location.origin}${window.location.pathname}#experience-${demo.id}`
  const text = `${demo.name} — ${demo.tagline}\n${url}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  const options = [
    {
      label: 'WhatsApp',
      note: 'Send the invite to a chat or a group',
      href: `https://wa.me/?text=${encodeURIComponent(text)}`,
      icon: MessageCircle,
      external: true,
    },
    {
      label: copied ? 'Copied!' : 'Copy link',
      note: 'Paste it anywhere — stories, posts, SMS',
      href: undefined,
      icon: copied ? Check : Share2,
      external: false,
    },
    {
      label: 'Email',
      note: 'A beautiful note, with everything inside',
      href: `mailto:?subject=${encodeURIComponent(demo.name)}&body=${encodeURIComponent(text)}`,
      icon: Mail,
      external: false,
    },
  ]

  return (
    <ExpSection alt id="share">
      <ExpHeading
        eyebrow="Spread the word"
        title="Share the invitation"
        sub="One link carries the whole experience — the story, the schedule, the map and the RSVP."
        display={t.display}
      />
      <Fade>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {options.map((opt) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--exp-border)] text-[var(--exp-a)] transition-transform duration-300 group-hover:scale-105">
                    <opt.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display text-base text-[var(--exp-fg)]">{opt.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--exp-muted)]">{opt.note}</p>
                </>
              )
              const cls =
                'group flex flex-col items-center rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-7 text-center transition-colors hover:bg-[var(--exp-bg-2)]'
              if (opt.external) {
                return (
                  <a key={opt.label} href={opt.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                )
              }
              return (
                <button key={opt.label} onClick={opt.label === 'Copy link' || opt.label === 'Copied!' ? copy : undefined} className={cls}>
                  {inner}
                </button>
              )
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 break-all text-center text-xs text-[var(--exp-muted)]"
          >
            {url}
          </motion.p>
        </div>
      </Fade>
    </ExpSection>
  )
}
