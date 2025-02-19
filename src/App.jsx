import ShoppingList from './components/ShoppingList/ShoppingList'
import './App.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import getProductsByCategory from './services/getProductsByCategory'
import getAllTheProducts from './services/getAllTheProducts'

function App () {
  const [productsLoading, setProductsLoading] = useState(true)
  const [products, setProducts] = useState([])

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const loadProducts = async () => {
      const categorySlug = searchParams.get('category')

      if (categorySlug === null) {
        const result = await getAllTheProducts()
        setProducts(result.products)
        setProductsLoading(false)
        return
      }

      const result = await getProductsByCategory(categorySlug)
      setProducts(result.products)
      setProductsLoading(false)
    }

    loadProducts()
  }, [searchParams])

  return (
    <>
      <div className='shop-main-container'>
        <main className='products-main-container'>
          <ShoppingList products={products} productsLoading={productsLoading} />
        </main>
      </div>

    </>
  )
}

export default App
