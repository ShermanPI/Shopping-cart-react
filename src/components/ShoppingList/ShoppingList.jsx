import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'
import { Fragment, useContext } from 'react'

import { FiltersContext } from '../../contexts/FiltersContext'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'

function ShoppingList () {
  const { filteredProducts } = useContext(FiltersContext)
  const { addShootingStar } = useContext(shootingStarContext)

  const saveIntoCartHandler = () => {
    addShootingStar()
  }

  return (
    <>
      <section className='products-container'>
        {filteredProducts.map(product => {
          return (
            <Fragment key={product.id}>
              <ProductCard onClick={saveIntoCartHandler} images={product.images} img={product.img} title={product.title} price={product.price} description={product.description} />
            </Fragment>
          )
        }
        )}
      </section>
    </>
  )
}

export default ShoppingList
