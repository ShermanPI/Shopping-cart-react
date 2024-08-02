function ImagesCarousel ({ imagesArray }) {
  return (
    <div className='carousel-container'>
      <div className='carousel-images-container'>
        {imagesArray.map((imageSrc, index) =>
          <img src={imageSrc} key={index} />)}

      </div>
    </div>
  )
}

export default ImagesCarousel
