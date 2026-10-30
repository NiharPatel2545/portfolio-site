import Navbar from './Navbar'
import { links } from '../data/site'
import { projects } from '../data/projects'

// Drawn back to front: Netflix peeks out behind, AgriShield sits left, The Guardian lands in front.
const pile = ['Netflix clone', 'AgriShield', 'The Guardian'].map((n) => projects.find((p) => p.name === n))

export default function Hero() {
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
              {pile.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
                  <img src={p.image} alt={p.alt} width="1600" height="1000" />
                </a>
              ))}
            </div>
            <figcaption>
              AgriShield, The Guardian and {projects.length - 2} more projects. <a href="#projects">See All</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  )
}
