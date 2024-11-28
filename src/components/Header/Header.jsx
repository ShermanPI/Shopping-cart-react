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
      <AnimatedLogo />
      <div
        className='shopping-logo-container'
        onClick={() => setCartOpen(!cartOpen)}
        role='button'
        tabIndex={0}
        aria-label='Toggle Cart'
        onKeyDown={(e) => e.key === 'Enter' && setCartOpen(!cartOpen)}
      >
        {Boolean(productsQuantity) && (
          <div className='shopping-logo-quantity'>{productsQuantity}</div>
        )}
        <ShoppingCart width={28} height={28} />
      </div>
    </header>
  )
}

export default Header
