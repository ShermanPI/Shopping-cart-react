import './shoppingList.css'
import ProductCard from '../ProductCard/ProductCard'

function ShoppingList ({ products }) {
  return (
    <>
      <section className='products-container'>
        {products.map(product => {
          return (
            <ProductCard key={product.id} images={product.images} img={product.img} title={product.title} price={product.price} />
          )
        }
        )}
      </section>
    </>
  )
}

export default ShoppingList
