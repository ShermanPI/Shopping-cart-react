export const cartReducerInitializer = []

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADDED_ITEM': {
      const { cartItem } = action.payload

      const cartItemIndex = state.findIndex(item => {
        return item.product.id === cartItem.id
      })

      let newItems = [...state]

      if (cartItemIndex === -1) {
        newItems = [...newItems, { product: cartItem, quantity: 1 }]
        window.localStorage.setItem('cart', JSON.stringify(newItems))
        return newItems
      }

      const newCart = [
        ...newItems.slice(0, cartItemIndex),
        { ...newItems[cartItemIndex], quantity: newItems[cartItemIndex].quantity + 1 },
        ...newItems.slice(cartItemIndex + 1)
      ]

      window.localStorage.setItem('cart', JSON.stringify(newCart))

      return newCart
    }

    case 'SUBSTRACTED_ITEM': {
      const { index } = action.payload

      const newItems = [...state]

      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1)
        window.localStorage.setItem('cart', JSON.stringify(newItems))
        return (newItems)
      }

      const newCart = [
        ...newItems.slice(0, index),
        { ...newItems[index], quantity: newItems[index].quantity - 1 },
        ...newItems.slice(index + 1)
      ]

      window.localStorage.setItem('cart', JSON.stringify(newItems))

      return newCart
    }

    case 'DELETED_ITEM': {
      const { index } = action.payload

      const newItems = [...state]
      newItems.splice(index, 1)

      window.localStorage.setItem('cart', JSON.stringify(newItems))

      return (newItems)
    }
    default: {
      throw Error('No actions named ', action.type)
    }
  }
}

export default cartReducer
