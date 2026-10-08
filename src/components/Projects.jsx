import Section from './Section'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="AgriShield is what I'm building now. The rest are full-stack projects I built before university, from a blog network and online store to clones of Twitter and Netflix."
    >
      <div className="pj">
        {projects.map((p) => (
          <article className="pc" key={p.name}>
            <div className="shot">
              <img src={p.image} alt={p.alt} loading="lazy" />
            </div>
            <div className="body">
              {p.tag && <span className="tag">{p.tag}</span>}
              <h3>{p.name}</h3>
              <span className="meta">{p.meta}</span>
              <p>{p.text}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.cta || 'View project'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
