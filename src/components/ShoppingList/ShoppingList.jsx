import './shoppingList.css'
import ProductCard from 'components/ProductCard/ProductCard'
import { Fragment, useContext } from 'react'
import Loader from 'components/Loader/Loader'
import { shootingStarContext } from 'src/contexts/ShootingStarContext'
import { CartContext } from 'src/contexts/CartContext'

function ShoppingList ({ products, productsLoading = false }) {
  const { addShootingStar } = useContext(shootingStarContext)
  const { addCartItem } = useContext(CartContext)

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  return (
    <>
      {productsLoading
        ? (
          <div className='loader-container'>
            <Loader />
          </div>
          )
        : (
          <section className='products-container'>
            {products.map(product => {
              return (
                <Fragment key={product.id}>
                  <ProductCard onClick={() => saveIntoCartHandler(product)} product={product} />
                </Fragment>
              )
            }
            )}
          </section>
          )}
    </>
  )
}

export default ShoppingList
