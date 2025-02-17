import { useContext, useState } from 'react'
import Button from '../Button/Button'
import './checkoutPage.css'
import { CartContext } from 'src/contexts/CartContext'

export const CheckoutPage = () => {
  const addressesOptions = [
    {
      id: 'some-id-123',
      street: '123 Main St',
      state: 'New York, 10001'
    }, {
      id: 'some-id-321',
      street: '321 Not Main St',
      state: 'Not new York, 10001'
    }]

  const {
    cartItems,
    totalPrice
  } = useContext(CartContext)
  const [selectedAddress, setSelectedAddress] = useState(addressesOptions[0].id)

  const selectedOpitonInfo = addressesOptions.find(el => el.id === selectedAddress)

  return (
    <section className='checkout-page-container'>
      {selectedAddress.id}
      <h1 className='results-title'>Checkout</h1>
      <section className='checkout-container'>
        <div className='checkout-products white-checkout-container'>
          <h2 className='checkout-container-subtitle checkout-container-padding'>Order Summary</h2>

          <div className='checkout-products-container black-scroll-bar'>
            {cartItems.map(({ product }) => (
              <div className='checkout-product' key={product.id}>
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

          <div className='checkout-shipping-info white-checkout-container checkout-container-padding'>
            <h2 className='checkout-container-subtitle'>Shipping Address</h2>

            <select
              name='addresses'
              id='client-addresses'
              onChange={(e) => {
                setSelectedAddress(e.target.value)
              }}
            >
              {addressesOptions.map(addressOption => {
                return (
                  <option
                    value={addressOption.id}
                    key={addressOption.id}
                  >
                    {addressOption.street}
                  </option>
                )
              })}
            </select>

            <div className='client-info'>
              <p className='client-name'>John Doe</p>
              <p>{selectedOpitonInfo.street}</p>
              <p>{selectedOpitonInfo.state}</p>
            </div>

            <button className='checkout-white-button'>
              Edit address
            </button>
          </div>

          <div className='checkout-payment-info white-checkout-container checkout-container-padding'>
            <h2 className='checkout-container-subtitle '>Payment Method</h2>

            <div className='payment-options'>
              <label><input type='radio' name='payment-option' value='1' /> Visa ending in 1234</label>
              <label><input type='radio' name='payment-option' value='2' /> MasterCard ending in 5678 </label>
            </div>

            <button className='checkout-white-button'>
              Add new payment method
            </button>
          </div>

          <Button>
            Place Order
          </Button>

        </div>
      </section>
    </section>
  )
}
