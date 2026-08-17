import type { ExperienceDemo } from '../../data/demos'
import { cn } from '../../lib/utils'
import { DemoArt } from '../DemoArt'
import { ExpHeading, ExpSection, Fade } from './theme'
import { typographyFor } from './theme-tokens'

export function GallerySection({ demo }: { demo: ExperienceDemo }) {
  const t = typographyFor(demo)
  return (
    <ExpSection>
      <ExpHeading
        eyebrow="The gallery"
        title="Moments, so far"
        sub="A peek at the photographs, memories and places that led here."
        display={t.display}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {demo.gallery.map((g, i) => (
          <Fade key={g.label} delay={(i % 2) * 0.12}>
            <figure className={cn(i % 2 === 1 && 'sm:translate-y-8')}>
              <div className="group relative overflow-hidden rounded-3xl border border-[var(--exp-border)]">
                <DemoArt
                  scene={g.scene}
                  c={demo.theme.c}
                  className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
                  animated={false}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5">
                  <div>
                    <p className="font-display text-lg text-white">{g.label}</p>
                    <p className="mt-0.5 text-xs text-white/60">{g.caption}</p>
                  </div>
                  <span className="font-display text-3xl italic text-[var(--exp-a)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </div>
            </figure>
          </Fade>
        ))}
      </div>
    </ExpSection>
  )
}
