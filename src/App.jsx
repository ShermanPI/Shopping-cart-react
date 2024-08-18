import ShoppingList from './components/ShoppingList/ShoppingList'
import * as data from './mocks/products.json'
import './App.css'
import Footer from './components/Footer/Footer'
import Filters from './components/Filters/Filters'
import { useState } from 'react'

function App () {
  const [filters, setFilters] = useState({ category: 'All' })

  const filteredProducts = data.products.filter(el => {
    return filters.category === 'All' || (el.category === filters.category)
  })

  return (
    <>
      <div className='shop-main-container'>
        <Filters setFilters={setFilters} filters={filters} />

        <main className='products-main-container'>
          <h1 className='shop-title'>SHOPPING CART 🛒</h1>
          <ShoppingList products={filteredProducts} />
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
