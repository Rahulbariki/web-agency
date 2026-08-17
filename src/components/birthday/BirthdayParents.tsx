import { BIRTHDAY } from '../../data/birthday'
import { Fade } from '../experience/theme'

export function BirthdayParents() {
  return (
    <section id="parents" className="scroll-mt-20 border-y border-[var(--exp-border)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">The Hosts</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{BIRTHDAY.parents.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{BIRTHDAY.parents.sub}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {[BIRTHDAY.parents.mom, BIRTHDAY.parents.dad].map((parent, i) => (
            <Fade key={parent.name} delay={i * 0.1}>
              <div className="flex flex-col items-center rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-8 text-center sm:p-10">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor: 'color-mix(in srgb, var(--exp-a) 55%, transparent)',
                    background: 'color-mix(in srgb, var(--exp-a) 10%, transparent)',
                  }}
                >
                  <span className="font-display text-2xl font-light text-[var(--exp-a)]">{parent.name[0]}</span>
                </div>
                <p className="mt-4 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--exp-a)]">{parent.role}</p>
                <h3 className="mt-2 font-display text-2xl font-normal">{parent.name}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--exp-muted)]">{parent.note}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.2} className="mt-12 text-center">
          <p className="mx-auto max-w-xl font-display text-xl font-light italic leading-relaxed text-[var(--exp-fg)] sm:text-2xl">
            {BIRTHDAY.parents.message}
          </p>
        </Fade>
      </div>
    </section>
  )
}
