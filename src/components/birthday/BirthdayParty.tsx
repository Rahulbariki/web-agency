import { CalendarPlus, Clock, Gift, MapPin, Navigation, Shirt } from 'lucide-react'
import { mapsUrl } from '../experience/theme-tokens'
import { BIRTHDAY } from '../../data/birthday'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'
import { calendarUrl } from '../../lib/calendar'

const SCHEDULE_ICONS: Record<string, string> = {
  sparkles: '✨',
  party: '🎮',
  cake: '🎂',
  utensils: '🍽️',
  heart: '❤️',
}

export function BirthdayParty() {
  const gcal = calendarUrl({
    title: "Aarav's 1st Birthday",
    start: '2026-10-18T17:00:00',
    end: '2026-10-18T20:00:00',
    location: `${BIRTHDAY.party.venue}, ${BIRTHDAY.city}`,
    details: `Come celebrate Aarav's 1st Birthday! ${BIRTHDAY.party.venue}, ${BIRTHDAY.city}.`,
  })

  const mapUrl = mapsUrl(BIRTHDAY.party.venue, BIRTHDAY.city)

  return (
    <section id="party" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">The Party</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{BIRTHDAY.party.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{BIRTHDAY.party.sub}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Fade>
            <div className="flex h-full flex-col gap-6">
              {/* Event Details Card */}
              <div className="rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6 sm:p-7">
                <h3 className="font-display text-2xl font-normal">{BIRTHDAY.name} TURNS {BIRTHDAY.age}</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--exp-a) 12%, transparent)' }}>
                      <CalendarPlus className="h-4 w-4 text-[var(--exp-a)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{BIRTHDAY.party.date}</p>
                      <p className="text-xs text-[var(--exp-muted)]">Sunday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--exp-a) 12%, transparent)' }}>
                      <Clock className="h-4 w-4 text-[var(--exp-a)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{BIRTHDAY.party.time}</p>
                      <p className="text-xs text-[var(--exp-muted)]">Party starts at 5 PM sharp!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--exp-a) 12%, transparent)' }}>
                      <MapPin className="h-4 w-4 text-[var(--exp-a)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{BIRTHDAY.party.venue}</p>
                      <p className="text-xs text-[var(--exp-muted)]">{BIRTHDAY.party.venueAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--exp-a) 12%, transparent)' }}>
                      <Shirt className="h-4 w-4 text-[var(--exp-a)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{BIRTHDAY.party.dress}</p>
                      <p className="text-xs text-[var(--exp-muted)]">{BIRTHDAY.party.dressNote}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <a
                    href={gcal}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-90"
                    style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
                  >
                    <CalendarPlus className="h-3.5 w-3.5" />
                    Add to Calendar
                  </a>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--exp-border)] px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-surface)]"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </Fade>

          {/* Schedule */}
          <Fade delay={0.1}>
            <div className="rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Gift className="h-4 w-4 text-[var(--exp-a)]" />
                <h3 className="font-display text-lg font-normal">Party Schedule</h3>
              </div>
              <div className="mt-6 space-y-0">
                {BIRTHDAY.schedule.map((item, i) => (
                  <div
                    key={item.time}
                    className={cn(
                      'flex items-center gap-4 py-4',
                      i < BIRTHDAY.schedule.length - 1 && 'border-b border-[var(--exp-border)]',
                    )}
                  >
                    <span className="text-xl">{SCHEDULE_ICONS[item.icon] || '🎉'}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-[var(--exp-muted)]">{item.time}</p>
                    </div>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: 'var(--exp-a)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
