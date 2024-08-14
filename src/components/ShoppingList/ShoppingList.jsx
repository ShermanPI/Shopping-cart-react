import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'
import { Fragment } from 'react'

function ShoppingList ({ products }) {
  return (
    <>
      <section className='products-container'>
        {products.map(product => {
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
