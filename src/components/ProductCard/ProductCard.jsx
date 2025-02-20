import { useRef } from 'react'
import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import './ProductCard.css'
import ProductCardPreview from './components/ProductCardPreview/ProductCardPreview'
import useProductCard from '../../hooks/useProductCard'
import ArrowRight from 'src/assets/Icons/ArrowRight'
import { useNavigate } from 'react-router'

function ProductCard ({ product, onClick }) {
  const cardRef = useRef()
  const navigate = useNavigate()
  const { cardPreview, openProductCard, closeProductCard } = useProductCard(cardRef)

  const addToCart = (e) => {
    e.stopPropagation()
    onClick()
  }

  const truncateText = (text, length) => {
    const trimmedText = text.trim()
    return trimmedText.length > length ? trimmedText.substring(0, length) + '...' : trimmedText
  }

  const truncatedProductTitle = truncateText(product.title, 20)
  const truncatedProductDescription = truncateText(product.description, 65)

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
              {truncatedProductTitle}
            </p>
            <p className='product-price'>
              {product.price}
            </p>
          </div>
          <div className='product-description'>
            <p>
              {truncatedProductDescription}
            </p>
          </div>
        </div>

        <div className='cart-btn-container'>
          <Button onClick={addToCart}>
            <ShoppingCart width={18} height={18} />
            Add to cart
          </Button>
          <Button onClick={() => navigate(`/product/${product.id}`)}>
            <ArrowRight />
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
