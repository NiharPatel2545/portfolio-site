import Navbar from './Navbar'
import { links } from '../data/site'
import { check } from '../data/agrishield'

export default function Hero() {
  return (
    <header id="hero">
      <div className="wrap">
        <Navbar />
        <div className="hero">
          <div className="hero-text">
            <h1>Nihar Patel</h1>
            <p className="lead">
              I study Computer Science at Monash University and build machine learning tools, and the web
              apps around them.
            </p>
            <div className="actions">
              <a className="btn" href="#projects">View All Projects</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <figure className="report" data-ui>
            <div className="report-head">
              <span><b>AgriShield</b> check, {check.place}</span>
              <span>{check.date}</span>
            </div>
            <p className="verdict">{check.verdict}</p>
            <dl className="figs">
              {check.figures.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    <strong>{f.value}</strong>
                    <span>{f.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <table className="crops">
              <caption>Top 4 of 63 crops scored, rain only</caption>
              <thead>
                <tr>
                  <th scope="col">Crop</th>
                  <th scope="col">Fit</th>
                  <th scope="col">Yield</th>
                  <th scope="col">Good seasons</th>
                </tr>
              </thead>
              <tbody>
                {check.crops.map((c) => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}</th>
                    <td>
                      <span className="bar" style={{ '--v': `${c.fit}%` }} aria-hidden="true" />
                      {c.fit}%
                    </td>
                    <td>{c.yield}</td>
                    <td>{c.seasons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <figcaption>
              Real output for the centre of Horsham ({check.coords}).{' '}
              <a href="https://www.agrishieldai.com" target="_blank" rel="noopener noreferrer">Check Your Own Field</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  )
}
