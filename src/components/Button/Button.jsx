import { useRef } from 'react'
import './Button.css'

function Button ({ children }) {
  const buttonRef = useRef(null)

  const clickHandler = (e) => {
    const plusOneDiv = document.createElement('div')

    plusOneDiv.classList.add('plus-one-div')

    plusOneDiv.style.left = `${e.clientX - 10}px`
    plusOneDiv.style.top = `${e.clientY - 20}px`

    // const buttonClientRect = buttonRef.current.getBoundingClientRect()
    // plusOneDiv.style.left = `${(buttonClientRect.left + window.scrollX) + (buttonClientRect.width / 2) - 9}px`
    // plusOneDiv.style.top = `${(buttonClientRect.y) - 14}px`
    plusOneDiv.innerText = '+1'

    document.body.appendChild(plusOneDiv)

    setTimeout(() => {
      document.body.removeChild(plusOneDiv)
    }, 15000)
  }

  return (
    <button
      className='regular-button '
      onClick={clickHandler}
      ref={buttonRef}
    >
      {children}
    </button>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default Button
