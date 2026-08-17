import type { ExperienceDemo } from '../../data/demos'
import { cn } from '../../lib/utils'
import { Fade, ExpSection } from './theme'
import { typographyFor } from './theme-tokens'

export function WelcomeSection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)

  return (
    <ExpSection>
      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <div className="mx-auto lg:mx-0">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] sm:h-32 sm:w-32">
            <span className="font-display text-2xl italic text-[var(--exp-a)]">{demo.monogram}</span>
          </div>
        </div>
        <div>
          <Fade>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-muted)]">A word from the hosts</p>
            <h2 className={cn('mt-3 text-3xl leading-tight sm:text-4xl', t.display, 'text-[var(--exp-fg)]')}>
              {demo.welcome.heading}
            </h2>
          </Fade>
          <div className="mt-6 flex flex-col gap-5">
            {demo.welcome.message.map((p, i) => (
              <Fade key={i} delay={0.08 * i}>
                <p className="text-lg leading-relaxed text-[var(--exp-muted)]">{p}</p>
              </Fade>
            ))}
          </div>
          <Fade delay={0.2}>
            <p className="mt-8 font-display text-xl italic text-[var(--exp-a)]">{demo.welcome.signoff}</p>
          </Fade>
        </div>
      </div>
    </ExpSection>
  )
}
