import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {
  const { cartOpen, setCartOpen, cartItems } = useContext(CartContext)

  console.log('render', '🎃🎃🎃🪨🪨')

  return (
    <div className={`cart-items-container ${cartOpen ? 'open' : ''}`}>
      <button className='close-cart-button' onClick={() => setCartOpen(false)}>
        X
      </button>
      {cartItems.map(({ product, quantity }) =>
        <div className='cart-product' key={product.id}>
          <div className='cart-product-image'>
            <img src={product.thumbnail} alt='' />
          </div>

          <div className='cart-product-info'>

            <div className='product-name-price'>
              <b className='cart-product-name'>{product.title}</b>
            </div>

            <div className='product-counter'>
              <p className='cart-product-price'>${product.price}</p>
              <button>-</button>
              <span>{quantity}</span>
              <button>+</button>
            </div>

          </div>
        </div>)}

    </div>
  )
}

export default Cart
