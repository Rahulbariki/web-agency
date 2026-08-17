import { motion } from 'framer-motion'
import { FILTER_CATEGORIES } from '../data/site'
import { cn } from '../lib/utils'

interface CategoryFilterProps {
  active: string
  onChange: (category: string) => void
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {FILTER_CATEGORIES.map((category) => {
        const isActive = active === category
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={cn(
              'relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300',
              isActive ? 'text-ink-950' : 'text-cream/60 hover:text-cream',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-soft shadow-[0_6px_24px_-6px_rgba(201,169,104,0.6)]"
              />
            )}
            {!isActive && <span className="absolute inset-0 rounded-full border border-cream/12" />}
            <span className="relative z-10">{category}</span>
          </button>
        )
      })}
    </div>
  )
}
