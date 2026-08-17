import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BIRTHDAY } from '../../data/birthday'
import { Fade } from '../experience/theme'

function ConfettiParticle({ delay }: { delay: number }) {
  const colors = ['var(--exp-a)', 'var(--exp-b)', 'var(--exp-accent)', '#f5c842', '#e8735a', '#5ba4cf']
  const color = colors[Math.floor(Math.random() * colors.length)]
  const x = (Math.random() - 0.5) * 300
  const y = -(Math.random() * 200 + 100)
  const r = Math.random() * 360

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      animate={{ opacity: 0, x, y, rotate: r, scale: 0.5 }}
      transition={{ duration: 1.8 + Math.random(), delay, ease: 'easeOut' }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
      style={{ background: color }}
    />
  )
}

export function BirthdayCake() {
  const [lit, setLit] = useState(false)
  const [celebrated, setCelebrated] = useState(false)

  const blowCandle = () => {
    if (lit) return
    setLit(true)
    setTimeout(() => setCelebrated(true), 800)
  }

  return (
    <section id="cake" className="scroll-mt-20 border-y border-[var(--exp-border)] bg-[var(--exp-bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Fade className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">Cake Time</p>
          <h2 className="mt-4 font-display text-4xl font-light italic sm:text-5xl">Make a wish.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--exp-muted)]">
            Tap the candle to blow it out and make a wish for Aarav.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
            <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
          </div>
        </Fade>

        <Fade delay={0.1} className="mt-14">
          <div className="relative mx-auto flex max-w-md flex-col items-center">
            {/* Cake Visual */}
            <div className="relative">
              {/* Cake base */}
              <div className="relative">
                {/* Bottom tier */}
                <div
                  className="mx-auto h-24 w-48 rounded-t-3xl sm:w-56"
                  style={{ background: 'linear-gradient(180deg, #f5d5a0, #e8b86d)' }}
                />
                {/* Middle tier */}
                <div
                  className="mx-auto -mt-2 h-20 w-40 rounded-t-3xl sm:w-48"
                  style={{ background: 'linear-gradient(180deg, #f0c4a0, #e0a080)' }}
                />
                {/* Top tier */}
                <div
                  className="mx-auto -mt-2 h-16 w-32 rounded-t-3xl sm:w-36"
                  style={{ background: 'linear-gradient(180deg, #e8735a, #d4603e)' }}
                />

                {/* Frosting drips */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 rounded-full bg-white/60"
                        style={{ height: `${12 + Math.random() * 16}px`, marginTop: `${Math.random() * 4}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Candle */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
                  <div className="flex flex-col items-center">
                    {/* Flame */}
                    <AnimatePresence>
                      {!lit && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="relative mb-1"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.15, 1], rotate: [-2, 2, -2] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="h-5 w-3 rounded-full"
                            style={{
                              background: 'linear-gradient(180deg, #fff7a0, #ffb347, #ff6b35)',
                              boxShadow: '0 0 16px 6px rgba(255,179,71,0.5), 0 0 32px 12px rgba(255,107,53,0.25)',
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Candle stick */}
                    <div className="h-10 w-2 rounded-full" style={{ background: 'linear-gradient(180deg, #5ba4cf, #4a8ab8)' }} />
                  </div>
                </div>
              </div>

              {/* Confetti */}
              <AnimatePresence>
                {celebrated && (
                  <>
                    {[...Array(30)].map((_, i) => (
                      <ConfettiParticle key={i} delay={i * 0.04} />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Button / Message */}
            <div className="mt-16 text-center">
              <AnimatePresence mode="wait">
                {!lit ? (
                  <motion.button
                    key="wish"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    onClick={blowCandle}
                    className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition-opacity hover:opacity-90"
                    style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
                  >
                    Make a Wish ✨
                  </motion.button>
                ) : (
                  <motion.div
                    key="celebrated"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <p className="font-display text-2xl font-light italic text-[var(--exp-a)]">
                      {BIRTHDAY.cake.wishText}
                    </p>
                    <div className="flex items-center gap-3" style={{ color: 'var(--exp-a)' }}>
                      <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
                      <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
                      <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
                    </div>
                    <p className="font-display text-3xl font-light text-[var(--exp-fg)] sm:text-4xl">
                      {BIRTHDAY.cake.celebrationText} 🎂
                    </p>
                    <p className="text-sm text-[var(--exp-muted)]">
                      Aarav is officially ONE!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
