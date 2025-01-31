import { useContext } from 'react'
import ShoppingCart from '../../assets/Icons/ShoppingCart'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import './header.css'
import { CartContext } from '../../contexts/CartContext'
import { SearchBar } from '../SearchBar/SearchBar'

const Header = () => {
  const { cartOpen, setCartOpen, cartItems } = useContext(CartContext)

  const productsQuantity = cartItems.length

  return (
    <header className='main-header-container'>
      <AnimatedLogo />

      <SearchBar />

      <div
        className='shopping-logo-container'
        onClick={() => setCartOpen(!cartOpen)}
        role='button'
        tabIndex={0}
        aria-label='Toggle Cart'
      >
        {Boolean(productsQuantity) && (
          <div className='shopping-logo-quantity'>{productsQuantity}</div>
        )}
        <ShoppingCart width={24} height={24} />
      </div>
    </header>
  )
}

export default Header
