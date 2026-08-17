import { Heart, Sparkles } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { Fade } from './theme'
import { featureIcon } from './theme-tokens'

export function EventFooter({ demo, onBack }: { demo: ExperienceDemo; onBack: () => void }) {
  return (
    <footer className="border-t border-[var(--exp-border)]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Fade>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--exp-muted)]">
              The little extras
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {demo.specialFeatures.map((f) => {
                const Icon = featureIcon(f.icon)
                return (
                  <div
                    key={f.title}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-5 text-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--exp-border)] text-[var(--exp-a)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="font-display text-sm text-[var(--exp-fg)]">{f.title}</p>
                    <p className="text-xs leading-relaxed text-[var(--exp-muted)]">{f.note}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Fade>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[var(--exp-border)] pt-10 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--exp-border)]">
            <span className="font-display text-base italic text-[var(--exp-a)]">{demo.monogram}</span>
          </span>
          <p className="max-w-md text-sm leading-relaxed text-[var(--exp-muted)]">{demo.description}</p>
          <p className="flex items-center gap-1.5 text-xs text-[var(--exp-muted)]">
            Crafted with <Heart className="h-3.5 w-3.5 text-[var(--exp-a)]" /> for {demo.monogram} · {demo.mood}
          </p>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-6 py-3 text-sm font-medium text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <Sparkles className="h-4 w-4 text-[var(--exp-a)]" />
            Back to Experiences
          </button>
        </div>
      </div>
    </footer>
  )
}
