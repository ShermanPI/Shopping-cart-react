import './carrouselBtn.css'

export default function CarrouselBtn ({ name, onClick, active = false }) {
  return (
    <button
      onClick={onClick}
      className={`carrousel-btn ${active ? 'active' : ''}`}
    >
      {name}
    </button>
  )
}
