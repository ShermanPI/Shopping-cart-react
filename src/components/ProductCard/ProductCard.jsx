import ShoppingCart from '../../assets/Icons/ShoppingCart'
import Button from '../Button/Button'
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel'
import './ProductCard.css'

function ProductCard ({ title, price, images }) {
  return (
    <div className='card'>
      {title} - {price}
      <ImagesCarousel imagesArray={images} />
      <Button>
        <ShoppingCart width={18} height={18} />
        Add to cart
      </Button>
    </div>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default ProductCard
