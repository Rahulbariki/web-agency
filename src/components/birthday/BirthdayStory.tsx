import { DemoArt } from '../DemoArt'
import { BIRTHDAY } from '../../data/birthday'
import type { ExperienceDemo } from '../../data/demos'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

export function BirthdayStory({ demo }: { demo: ExperienceDemo }) {
  return (
    <section id="story" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Aarav · 1 Year</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{BIRTHDAY.story.heading}</h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl font-display text-xl font-light leading-relaxed text-[var(--exp-fg)] sm:text-2xl">
            {BIRTHDAY.story.intro}
          </p>
        </Fade>

        <div className="relative mt-24">
          <div className="absolute bottom-4 left-[19px] top-4 w-px md:left-1/2" style={{ background: 'linear-gradient(180deg, transparent, var(--exp-a), transparent)' }} />

          <div className="space-y-16 sm:space-y-24">
            {BIRTHDAY.story.timeline.map((item, i) => {
              const flip = i % 2 === 1
              return (
                <div key={item.date} className="relative grid gap-8 md:grid-cols-2 md:gap-20">
                  <span
                    className="absolute left-[19px] top-1 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border font-display text-xs"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--exp-a) 60%, transparent)',
                      background: 'var(--exp-bg)',
                      color: 'var(--exp-a)',
                    }}
                  >
                    {item.date.split(' ')[0]}
                  </span>

                  <Fade className={cn('pl-14 pt-2 md:pl-0 md:pt-2', flip ? 'md:order-2' : 'md:order-1')}>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-a)]">{item.date}</p>
                    <h3 className="mt-3 font-display text-2xl font-normal sm:text-3xl">{item.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--exp-muted)]">{item.text}</p>
                  </Fade>

                  <Fade className={cn('pl-14 md:pl-0', flip ? 'md:order-1' : 'md:order-2')}>
                    <DemoArt
                      scene={item.scene}
                      c={demo.theme.c}
                      className={cn(
                        'aspect-[4/3] w-full rounded-2xl border border-[var(--exp-border)] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.12)]',
                      )}
                    />
                  </Fade>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
