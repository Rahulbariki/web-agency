import { CalendarPlus, Flower2, Gem, MapPin, Music, Navigation, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { calendarUrl } from '../../lib/calendar'
import { mapsUrl } from '../experience/theme-tokens'
import { WEDDING, type WeddingEvent } from '../../data/wedding'
import { Fade } from '../experience/theme'
import { cn } from '../../lib/utils'

const EVENT_ICONS: Record<WeddingEvent['icon'], LucideIcon> = {
  flower: Flower2,
  music: Music,
  rings: Gem,
  sparkles: Sparkles,
}

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const Icon = EVENT_ICONS[event.icon]
  const isMain = event.id === 'wedding'
  const gcal = calendarUrl({
    title: `Rahul & Priya — ${event.name}`,
    start: event.start,
    end: event.end,
    location: `${event.venue}, ${WEDDING.city}`,
    details: `${event.note} · Part of the wedding of Rahul & Priya, 10–12 December 2026, Hyderabad.`,
  })

  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border transition-transform duration-500 hover:-translate-y-1',
        isMain ? 'border-[var(--exp-b)]' : 'border-[var(--exp-border)] bg-[var(--exp-surface)]',
      )}
      style={isMain ? { background: 'linear-gradient(160deg, color-mix(in srgb, var(--exp-b) 14%, var(--exp-bg)), var(--exp-bg))' } : undefined}
    >
      <Fade delay={(index % 4) * 0.08} y={20} className="flex h-full flex-col p-6 sm:p-7">
        {isMain && (
          <span
            className="absolute right-4 top-4 rounded-full px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em]"
            style={{ background: 'var(--exp-b)', color: 'var(--exp-btn-fg)' }}
          >
            The Big Day
          </span>
        )}

        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border"
          style={{ borderColor: 'color-mix(in srgb, var(--exp-a) 45%, transparent)', background: 'color-mix(in srgb, var(--exp-a) 12%, transparent)' }}
        >
          <Icon className="h-5 w-5" style={{ color: isMain ? 'var(--exp-b)' : 'var(--exp-a)' }} />
        </div>

        <h3 className="mt-5 font-display text-2xl font-normal">{event.name}</h3>
        <div className="mt-3 flex flex-col gap-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--exp-muted)]">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--exp-a)]" />
            {event.date} · {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {event.venue}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--exp-muted)]">{event.note}</p>

        <div className="mt-6 grid grid-cols-2 gap-2.5">
          <a
            href={gcal}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors"
            style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
          >
            <CalendarPlus className="h-3.5 w-3.5" />
            Add to Calendar
          </a>
          <a
            href={mapsUrl(event.venue, WEDDING.city)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--exp-border)] px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-surface)]"
          >
            <Navigation className="h-3.5 w-3.5" />
            Directions
          </a>
        </div>
      </Fade>
    </div>
  )
}

export function WeddingEvents() {
  return (
    <section id="events" className="scroll-mt-20 border-y border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">The Celebration</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">Wedding Events</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">
            Four days of celebration across Hyderabad. Save the dates to your calendar — directions are pre-filled.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WEDDING.events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
