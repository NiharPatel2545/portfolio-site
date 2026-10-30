import Section from './Section'
import { links } from '../data/site'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Open to internships, collaborations and conversations about AI, machine learning and web projects."
    >
      <a className="mail" href={`mailto:${links.email}`}>{links.email}</a>
      <p className="elsewhere">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </Section>
  )
}
