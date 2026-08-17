import { AtSign, MessageCircle, Phone } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function ContactSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  const whatsappUrl = `https://wa.me/${demo.contact.whatsapp.replace(/[^0-9]/g, '')}`

  return (
    <ExpSection>
      <ExpHeading
        eyebrow="Questions?"
        title="Get in touch"
        sub={demo.contact.note}
        display={t.display}
      />
      <Fade>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${demo.contact.email}`}
            className="group flex flex-col items-center gap-3 rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-7 text-center transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--exp-border)] text-[var(--exp-a)] transition-transform group-hover:scale-105">
              <AtSign className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base text-[var(--exp-fg)]">Email us</p>
              <p className="mt-1 break-all text-xs text-[var(--exp-muted)]">{demo.contact.email}</p>
            </div>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-7 text-center transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--exp-border)] text-[var(--exp-a)] transition-transform group-hover:scale-105">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base text-[var(--exp-fg)]">WhatsApp</p>
              <p className="mt-1 text-xs text-[var(--exp-muted)]">{demo.contact.whatsapp}</p>
            </div>
          </a>
          <a
            href={`tel:${demo.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex flex-col items-center gap-3 rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-7 text-center transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--exp-border)] text-[var(--exp-a)] transition-transform group-hover:scale-105">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base text-[var(--exp-fg)]">Call</p>
              <p className="mt-1 text-xs text-[var(--exp-muted)]">{demo.contact.phone}</p>
            </div>
          </a>
        </div>
      </Fade>
    </ExpSection>
  )
}
