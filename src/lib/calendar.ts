function fmt(iso: string): string {
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

export function calendarUrl(opts: { title: string; start: string; end: string; location: string; details: string }): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: opts.title,
    dates: `${fmt(opts.start)}/${fmt(opts.end)}`,
    details: opts.details,
    location: opts.location,
    ctz: 'Asia/Kolkata',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
