import { useReducer, useState, createContext } from 'react'

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDED_ITEM': {
      const { cartItem } = action.payload

      const cartItemIndex = state.findIndex(item => {
        return item.product.id === cartItem.id
      })

      let newItems = [...state]

      if (cartItemIndex === -1) {
        newItems = [...newItems, { product: cartItem, quantity: 1 }]
        return newItems
      }

      newItems[cartItemIndex].quantity += 1
      return newItems
    }
    case 'SUBSTRACTED_ITEM': {
      const { index } = action.payload

      const newItems = [...state]

      newItems[index].quantity -= 1

      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1)
        return (newItems)
      }

      return (newItems)
    }
    case 'DELETED_ITEM': {
      const { index } = action.payload

      const newItems = [...state]
      newItems.splice(index, 1)

      return (newItems)
    }
    default: {
      throw Error('No actions named ', action.type)
    }
  }
}

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, dispatchCartEvent] = useReducer(reducer, initialState)

  const addCartItem = (cartItem) => {
    dispatchCartEvent({ type: 'ADDED_ITEM', payload: { cartItem } })
  }

  const substractCartItem = (index) => {
    dispatchCartEvent({ type: 'SUBSTRACTED_ITEM', payload: { index } })
  }

  const deleteProductFromCart = (index) => {
    dispatchCartEvent({ type: 'DELETED_ITEM', payload: { index } })
  }

  return (
    <CartContext.Provider value={{
      cartOpen,
      setCartOpen,
      cartItems: cart,
      addCartItem,
      substractCartItem,
      deleteProductFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

// ↘️⬇️⬇️⬇️⬇️⬇️⬇️ CART CONTEXT WITH USESTATE ⬇️⬇️⬇️⬇️⬇️⬇️⬇️↙️

// import { useState, createContext } from 'react'

// export const CartContext = createContext()

// export const CartContextProvider = ({ children }) => {
//   const [cartOpen, setCartOpen] = useState(false)
//   const [cartItems, setCartItems] = useState([])

//   const addCartItem = (newCartItem) => {
//     const cartItemIndex = cartItems.findIndex(cartItem => cartItem.product.id === newCartItem.id)

//     if (cartItemIndex === -1) {
//       const newItem = { product: newCartItem, quantity: 1 }
//       setCartItems([...cartItems, newItem])
//       return
//     }

//     // making a new state reference,

//     const newItems = [...cartItems]

//     newItems[cartItemIndex].quantity += 1
//     setCartItems(newItems)
//   }

//   const addOneToCartItemQuantity = (index) => {
//     const newItems = [...cartItems]

//     // you can use the structuredClone if you want to make a deep copy of the state
//     // because in some cases modiying the state properties directly results on errores
//     // here there is not a problem because a shallow copy is sufficient, because
//     // you modifiying only the superficial part of the object and its faster
//     newItems[index].quantity += 1
//     setCartItems(newItems)
//   }

//   const substractOneToCartItemQuantity = (index) => {
//     const newItems = [...cartItems]

//     newItems[index].quantity -= 1
//     setCartItems(newItems)
//   }

//   const deleteProductFromCart = (index) => {
//     const newItems = [...cartItems]
//     newItems.splice(index, 1)

//     setCartItems(newItems)
//   }

//   return (
//     <CartContext.Provider value={{
//       cartOpen,
//       setCartOpen,
//       cartItems,
//       addCartItem,
//       addOneToCartItemQuantity,
//       substractOneToCartItemQuantity,
//       deleteProductFromCart
//     }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }
