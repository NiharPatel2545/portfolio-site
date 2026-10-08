import Navbar from './Navbar'
import { links } from '../data/site'

export default function Hero() {
  return (
    <header id="hero">
      <div className="wrap">
        <Navbar />
        <div className="hero">
          <div>
            <h1>Nihar Patel</h1>
            <p className="role">Aspiring AI and machine learning engineer</p>
            <p className="role2">Full-stack developer</p>
            <p className="lead">
              I'm a Computer Science student at Monash University. I'm learning to build systems that
              learn from data, and I already build and ship the web apps around them.
            </p>
            <div className="btns">
              <a className="btn solid" href="#projects">View my work</a>
              <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="photo">
            <img src="/images/nihar.jpg" alt="Portrait of Nihar Patel" width="640" height="800" />
          </div>
        </div>
      </div>
    </header>
  )
}
