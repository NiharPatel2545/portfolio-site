import { useCallback, useState } from 'react'
import Section from './Section'
import Lightbox from './Lightbox'
import { certificates } from '../data/certificates'

export default function Certificates() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <Section id="certs" title="Certificates" intro="Select a certificate to view it full size.">
      <ul className="ct">
        {certificates.map((c) => (
          <li key={c.name}>
            <button className="th" onClick={() => setOpen(c)} aria-label={`View ${c.name} certificate`}>
              <img src={c.image} alt={`${c.name} certificate`} loading="lazy" />
            </button>
            <div className="cap">
              <h3>{c.name}</h3>
              <span>{c.meta}</span>
            </div>
          </li>
        ))}
      </ul>
      {open && <Lightbox cert={open} onClose={close} />}
    </Section>
  )
}
