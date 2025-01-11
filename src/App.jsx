import ShoppingList from './components/ShoppingList/ShoppingList'
import './App.css'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader.jsx'
import Filters from './components/Filters/Filters.jsx'
import { useContext } from 'react'
import { FiltersContext } from './contexts/FiltersContext.jsx'
import Cart from './components/Cart/Cart.jsx'

function App () {
  const { productsLoading } = useContext(FiltersContext)

  return (
    <>
      <div className='shop-main-container'>
        <main className='products-main-container'>
          <Filters />
          {
            productsLoading
              ? (
                <div className='loader-container'>
                  <Loader />
                </div>
                )
              : <ShoppingList />
          }
          <Cart />
        </main>

      </div>

      <Footer
        projectName='Shopping Cart 🛒'
        motive='Practice useContext and useReducer, and animation'
      />
    </>
  )
}

export default App
