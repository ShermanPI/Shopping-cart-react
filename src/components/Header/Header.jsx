import { useContext } from 'react'
import ShoppingCart from '../../assets/Icons/ShoppingCart'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import './header.css'
import { CartContext } from '../../contexts/CartContext'

const Header = () => {
  const { cartOpen, setCartOpen, cartItems } = useContext(CartContext)

  const productsQuantity = cartItems.length

  return (
    <header className='main-header-container'>
      <div className='logo-name'>
        <AnimatedLogo />
        <h1 className='shop-title'>24h Shopping Cart</h1>
      </div>
      <div className='shopping-logo-container' onClick={() => setCartOpen(!cartOpen)}>
        <div className='shopping-logo-quantity'>
          {productsQuantity}
        </div>
        <ShoppingCart width={32} height={32} />
      </div>
    </header>
  )
}

export default Header
