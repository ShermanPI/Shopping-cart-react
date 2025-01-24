import { Outlet } from 'react-router'
import Header from '../Header/Header'
import './mainLayout.css'
import Footer from '../Footer/Footer'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer
        projectName='Shopping Cart 🛒'
        motive='Practice useContext and useReducer, and animation'
      />
    </div>
  )
}
