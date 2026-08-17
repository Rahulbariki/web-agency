import { Car, Hotel, MapPin, Navigation, ParkingCircle } from 'lucide-react'
import { mapsUrl } from '../experience/theme-tokens'
import { WEDDING } from '../../data/wedding'
import { Fade } from '../experience/theme'

function MapVisual() {
  const url = mapsUrl(WEDDING.venue, WEDDING.city)
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-[var(--exp-border)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, color-mix(in srgb, var(--exp-fg) 7%, transparent) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, color-mix(in srgb, var(--exp-fg) 7%, transparent) 40px), color-mix(in srgb, var(--exp-bg-2) 60%, var(--exp-bg))',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--exp-a) 10%, transparent), transparent 70%)' }}
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="relative">
          <span
            className="absolute -inset-4 animate-ping rounded-full"
            style={{ background: 'color-mix(in srgb, var(--exp-a) 22%, transparent)' }}
          />
          <span
            className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 text-white shadow-xl"
            style={{ background: 'var(--exp-b)', borderColor: 'color-mix(in srgb, var(--exp-a) 60%, transparent)' }}
          >
            <MapPin className="h-6 w-6" />
          </span>
        </div>
        <div className="mt-6 rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-bg)]/90 px-5 py-4 text-center shadow-xl backdrop-blur-sm">
          <p className="font-display text-lg font-normal">{WEDDING.venue}</p>
          <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-[var(--exp-muted)]">{WEDDING.venueAddress}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition-colors"
            style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
          >
            <Navigation className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>
      </div>

      <span className="absolute bottom-4 left-4 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-[var(--exp-muted)]">
        {WEDDING.venueInfo.mapNote}
      </span>
    </div>
  )
}

export function WeddingVenue() {
  return (
    <section id="venue" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Getting There</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">{WEDDING.venueInfo.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">{WEDDING.venueInfo.sub}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Fade>
            <MapVisual />
          </Fade>

          <Fade delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6">
                <div className="flex items-center gap-2.5">
                  <ParkingCircle className="h-4 w-4 text-[var(--exp-a)]" />
                  <h3 className="font-display text-lg font-normal">Parking & Drop-off</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {WEDDING.venueInfo.parking.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--exp-muted)]">
                      <Car className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--exp-a)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 rounded-2xl border border-[var(--exp-border)] bg-[var(--exp-surface)] p-6">
                <div className="flex items-center gap-2.5">
                  <Hotel className="h-4 w-4 text-[var(--exp-a)]" />
                  <h3 className="font-display text-lg font-normal">Nearby Stays</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {WEDDING.venueInfo.stays.map((stay) => (
                    <li key={stay.name}>
                      <p className="text-sm font-semibold">{stay.name}</p>
                      <p className="mt-0.5 text-xs text-[var(--exp-muted)]">{stay.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
