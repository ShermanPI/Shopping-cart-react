import Button from '../Button/Button'
import './checkoutPage.css'

export const CheckoutPage = () => {
  return (
    <section className='checkout-page-container'>
      <h2 className='results-title'>Checkout</h2>
      <section>
        <div className='checkout-products' />
        <div className='checkout-info-container'>
          <div className='checkout-shipping-info'>
            Shipping Address
          </div>
          <div className='checkout-payment-info'>
            Payment Method
          </div>
          <Button text='Place Order' />
        </div>
      </section>
    </section>
  )
}
