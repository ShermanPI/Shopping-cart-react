import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CloseIcon from '../../assets/Icons/CloseIcon'
import './cart.css'
import CartItem from './components/CartItem'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    totalPrice
  } = useContext(CartContext)

  const navigate = useNavigate()

  const closeCart = () => {
    setCartOpen(false)
  }

  const checkoutHandle = (event) => {
    setCartOpen(false)
    navigate('/checkout')
  }

  return (
    <div className={`cart-shadow ${cartOpen ? '' : 'close'} `} onClick={closeCart}>
      <div className={`cart-items-container ${cartOpen ? 'open' : ''} `} onClick={(e) => e.stopPropagation()}>
        <div className='close-cart-container'>
          <p>Cart</p>
          <button className='close-cart-button' onClick={closeCart}>
            <CloseIcon />
          </button>
        </div>
        <div className='cart-products-container black-scroll-bar'>
          {
            cartItems.length
              ? cartItems.map((item, index) =>
                <CartItem key={item.product.id} item={item} index={index} />)
              : (
                <div className='no-items-cart-container'>
                  <h2>No items added yet!</h2>
                  <h2>

                    ¯\_(ツ)_/¯
                  </h2>
                </div>)
          }
        </div>
        <div className='checkout-button-container'>
          <div className='checkout-button-line' />

          <div className='total-price'>
            <p>
              <b>
                Total:
              </b>
            </p>
            <p>
              ${totalPrice}
            </p>
          </div>
          {
            Boolean(cartItems.length) &&
              <Button onClick={checkoutHandle}>
                Go to checkout
              </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
