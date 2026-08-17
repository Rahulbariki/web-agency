import { DemoArt } from '../DemoArt'
import { WEDDING } from '../../data/wedding'
import type { ExperienceDemo } from '../../data/demos'
import { Fade } from '../experience/theme'

export function WeddingFamily({ demo }: { demo: ExperienceDemo }) {
  return (
    <section id="family" className="scroll-mt-20 border-y border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">The Families</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-light italic sm:text-5xl">{WEDDING.family.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{WEDDING.family.sub}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[WEDDING.family.bride, WEDDING.family.groom].map((side, i) => (
            <Fade key={side.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-7 sm:p-9">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-a)]">{side.title}</p>
                <div className="mt-6 space-y-6">
                  {side.people.map((person) => (
                    <div key={person.name} className="flex items-start gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--exp-border)]">
                        <DemoArt scene={person.scene} c={demo.theme.c} animated={false} className="h-full w-full" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-normal">{person.name}</h3>
                        <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--exp-a)]">{person.role}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--exp-muted)]">{person.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}
