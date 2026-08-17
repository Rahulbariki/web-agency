import type { ExperienceDemo } from '../../data/demos'
import { useCountdown } from '../../lib/countdown'
import { CountdownBox, ExpSection, Fade } from './theme'

export function CountdownSection({ demo }: { demo: ExperienceDemo }) {
  const { countdown } = useCountdown(demo.countdownInDays)

  return (
    <ExpSection alt className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a), transparent)' }}
      />
      <Fade>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-muted)]">The countdown</p>
          <h2 className="mt-3 font-display text-3xl text-[var(--exp-fg)] sm:text-4xl">Until the celebration begins</h2>
          <div className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-4">
            <CountdownBox label="Days" value={countdown.days} />
            <CountdownBox label="Hours" value={countdown.hours} />
            <CountdownBox label="Minutes" value={countdown.minutes} />
            <CountdownBox label="Seconds" value={countdown.seconds} />
          </div>
          <p className="mt-6 text-sm text-[var(--exp-muted)]">
            {demo.rsvp.confirmBy}
          </p>
        </div>
      </Fade>
    </ExpSection>
  )
}
