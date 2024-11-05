import { useEffect, useState } from 'react'
import './productCardPreview.css'
import ImagesCarousel from '../../../ImagesCarousel/ImagesCarousel'

const ProductCardPreview = ({ cardPreviewInfo, product, closeProductCard }) => {
  const [open, setOpen] = useState(false)
  const [animationFinished, setAnimationFinished] = useState(false)

  const handleClosePreview = (e) => {
    e.stopPropagation()
    setOpen(false)
    closeProductCard()
  }

  useEffect(() => {
    setOpen(true)

    setTimeout(() => {
      setAnimationFinished(true)
    }, 400)
  }, [])

  return (
    <div className={`behind-shadow ${open ? '' : 'close'}`} onClick={handleClosePreview}>
      <div
        style={{
          '--initial-width': `${cardPreviewInfo.initialSize.width}px`,
          '--initial-height': `${cardPreviewInfo.initialSize.height}px`,
          '--initial-x': `${cardPreviewInfo.initialPosition.x}px`,
          '--initial-y': `${cardPreviewInfo.initialPosition.y}px`
        }}
        className={`card-preview-container ${open ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='preview-carrousel-container'>
          {animationFinished && <ImagesCarousel imagesArray={product.images} />}
        </div>
      </div>
    </div>
  )
}

export default ProductCardPreview
