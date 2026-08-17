import { Clock } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function TimelineSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  return (
    <ExpSection alt>
      <ExpHeading
        eyebrow="The plan"
        title="Event timeline"
        sub="Everything in one line — times, venues and the moments that matter."
        display={t.display}
      />
      <div className="relative mx-auto max-w-2xl">
        <div
          className="absolute bottom-2 left-[3.3rem] top-2 w-px sm:left-[4.9rem]"
          style={{ background: 'linear-gradient(180deg, var(--exp-a), transparent)' }}
        />
        <div className="flex flex-col gap-7">
          {demo.schedule.map((item, i) => (
            <Fade key={i} delay={i * 0.06} y={18}>
              <div className="flex items-start gap-5">
                <span
                  className="flex w-14 shrink-0 justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] py-2 font-display text-sm text-[var(--exp-a)] sm:w-20"
                >
                  {item.time}
                </span>
                <div className="pt-1.5">
                  <p className="font-display text-lg text-[var(--exp-fg)]">{item.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--exp-muted)]">
                    <Clock className="h-3.5 w-3.5 text-[var(--exp-a)]" />
                    {item.note}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </ExpSection>
  )
}
