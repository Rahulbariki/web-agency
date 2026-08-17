import type { ExperienceDemo } from '../../data/demos'
import { cn } from '../../lib/utils'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function StorySection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  return (
    <ExpSection>
      <ExpHeading
        eyebrow="Our story"
        title="How it began"
        sub="The short version of the long love — for those who joined the story late."
        display={t.display}
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        {demo.story.map((p, i) => (
          <Fade key={i} delay={i * 0.08}>
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] font-display text-sm italic text-[var(--exp-a)]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < demo.story.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-[var(--exp-border)] to-transparent" />
                )}
              </div>
              <p
                className={cn(
                  'pb-4 text-lg leading-relaxed text-[var(--exp-muted)]',
                  i === 0 && 'font-serif italic text-[var(--exp-fg)]',
                )}
              >
                {p}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </ExpSection>
  )
}
