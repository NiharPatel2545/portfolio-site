import Navbar from './Navbar'
import { links } from '../data/site'

export default function Hero() {
  return (
    <header id="hero">
      <div className="wrap">
        <Navbar />
        <div className="hero">
          <h1>Nihar Patel</h1>
          <p className="role">Computer Science student at Monash, building machine learning and web apps.</p>
          <p className="lead">
            Five years of building web apps, now pointed at machine learning. Right now I'm building
            AgriShield, which gives farmers soil and crop advice for any spot on the map.
          </p>
          <div className="actions">
            <a className="btn" href="#projects">View projects</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
}
