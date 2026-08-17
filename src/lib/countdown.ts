import { useEffect, useMemo, useState } from 'react'

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function diff(target: Date): Countdown {
  const delta = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(delta / 86_400_000),
    hours: Math.floor((delta / 3_600_000) % 24),
    minutes: Math.floor((delta / 60_000) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  }
}

/** Returns a target date `offsetDays` from today — keeps demos forever live. */
export function useCountdown(offsetDays: number): { target: Date; countdown: Countdown } {
  const target = useMemo(() => {
    const t = new Date()
    t.setDate(t.getDate() + offsetDays)
    t.setHours(0, 0, 0, 0)
    return t
  }, [offsetDays])

  const [countdown, setCountdown] = useState<Countdown>(() => diff(target))

  useEffect(() => {
    const id = setInterval(() => setCountdown(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return { target, countdown }
}

/** Live countdown toward an absolute target date (used by the wedding experience). */
export function useCountdownTo(target: Date): Countdown {
  const [countdown, setCountdown] = useState<Countdown>(() => diff(target))

  useEffect(() => {
    const id = setInterval(() => setCountdown(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return countdown
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}
