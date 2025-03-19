import './shoppingList.css'
import ProductCard from 'components/ProductCard/ProductCard'
import { Fragment, useContext } from 'react'
import Loader from 'components/Loader/Loader'
import { shootingStarContext } from 'src/contexts/ShootingStarContext'
import { CartContext } from 'src/contexts/CartContext'
import { useSearchParams } from 'react-router'

function ShoppingList ({ products, productsLoading = false }) {
  const { addShootingStar } = useContext(shootingStarContext)
  const { addCartItem } = useContext(CartContext)
  const [searchParams] = useSearchParams()

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  const priceOrder = searchParams.get('priceOrder')

  const orderProducts = () => {
    const productsCopy = [...products]

    if (priceOrder === 'asc') {
      return productsCopy.sort((a, b) => a.price - b.price)
    }

    if (priceOrder === 'desc') {
      return productsCopy.sort((a, b) => b.price - a.price)
    }

    return productsCopy
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
            products.length
              ? (
                <section className='products-container'>
                  {orderProducts().map(product => {
                    return (
                      <Fragment key={product.id}>
                        <ProductCard onClick={() => saveIntoCartHandler(product)} product={product} />
                      </Fragment>
                    )
                  }
                  )}
                </section>)
              : (
                <div className='no-items-container'>
                  <h1>
                    No items here!
                  </h1>
                  <h1>
                    ¯\_(ツ)_/¯
                  </h1>
                </div>
                ))}
    </>
  )
}

export default ShoppingList
