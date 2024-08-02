import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'

function ShoppingList ({ products }) {
  return (
    <>
      <section className='products-container'>
        {products.map(product => {
          return (
            <div key={product.id}>
              <ProductCard images={product.images} img={product.img} title={product.title} price={product.price} />
            </div>
          )
        }
        )}
      </section>
    </>
  )
}

export default ShoppingList
