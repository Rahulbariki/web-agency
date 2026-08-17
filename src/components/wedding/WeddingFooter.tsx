import { ArrowLeft } from 'lucide-react'
import { WEDDING } from '../../data/wedding'

export function WeddingFooter({ onClose }: { onClose: () => void }) {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--exp-border)]">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[var(--exp-muted)]">{WEDDING.footer.line1}</p>
        <h2 className="mt-4 font-display text-5xl font-light sm:text-6xl">{WEDDING.footer.names}</h2>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3" style={{ color: 'var(--exp-a)' }}>
          <span className="h-px w-14" style={{ background: 'linear-gradient(90deg, transparent, var(--exp-a))' }} />
          <span className="h-1.5 w-1.5 rotate-45 border border-[var(--exp-a)]" />
          <span className="h-px w-14" style={{ background: 'linear-gradient(90deg, var(--exp-a), transparent)' }} />
        </div>
        <p className="mt-6 font-display text-lg italic text-[var(--exp-a)]">{WEDDING.footer.date}</p>
        <p className="mt-2 text-sm text-[var(--exp-muted)]">{WEDDING.footer.line2}</p>

        <div className="mx-auto mt-14 flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--exp-border)] bg-[var(--exp-surface)] px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--exp-fg)] transition-colors hover:bg-[var(--exp-bg-2)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Experiences
          </button>
        </div>
      </div>
    </footer>
  )
}
