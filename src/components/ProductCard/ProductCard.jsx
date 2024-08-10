import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel'
import './ProductCard.css'

function ProductCard ({ title, price, images }) {
  return (
    <div className='card'>

      <div>
        <ImagesCarousel imagesArray={images} />
        <div className='name-price-container'>
          <p className='product-name'>
            {title}
          </p>
          <p className='product-price'>
            <span>$</span>
            {price}
          </p>
        </div>
      </div>
      <Button>
        <ShoppingCart width={18} height={18} />
        Add to cart
      </Button>
    </div>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default ProductCard
