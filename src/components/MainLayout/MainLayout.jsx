import { Outlet } from 'react-router'
import Header from '../Header/Header'
import './mainLayout.css'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'
import { ShootingStarProvider } from 'src/contexts/ShootingStarContext'
import { CartContextProvider } from 'src/contexts/CartContext'
import { FiltersContextProvider } from 'src/contexts/FiltersContext'
import Filters from '../Filters/Filters'

export const MainLayout = () => {
  return (
    <FiltersContextProvider>
      <CartContextProvider>
        <ShootingStarProvider>

          <Header />
          <div className='products-main-container'>
            <Filters />
          </div>
          <Outlet />
          <Cart />

          <Footer
            projectName='Shopping Cart 🛒'
            motive='Practice useContext and useReducer, React Router, and animation'
          />

        </ShootingStarProvider>
      </CartContextProvider>
    </FiltersContextProvider>

  )
}
