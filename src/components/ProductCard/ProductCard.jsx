import { useRef } from 'react'
import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import './ProductCard.css'
import ProductCardPreview from './components/ProductCardPreview/ProductCardPreview'
import useProductCard from '../../hooks/useProductCard'

function ProductCard ({ product, onClick }) {
  const cardRef = useRef()
  const { cardPreview, openProductCard, closeProductCard } = useProductCard(cardRef)

  const addToCart = (e) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <>

      <div className={`card ${cardPreview.shouldRender ? 'hidden-card' : ''}`} onClick={openProductCard} ref={cardRef}>
        <div className='images-and-name'>

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

        <div className='cart-btn-container'>
          <Button onClick={addToCart}>
            <ShoppingCart width={18} height={18} />
            Add to cart
          </Button>
        </div>
      </div>

      {cardPreview.shouldRender &&
        <ProductCardPreview closeProductCard={closeProductCard} cardPreviewInfo={cardPreview} product={product} />}
    </>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default ProductCard
