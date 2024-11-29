import { Fragment, useEffect, useState } from 'react'
import './productCardPreview.css'
import Button from '../../../Button/Button'
import ShoppingCart from '../../../../assets/Icons/ShoppingCart'
import Imagescarrousel from '../../../ImagesCarousel/ImagesCarrousel'

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
        {
          (animationFinished && open) &&
            <>
              <div className='preview-carrousel-container'>
                <Imagescarrousel imagesArray={product.images} />
              </div>
              <div className='product-detail-info'>

                <div className='product-buying-info black-scroll-bar'>
                  <h1>{product.title}</h1>
                  <h2>$ {product.price}</h2>
                  <h2>Rating: {product.rating}</h2>

                  <hr />

                  <h2>Dimensions:</h2>
                  <p>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width} cm</p>

                  <p>{product.description}</p>
                </div>

                <div className='product-card-preview-btn'>
                  <Button>
                    <ShoppingCart width={18} height={18} />
                    Add to cart
                  </Button>
                </div>
              </div>
            </>
        }

      </div>
    </div>
  )
}

export default ProductCardPreview
