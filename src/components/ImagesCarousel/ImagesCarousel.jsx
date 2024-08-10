import { useState } from 'react'
import './imagesCarousel.css'

function ImagesCarousel ({ imagesArray }) {
  const imagesArrayLength = imagesArray.length
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className='carousel-container'>
      <div
        className='carousel-images-container'
        style={{ transform: `translate(-${selectedImageIndex * 100}%)` }}
      >
        {imagesArray.map((imageSrc, index) =>
          <div
            className='carousel-image' key={index}
          >
            <img src={imageSrc} />
          </div>
        )}
      </div>
      <div className={`carousel-points-container ${imagesArrayLength <= 1 ? 'no-items' : ''}`}>
        {imagesArrayLength > 1 && Array.from({ length: imagesArrayLength }).map((_, index) =>
          <div
            key={index} className={`carousel-point ${index === selectedImageIndex ? 'selected' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          />
        )}
      </div>
    </div>
  )
}

export default ImagesCarousel
