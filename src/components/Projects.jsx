import Section from './Section'
import { projects } from '../data/projects'

export default function Projects() {
  const [lead, ...earlier] = projects

  return (
    <Section id="projects" title="Projects">
      <article className="feature">
        <a className="shot" href={lead.link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <img src={lead.image} alt={lead.alt} width="1600" height="1000" loading="lazy" />
        </a>
        <div>
          <p className="when">{lead.tag}, {lead.date}</p>
          <h3>{lead.name}</h3>
          <p>{lead.text}</p>
          <p className="stack">{lead.stack}</p>
          <a className="btn" href={lead.link} target="_blank" rel="noopener noreferrer">{lead.cta}</a>
        </div>
      </article>

      <h3 className="sub">Before university</h3>
      <ul className="earlier">
        {earlier.map((p) => (
          <li key={p.name}>
            <img src={p.image} alt={p.alt} width="1600" height="1000" loading="lazy" />
            <div>
              <h4>
                <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name}</a>
              </h4>
              <p>{p.text}</p>
            </div>
            <span className="stack">{p.stack}</span>
            <span className="when">{p.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
