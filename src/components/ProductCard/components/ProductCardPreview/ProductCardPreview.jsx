import './productCardPreview.css'
import { useContext, useEffect, useState } from 'react'
import AddIcon from 'src/assets/Icons/AddIcon'
import CloseIcon from 'src/assets/Icons/CloseIcon'
import RemoveIcon from 'src/assets/Icons/RemoveIcon'
import ShoppingCart from 'src/assets/Icons/ShoppingCart'
import Button from 'src/components/Button/Button'
import { shootingStarContext } from 'src/contexts/ShootingStarContext'
import Imagescarrousel from 'src/components/ImagesCarousel/ImagesCarrousel'
import RatingStars from 'src/components/RatingStars/RatingStars'
import { CartContext } from 'src/contexts/CartContext'

const ProductCardPreview = ({ cardPreviewInfo, product, closeProductCard }) => {
  const [open, setOpen] = useState(false)
  const [animationFinished, setAnimationFinished] = useState(false)
  const { addShootingStar } = useContext(shootingStarContext)
  const {
    addCartItem,
    substractCartItem,
    deleteProductFromCart,
    cartItems
  } = useContext(CartContext)

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  const handleClosePreview = (e) => {
    e.stopPropagation()
    setOpen(false)
    closeProductCard()
  }

  useEffect(() => {
    setOpen(true)

    setTimeout(() => {
      setAnimationFinished(true)
    }, 420)
  }, [])

  const cartItemIndex = cartItems.findIndex((item) => {
    return item.product.id === product.id
  })

  const cartItem = cartItems[cartItemIndex]

  const hasReachedStock = cartItem?.product.stock <= cartItem?.quantity

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
              <div className='product-preview-name'>
                <h1><b>{product.title}</b></h1>
                <button className='close-cart-button' onClick={handleClosePreview}>
                  <CloseIcon />
                </button>
              </div>

              <div className='preview-content'>
                <div className='preview-carrousel-container'>
                  <Imagescarrousel imagesArray={product.images} />
                </div>

                <div className='product-detail-info'>

                  <div className='price-rating'>
                    <h2>${product.price}</h2>
                    <div className='rating'>
                      <RatingStars rating={product.rating} />
                      <p>
                        ({product.rating})
                      </p>
                    </div>
                  </div>

                  <section className='product-buying-info black-scroll-bar'>
                    <div className='product-dimensions-container'>
                      <h3 className='product-preview-subtitle'>Dimensions:</h3>
                      <div className='dimensions-container'>
                        <p>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width} cm</p>
                      </div>
                    </div>
                    <h3 className='product-preview-subtitle'>Description:</h3>
                    <p>
                      {product.description}
                    </p>
                  </section>

                  <div className='product-card-preview-button'>
                    <div className='product-preview-counter'>
                      <button
                        className='product-preview-counter-button' onClick={(e) => {
                          e.stopPropagation()
                          if (cartItem) {
                            if (cartItem.quantity === 1) {
                              deleteProductFromCart(cartItemIndex)
                              return
                            }
                            substractCartItem(cartItemIndex)
                          }
                        }}
                      >
                        <RemoveIcon width={16} height={16} />
                      </button>
                      <span className='item-quantity'>{cartItem ? cartItem.quantity : 0}</span>
                      <button
                        className={`${hasReachedStock ? 'disabled-btn' : ''} product-preview-counter-button`}
                        onClick={() => {
                          if (cartItemIndex === -1) {
                            saveIntoCartHandler(product)
                          }

                          if (cartItem) {
                            !hasReachedStock && addCartItem(cartItem.product)
                          }
                        }}
                      >
                        <AddIcon width={16} height={16} />
                      </button>
                    </div>

                    <Button onClick={() => saveIntoCartHandler(product)}>
                      <ShoppingCart width={18} height={18} />
                      Add to cart
                    </Button>
                  </div>

                  <div className='availability-shipping-container'>
                    <div className='availability-shipping-item'>
                      <h1>
                        Availability
                      </h1>
                      <p>
                        {(cartItem ? cartItem.quantity : 0) <= product.stock ? 'In stock' : 'Out of stock'}
                      </p>
                    </div>

                    <div className='availability-shipping-item'>
                      <h1>
                        Shipping
                      </h1>
                      <p>
                        {product.shippingInformation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
        }

      </div>
    </div>
  )
}

export default ProductCardPreview
