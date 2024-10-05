import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    addOneToCartItemQuantity,
    substractOneToCartItemQuantity,
    deleteProductFromCart
  } = useContext(CartContext)

  return (
    <div className={`cart-items-container ${cartOpen ? 'open' : ''}`}>
      <button className='close-cart-button' onClick={() => setCartOpen(false)}>
        X
      </button>
      {cartItems.map(({ product, quantity }, index) =>
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

              <button onClick={() => {
                if (quantity === 1) {
                  deleteProductFromCart(index)
                  return
                }
                substractOneToCartItemQuantity(index)
              }}
              >{quantity === 1 ? 'delete' : '-'}
              </button>
              <span>{quantity}</span>
              <button onClick={() => addOneToCartItemQuantity(index)}>+</button>
            </div>

          </div>
        </div>)}

    </div>
  )
}

export default Cart
