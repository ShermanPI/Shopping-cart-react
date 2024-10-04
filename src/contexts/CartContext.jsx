import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addCartItem = (newCartItem) => {
    const cartItemIndex = cartItems.findIndex(cartItem => cartItem.product.id === newCartItem.id)

    if (cartItemIndex === -1) {
      const newItem = { product: newCartItem, quantity: 1 }
      setCartItems([...cartItems, newItem])
      return
    }

    // making a new state reference
    const newItems = [...cartItems]

    newItems[cartItemIndex].quantity += 1
    setCartItems(newItems)
  }

  return <CartContext.Provider value={{ cartOpen, setCartOpen, cartItems, addCartItem }}> {children}</CartContext.Provider>
}
