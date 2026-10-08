import { useEffect, useRef } from 'react'

export default function Lightbox({ cert, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${cert.name} certificate`} onClick={onClose}>
      <button ref={closeRef} className="x" onClick={onClose}>Close</button>
      <img src={cert.image} alt={`${cert.name} certificate, full size`} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
