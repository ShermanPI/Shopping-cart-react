import { useRef, useState } from 'react'
import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel'
import './ProductCard.css'
import ProductCardPreview from './ProductCardPreview/ProductCardPreview'

function ProductCard ({ product, onClick }) {
  const cardRef = useRef()
  const [cardPreview, setCardPreview] = useState({
    initialSize:
      { width: 0, height: 0 },
    initialPosition: {
      x: 0,
      y: 0
    },
    active: false
  })

  const openProductCard = (e) => {
    const cardImage = cardRef.current.querySelector('img')
    const cardImageRectValue = cardImage.getBoundingClientRect()
    console.log(cardImageRectValue)
    console.log({
      initialSize: { width: cardImageRectValue.width, height: cardImageRectValue.height },
      initialPosition: { x: cardImageRectValue.x, y: window.scrollY + cardImageRectValue.y },
      active: false
    })

    console.log('window.scrollY', window.scrollY + cardImageRectValue.y, '💻💻💻')

    setCardPreview({
      initialSize: { width: cardImageRectValue.width, height: cardImageRectValue.height },
      initialPosition: { x: cardImageRectValue.x, y: cardImageRectValue.y },
      active: true
    })
  }

  const addToCart = (e) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <>
      <div className='card' onClick={openProductCard} ref={cardRef}>
        <div className='images-and-name'>
          {/* <ImagesCarousel imagesArray={product.images} /> */}

          <div>
            <div className='thumbnail-container'>
              <img src={product.thumbnail} alt={`Image of the product: ${product.title}`} />
            </div>
          </div>
          <div className='name-price-container'>
            <p className='product-name'>
              {product.title}
            </p>
            <p className='product-price'>
              {product.price}
            </p>
          </div>
          <div className='product-description'>
            <p>
              {product.description}
            </p>
          </div>
        </div>

        <div className='cart-btn-container' onClick={addToCart}>
          <Button>
            <ShoppingCart width={18} height={18} />
            Add to cart
          </Button>
        </div>
      </div>

      {cardPreview.active &&
        <ProductCardPreview cardPreviewInfo={cardPreview} />}
    </>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default ProductCard
