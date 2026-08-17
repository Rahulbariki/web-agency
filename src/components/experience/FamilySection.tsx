import type { ExperienceDemo } from '../../data/demos'
import { DemoArt } from '../DemoArt'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function FamilySection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  if (!demo.family || demo.family.length === 0) return null

  return (
    <ExpSection alt id="family">
      <ExpHeading
        eyebrow="The families"
        title="Those who made this possible"
        sub="The parents, siblings and grandparents behind every ritual — we are grateful they are yours too."
        display={t.display}
      />
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {demo.family.map((member, i) => (
          <Fade key={member.name} delay={(i % 2) * 0.1}>
            <div className="group flex h-full items-center gap-5 rounded-3xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-5 transition-colors hover:bg-[var(--exp-bg-2)] sm:p-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--exp-border)]">
                <DemoArt
                  scene={member.scene ?? demo.theme.scene}
                  c={demo.theme.c}
                  className="h-full w-full"
                  animated={false}
                />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 0 0 3px color-mix(in srgb, var(--exp-surface) 70%, transparent)' }} />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg leading-tight text-[var(--exp-fg)]">{member.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--exp-a)]">{member.relation}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--exp-muted)]">{member.note}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </ExpSection>
  )
}
