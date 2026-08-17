import { Building2, Clock, MapPin, Users } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { DemoArt } from '../DemoArt'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function VenueSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  const first = demo.schedule[0]

  return (
    <ExpSection alt>
      <ExpHeading
        eyebrow="The venue"
        title="Where it all happens"
        display={t.display}
      />
      <Fade>
        <div className="mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-[var(--exp-border)] lg:grid-cols-2">
          <div className="relative min-h-64">
            <DemoArt
              scene={demo.theme.scene}
              c={demo.theme.c}
              className="h-full w-full"
              animated={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] text-[var(--exp-a)]">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl text-[var(--exp-fg)]">{demo.venue}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--exp-muted)]">
                  <MapPin className="h-3.5 w-3.5 text-[var(--exp-a)]" />
                  {demo.venueDetail}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] text-[var(--exp-a)]">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-display text-lg text-[var(--exp-fg)]">Doors open</h4>
                <p className="mt-1 text-sm text-[var(--exp-muted)]">
                  {first ? `${first.time} · ${first.title} — ${first.note}` : 'Details to follow'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] text-[var(--exp-a)]">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-display text-lg text-[var(--exp-fg)]">Who’s coming</h4>
                <p className="mt-1 text-sm text-[var(--exp-muted)]">
                  {demo.guests > 0 ? `${demo.guests.toLocaleString()} guests expected` : 'An intimate gathering'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </ExpSection>
  )
}
