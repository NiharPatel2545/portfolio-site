import { useCallback, useState } from 'react'
import Navbar from './Navbar'
import Lightbox from './Lightbox'
import { links } from '../data/site'
import { certificates } from '../data/certificates'

export default function Hero() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  // Newest three, drawn oldest first so the newest lands on top of the pile.
  const pile = certificates.slice(0, 3).reverse()
  const firstYear = certificates[certificates.length - 1].date.slice(-4)

  return (
    <header id="hero">
      <div className="wrap">
        <Navbar />
        <div className="hero">
          <div className="hero-text">
            <h1>Nihar Patel</h1>
            <p className="lead">
              I study Computer Science at Monash University. I build machine learning tools and web apps,
              and I'm getting into cybersecurity.
            </p>
            <div className="actions">
              <a className="btn" href="#projects">View All Projects</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <figure className="pile">
            <div className="pile-cards">
              {pile.map((c) => (
                <button key={c.name} type="button" onClick={() => setOpen(c)} aria-label={`View ${c.name} certificate`}>
                  <img src={c.image} alt={`${c.name} certificate`} width="1200" height="800" />
                </button>
              ))}
            </div>
            <figcaption>
              {certificates.length} certificates since {firstYear}, newest on top. <a href="#certs">See All</a>
            </figcaption>
          </figure>
        </div>
      </div>
      {open && <Lightbox cert={open} onClose={close} />}
    </header>
  )
}
