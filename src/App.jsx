import ShoppingList from './components/ShoppingList/ShoppingList'
import * as data from './mocks/products.json'
import './App.css'

function App () {
  console.log(data.products)

  return (
    <>
      <ShoppingList products={data.products} />
    </>
  )
}

export default App
