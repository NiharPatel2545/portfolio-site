import Section from './Section'
import { focus, stacks, path } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Web development is the foundation I've built over five years. AI and machine learning is where I'm taking it."
    >
      <div className="focus">
        <h3>{focus.title}</h3>
        <p>{focus.text}</p>
        <div className="focus-cols">
          {focus.columns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <dl className="stacks">
        {stacks.map((s) => (
          <div key={s.title}>
            <dt>{s.title}</dt>
            <dd>
              <span className="tools">{s.chips.join(', ')}</span>
              <span className="note">{s.note}</span>
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
