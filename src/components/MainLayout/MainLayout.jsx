import { Outlet } from 'react-router'
import Header from '../Header/Header'
import './mainLayout.css'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />

      <Footer
        projectName='Shopping Cart 🛒'
        motive='Practice useContext and useReducer, React Router, and animation'
      />
    </div>
  )
}
