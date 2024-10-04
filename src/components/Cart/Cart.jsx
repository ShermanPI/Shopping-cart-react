import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {
  const { cartOpen, setCartOpen } = useContext(CartContext)

  return (
    <div className={`cart-items-container ${cartOpen ? 'open' : ''}`}>
      <button className='close-cart-button' onClick={() => setCartOpen(false)}>
        X
      </button>
      <div className='cart-product'>
        <div className='cart-product-image'>
          <img src='https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png' alt='' />
        </div>

        <div className='cart-product-info'>
          <div className='product-name-price'>
            <b className='cart-product-name'>Este es el nombre del producto</b>
            <p className='cart-product-price'>$1200</p>
          </div>
          <div className='product-counter'>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
