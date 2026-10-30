import Section from './Section'
import { projects } from '../data/projects'

export default function Projects() {
  const uni = projects.filter((p) => p.uni)
  const earlier = projects.filter((p) => !p.uni)

  return (
    <Section id="projects" title="Projects">
      {uni.map((p) => (
        <article className="feature" key={p.name}>
          <a className="shot" href={p.link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <img src={p.image} alt={p.alt} width="1600" height="1000" loading="lazy" />
          </a>
          <div>
            <p className="when">{p.tag ? `${p.tag}, ${p.date}` : p.date}</p>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <p className="stack">{p.stack}</p>
            <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">{p.cta}</a>
          </div>
        </article>
      ))}

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
