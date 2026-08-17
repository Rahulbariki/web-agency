import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import type { ExperienceDemo } from './data/demos'
import { getDemoById } from './data/demos'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DemoShowcase } from './components/DemoShowcase'
import { NotJustACard } from './components/NotJustACard'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Personalization } from './components/Personalization'
import { AiCreator } from './components/AiCreator'
import { MobileFirst } from './components/MobileFirst'
import { Pricing } from './components/Pricing'
import { FinalCta } from './components/FinalCta'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const ExperienceLayer = lazy(() =>
  import('./components/ExperienceViewer').then((m) => ({ default: m.ExperienceLayer })),
)

export default function App() {
  const [activeDemo, setActiveDemo] = useState<ExperienceDemo | null>(null)

  const openDemo = useCallback((demo: ExperienceDemo) => {
    setActiveDemo(demo)
    window.history.replaceState(null, '', `#experience-${demo.id}`)
  }, [])

  const closeDemo = useCallback(() => {
    setActiveDemo(null)
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  useEffect(() => {
    const path = window.location.pathname
    const route = path.match(/^\/demo\/([\w-]+)\/?$/)
    if (route) {
      const demo = getDemoById(route[1])
      if (demo) {
        setActiveDemo(demo)
        window.history.replaceState(null, '', `#experience-${demo.id}`)
        return
      }
    }
    const id = window.location.hash.replace('#experience-', '')
    if (id) {
      const demo = getDemoById(id)
      if (demo) setActiveDemo(demo)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-ink-950 text-cream antialiased">
      <Navbar />
      <main>
        <Hero />
        <DemoShowcase onOpen={openDemo} />
        <NotJustACard />
        <Features />
        <HowItWorks />
        <Personalization />
        <AiCreator />
        <MobileFirst />
        <Pricing />
        <FinalCta />
        <About />
        <Contact />
      </main>
      <Footer onOpenDemo={(id) => {
        const demo = getDemoById(id)
        if (demo) openDemo(demo)
      }} />
      <Suspense
        fallback={
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950">
            <span className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-lg italic text-gold-soft">A</span>
          </div>
        }
      >
        <ExperienceLayer demo={activeDemo} onClose={closeDemo} />
      </Suspense>
    </div>
  )
}
