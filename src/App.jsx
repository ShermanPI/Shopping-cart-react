import ShoppingList from './components/ShoppingList/ShoppingList'
import './App.css'
import Footer from './components/Footer/Footer'
import Filters from './components/Filters/Filters'
import { useEffect, useState } from 'react'
import getAllTheProducts from './services/getAllTheProducts'
import getAllCategories from './services/getAllCategories'
import CategoriesCarrousel from './components/CategoriesCarrousel/CategoriesCarrousel'

function App () {
  const [filters, setFilters] = useState({ category: 'All' })
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const filteredProducts = products?.filter(el => {
    return filters.category === 'All' || (el.category === filters.category)
  })

  useEffect(() => {
    (async () => {
      const result = await getAllTheProducts()
      const categoriesResult = await getAllCategories()

      setProducts(result.products)
      setCategories(categoriesResult)
    })()
  }, [])

  return (
    <>

      <div className='shop-main-container'>
        <Filters setFilters={setFilters} filters={filters} />
        <main className='products-main-container'>
          <CategoriesCarrousel
            categoriesArray={categories}
            setProducts={setProducts}
            setLoading={setLoading}
          />
          <h1 className='shop-title'>SHOPPING CART 🛒</h1>
          {
            loading
              ? 'loading'
              : <ShoppingList products={filteredProducts} />
          }
        </main>
      </div>

      <Footer
        projectName='Shopping Cart 🛒'
        motive='Practice useContext and useReducer'
      />
    </>
  )
}

export default App
