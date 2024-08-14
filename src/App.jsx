import ShoppingList from './components/ShoppingList/ShoppingList'
import * as data from './mocks/products.json'
import './App.css'

function App () {
  return (
    <>
      <h1 className='shop-title'>SHOPPING CART 🛒</h1>
      <ShoppingList products={data.products} />
    </>
  )
}

export default App
