import './cartItem.css'
import { useContext } from 'react'
import AddIcon from '../../../assets/Icons/AddIcon'
import RemoveIcon from '../../../assets/Icons/RemoveIcon'
import TrashIcon from '../../../assets/Icons/TrashIcon'
import { CartContext } from '../../../contexts/CartContext'

const CartItem = ({ item, index }) => {
  const {
    addCartItem,
    substractCartItem,
    deleteProductFromCart
  } = useContext(CartContext)

  console.log(item)

  return (
    <div className='cart-product' key={item.product.id}>
      <div className='cart-product-image'>
        <img src={item.product.thumbnail} alt='' />
      </div>

      <div className='cart-product-info'>
        <div className='product-name-price'>
          <div className=''>
            <b className='cart-product-name'>{item.product.title}</b>
            <p className='single-product-price'>${(item.product.price)}</p>
          </div>
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
    </div>
  )
}

export default CartItem
