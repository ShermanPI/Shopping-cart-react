import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'
import { Fragment, useContext } from 'react'

import { FiltersContext } from '../../contexts/FiltersContext'

function ShoppingList () {
  const { filteredProducts } = useContext(FiltersContext)

  return (
    <>
      <section className='products-container'>
        {filteredProducts.map(product => {
          return (
            <Fragment key={product.id}>
              <ProductCard images={product.images} img={product.img} title={product.title} price={product.price} description={product.description} />
            </Fragment>
          )
        }
        )}
      </section>
    </>
  )
}

export default ShoppingList
