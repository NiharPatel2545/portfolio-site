import { useState } from 'react'
import Navbar from './Navbar'
import { links } from '../data/site'
import { projects } from '../data/projects'

export default function Hero() {
  const [shown, setShown] = useState(projects[0])

  return (
    <header id="hero">
      <div className="wrap">
        <Navbar />
        <div className="hero">
          <div className="hero-text">
            <h1>Nihar Patel</h1>
            <p className="lead">
              I study Computer Science at Monash University and build machine learning tools, and the web
              apps around them.
            </p>
            <div className="actions">
              <a className="btn" href="#projects">View All Projects</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <figure className="viewer">
            <a className="screen" href={shown.link} target="_blank" rel="noopener noreferrer">
              <img key={shown.name} src={shown.image} alt={shown.alt} width="1600" height="1000" fetchPriority="high" />
            </a>
            <figcaption aria-live="polite">
              <b>{shown.name}</b>, {shown.date}. {shown.text}
            </figcaption>
            <div className="picker" role="group" aria-label="Choose a project to preview">
              {projects.map((p) => (
                <button key={p.name} type="button" aria-pressed={p === shown} onClick={() => setShown(p)}>
                  {p.name}
                </button>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </header>
  )
}
