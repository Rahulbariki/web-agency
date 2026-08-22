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
  animated?: boolean
}

const darken = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, black)`
const mix = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`

function Stars({ c, count = 40 }: { c: Palette; count?: number }) {
  return (
    <>
      {[...Array(count)].map((_, i) => {
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
          {/* Warm radial glow behind arch */}
          <div
            className="absolute left-1/2 top-[12%] h-[58%] w-[70%] -translate-x-1/2 rounded-t-full"
            style={{ background: `radial-gradient(60% 55% at 50% 100%, ${mix(c.a, 0.6)}, transparent 70%)` }}
          />
          {/* Outer arch */}
          <div
            className="absolute left-1/2 top-[18%] h-[50%] w-[50%] -translate-x-1/2 rounded-t-full"
            style={{ border: `2.5px solid ${mix(c.a, 0.85)}`, borderBottom: 0 }}
          />
          {/* Inner arch */}
          <div
            className="absolute left-1/2 top-[22%] h-[46%] w-[44%] -translate-x-1/2 rounded-t-full"
            style={{ border: `1px solid ${mix(c.text, 0.3)}`, borderBottom: 0 }}
          />
          {/* Left column */}
          <div
            className="absolute bottom-0 left-[14%] h-[40%] w-[8%] rounded-t-sm"
            style={{ background: `linear-gradient(180deg, ${c.b}, ${darken(c.b, 40)})` }}
          />
          {/* Right column */}
          <div
            className="absolute bottom-0 right-[14%] h-[40%] w-[8%] rounded-t-sm"
            style={{ background: `linear-gradient(180deg, ${c.b}, ${darken(c.b, 40)})` }}
          />
          {/* Ground */}
          <div className="absolute bottom-0 left-0 h-[10%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 28)})` }} />
          {/* Column light spill */}
          <div className="absolute bottom-0 left-[6%] h-12 w-20 rounded-t-full opacity-60" style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.a, 0.6)}, transparent 70%)` }} />
          <div className="absolute bottom-0 right-[6%] h-12 w-20 rounded-t-full opacity-60" style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.a, 0.6)}, transparent 70%)` }} />
          {/* Hanging detail */}
          <div className="absolute left-1/2 top-[20%] h-px w-[30%] -translate-x-1/2" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.accent, 0.5)}, transparent)` }} />
        </>
      )
    }

    case 'floral': {
      return (
        <>
          {/* Corner blooms */}
          <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full opacity-50" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.45)}, transparent 70%)` }} />
          <div className="absolute -bottom-12 -right-8 h-72 w-72 rounded-full opacity-50" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.4)}, transparent 70%)` }} />
          <div className="absolute left-[40%] top-[20%] h-40 w-40 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.accent, 0.5)}, transparent 70%)` }} />
          {/* Scattered petals */}
          {[...Array(18)].map((_, i) => {
            const left = 4 + ((i * 37) % 88)
            const top = 6 + ((i * 53) % 86)
            const s = 6 + ((i * 11) % 14)
            const color = i % 4 === 0 ? c.a : i % 4 === 1 ? c.accent : i % 4 === 2 ? c.b : c.text
            const rot = (i * 43) % 360
            return (
              <span
                key={i}
                className="absolute rounded-[50%_50%_50%_50%/60%_40%_60%_40%]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: s,
                  height: s * 1.2,
                  background: `linear-gradient(${rot}deg, ${color}, ${darken(color, 25)})`,
                  transform: `rotate(${rot}deg)`,
                  opacity: 0.8,
                }}
              />
            )
          })}
          {/* Stem lines */}
          {[...Array(6)].map((_, i) => (
            <span
              key={`stem-${i}`}
              className="absolute"
              style={{
                left: `${15 + i * 14}%`,
                top: `${40 + (i % 3) * 12}%`,
                width: 1,
                height: 30 + (i % 3) * 10,
                background: `linear-gradient(180deg, ${mix(c.b, 0.4)}, transparent)`,
                transform: `rotate(${-8 + i * 4}deg)`,
              }}
            />
          ))}
        </>
      )
    }

    case 'rings': {
      return (
        <>
          {/* Central glow */}
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle, transparent 40%, ${mix(c.a, 0.12)} 55%, transparent 70%)` }} />
          {/* Outer ring */}
          <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: `8px solid ${c.a}`, boxShadow: `0 0 50px ${mix(c.a, 0.45)}, inset 0 0 25px ${mix(c.a, 0.25)}` }} />
          {/* Ring highlight */}
          <span className="absolute left-[32%] top-[28%] h-3 w-3 rounded-full bg-white/60 blur-[2px]" />
          <span className="absolute right-[34%] bottom-[32%] h-2 w-2 rounded-full bg-white/40" />
          {/* Inner ring */}
          <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: `8px solid ${c.b}`, boxShadow: `0 0 40px ${mix(c.b, 0.4)}`, transform: 'translate(28%, 12%)' }} />
          {/* Sparkle on ring */}
          <div className="absolute left-[62%] top-[30%] h-4 w-4 rounded-full" style={{ background: `radial-gradient(circle, white, transparent 70%)`, opacity: 0.6 }} />
          <Stars c={c} count={20} />
        </>
      )
    }

    case 'sunset': {
      return (
        <>
          {/* Sun */}
          <div className="absolute bottom-[-15%] left-1/2 h-[80%] w-[120%] -translate-x-1/2 rounded-full" style={{ background: `radial-gradient(circle at 50% 55%, ${c.a} 0%, ${c.b} 35%, transparent 68%)` }} />
          {/* Horizon haze layers */}
          <div className="absolute bottom-[28%] left-0 h-36 w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.b, 12)})`, opacity: 0.7 }} />
          <div className="absolute bottom-[16%] left-0 h-20 w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 18)})`, opacity: 0.85 }} />
          {/* Ground */}
          <div className="absolute bottom-0 left-0 h-14 w-full" style={{ background: darken(c.base, 32) }} />
          {/* Birds */}
          <div className="absolute bottom-[32%] left-[20%] flex gap-3">
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none"><path d="M1 7 C5 2,7 2,9 6 C11 2,13 2,17 7" stroke={darken(c.base, 50)} strokeWidth="1.4" strokeLinecap="round" /></svg>
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M1 5 C4 1,5 1,7 4 C9 1,10 1,13 5" stroke={darken(c.base, 50)} strokeWidth="1.2" strokeLinecap="round" /></svg>
          </div>
          <div className="absolute bottom-[38%] right-[18%] flex gap-2">
            <svg width="16" height="7" viewBox="0 0 16 7" fill="none"><path d="M1 6 C4 1.5,6 1.5,8 5 C10 1.5,12 1.5,15 6" stroke={darken(c.base, 50)} strokeWidth="1.3" strokeLinecap="round" /></svg>
          </div>
          {/* Sun reflection on water */}
          <div className="absolute bottom-[18%] left-1/2 h-px w-[40%] -translate-x-1/2" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.a, 0.4)}, transparent)` }} />
        </>
      )
    }

    case 'confetti': {
      return (
        <>
          {/* Central burst glow */}
          <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-45" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.55)}, transparent 70%)` }} />
          <div className="absolute right-[10%] top-[20%] h-40 w-40 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.5)}, transparent 70%)` }} />
          {/* Confetti pieces - varied shapes */}
          {[...Array(30)].map((_, i) => {
            const colors = [c.a, c.b, c.accent, c.text]
            const color = colors[i % colors.length]
            const left = (i * 41) % 94
            const top = (i * 59) % 90
            const isCircle = i % 5 === 0
            const w = isCircle ? 5 + ((i * 3) % 5) : 4 + ((i * 7) % 9)
            const h = isCircle ? w : 3 + ((i * 5) % 6)
            const rot = (i * 67) % 360
            return (
              <span
                key={i}
                className={isCircle ? 'rounded-full' : 'rounded-[1px]'}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: w,
                  height: h,
                  background: mix(color, 0.85),
                  transform: `rotate(${rot}deg)`,
                  opacity: 0.8,
                }}
              />
            )
          })}
          {/* Cake hint at bottom */}
          <div className="absolute bottom-[8%] left-1/2 h-20 w-48 -translate-x-1/2 rounded-t-full" style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.accent, 0.45)}, transparent 70%)` }} />
        </>
      )
    }

    case 'skyline':
    case 'citynight': {
      const night = scene === 'citynight'
      const buildings = [
        { l: 1, w: 10, h: 44 }, { l: 11, w: 8, h: 62 }, { l: 19, w: 12, h: 36 },
        { l: 31, w: 8, h: 70 }, { l: 39, w: 11, h: 50 }, { l: 50, w: 8, h: 64 },
        { l: 58, w: 12, h: 38 }, { l: 70, w: 8, h: 56 }, { l: 78, w: 10, h: 46 },
        { l: 88, w: 10, h: 52 },
      ]
      return (
        <>
          {/* Sky glow */}
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full opacity-45" style={{ background: `radial-gradient(circle, ${mix(c.a, night ? 0.5 : 0.3)}, transparent 70%)` }} />
          <div className="absolute -top-10 left-[20%] h-60 w-60 rounded-full opacity-25" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.4)}, transparent 70%)` }} />
          {/* Buildings */}
          {buildings.map((b, i) => (
            <div
              key={i}
              className="absolute bottom-0"
              style={{
                left: `${b.l}%`,
                width: `${b.w}%`,
                height: `${b.h}%`,
                background: `linear-gradient(180deg, ${mix(c.a, night ? 0.45 : 0.22)}, ${darken(c.base, night ? 18 : 10)})`,
                clipPath: `polygon(0 0, 20% 0, 20% ${b.w > 9 ? 5 : 0}%, 35% ${b.w > 9 ? 5 : 0}%, 35% 0, 100% 0, 100% 100%, 0 100%)`,
              }}
            >
              {/* Window lights */}
              {night && [...Array(3)].map((_, j) => (
                <span
                  key={j}
                  className="absolute rounded-[1px]"
                  style={{
                    left: `${25 + j * 20}%`,
                    top: `${15 + (i % 3) * 15}%`,
                    width: 3,
                    height: 3,
                    background: mix(c.accent, 0.7),
                    boxShadow: `0 0 6px ${mix(c.accent, 0.5)}`,
                  }}
                />
              ))}
            </div>
          ))}
          {/* Moon for citynight */}
          {night && (
            <div className="absolute bottom-[12%] left-[22%] h-6 w-6 rounded-full" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.85)}, transparent 70%)`, filter: 'blur(1px)' }} />
          )}
          {/* Ground reflection */}
          <div className="absolute bottom-0 left-0 h-[8%] w-full" style={{ background: darken(c.base, night ? 26 : 16) }} />
          {night && <div className="absolute bottom-0 left-0 h-[3%] w-full" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.a, 0.15)}, transparent)` }} />}
        </>
      )
    }

    case 'aurora': {
      return (
        <>
          {/* Aurora bands */}
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full opacity-55 blur-2xl" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.a, 0.6)}, ${mix(c.b, 0.45)}, transparent)` }} />
          <div className="absolute left-[-10%] top-[20%] h-[40%] w-[110%] rotate-[-10deg] rounded-full opacity-40 blur-2xl" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.b, 0.65)}, transparent)` }} />
          <div className="absolute left-[25%] top-[42%] h-[28%] w-[65%] rotate-[25deg] rounded-full opacity-45 blur-xl" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.accent, 0.45)}, transparent)` }} />
          <Stars c={c} count={50} />
          {/* Ground silhouette */}
          <div className="absolute bottom-0 left-0 h-[20%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 20)})` }} />
          {/* Ground detail */}
          <div className="absolute bottom-0 left-[15%] h-[18%] w-[25%]" style={{ background: darken(c.base, 15), clipPath: 'polygon(0 100%, 30% 40%, 60% 80%, 100% 100%)' }} />
          <div className="absolute bottom-0 right-[10%] h-[15%] w-[20%]" style={{ background: darken(c.base, 12), clipPath: 'polygon(0 100%, 40% 30%, 80% 70%, 100% 100%)' }} />
        </>
      )
    }

    case 'stars': {
      return (
        <>
          {/* Moon */}
          <div className="absolute right-[10%] top-[10%] h-36 w-36 rounded-full" style={{ background: `radial-gradient(circle, ${mix(c.text, 0.85)} 0%, ${mix(c.text, 0.2)} 40%, transparent 70%)`, boxShadow: `0 0 70px ${mix(c.accent, 0.5)}` }} />
          <Stars c={c} count={65} />
          {/* Nebula */}
          <div className="absolute left-[25%] top-[28%] h-36 w-36 rounded-full opacity-35 blur-xl" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.55)}, transparent 70%)` }} />
          <div className="absolute right-[30%] bottom-[35%] h-24 w-24 rounded-full opacity-25 blur-xl" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.5)}, transparent 70%)` }} />
          {/* Ground */}
          <div className="absolute bottom-0 left-0 h-[24%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 24)})` }} />
        </>
      )
    }

    case 'fireworks': {
      const bursts = [
        { x: 28, y: 38, s: 1, col: c.a },
        { x: 66, y: 26, s: 0.75, col: c.b },
        { x: 48, y: 56, s: 0.55, col: c.accent },
        { x: 18, y: 50, s: 0.4, col: c.a },
        { x: 78, y: 48, s: 0.45, col: c.b },
      ]
      return (
        <>
          {bursts.map((b, i) => (
            <div key={i} className="absolute" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
              <div
                className="h-36 w-36"
                style={{
                  background: `conic-gradient(from ${i * 30}deg, transparent 0deg, ${b.col} 8deg, transparent 16deg, ${b.col} 40deg, transparent 48deg, ${b.col} 80deg, transparent 88deg, ${b.col} 120deg, transparent 128deg, ${b.col} 160deg, transparent 168deg, ${b.col} 200deg, transparent 208deg, ${b.col} 240deg, transparent 248deg, ${b.col} 280deg, transparent 288deg, ${b.col} 320deg, transparent 328deg, ${b.col} 360deg)`,
                  transform: `scale(${b.s})`,
                  opacity: 0.8,
                  WebkitMaskImage: 'radial-gradient(circle, black 28%, transparent 68%)',
                  maskImage: 'radial-gradient(circle, black 28%, transparent 68%)',
                }}
              />
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: b.col, boxShadow: `0 0 20px ${b.col}` }} />
            </div>
          ))}
          <Stars c={c} count={40} />
          {/* Ground glow */}
          <div className="absolute bottom-[4%] left-1/2 h-20 w-[110%] -translate-x-1/2 rounded-t-full" style={{ background: `radial-gradient(circle at 50% 100%, ${mix(c.b, 0.4)}, transparent 70%)` }} />
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
            height: size * 1.5,
            background: `linear-gradient(${rot + 90}deg, ${color}, ${darken(color, 30)})`,
            transform: `rotate(${rot}deg) ${flip ? 'scaleX(-1)' : ''}`,
            opacity: 0.85,
          }}
        />
      )
      return (
        <>
          <div className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full opacity-45" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.45)}, transparent 70%)` }} />
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.4)}, transparent 70%)` }} />
          {leaf(10, 15, 42, 30, c.a)}
          {leaf(28, 6, 32, -25, c.b, true)}
          {leaf(46, 18, 38, 20, c.accent)}
          {leaf(64, 8, 28, -40, c.a, true)}
          {leaf(78, 26, 44, 15, c.b)}
          {leaf(56, 56, 30, 35, c.accent, true)}
          {leaf(18, 58, 36, -20, c.a)}
          {leaf(72, 62, 26, 10, c.a)}
          {/* Leaf veins */}
          {[leaf(35, 40, 20, 45, mix(c.text, 0.15)), leaf(60, 35, 16, -30, mix(c.text, 0.12))]}
          <div className="absolute bottom-0 left-0 h-[16%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 22)})` }} />
        </>
      )
    }

    case 'balloon': {
      const balloons = [
        { l: 26, t: 30, s: 1, col: c.a },
        { l: 50, t: 16, s: 1.2, col: c.b },
        { l: 70, t: 36, s: 0.85, col: c.accent },
        { l: 38, t: 48, s: 0.7, col: c.text },
      ]
      return (
        <>
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full opacity-50" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.45)}, transparent 70%)` }} />
          <div className="absolute -right-10 top-[30%] h-48 w-48 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.4)}, transparent 70%)` }} />
          {balloons.map((b, i) => (
            <div key={i} className="absolute" style={{ left: `${b.l}%`, top: `${b.t}%`, transform: `scale(${b.s})` }}>
              <div
                className="relative h-20 w-[68px] rounded-[50%_50%_48%_48%/60%_60%_40%_40%]"
                style={{ background: `radial-gradient(circle at 35% 30%, ${mix(b.col, 0.85)}, ${darken(b.col, 18)})`, boxShadow: `0 0 30px ${mix(b.col, 0.4)}` }}
              >
                <span className="absolute left-4 top-3.5 h-5 w-3.5 rotate-[24deg] rounded-full bg-white/35 blur-[2px]" />
              </div>
              <div className="mx-auto h-1 w-px" style={{ background: mix(c.text, 0.3) }} />
              <svg width="10" height="18" viewBox="0 0 10 18" className="mx-auto" fill="none" stroke={mix(c.text, 0.4)} strokeWidth="1.2">
                <path d="M5 0 Q 2 7 5 18 M5 0 Q 8 7 5 18" strokeLinecap="round" />
              </svg>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 h-[18%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 20)})` }} />
        </>
      )
    }

    case 'bokeh': {
      const circles = [
        { l: 10, t: 18, s: 85, o: 0.45, col: c.a }, { l: 68, t: 12, s: 65, o: 0.35, col: c.b },
        { l: 22, t: 56, s: 110, o: 0.28, col: c.b }, { l: 56, t: 62, s: 55, o: 0.45, col: c.a },
        { l: 42, t: 28, s: 38, o: 0.5, col: c.accent }, { l: 80, t: 48, s: 100, o: 0.28, col: c.a },
        { l: 5, t: 66, s: 50, o: 0.35, col: c.accent }, { l: 88, t: 72, s: 45, o: 0.3, col: c.b },
        { l: 35, t: 42, s: 70, o: 0.2, col: c.text },
      ]
      return (
        <>
          {circles.map((x, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x.l}%`,
                top: `${x.t}%`,
                width: x.s,
                height: x.s,
                background: `radial-gradient(circle at 35% 35%, ${x.col}, transparent 72%)`,
                opacity: x.o,
                filter: 'blur(1px)',
              }}
            />
          ))}
          <div className="absolute bottom-0 left-0 h-[14%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 18)})` }} />
        </>
      )
    }

    case 'mountain': {
      return (
        <>
          {/* Mountain range */}
          <div className="absolute left-1/2 top-[42%] h-[130%] w-[130%] -translate-x-1/2" style={{ background: `linear-gradient(180deg, transparent 50%, ${darken(c.base, 6)} 51%)`, clipPath: 'polygon(0 58%, 18% 28%, 36% 52%, 52% 16%, 68% 48%, 84% 26%, 100% 58%, 100% 100%, 0 100%)' }} />
          {/* Snow caps */}
          <div className="absolute left-1/2 top-[42%] h-[130%] w-[130%] -translate-x-1/2" style={{ clipPath: 'polygon(52% 16%, 44% 28%, 52% 24%, 60% 28%)', background: c.text, opacity: 0.85 }} />
          <div className="absolute left-1/2 top-[42%] h-[130%] w-[130%] -translate-x-1/2" style={{ clipPath: 'polygon(84% 26%, 76% 38%, 84% 35%, 92% 38%)', background: c.text, opacity: 0.7 }} />
          {/* Foreground */}
          <div className="absolute bottom-0 left-0 h-[28%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 28)})` }} />
          {/* Sun/moon */}
          <div className="absolute right-[8%] top-[12%] h-28 w-28 rounded-full opacity-35" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.55)}, transparent 70%)` }} />
          {/* Clouds */}
          <div className="absolute left-[15%] top-[22%] h-8 w-24 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${mix(c.text, 0.4)}, transparent 70%)` }} />
        </>
      )
    }

    case 'ticket': {
      return (
        <>
          <div
            className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-2xl border"
            style={{ borderColor: mix(c.a, 0.35), background: `linear-gradient(155deg, ${mix(c.base, 0.6)}, ${mix(c.a, 0.18)})`, boxShadow: `0 28px 70px -18px ${mix(c.base, 0.85)}, 0 0 0 1px ${mix(c.text, 0.06)}` }}
          >
            <div className="flex items-stretch">
              <div className="flex-1 p-5">
                <div className="text-[9px] tracking-[0.3em] uppercase" style={{ color: mix(c.text, 0.55) }}>Admit One</div>
                <div className="mt-2 font-display text-xl font-medium" style={{ color: c.text }}>TF-26</div>
                <div className="mt-1 text-[9px]" style={{ color: mix(c.text, 0.6) }}>Oct 09-11 - Main Campus</div>
              </div>
              <div className="relative flex items-center border-l border-dashed" style={{ borderColor: mix(c.a, 0.45) }}>
                <span className="absolute -left-1.5 h-3.5 w-3.5 rounded-full" style={{ background: c.base }} />
                <span className="absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 rounded-full" style={{ background: c.base }} />
                <div className="px-4 font-display text-2xl font-semibold" style={{ color: c.a }}>09</div>
              </div>
            </div>
          </div>
          <Stars c={c} count={20} />
        </>
      )
    }

    case 'sparkle': {
      const star = (left: number, top: number, size: number, color: string, o = 0.85) => (
        <div key={`${left}-${top}`} className="absolute" style={{ left: `${left}%`, top: `${top}%`, opacity: o }}>
          <div
            className="relative"
            style={{ width: size, height: size, background: color, clipPath: 'polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)', boxShadow: `0 0 ${size * 1.8}px ${mix(color, 0.75)}` }}
          />
        </div>
      )
      return (
        <>
          <div className="absolute -top-16 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full opacity-35 blur-2xl" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.55)}, transparent 70%)` }} />
          {star(20, 22, 20, c.a)}
          {star(48, 12, 14, c.accent, 0.75)}
          {star(70, 30, 24, c.b)}
          {star(32, 58, 16, c.accent, 0.65)}
          {star(66, 60, 12, c.a, 0.75)}
          {star(12, 48, 10, c.b, 0.65)}
          {star(84, 54, 18, c.a, 0.8)}
          <Stars c={c} count={28} />
          <div className="absolute bottom-0 left-0 h-[12%] w-full" style={{ background: `linear-gradient(180deg, transparent, ${darken(c.base, 16)})` }} />
        </>
      )
    }

    case 'wave': {
      return (
        <>
          {/* Wave rings */}
          <div className="absolute -left-1/4 right-[-10%] top-[34%] h-56 rounded-[100%]" style={{ border: `1.5px solid ${mix(c.a, 0.6)}`, transform: 'rotate(4deg)' }} />
          <div className="absolute -left-1/4 right-[-18%] top-[46%] h-64 rounded-[100%]" style={{ border: `1.5px solid ${mix(c.b, 0.5)}`, transform: 'rotate(-3deg)' }} />
          <div className="absolute -left-1/4 right-[4%] top-[58%] h-64 rounded-[100%]" style={{ border: `1.5px solid ${mix(c.a, 0.38)}`, transform: 'rotate(6deg)' }} />
          <div className="absolute -left-1/4 right-[-4%] top-[70%] h-64 rounded-[100%]" style={{ border: `1.5px solid ${mix(c.text, 0.3)}`, transform: 'rotate(-5deg)' }} />
          {/* Orb */}
          <div className="absolute right-[8%] top-[14%] h-24 w-24 rounded-full opacity-45" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.55)}, transparent 70%)` }} />
          <div className="absolute left-[15%] top-[26%] h-16 w-16 rounded-full opacity-25" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.45)}, transparent 70%)` }} />
        </>
      )
    }

    case 'monogram': {
      return (
        <>
          {/* Outer ring */}
          <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: `1px solid ${mix(c.a, 0.45)}` }} />
          {/* Middle ring */}
          <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: `1px solid ${mix(c.a, 0.28)}` }} />
          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.45)}, transparent 70%)`, filter: 'blur(1px)' }} />
          {/* Monogram text */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-5xl font-light tracking-wider" style={{ color: c.text }}>
            A-U
          </span>
          {/* Vertical accent lines */}
          <span className="absolute left-1/2 top-[14%] h-8 w-px -translate-x-1/2" style={{ background: `linear-gradient(180deg, transparent, ${mix(c.a, 0.6)})` }} />
          <span className="absolute left-1/2 bottom-[12%] h-8 w-px -translate-x-1/2" style={{ background: `linear-gradient(0deg, transparent, ${mix(c.a, 0.6)})` }} />
          <Stars c={c} count={12} />
        </>
      )
    }

    case 'mandap': {
      return (
        <>
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full opacity-50" style={{ background: `radial-gradient(circle, ${mix(c.a, 0.45)}, transparent 70%)` }} />
          <div className="absolute -right-10 bottom-[20%] h-48 w-48 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.35)}, transparent 70%)` }} />
          <div className="absolute bottom-0 left-1/2 h-[52%] w-[72%] -translate-x-1/2" style={{ background: `linear-gradient(0deg, ${mix(c.a, 0.22)}, transparent)`, borderRadius: '50% 50% 0 0' }} />
          {[18, 38, 58, 78].map((l, i) => (
            <div key={i} className="absolute bottom-0 h-[48%] w-px" style={{ left: `${l}%`, background: `linear-gradient(0deg, ${mix(c.a, 0.5)}, transparent)` }} />
          ))}
          <div className="absolute left-1/2 top-[10%] h-[8%] w-[68%] -translate-x-1/2 rounded-b-full" style={{ border: `1px solid ${mix(c.a, 0.35)}`, borderTop: 'none' }} />
          {[28, 48, 68].map((l, i) => (
            <div key={i} className="absolute" style={{ left: `${l}%`, top: '18%', width: 10, height: 10, borderRadius: '50%', background: mix(c.accent, 0.6), boxShadow: `0 0 12px ${mix(c.accent, 0.4)}` }} />
          ))}
          <Stars c={c} count={10} />
        </>
      )
    }

    case 'garden': {
      return (
        <>
          <div className="absolute -left-16 top-[20%] h-56 w-56 rounded-full opacity-40" style={{ background: `radial-gradient(circle, ${mix(c.accent, 0.45)}, transparent 70%)` }} />
          <div className="absolute -right-12 top-[10%] h-40 w-40 rounded-full opacity-35" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.35)}, transparent 70%)` }} />
          {[12, 28, 72, 88].map((l, i) => (
            <div key={i} className="absolute bottom-[10%] h-[35%] w-px" style={{ left: `${l}%`, background: `linear-gradient(0deg, ${mix(c.accent, 0.55)}, transparent)` }} />
          ))}
          {[22, 50, 78].map((l, i) => (
            <div key={i} className="absolute bottom-[8%]" style={{ left: `${l}%`, width: 14, height: 14, borderRadius: '50%', background: `radial-gradient(circle, ${mix(c.accent, 0.7)}, ${mix(c.accent, 0.3)})`, boxShadow: `0 0 16px ${mix(c.accent, 0.35)}` }} />
          ))}
          {[18, 42, 65, 85].map((l, i) => (
            <div key={i} className="absolute top-[14%]" style={{ left: `${l}%`, width: 8, height: 8, borderRadius: '50%', background: mix(c.a, 0.5), boxShadow: `0 0 10px ${mix(c.a, 0.3)}` }} />
          ))}
          <Stars c={c} count={8} />
        </>
      )
    }

    case 'beach': {
      return (
        <>
          <div className="absolute bottom-0 left-0 h-[45%] w-full" style={{ background: `linear-gradient(0deg, ${mix(c.b, 0.4)}, ${mix(c.b, 0.1)} 70%, transparent)` }} />
          <div className="absolute bottom-[40%] left-0 h-px w-full" style={{ background: `linear-gradient(90deg, transparent 5%, ${mix(c.a, 0.3)} 30%, ${mix(c.a, 0.3)} 70%, transparent 95%)` }} />
          <div className="absolute -left-16 -top-12 h-64 w-64 rounded-full opacity-40" style={{ background: `radial-gradient(circle, ${mix(c.accent, 0.5)}, transparent 70%)` }} />
          <div className="absolute bottom-[50%] left-[60%] h-24 w-24 rounded-full opacity-40" style={{ background: `radial-gradient(circle, ${mix(c.accent, 0.55)}, transparent 70%)` }} />
          {[20, 45, 70].map((l, i) => (
            <div key={i} className="absolute bottom-[42%] h-3 w-16 rounded-full opacity-30" style={{ left: `${l}%`, background: mix(c.a, 0.3) }} />
          ))}
          <Stars c={c} count={14} />
        </>
      )
    }

    case 'stage': {
      return (
        <>
          <div className="absolute -left-16 -top-12 h-64 w-64 rounded-full opacity-35" style={{ background: `radial-gradient(circle, ${mix(c.accent, 0.5)}, transparent 70%)` }} />
          <div className="absolute -right-14 bottom-[30%] h-48 w-48 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${mix(c.b, 0.4)}, transparent 70%)` }} />
          <div className="absolute bottom-0 left-1/2 h-[42%] w-[78%] -translate-x-1/2 rounded-t-lg" style={{ background: `linear-gradient(0deg, ${mix(c.a, 0.18)}, transparent)` }} />
          {[20, 36, 52, 68, 84].map((l, i) => (
            <div key={i} className="absolute bottom-[38%] h-12 w-1 rounded-full" style={{ left: `${l}%`, background: `linear-gradient(0deg, ${mix(c.accent, 0.55)}, transparent)`, boxShadow: `0 0 8px ${mix(c.accent, 0.25)}` }} />
          ))}
          <div className="absolute bottom-[50%] left-1/2 h-px w-[64%] -translate-x-1/2" style={{ background: `linear-gradient(90deg, transparent, ${mix(c.a, 0.25)}, transparent)` }} />
          <Stars c={c} count={16} />
        </>
      )
    }

    default:
      return <Stars c={c} count={30} />
  }
}

export function DemoArt({ scene, c, className, showGrain = true, animated = true }: DemoArtProps) {
  const style: CSSProperties = {
    background: `linear-gradient(168deg, ${darken(c.base, 10)} 0%, ${c.base} 55%, ${darken(c.base, 12)} 100%)`,
  }

  return (
    <div className={cn('relative overflow-hidden', showGrain && 'grain', className)} style={style}>
      <div
        className={cn('absolute inset-0', animated && 'animate-pan-slow')}
        style={{ background: `radial-gradient(85% 65% at 50% 0%, ${mix(c.a, 0.25)}, transparent 55%), radial-gradient(65% 50% at 90% 100%, ${mix(c.b, 0.2)}, transparent 55%)` }}
      />
      <SceneLayers scene={scene} c={c} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(115% 85% at 50% 40%, transparent 50%, ${darken(c.base, 28)} 100%)` }}
      />
    </div>
  )
}
