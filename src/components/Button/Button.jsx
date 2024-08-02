import './Button.css'

function Button ({ children }) {
  return (
    <button className='regular-btn'>
      {children}
    </button>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default Button
