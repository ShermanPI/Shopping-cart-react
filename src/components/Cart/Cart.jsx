import { useContext } from 'react'
import './cart.css'
import { CartContext } from '../../contexts/CartContext'
import AddIcon from '../../assets/Icons/AddIcon'
import RemoveIcon from '../../assets/Icons/RemoveIcon'
import CloseIcon from '../../assets/Icons/CloseIcon'
import TrashIcon from '../../assets/Icons/TrashIcon'

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
          ? (cartItems.map((item, index) =>
            <div className='cart-product' key={item.product.id}>
              <div className='cart-product-image'>
                <img src={item.product.thumbnail} alt='' />
              </div>

              <div className='cart-product-info'>
                <div className='product-name-price'>
                  <b className='cart-product-name'>{item.product.title}</b>
                  <p className='cart-product-price'>${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className='item-qty-manager'>
                  <div className='product-counter'>
                    <button onClick={() => {
                      if (item.quantity === 1) {
                        deleteProductFromCart(index)
                        return
                      }
                      substractCartItem(index)
                    }}
                    >
                      <RemoveIcon />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addCartItem(item.product)}>
                      <AddIcon />
                    </button>
                  </div>

                  <button className='delete-item-button' onClick={() => deleteProductFromCart(index)}>
                    <TrashIcon />
                    Delete
                  </button>
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
