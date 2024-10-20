import { useReducer } from 'react'
import cartReducer, { cartReducerInitializer } from '../reducers/cart'

const useCart = () => {
  let initializer
  if (window.localStorage.getItem('cart')?.length) {
    initializer = JSON.parse(window.localStorage.getItem('cart'))
  } else {
    initializer = cartReducerInitializer
  }

  const [cart, dispatchCartEvent] = useReducer(cartReducer, initializer)

  const addCartItem = (cartItem) => {
    dispatchCartEvent({ type: 'ADDED_ITEM', payload: { cartItem } })
  }

  const substractCartItem = (index) => {
    dispatchCartEvent({ type: 'SUBSTRACTED_ITEM', payload: { index } })
  }

  const deleteProductFromCart = (index) => {
    dispatchCartEvent({ type: 'DELETED_ITEM', payload: { index } })
  }

  return { cart, addCartItem, substractCartItem, deleteProductFromCart }
}

export default useCart
