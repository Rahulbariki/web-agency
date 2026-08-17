import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  FileText,
  Palette,
  Globe,
  Rocket,
  Sparkles,
  Wand2,
} from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const ease = [0.22, 1, 0.36, 1] as const

const PIPELINE = [
  { icon: BrainCircuit, title: 'AI understands the event', note: 'The tone, the rituals, the guest list' },
  { icon: Palette, title: 'Theme generated', note: 'A palette and typography that fit' },
  { icon: FileText, title: 'Content generated', note: 'Your story, drafted in your voice' },
  { icon: Globe, title: 'Website created', note: 'Sections, photos and countdown placed' },
  { icon: Rocket, title: 'Published', note: 'A live link, ready to share' },
]

export function AiCreator() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="ai" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 45% at 15% 20%, rgba(171,142,192,0.1), transparent 60%), radial-gradient(45% 40% at 85% 60%, rgba(201,169,104,0.08), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI Creator"
          title={
            <>
              Describe your event.
              <br />
              <span className="text-gradient-mauve italic">We’ll create the experience.</span>
            </>
          }
          subtitle="The future of invitations: type a sentence, and the studio’s AI composes the theme, content and structure of your website."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Prompt mock */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-[2rem] opacity-60 blur-2xl"
                style={{ background: 'linear-gradient(120deg, rgba(171,142,192,0.35), rgba(201,169,104,0.35))' }}
              />
              <div className="relative rounded-[2rem] border border-cream/12 bg-ink-900/90 p-7 backdrop-blur-xl sm:p-9">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-mauve/40 bg-mauve/15 text-mauve">
                    <Wand2 className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-base text-cream">Aurelia AI</p>
                    <p className="text-xs text-cream/45">The studio’s event engine</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[0.6rem] font-medium text-emerald-300">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" /> prototype
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-cream/12 bg-ink-950/70 p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cream/40">Describe your event</p>
                  <p className="mt-3 font-display text-lg italic leading-relaxed text-cream/85 sm:text-xl">
                    “Create a romantic South Indian wedding website for Rahul and Priya with a royal red and gold theme.”
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-mauve/25 bg-mauve/8 px-5 py-3.5">
                  <Sparkles className="h-4 w-4 shrink-0 animate-pulse text-mauve" />
                  <p className="text-sm text-cream/60">
                    <span className="text-cream">Composing your experience…</span>
                  </p>
                  <span className="ml-auto flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-mauve"
                        style={{ animation: `eq ${0.9 + i * 0.2}s ease-in-out infinite` }}
                      />
                    ))}
                  </span>
                </div>

                <button
                  onClick={() => go('#contact')}
                  className="group mt-6 inline-flex h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mauve via-plum to-gold px-8 text-[0.95rem] font-semibold text-ink-950 transition-all duration-300 hover:brightness-110 hover:shadow-[0_10px_40px_-10px_rgba(171,142,192,0.6)]"
                >
                  Create with AI
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-3 text-center text-xs text-cream/40">
                  Coming soon — join the waitlist and we’ll invite you first.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Pipeline */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-0">
              {PIPELINE.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease }}
                  className="relative flex items-center gap-4 pb-7 last:pb-0"
                >
                  {i < PIPELINE.length - 1 && (
                    <span className="absolute left-[1.35rem] top-[3.2rem] h-[calc(100%-3.2rem)] w-px bg-gradient-to-b from-mauve/50 to-gold/50" />
                  )}
                  <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-mauve/35 bg-ink-900 text-mauve shadow-[0_0_30px_-6px_rgba(171,142,192,0.5)]">
                    <step.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="flex-1 rounded-2xl border border-cream/8 bg-ink-900/50 px-5 py-3.5 transition-colors duration-300 hover:border-mauve/30">
                    <p className="text-sm font-semibold text-cream">{step.title}</p>
                    <p className="mt-0.5 text-xs text-cream/45">{step.note}</p>
                  </div>
                  {i === 0 && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mauve/15 text-mauve">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </span>
                  )}
                  {i === PIPELINE.length - 1 && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
