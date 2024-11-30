import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CloseIcon from '../../assets/Icons/CloseIcon'
import './cart.css'
import CartItem from './components/CartItem'
import Button from '../Button/Button'

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems
  } = useContext(CartContext)

  const closeCart = () => {
    setCartOpen(false)
  }

  const checkoutHandle = (event) => {
    console.log('hey')
    event.stopPropagation()
  }

  return (
    <div className={`cart-shadow ${cartOpen ? '' : 'close'} `} onClick={closeCart}>
      <div className={`cart-items-container ${cartOpen ? 'open' : ''} `}>
        <div className='close-cart-container'>
          <h2>Cart</h2>
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
                <div>
                  <h2>no items added yet!</h2>
                </div>)
          }
        </div>
        <div>
          <Button onClick={checkoutHandle}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
