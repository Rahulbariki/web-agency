import { ArrowUpRight, Car, Navigation, ParkingSquare, TrainFront } from 'lucide-react'
import type { ExperienceDemo } from '../../data/demos'
import { DemoArt } from '../DemoArt'
import { ExpSection, Fade } from './theme'
import { mapsUrl } from './theme-tokens'

export function MapsCtaSection({ demo }: { demo: ExperienceDemo }) {
  const url = mapsUrl(demo.venue, demo.venueDetail)

  return (
    <ExpSection>
      <Fade>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--exp-border)]">
          <DemoArt
            scene={demo.theme.scene === 'skyline' || demo.theme.scene === 'citynight' ? 'citynight' : 'mountain'}
            c={demo.theme.c}
            className="h-80 w-full sm:h-[26rem]"
            animated={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: 'var(--exp-a)', boxShadow: '0 0 50px color-mix(in srgb, var(--exp-a) 60%, transparent)' }}
              >
                <Navigation className="h-6 w-6 text-[var(--exp-btn-fg)]" />
              </span>
              <span className="h-5 w-px bg-white/40" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8">
            <div>
              <p className="font-display text-2xl text-white sm:text-3xl">{demo.venue}</p>
              <p className="mt-1 text-sm text-white/70">{demo.venueDetail}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[var(--exp-btn-fg)] transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(90deg, var(--exp-a), var(--exp-accent))' }}
              >
                Open in Google Maps <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-1.5"><Car className="h-3.5 w-3.5" /> Parking on site</span>
                <span className="inline-flex items-center gap-1.5"><ParkingSquare className="h-3.5 w-3.5" /> Valet available</span>
                <span className="inline-flex items-center gap-1.5"><TrainFront className="h-3.5 w-3.5" /> 10 min from the station</span>
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </ExpSection>
  )
}
