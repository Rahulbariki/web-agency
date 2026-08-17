import { ArrowUpRight, AtSign, Camera, Globe, Heart, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { FOOTER_CATEGORIES, NAV_LINKS } from '../data/site'
import { getDemoById } from '../data/demos'

interface FooterProps {
  onOpenDemo: (id: string) => void
}

export function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,104,0.5), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60% 60% at 50% 120%, rgba(201,169,104,0.07), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Aurelia home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm italic text-gold-soft">
                A
              </span>
              <span className="font-display text-xl tracking-wide text-cream">
                aurelia<span className="text-gold">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
              Beautiful websites for life’s biggest moments.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Send, label: 'Telegram' },
                { icon: MessageCircle, label: 'WhatsApp' },
                { icon: AtSign, label: 'Mastodon' },
                { icon: Globe, label: 'Website' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/12 text-cream/60 transition-all duration-300 hover:border-gold/50 hover:text-gold-soft"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-cream/40">Navigate</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-cream/60 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-cream/40">Events</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_CATEGORIES.map((cat) => {
                const demo = getDemoById(
                  (() => {
                    const map: Record<string, string> = {
                      Weddings: 'sofia-liam-golden-hour',
                      Engagement: 'riya-aarav-forever-begins',
                      'Pre-Wedding': 'anna-marco-two-landscapes',
                      Birthdays: 'aria-turns-sixteen',
                      'Baby & Family': 'welcome-little-nova',
                      Corporate: 'vertex-summit-2026',
                      College: 'techfest-2026',
                      'Special Events': 'gala-for-good',
                    }
                    return map[cat]
                  })(),
                )
                return (
                  <li key={cat}>
                    <button
                      onClick={() => demo && onOpenDemo(demo.id)}
                      className="group inline-flex items-center gap-1.5 text-left text-sm text-cream/60 transition-colors hover:text-gold-soft"
                    >
                      {cat}
                      <ArrowUpRight className="h-3.5 w-3.5 text-cream/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-cream/40">Get in touch</h4>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-cream/60">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold/60" />
                hello@aurelia.studio
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold/60" />
                +91 90000 12345
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                Studio 7, Creative District,
                <br />
                Mumbai, India
              </li>
            </ul>
            <div className="mt-7 rounded-2xl border border-cream/10 bg-cream/4 p-5">
              <p className="font-display text-base italic text-cream">“Your event. Your story. Your digital experience.”</p>
              <p className="mt-2 text-xs text-cream/45">— The Aurelia promise</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/40">© {new Date().getFullYear()} Aurelia Studio. Crafted with care.</p>
          <p className="flex items-center gap-1.5 text-xs text-cream/40">
            Made with <Heart className="h-3.5 w-3.5 fill-gold/70 text-gold" /> for life’s biggest moments
          </p>
          <div className="flex gap-6 text-xs text-cream/40">
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="transition-colors hover:text-gold-soft">Privacy</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="transition-colors hover:text-gold-soft">Terms</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="transition-colors hover:text-gold-soft">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
