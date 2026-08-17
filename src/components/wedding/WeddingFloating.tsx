import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Check, Copy, Download, MessageCircle, Music, Send, Share2, X } from 'lucide-react'
import { WEDDING } from '../../data/wedding'
import { EqBars } from '../experience/theme'

const shareUrl = () => `${window.location.origin}${WEDDING.share.link}`

/* ---------------------------------- Music ---------------------------------- */

function useAmbient() {
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {})
    }
  }, [])

  const toggle = () => {
    if (playing) {
      const ctx = ctxRef.current
      const master = masterRef.current
      if (ctx && master) master.gain.setTargetAtTime(0, ctx.currentTime, 0.2)
      setTimeout(() => ctx?.close().catch(() => {}), 700)
      ctxRef.current = null
      masterRef.current = null
      setPlaying(false)
      return
    }

    const Ctor =
      window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return

    const ctx = new Ctor()
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, ctx.currentTime)
    master.gain.setTargetAtTime(0.05, ctx.currentTime, 0.5)
    master.connect(ctx.destination)

    const chord = [130.81, 196.0, 261.63, 329.63]
    chord.forEach((f, i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = f
      osc.detune.value = i % 2 ? 4 : -4
      const gain = ctx.createGain()
      gain.gain.value = 0.5 / chord.length
      osc.connect(gain)
      gain.connect(master)
      osc.start()
    })

    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.08
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 0.012
    lfo.connect(lfoGain)
    lfoGain.connect(master.gain)
    lfo.start()

    ctxRef.current = ctx
    masterRef.current = master
    setPlaying(true)
  }

  return { playing, toggle }
}

export function MusicToggle() {
  const { playing, toggle } = useAmbient()

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={WEDDING.music.track}
      className="fixed bottom-20 left-5 z-40 flex h-12 items-center gap-3 rounded-full border border-[var(--exp-border)] bg-[var(--exp-bg)]/90 px-3.5 text-[var(--exp-fg)] shadow-lg backdrop-blur-md transition-colors hover:bg-[var(--exp-bg-2)] md:bottom-6"
      style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    >
      {playing ? <EqBars /> : <Music className="h-4 w-4" />}
      <span className="hidden max-w-[180px] truncate text-xs text-[var(--exp-muted)] lg:block">{playing ? WEDDING.music.track : 'Play music'}</span>
    </button>
  )
}

/* ---------------------------------- Share ---------------------------------- */

function ShareModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const qrRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  const downloadQr = () => {
    const node = qrRef.current?.querySelector('svg')
    if (!node) return
    const data = new XMLSerializer().serializeToString(node)
    const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rahul-priya-wedding-qr.svg'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center sm:p-6"
          data-capture-escape
        >
          <div className="absolute inset-0 bg-[#0c0a08]/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm rounded-3xl border border-[var(--exp-border)] p-6"
            style={{ background: 'var(--exp-bg)' }}
          >
            <button
              onClick={onClose}
              aria-label="Close share menu"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[var(--exp-muted)] transition-colors hover:bg-[var(--exp-surface)] hover:text-[var(--exp-fg)]"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--exp-a)]">Share</p>
            <h3 className="mt-2 font-display text-2xl font-light">{WEDDING.share.title}</h3>
            <p className="mt-1.5 text-sm text-[var(--exp-muted)]">{WEDDING.share.subtitle}</p>

            <div className="mt-5 flex justify-center rounded-2xl bg-white p-4">
              <div ref={qrRef} className="h-40 w-40">
                <QRCodeSVG value={shareUrl()} size={160} level="M" fgColor="#1a1612" bgColor="#ffffff" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                onClick={downloadQr}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--exp-border)] px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-surface)]"
              >
                <Download className="h-3.5 w-3.5" />
                Download QR
              </button>
              <button
                onClick={copy}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--exp-border)] px-3 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-surface)]"
              >
                {copied ? <Check className="h-3.5 w-3.5" style={{ color: 'var(--exp-a)' }} /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${WEDDING.share.whatsappText}\n${shareUrl()}`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-90"
              style={{ background: '#128c4a', color: '#ffffff' }}
            >
              <MessageCircle className="h-4 w-4" />
              Share on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ShareButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Share the invitation"
        className="fixed bottom-20 right-5 z-40 flex h-12 items-center gap-3 rounded-full border border-[var(--exp-border)] bg-[var(--exp-bg)]/90 px-3.5 text-[var(--exp-fg)] shadow-lg backdrop-blur-md transition-colors hover:bg-[var(--exp-bg-2)] md:bottom-6"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden text-xs font-medium uppercase tracking-[0.15em] lg:inline">Share</span>
      </button>
      <ShareModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

/* --------------------------------- Mobile bar -------------------------------- */

export function MobileBar({ visible }: { visible: boolean }) {
  const [shareOpen, setShareOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-[var(--exp-border)] p-2 shadow-2xl backdrop-blur-xl md:hidden"
            style={{ background: 'color-mix(in srgb, var(--exp-bg) 88%, transparent)' }}
          >
            <button
              onClick={() => setShareOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--exp-fg)]"
              style={{ background: 'var(--exp-surface)' }}
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <button
              onClick={() => document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-90"
              style={{ background: 'var(--exp-fg)', color: 'var(--exp-btn-fg)' }}
            >
              <Send className="h-4 w-4" />
              RSVP
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  )
}
