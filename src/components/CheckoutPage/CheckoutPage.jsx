import Button from '../Button/Button'
import './checkoutPage.css'

export const CheckoutPage = () => {
  return (
    <section className='checkout-page-container'>
      <h1 className='results-title'>Checkout</h1>
      <section className='checkout-container'>
        <div className='checkout-products white-checkout-container'>
          <h2>Order Summary</h2>

          <div className='checkout-product'>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <p>name</p>
              <p>$price</p>
            </div>
          </div>

          <div className='checkout-product'>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <p>name</p>
              <p>$price</p>
            </div>
          </div>

          <div className='checkout-product'>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <p>name</p>
              <p>$price</p>
            </div>
          </div>

          <div className='checkout-total-price-container'>
            <h3>Total:</h3>
            <p>$1234</p>
          </div>
        </div>
        <div className='checkout-info-container'>
          <div className='checkout-shipping-info white-checkout-container'>
            <h2>Order Summary</h2>
          </div>
          <div className='checkout-payment-info white-checkout-container'>
            <h2>Payment Method</h2>
          </div>
          <Button>
            Place Order
          </Button>

        </div>
      </section>
    </section>
  )
}
