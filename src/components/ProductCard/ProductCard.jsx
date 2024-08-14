import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel'
import './ProductCard.css'

function ProductCard ({ title, price, images, description }) {
  return (
    <div className='card'>
      <div className='images-and-name'>
        <ImagesCarousel imagesArray={images} />
        <div className='name-price-container'>
          <p className='product-name'>
            {title}
          </p>
          <p className='product-price'>
            {price}
          </p>
        </div>
        <div className='product-description'>
          <p>
            {description}
          </p>
        </div>
      </div>

      <div className='cart-btn-container'>
        <Button>
          <ShoppingCart width={18} height={18} />
          Add to cart
        </Button>
      </div>
    </div>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default ProductCard
