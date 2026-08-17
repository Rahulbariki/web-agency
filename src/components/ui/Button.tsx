import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-gold via-gold-soft to-gold text-ink-950 hover:shadow-[0_8px_40px_-8px_rgba(201,169,104,0.55)] hover:brightness-110',
  secondary:
    'glass text-cream hover:border-cream/25 hover:bg-cream/8',
  ghost:
    'text-cream/70 hover:text-cream hover:bg-cream/5',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-[3.25rem] px-8 text-[0.95rem]',
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
