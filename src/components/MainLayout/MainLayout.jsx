import { Outlet } from 'react-router'
import Header from '../Header/Header'
import './mainLayout.css'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
