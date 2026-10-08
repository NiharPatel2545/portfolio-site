export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="band">
      <div className="wrap">
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
