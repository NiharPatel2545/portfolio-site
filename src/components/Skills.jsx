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

      <div className="stacks">
        {stacks.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <ul className="chips">
              {s.chips.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="note">{s.note}</p>
          </div>
        ))}
      </div>

      <p className="path-label">How my stack grew</p>
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
