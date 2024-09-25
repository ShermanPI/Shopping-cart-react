import ShoppingList from './components/ShoppingList/ShoppingList'
import './App.css'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader.jsx'
import Filters from './components/Filters/Filters.jsx'
import { useContext } from 'react'
import { FiltersContext } from './contexts/FiltersContext.jsx'
import Header from './components/Header/Header.jsx'

function App () {
  const { productsLoading } = useContext(FiltersContext)

  return (
    <>
      <div className='shop-main-container'>
        <Header />
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
