import Section from './Section'
import { focus, stacks } from '../data/skills'

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
    </Section>
  )
}
