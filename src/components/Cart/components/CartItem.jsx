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

  const isStockEnough = item.product.stock > 0 && item.quantity <= item.product.stock
  const hasReachedStock = item.product.stock <= item.quantity

  return (
    <div className='cart-product' key={item.product.id}>
      <div className='cart-product-image'>
        <img src={item.product.thumbnail} alt='' />
      </div>

      <div className='cart-product-info'>
        <div className='product-name-price'>

          <div className='cart-product-stock'>
            <p className='cart-product-name'>{item.product.title}</p>
            <div className='single-product-price'>
              ${(item.product.price)}
              <div className={`${isStockEnough ? 'product-in-stock' : 'product-out-stock'}`}>
                {item.quantity <= item.product.stock ? 'In stock' : 'Out of stock'}
              </div>
            </div>
          </div>

          <p className='cart-product-price'>${(item.product.price * item.quantity).toFixed(2)}</p>
        </div>

        <div className='item-quantity-manager'>
          <div className='product-counter'>
            <button
              className='product-counter-button' onClick={(e) => {
                e.stopPropagation()
                if (item.quantity === 1) {
                  deleteProductFromCart(index)
                  return
                }
                substractCartItem(index)
              }}
            >
              <RemoveIcon width={16} height={16} />
            </button>
            <span className='item-quantity'>{item.quantity}</span>
            <button className={`${hasReachedStock ? 'disabled-btn' : ''} product-counter-button`} onClick={() => !hasReachedStock && addCartItem(item.product)}>
              <AddIcon width={16} height={16} />
            </button>
          </div>

          <button
            className='delete-item-button' onClick={(e) => {
              e.stopPropagation()
              deleteProductFromCart(index)
            }}
          >
            <TrashIcon height={16} width={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
