import { useContext } from 'react'
import Button from '../Button/Button'
import './checkoutPage.css'
import { CartContext } from 'src/contexts/CartContext'

export const CheckoutPage = () => {
  const {
    cartItems,
    totalPrice
  } = useContext(CartContext)

  return (
    <section className='checkout-page-container'>
      <h1 className='results-title'>Checkout</h1>
      <section className='checkout-container'>
        <div className='checkout-products white-checkout-container'>
          <h2 className='checkout-container-subtitle checkout-container-padding'>Order Summary</h2>

          <div className='checkout-products-container black-scroll-bar'>
            {cartItems.map(({ product }) => (
              <div className='checkout-product' key={product.key}>
                <div className='checkout-product-image-container'>
                  <img src={product.thumbnail} alt={`image of product: ${product.title}`} />
                </div>

                <div className='checkout-product-info'>
                  <p className='checkout-product-name'>{product.title}</p>
                  <p className='checkout-product-price'>${product.price}</p>
                </div>
              </div>
            )
            )}

          </div>

          <div className='checkout-total-price-container checkout-container-padding'>
            <h3>Total:</h3>
            <p>${totalPrice}</p>
          </div>
        </div>
        <div className='checkout-info-container'>
          <div className='checkout-shipping-info white-checkout-container'>
            <h2 className='checkout-container-subtitle checkout-container-padding'>Order Summary</h2>
          </div>
          <div className='checkout-payment-info white-checkout-container'>
            <h2 className='checkout-container-subtitle checkout-container-padding'>Payment Method</h2>
          </div>
          <Button>
            Place Order
          </Button>

        </div>
      </section>
    </section>
  )
}
