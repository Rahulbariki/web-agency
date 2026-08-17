import type { CSSProperties } from 'react'
import type { Scene } from '../data/demos'
import { cn } from '../lib/utils'

export interface Palette {
  base: string
  a: string
  b: string
  accent: string
  text: string
}

interface DemoArtProps {
  scene: Scene
  c: Palette
  className?: string
  showGrain?: boolean
  /** Reduce motion of animated layers (used inside modals/galleries) */
  animated?: boolean
}

const darken = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, black)`
const mix = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`

function Stars({ c, count = 40 }: { c: Palette; count?: number }) {
  const seed = [...Array(count)]
  return (
    <>
      {seed.map((_, i) => {
        const top = (i * 53) % 92
        const left = (i * 71) % 96
        const size = 1 + ((i * 13) % 3)
        const opacity = 0.25 + ((i * 7) % 60) / 100
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              backgroundColor: c.text,
              opacity,
              boxShadow: i % 5 === 0 ? `0 0 ${8 + (i % 6)}px ${mix(c.accent, 0.8)}` : undefined,
            }}
          />
        )
      })}
    </>
  )
}

function SceneLayers({ scene, c }: { scene: Scene; c: Palette }) {
  switch (scene) {
    case 'arch': {
      return (
        <>
          <div
            className="absolute left-1/2 top-[16%] h-[52%] w-[64%] -translate-x-1/2 rounded-t-full"
            style={{ background: `radial-gradient(60% 55% at 50% 100%, ${mix(c.a, 0.5)}, transparent 70%)` }}
          />
          <div
            className="absolute left-1/2 top-[24%] h-[46%] w-[46%] -translate-x-1/2 rounded-t-full"
            style={{ border: `3px solid ${mix(c.a, 0.9)}`, borderBottom: 0 }}
          />
          <div
            className="absolute left-1/2 top-[24%] h-[44%] w-[44%] -translate-x-1/2 rounded-t-full"
            style={{ border: `1px solid ${mix(c.text, 0.35)}`, borderBottom: 0, transform: 'translateX(-50%) scale(0.9)' }}
          />
          <div
            className="absolute bottom-0 left-[12%] h-[38%] w-[10%] rounded-t-full"
            style={{ background: `linear-gradient(180deg, ${c.b}, ${darken(c.b, 45)})` }}
          />
          <div
            className="absolute bottom-0 right-[12%] h-[38%] w-[10%] rounded-t-full"
            style={{ background: `linear-gradient(180deg, ${c.b}, ${darken(c.b, 45)})` }}
          />
          <div className="absolute bottom-0 left-0 h-[12%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 30)})` }} />
          <div
            className="absolute bottom-0 left-[4%] h-16 w-24 rounded-t-full opacity-70"
            style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.a, 0.7)}, transparent 70%)` }}
          />
          <div
            className="absolute bottom-0 right-[4%] h-16 w-24 rounded-t-full opacity-70"
            style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.a, 0.7)}, transparent 70%)` }}
          />
        </>
      )
    }

    case 'floral': {
      const blossoms = [...Array(14)]
      return (
        <>
          <div
            className="absolute -left-10 -top-10 h-72 w-72 rounded-full opacity-60"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.5)}, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-16 -right-8 h-80 w-80 rounded-full opacity-60"
            style={{ background: `radial-gradient(circle, ${mix(c.b, 0.45)}, transparent 70%)` }}
          />
          {blossoms.map((_, i) => {
            const left = 4 + ((i * 37) % 88)
            const top = 6 + ((i * 53) % 86)
            const s = 8 + ((i * 11) % 18)
            const color = i % 3 === 0 ? c.a : i % 3 === 1 ? c.accent : c.b
            return (
              <div key={i}>
                <span
                  className="absolute rounded-full"
                  style={{ left: `${left}%`, top: `${top}%`, width: s, height: s, background: `radial-gradient(circle at 35% 35%, ${color}, ${darken(color, 30)})`, opacity: 0.9 }}
                />
                <span
                  className="absolute rounded-full"
                  style={{ left: `${left + s * 0.4}%`, top: `${top + s * 0.9}%`, width: 2, height: s * 1.6, background: mix(c.b, 0.5), transform: 'rotate(20deg)' }}
                />
              </div>
            )
          })}
        </>
      )
    }

    case 'rings': {
      return (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative h-[46%] w-[46%] rounded-full"
              style={{ border: `10px solid ${c.a}`, boxShadow: `0 0 60px ${mix(c.a, 0.5)}, inset 0 0 30px ${mix(c.a, 0.3)}` }}
            >
              <span className="absolute left-6 top-4 h-3 w-3 rounded-full bg-white/70 blur-[2px]" />
              <span className="absolute bottom-6 right-8 h-2 w-2 rounded-full bg-white/50" />
            </div>
            <div
              className="absolute h-[38%] w-[38%] rounded-full"
              style={{ border: `10px solid ${c.b}`, boxShadow: `0 0 50px ${mix(c.b, 0.5)}`, transform: 'translate(38%, 18%)' }}
            />
          </div>
          <div
            className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: `radial-gradient(circle, transparent 55%, ${mix(c.a, 0.18)} 60%, transparent 68%)` }}
          />
          <Stars c={c} count={18} />
        </>
      )
    }

    case 'sunset': {
      return (
        <>
          <div
            className="absolute bottom-[-18%] left-1/2 h-[85%] w-[130%] -translate-x-1/2 rounded-full"
            style={{ background: `radial-gradient(circle at 50% 55%, ${c.a} 0%, ${c.b} 38%, transparent 72%)` }}
          />
          <div
            className="absolute bottom-[26%] left-0 h-40 w-full"
            style={{ background: `linear-gradient(180deg, transparent, ${darken(c.b, 15)})`, opacity: 0.8 }}
          />
          <div
            className="absolute bottom-[14%] left-0 h-24 w-full"
            style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 20)})`, opacity: 0.9 }}
          />
          <div className="absolute bottom-0 left-0 h-16 w-full" style={{ background: darken(c.base, 35) }} />
          <div className="absolute bottom-[30%] left-[18%] flex gap-3">
            <Bird color={darken(c.base, 55)} />
            <Bird color={darken(c.base, 55)} />
          </div>
          <div className="absolute bottom-[36%] right-[16%] flex gap-2.5">
            <Bird color={darken(c.base, 55)} />
            <Bird color={darken(c.base, 55)} />
          </div>
        </>
      )
    }

    case 'confetti': {
      const pieces = [...Array(26)]
      return (
        <>
          <div
            className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-50"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
          {pieces.map((_, i) => {
            const colors = [c.a, c.b, c.accent, c.text]
            const color = colors[i % colors.length]
            const left = (i * 41) % 94
            const top = (i * 59) % 90
            const w = 4 + ((i * 7) % 9)
            const h = 3 + ((i * 5) % 6)
            const rot = (i * 67) % 360
            return (
              <span
                key={i}
                className="absolute rounded-[1px]"
                style={{ left: `${left}%`, top: `${top}%`, width: w, height: h, background: mix(color, 0.9), transform: `rotate(${rot}deg)`, opacity: 0.85 }}
              />
            )
          })}
          <div
            className="absolute bottom-[12%] left-1/2 h-24 w-56 -translate-x-1/2 rounded-t-full"
            style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.accent, 0.5)}, transparent 70%)` }}
          />
        </>
      )
    }

    case 'skyline':
    case 'citynight': {
      const night = scene === 'citynight'
      const buildings = [
        { l: 2, w: 11, h: 46 }, { l: 13, w: 9, h: 64 }, { l: 22, w: 13, h: 38 }, { l: 35, w: 9, h: 72 },
        { l: 44, w: 12, h: 52 }, { l: 56, w: 9, h: 66 }, { l: 65, w: 13, h: 40 }, { l: 78, w: 9, h: 58 },
        { l: 87, w: 11, h: 48 },
      ]
      return (
        <>
          <div
            className="absolute -top-24 right-0 h-96 w-96 rounded-full opacity-50"
            style={{ background: `radial-gradient(circle, ${mix(c.a, night ? 0.55 : 0.35)}, transparent 70%)` }}
          />
          {buildings.map((b, i) => (
            <div
              key={i}
              className="absolute bottom-0"
              style={{
                left: `${b.l}%`,
                width: `${b.w}%`,
                height: `${b.h}%`,
                background: `linear-gradient(180deg, ${mix(c.a, night ? 0.5 : 0.28)}, ${darken(c.base, night ? 20 : 12)})`,
                clipPath: `polygon(0 0, 18% 0, 18% ${b.w > 10 ? 6 : 0}%, 32% ${b.w > 10 ? 6 : 0}%, 32% 0, 100% 0, 100% 100%, 0 100%)`,
              }}
            />
          ))}
          {night && (
            <div className="absolute bottom-[8%] left-[24%] h-8 w-8 rounded-full" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.9)}, transparent 70%)`, filter: 'blur(2px)' }} />
          )}
          <div className="absolute bottom-0 left-0 h-[10%] w-full" style={{ background: darken(c.base, night ? 28 : 18) }} />
        </>
      )
    }

    case 'aurora': {
      return (
        <>
          <div
            className="absolute left-1/2 top-1/2 h-[75%] w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full opacity-60 blur-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${mix(c.a, 0.65)}, ${mix(c.b, 0.5)}, transparent)` }}
          />
          <div
            className="absolute left-[-10%] top-[18%] h-[45%] w-[120%] rotate-[-10deg] rounded-full opacity-45 blur-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${mix(c.b, 0.7)}, transparent)` }}
          />
          <div
            className="absolute left-[20%] top-[40%] h-[30%] w-[70%] rotate-[25deg] rounded-full opacity-50 blur-xl"
            style={{ background: `linear-gradient(90deg, transparent, ${mix(c.accent, 0.5)}, transparent)` }}
          />
          <Stars c={c} count={55} />
          <div className="absolute bottom-0 left-0 h-[22%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 22)})` }} />
        </>
      )
    }

    case 'stars': {
      return (
        <>
          <div
            className="absolute right-[8%] top-[10%] h-40 w-40 rounded-full"
            style={{ background: `radial-gradient(circle, ${mix(c.text, 0.9)} 0%, ${mix(c.text, 0.25)} 40%, transparent 70%)`, boxShadow: `0 0 80px ${mix(c.accent, 0.6)}` }}
          />
          <Stars c={c} count={70} />
          <div
            className="absolute left-[30%] top-[30%] h-40 w-40 rounded-full opacity-40 blur-xl"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
          <div className="absolute bottom-0 left-0 h-[28%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 26)})` }} />
        </>
      )
    }

    case 'fireworks': {
      const bursts = [
        { x: 30, y: 42, s: 1, col: c.a },
        { x: 68, y: 30, s: 0.8, col: c.b },
        { x: 50, y: 60, s: 0.6, col: c.accent },
      ]
      return (
        <>
          {bursts.map((b, i) => (
            <div key={i} className="absolute" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
              <div
                className="h-40 w-40"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, ${b.col} 10deg, transparent 20deg, ${b.col} 45deg, transparent 55deg, ${b.col} 90deg, transparent 100deg, ${b.col} 135deg, transparent 145deg, ${b.col} 180deg, transparent 190deg, ${b.col} 225deg, transparent 235deg, ${b.col} 270deg, transparent 280deg, ${b.col} 315deg, transparent 325deg, ${b.col} 360deg)`,
                  transform: `scale(${b.s})`,
                  opacity: 0.85,
                  WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 72%)',
                  maskImage: 'radial-gradient(circle, black 30%, transparent 72%)',
                }}
              />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: b.col, boxShadow: `0 0 24px ${b.col}` }} />
            </div>
          ))}
          <Stars c={c} count={45} />
          <div
            className="absolute bottom-[6%] left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-t-full"
            style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.b, 0.5)}, transparent 70%)` }}
          />
        </>
      )
    }

    case 'leaves': {
      const leaf = (left: number, top: number, size: number, rot: number, color: string, flip = false) => (
        <span
          key={`${left}-${top}`}
          className="absolute rounded-[60%_40%_60%_40%/55%_45%_55%_45%]"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size * 1.6,
            background: `linear-gradient(${rot + 90}deg, ${color}, ${darken(color, 35)})`,
            transform: `rotate(${rot}deg) ${flip ? 'scaleX(-1)' : ''}`,
            opacity: 0.9,
          }}
        />
      )
      return (
        <>
          <div
            className="absolute -bottom-24 -left-10 h-96 w-96 rounded-full opacity-50"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.5)}, transparent 70%)` }}
          />
          {leaf(12, 18, 46, 30, c.a)}
          {leaf(30, 8, 34, -25, c.b, true)}
          {leaf(48, 22, 40, 20, c.accent)}
          {leaf(66, 10, 30, -40, c.a, true)}
          {leaf(80, 30, 48, 15, c.b)}
          {leaf(58, 60, 34, 35, c.accent, true)}
          {leaf(20, 62, 40, -20, c.a)}
          {leaf(74, 66, 30, 10, c.a)}
          <div className="absolute bottom-0 left-0 h-[18%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 24)})` }} />
        </>
      )
    }

    case 'balloon': {
      const balloons = [
        { l: 30, t: 34, s: 1, col: c.a },
        { l: 54, t: 20, s: 1.25, col: c.b },
        { l: 72, t: 40, s: 0.85, col: c.accent },
      ]
      return (
        <>
          <div
            className="absolute -left-14 -top-14 h-72 w-72 rounded-full opacity-55"
            style={{ background: `radial-gradient(circle, ${mix(c.b, 0.5)}, transparent 70%)` }}
          />
          {balloons.map((b, i) => (
            <div key={i} className="absolute" style={{ left: `${b.l}%`, top: `${b.t}%`, transform: `scale(${b.s})` }}>
              <div
                className="relative h-24 w-[76px] rounded-[50%_50%_48%_48%/60%_60%_40%_40%]"
                style={{ background: `radial-gradient(circle at 35% 30%, ${mix(b.col, 0.9)}, ${darken(b.col, 20)})`, boxShadow: `0 0 34px ${mix(b.col, 0.45)}` }}
              >
                <span className="absolute left-5 top-4 h-6 w-4 rotate-[24deg] rounded-full bg-white/40 blur-[2px]" />
              </div>
              <div className="mx-auto h-1.5 w-[2px] bg-cream/30" />
              <svg width="12" height="22" viewBox="0 0 12 22" className="mx-auto" fill="none" stroke={mix(c.text, 0.5)} strokeWidth="1.4">
                <path d="M6 0 Q 2 8 6 22 M6 0 Q 10 8 6 22" strokeLinecap="round" />
              </svg>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 h-[20%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 22)})` }} />
        </>
      )
    }

    case 'bokeh': {
      const circles = [
        { l: 12, t: 20, s: 90, o: 0.5, col: c.a }, { l: 70, t: 14, s: 70, o: 0.4, col: c.b },
        { l: 24, t: 60, s: 120, o: 0.3, col: c.b }, { l: 58, t: 66, s: 60, o: 0.5, col: c.a },
        { l: 44, t: 30, s: 40, o: 0.55, col: c.accent }, { l: 82, t: 52, s: 110, o: 0.3, col: c.a },
        { l: 6, t: 70, s: 55, o: 0.4, col: c.accent }, { l: 90, t: 76, s: 50, o: 0.35, col: c.b },
      ]
      return (
        <>
          {circles.map((x, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-[1px]"
              style={{ left: `${x.l}%`, top: `${x.t}%`, width: x.s, height: x.s, background: `radial-gradient(circle at 35% 35%, ${x.col}, transparent 72%)`, opacity: x.o }}
            />
          ))}
          <div className="absolute bottom-0 left-0 h-[16%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 20)})` }} />
        </>
      )
    }

    case 'mountain': {
      return (
        <>
          <div
            className="absolute left-1/2 top-[46%] h-[130%] w-[130%] -translate-x-1/2"
            style={{ background: `linear-gradient(180deg, transparent 52%, ${darken(c.base, 8)} 53%)`, clipPath: 'polygon(0 60%, 20% 30%, 38% 55%, 55% 18%, 72% 50%, 88% 28%, 100% 60%, 100% 100%, 0 100%)' }}
          />
          <div
            className="absolute left-1/2 top-[46%] h-[130%] w-[130%] -translate-x-1/2"
            style={{ clipPath: 'polygon(55% 18%, 47% 30%, 55% 26%, 63% 30%)', background: c.text, opacity: 0.9 }}
          />
          <div
            className="absolute left-1/2 top-[46%] h-[130%] w-[130%] -translate-x-1/2"
            style={{ clipPath: 'polygon(88% 28%, 80% 40%, 88% 37%, 96% 40%)', background: c.text, opacity: 0.75 }}
          />
          <div
            className="absolute bottom-0 left-0 h-[30%] w-full"
            style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 30)})` }}
          />
          <div
            className="absolute right-[6%] top-[14%] h-32 w-32 rounded-full opacity-40"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
        </>
      )
    }

    case 'ticket': {
      return (
        <>
          <div
            className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-2xl border"
            style={{ borderColor: mix(c.a, 0.4), background: `linear-gradient(160deg, ${mix(c.base, 0.65)}, ${mix(c.a, 0.22)})`, boxShadow: `0 30px 80px -20px ${mix(c.base, 0.9)}, 0 0 0 1px ${mix(c.text, 0.08)}` }}
          >
            <div className="flex items-stretch">
              <div className="flex-1 p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: mix(c.text, 0.6) }}>Admit One</div>
                <div className="mt-2 font-display text-2xl font-medium" style={{ color: c.text }}>TF·26</div>
                <div className="mt-1 text-[10px]" style={{ color: mix(c.text, 0.7) }}>Oct 09 – 11 · Main Campus</div>
              </div>
              <div className="relative flex items-center border-l border-dashed" style={{ borderColor: mix(c.a, 0.5) }}>
                <span className="absolute -left-2 h-4 w-4 rounded-full" style={{ background: c.base }} />
                <span className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full" style={{ background: c.base }} />
                <div className="px-5 font-display text-3xl font-semibold" style={{ color: c.a }}>09</div>
              </div>
            </div>
          </div>
          <Stars c={c} count={22} />
        </>
      )
    }

    case 'sparkle': {
      const star = (left: number, top: number, size: number, color: string, o = 0.9) => (
        <div key={`${left}-${top}`} className="absolute" style={{ left: `${left}%`, top: `${top}%`, opacity: o }}>
          <div
            className="relative"
            style={{ width: size, height: size, background: color, clipPath: 'polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)', boxShadow: `0 0 ${size * 2}px ${mix(color, 0.8)}` }}
          />
        </div>
      )
      return (
        <>
          <div
            className="absolute -top-20 left-1/2 h-96 w-[130%] -translate-x-1/2 rounded-full opacity-40 blur-2xl"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
          {star(22, 26, 22, c.a)}
          {star(50, 14, 16, c.accent, 0.8)}
          {star(72, 34, 26, c.b)}
          {star(34, 62, 18, c.accent, 0.7)}
          {star(68, 64, 14, c.a, 0.8)}
          {star(14, 52, 12, c.b, 0.7)}
          {star(86, 58, 20, c.a, 0.85)}
          <Stars c={c} count={30} />
          <div className="absolute bottom-0 left-0 h-[14%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 18)})` }} />
        </>
      )
    }

    case 'wave': {
      return (
        <>
          <div
            className="absolute -left-1/4 right-[-10%] top-[38%] h-64 rounded-[100%]"
            style={{ border: `2px solid ${mix(c.a, 0.7)}`, transform: 'rotate(4deg)' }}
          />
          <div
            className="absolute -left-1/4 right-[-20%] top-[50%] h-72 rounded-[100%]"
            style={{ border: `2px solid ${mix(c.b, 0.6)}`, transform: 'rotate(-3deg)' }}
          />
          <div
            className="absolute -left-1/4 right-[5%] top-[64%] h-72 rounded-[100%]"
            style={{ border: `2px solid ${mix(c.a, 0.45)}`, transform: 'rotate(6deg)' }}
          />
          <div
            className="absolute -left-1/4 right-[-5%] top-[78%] h-72 rounded-[100%]"
            style={{ border: `2px solid ${mix(c.text, 0.35)}`, transform: 'rotate(-5deg)' }}
          />
          <div
            className="absolute right-[8%] top-[16%] h-28 w-28 rounded-full opacity-50"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
        </>
      )
    }

    case 'monogram': {
      return (
        <>
          <div
            className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ border: `1px solid ${mix(c.a, 0.5)}` }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ border: `1px solid ${mix(c.a, 0.3)}` }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: `radial-gradient(circle, ${mix(c.a, 0.5)}, transparent 70%)`, filter: 'blur(1px)' }}
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-light tracking-wider" style={{ color: c.text }}>
            A·U
          </span>
          <span className="absolute left-1/2 top-[16%] h-10 w-px -translate-x-1/2" style={{ background: `linear-gradient(180deg, transparent, ${mix(c.a, 0.7)})` }} />
          <span className="absolute left-1/2 bottom-[14%] h-10 w-px -translate-x-1/2" style={{ background: `linear-gradient(0deg, transparent, ${mix(c.a, 0.7)})` }} />
        </>
      )
    }

    default:
      return <Stars c={c} count={30} />
  }
}

function Bird({ color }: { color: string }) {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <path d="M2 8 C 7 2, 9 2, 11 6 C 13 2, 15 2, 20 8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function DemoArt({ scene, c, className, showGrain = true, animated = true }: DemoArtProps) {
  const style: CSSProperties = {
    background: `linear-gradient(168deg, ${darken(c.base, 12)} 0%, ${c.base} 55%, ${darken(c.base, 14)} 100%)`,
  }

  return (
    <div className={cn('relative overflow-hidden', showGrain && 'grain', className)} style={style}>
      <div
        className={cn('absolute inset-0', animated && 'animate-pan-slow')}
        style={{ background: `radial-gradient(90% 70% at 50% 0%, ${mix(c.a, 0.28)}, transparent 60%), radial-gradient(70% 55% at 90% 100%, ${mix(c.b, 0.22)}, transparent 60%)` }}
      />
      <SceneLayers scene={scene} c={c} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(120% 90% at 50% 40%, transparent 55%, ${darken(c.base, 30)} 100%)` }}
      />
    </div>
  )
}
