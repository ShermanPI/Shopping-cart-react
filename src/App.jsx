import ShoppingList from './components/ShoppingList/ShoppingList'
import * as data from './mocks/products.json'
import './App.css'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <h1 className='shop-title'>SHOPPING CART 🛒</h1>
      <ShoppingList products={data.products} />
      <Footer
        projectName='Shopping Cart'
        motive='Practice useContext and useReducer'
      />
    </>
  )
}

export default App
