import Section from './Section'
import { facts } from '../data/site'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <img className="portrait" src="/images/nihar.jpg" alt="Portrait of Nihar Patel" width="640" height="800" />
        <div>
          <p>
            I like understanding how systems really work. I started in 2021 with Scratch, then taught
            myself HTML, CSS, JavaScript and Python, and built full-stack apps with React, Node and MongoDB.
          </p>
          <p>
            Now I'm studying Computer Science at Monash and pointing that foundation at AI and machine
            learning: working with data in Python, learning scikit-learn, and building AgriShield, a tool
            that gives farmers soil and crop advice for any location.
          </p>
          <p>
            I also love cybersecurity: how systems get broken, and how to keep them safe. So far that's The
            Guardian, a guard that stops AI agents being tricked by prompt injection, and launchcheck, which
            finds the usual security slip-ups in a website before launch.
          </p>
          <p>My goal is a career building machine learning systems that people can trust and use.</p>
          <dl className="facts">
            {facts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
