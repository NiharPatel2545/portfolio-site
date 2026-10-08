import { nav } from '../data/site'

export default function Navbar() {
  return (
    <div className="top">
      <a className="brand" href="#hero">Nihar Patel</a>
      <nav aria-label="Main">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
