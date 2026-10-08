import Section from './Section'
import { links } from '../data/site'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Open to internships, collaborations and conversations about AI, machine learning and web projects."
    >
      <div className="btns">
        <a className="btn solid" href={`mailto:${links.email}`}>{links.email}</a>
        <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </Section>
  )
}
