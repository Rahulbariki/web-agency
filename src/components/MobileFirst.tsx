import { motion } from 'framer-motion'
import { Heart, MessageCircle, Send, Smartphone, Ticket, UserRound } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const ease = [0.22, 1, 0.36, 1] as const

const JOURNEY = [
  { icon: Ticket, title: 'Invitation', note: 'One beautiful link, ready to send' },
  { icon: MessageCircle, title: 'WhatsApp', note: 'Arrives as a message, not a PDF' },
  { icon: UserRound, title: 'Guest', note: 'No app, no login — just opens it' },
  { icon: Smartphone, title: 'Experience', note: 'The whole event, alive in their hand' },
]

function Phone() {
  return (
    <div className="mx-auto w-[300px] sm:w-[330px]">
      <div className="rounded-[2.6rem] border border-ink-700 bg-ink-800 p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#0b141a]">
          {/* WhatsApp-style header */}
          <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose to-gold font-display text-sm text-white">
              A
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Aurelia & Dev</p>
              <p className="text-[0.6rem] text-emerald-400">online · wedding website</p>
            </div>
            <MessageCircle className="ml-auto h-4 w-4 text-[#8496a5]" />
          </div>

          {/* Chat */}
          <div className="flex min-h-[300px] flex-col gap-2 bg-[#0b141a] px-3 py-4">
            <span className="mx-auto rounded-full bg-[#182229] px-3 py-1 text-[0.55rem] text-[#8496a5]">Today 6:42 PM</span>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#202c33] px-3 py-2 text-xs leading-relaxed text-[#e9edef]"
            >
              Hey! We’re getting married 🎉 Here’s our wedding website — everything you need to know, in one place.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="max-w-[85%] overflow-hidden rounded-2xl rounded-tl-md bg-[#202c33] p-2"
            >
              <div className="overflow-hidden rounded-xl border border-gold/25 bg-gradient-to-b from-ink-800 to-ink-900">
                <div className="px-3 py-3 text-center">
                  <p className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-gold-soft">A Garden in Amber</p>
                  <p className="mt-1 font-display text-sm text-cream">12 · 12 · 2026</p>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-soft px-3 py-1 text-[0.6rem] font-semibold text-ink-950">
                    Open experience →
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75, ease }}
              className="ml-auto max-w-[60%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3 py-2 text-xs text-[#e9edef]"
            >
              Can’t wait!! Already added it to my calendar ❤️
            </motion.div>

            {/* The opened experience */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1, ease }}
              className="mt-2 overflow-hidden rounded-2xl border border-gold/25 bg-ink-900"
            >
              <div className="flex items-center gap-1.5 border-b border-cream/8 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[0.55rem] text-cream/50">aurelia.dev.live</span>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[0.5rem] text-emerald-300">LIVE</span>
              </div>
              <div className="px-3 py-3 text-center">
                <p className="text-[0.5rem] uppercase tracking-[0.25em] text-cream/45">Together with their families</p>
                <p className="mt-1 font-display text-lg text-cream">A Garden in Amber</p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  {[['116', 'd'], ['08', 'h'], ['42', 'm']].map(([v, l]) => (
                    <span key={l} className="rounded-lg bg-cream/8 px-2 py-1 font-display text-xs text-cream">{v}<span className="text-cream/40">{l}</span></span>
                  ))}
                  <span className="inline-flex h-7 items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-soft px-3 text-[0.6rem] font-semibold text-ink-950">
                    <Heart className="h-2.5 w-2.5" /> RSVP
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Typing row */}
          <div className="flex items-center gap-2 border-t border-[#1f2c34] bg-[#1f2c34] px-3 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a3942] text-[#8496a5]">＋</span>
            <span className="flex-1 rounded-full bg-[#2a3942] px-3 py-2 text-[0.6rem] text-[#8496a5]">Message</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a884] text-white">
              <Send className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileFirst() {
  return (
    <section id="mobile" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mobile-first"
          title={
            <>
              Made for the way <span className="text-gradient-gold italic">people share</span>
            </>
          }
          subtitle="Most guests will first meet your invitation on a phone — through WhatsApp. So every experience is built for a small screen first, and a big one too."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-col gap-0">
              {JOURNEY.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease }}
                  className="relative flex items-center gap-4 pb-8 last:pb-0"
                >
                  {i < JOURNEY.length - 1 && (
                    <span className="absolute left-[1.4rem] top-[3.4rem] h-[calc(100%-3.4rem)] w-px bg-gradient-to-b from-gold/50 to-transparent" />
                  )}
                  <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-ink-900 text-gold-soft shadow-[0_0_30px_-8px_rgba(201,169,104,0.6)]">
                    <step.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-medium text-cream">{step.title}</p>
                    <p className="mt-0.5 text-sm text-cream/50">{step.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Phone />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
