import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'
import { Fragment, useContext } from 'react'

import { FiltersContext } from '../../contexts/FiltersContext'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'
import { CartContext } from '../../contexts/CartContext'

function ShoppingList () {
  const { filteredProducts } = useContext(FiltersContext)
  const { addShootingStar } = useContext(shootingStarContext)
  const { addCartItem } = useContext(CartContext)

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  return (
    <>
      <section className='products-container'>
        {filteredProducts.map(product => {
          return (
            <Fragment key={product.id}>
              <ProductCard onClick={() => saveIntoCartHandler(product)} product={product} />
            </Fragment>
          )
        }
        )}
      </section>
    </>
  )
}

export default ShoppingList
