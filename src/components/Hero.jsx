import Navbar from './Navbar'
import { links } from '../data/site'
import { path } from '../data/skills'

export default function Hero() {
  // Newest layer sits on top, like soil laid down year by year.
  const layers = [...path].reverse()

  return (
    <header id="hero">
      <div className="field">
        <div className="wrap">
          <Navbar />
          <div className="hero">
            <h1>Nihar<br />Patel</h1>
            <div>
              <p className="lead">
                Computer Science student at Monash University. Five years of building web apps, now
                pointed at machine learning. Right now I'm building AgriShield, which gives farmers soil
                and crop advice for any spot on the map.
              </p>
              <div className="actions">
                <a className="btn" href="#projects">See AgriShield</a>
                <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="strata">
        <ol>
          {layers.map((p, i) => (
            <li key={p.year} className={p.now ? 'now' : ''} style={{ '--i': i }}>
              <div className="wrap">
                <b>{p.year}</b>
                <span>{p.text}</span>
              </div>
            </li>
          ))}
        </ol>
        <figcaption className="wrap">What I've learned, one layer a year</figcaption>
      </figure>
    </header>
  )
}
