import { Fragment, useContext, useEffect, useState } from 'react'
import './productCardPreview.css'
import Button from '../../../Button/Button'
import ShoppingCart from '../../../../assets/Icons/ShoppingCart'
import Imagescarrousel from '../../../ImagesCarousel/ImagesCarrousel'
import { shootingStarContext } from '../../../Header/contexts/ShootingStarContext'
import { CartContext } from '../../../../contexts/CartContext'
import CloseIcon from '../../../../assets/Icons/CloseIcon'
import AddIcon from '../../../../assets/Icons/AddIcon'
import RemoveIcon from '../../../../assets/Icons/RemoveIcon'
import RatingStars from '../../../RatingStars/RatingStars'

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
    }, 400)
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

                  <section className='product-buying-info black-scroll-bar'>
                    <div className='price-rating'>
                      <h2>${product.price}</h2>
                      <div className='rating'>

                        <RatingStars rating={product.rating} />({product.rating})
                      </div>
                    </div>

                    <div className='product-info-container'>
                      <h3>Dimensions:</h3>
                      <div className='dimensions-container'>
                        <p>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width} cm</p>
                      </div>
                    </div>

                    <div className='product-info-container'>
                      <h3>Description:</h3>

                      <p>
                        {product.description}
                      </p>
                    </div>

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
                        Availability
                      </p>
                    </div>

                    <div className='availability-shipping-item'>
                      <h1>
                        Shipping
                      </h1>
                      <p>
                        Shipping
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
