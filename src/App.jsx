import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Sections rise in as they enter. Without script or with reduced motion, everything stays visible.
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.classList.add('reveal')
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }
    }, { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('.band').forEach((s) => {
      s.querySelectorAll('.wrap > *').forEach((el, i) => el.style.setProperty('--d', i))
      io.observe(s)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
