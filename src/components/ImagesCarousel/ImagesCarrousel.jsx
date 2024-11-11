import { useState } from 'react'
import './imagesCarrousel.css'
import ArrowRight from '../../assets/Icons/ArrowRight'

function Imagescarrousel ({ imagesArray }) {
  const imagesArrayLength = imagesArray.length
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const areControlsVisible = imagesArrayLength <= 1

  const moveCarrousel = (position) => {
    let newCarrouselPosition = position + selectedImageIndex

    if (newCarrouselPosition > imagesArray.length - 1) {
      newCarrouselPosition = 0
    }

    if (newCarrouselPosition < 0) {
      newCarrouselPosition = imagesArray.length - 1
    }

    setSelectedImageIndex(newCarrouselPosition)
  }

  return (
    <div className='images-carrousel-container'>
      {
        !areControlsVisible &&
          <div className='carrousel-btns'>
            <button onClick={() => moveCarrousel(-1)}>
              <ArrowRight />
            </button>

            <button onClick={() => moveCarrousel(1)}>
              <ArrowRight />
            </button>

          </div>
      }

      <div
        className='carrousel-images-container'
        style={{ transform: `translate(-${selectedImageIndex * 100}%)` }}
      >
        {imagesArray.map((imageSrc, index) =>
          <div
            key={index} className='carrousel-image'
          >
            <img src={imageSrc} />
          </div>
        )}
      </div>

      <div className={`carrousel-points-container ${areControlsVisible ? 'no-items' : ''}`}>
        {imagesArrayLength > 1 && Array.from({ length: imagesArrayLength }).map((_, index) =>
          <div
            key={index} className={`carrousel-point ${index === selectedImageIndex ? 'selected' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          />
        )}
      </div>
    </div>
  )
}

export default Imagescarrousel
