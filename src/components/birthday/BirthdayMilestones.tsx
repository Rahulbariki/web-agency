import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoArt } from '../DemoArt'
import { BIRTHDAY } from '../../data/birthday'
import type { ExperienceDemo } from '../../data/demos'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

export function BirthdayMilestones({ demo }: { demo: ExperienceDemo }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="milestones" className="scroll-mt-20 border-y border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Growing Up</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">Growing up so fast.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">
            Every first milestone, captured in one beautiful scroll.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 -mx-5 px-5 overflow-x-auto no-scrollbar snap-x snap-mandatory sm:mx-0 sm:overflow-visible sm:snap-none">
          <div className="flex gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
            {BIRTHDAY.milestones.map((m, i) => {
              const isActive = active === i
              return (
                <Fade key={m.title} delay={i * 0.06} className="snap-start">
                  <motion.div
                    onHoverStart={() => setActive(i)}
                    onHoverEnd={() => setActive(null)}
                    onTap={() => setActive(isActive ? null : i)}
                    className={cn(
                      'group relative flex min-w-[260px] flex-col overflow-hidden rounded-2xl border transition-all duration-500 sm:min-w-0',
                      isActive ? 'border-[var(--exp-a)]' : 'border-[var(--exp-border)]',
                    )}
                    style={{ background: 'var(--exp-surface)' }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <DemoArt
                        scene={m.scene}
                        c={demo.theme.c}
                        className={cn(
                          'h-full w-full transition-transform duration-700',
                          isActive ? 'scale-110' : 'scale-100',
                        )}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(180deg, transparent 50%, color-mix(in srgb, var(--exp-bg) 85%, transparent) 100%)' }}
                      />
                      <span className="absolute bottom-3 left-4 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--exp-a)]">
                        {m.age}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-normal">{m.title}</h3>
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-[var(--exp-muted)]">{m.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </Fade>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
