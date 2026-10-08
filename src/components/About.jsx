import Section from './Section'
import { facts } from '../data/site'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
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
          <p>My goal is a career building machine learning systems that people can trust and use.</p>
        </div>
        <dl className="facts">
          {facts.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
