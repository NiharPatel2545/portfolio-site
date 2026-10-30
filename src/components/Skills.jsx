import Section from './Section'
import { skills, path } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Web development is the foundation I've built over five years. AI and machine learning is where I'm taking it, and cybersecurity is next."
    >
      <dl className="stacks">
        {skills.map((s) => (
          <div key={s.area}>
            <dt>{s.area}</dt>
            <dd>
              <span className="tools">{s.tools}</span>
              {s.notes.map((n) => (
                <span className="note" key={n}>{n}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="sub">How my stack grew</h3>
      <ol className="path">
        {path.map((p) => (
          <li key={p.year} className={p.now ? 'now' : ''}>
            <b>{p.year}</b>
            {p.text}
          </li>
        ))}
      </ol>
    </Section>
  )
}
