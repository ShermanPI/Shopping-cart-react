import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import './header.css'

const Header = () => {
  return (
    <header className='main-header-container'>
      <AnimatedLogo />
      <h1>24h shopping cart</h1>
    </header>
  )
}

export default Header
