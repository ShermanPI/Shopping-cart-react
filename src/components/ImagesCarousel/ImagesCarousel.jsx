import './imagesCarousel.css'

function ImagesCarousel ({ imagesArray }) {
  const imagesArrayLength = imagesArray.length

  return (
    <div className='carousel-container'>
      <div className='carousel-images-container'>
        {imagesArray.map((imageSrc, index) =>
          <div className='carousel-image' key={index}>
            <img src={imageSrc} />
          </div>
        )}
      </div>
      <div className='carousel-points-container'>
        {imagesArrayLength > 1 && Array.from({ length: imagesArrayLength }).map((_, index) =>
          <div key={index} className='carousel-point' />
        )}
      </div>
    </div>
  )
}

export default ImagesCarousel
