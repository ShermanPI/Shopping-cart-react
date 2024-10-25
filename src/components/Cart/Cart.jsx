import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CloseIcon from '../../assets/Icons/CloseIcon'
import './cart.css'
import CartItem from './components/CartItem'

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems
  } = useContext(CartContext)

  return (
    <div className={`cart-items-container ${cartOpen ? 'open' : ''}`}>
      <div className='close-cart-container'>
        <h2>Cart</h2>
        <button className='close-cart-button' onClick={() => setCartOpen(false)}>
          <CloseIcon />
        </button>
      </div>

      <hr />

      {/* you can use the list rendering like this with <ul><li></li></ul> */}
      {
        cartItems.length
          ? cartItems.map((item, index) =>
            <CartItem key={item.product.id} item={item} index={index} />)
          : (
            <div>
              <h2>no items added yet!</h2>
            </div>
            )
      }
    </div>
  )
}

export default Cart
