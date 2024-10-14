import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    addCartItem,
    substractCartItem,
    deleteProductFromCart
  } = useContext(CartContext)

  return (
    <div className={`cart-items-container ${cartOpen ? 'open' : ''}`}>
      <button className='close-cart-button' onClick={() => setCartOpen(false)}>
        X
      </button>
      {/* you can use the list rendering like this with <ul><li></li></ul> */}
      {
        cartItems.length
          ? (cartItems.map((item, index) =>
            <div className='cart-product' key={item.product.id}>
              <div className='cart-product-image'>
                <img src={item.product.thumbnail} alt='' />
              </div>

              <div className='cart-product-info'>

                <div className='product-name-price'>
                  <b className='cart-product-name'>{item.product.title}</b>
                </div>

                <div className='product-counter'>
                  <p className='cart-product-price'>${item.product.price}</p>

                  <button onClick={() => {
                    if (item.quantity === 1) {
                      deleteProductFromCart(index)
                      return
                    }
                    substractCartItem(index)
                  }}
                  >{item.quantity === 1 ? 'delete' : '-'}
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addCartItem(item.product)}>+</button>
                  <button onClick={() => deleteProductFromCart(index)}>delete</button>
                </div>
              </div>
            </div>)
            )
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
