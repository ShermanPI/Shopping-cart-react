import { useRef, useState } from 'react'
import './Button.css'

function Button ({ children }) {
  const [isPressed, setIsPressed] = useState(false)
  const buttonRef = useRef(null)

  const clickHandler = (e) => {
    const plusOneDiv = document.createElement('div')

    const buttonClientRect = buttonRef.current.getBoundingClientRect()
    plusOneDiv.classList.add('plus-one-div')
    plusOneDiv.innerText = '+1'
    document.body.appendChild(plusOneDiv)

    plusOneDiv.style.left = `${buttonClientRect.x + (buttonClientRect.width / 2) - 9}px`
    plusOneDiv.style.top = `${buttonClientRect.y - 14}px`

    setTimeout(() => {
      document.body.removeChild(plusOneDiv)
    }, 1500)
  }

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`regular-btn ${isPressed ? 'pressed' : ''}`}
      onClick={clickHandler}
      ref={buttonRef}
    >
      {children}
    </button>
  )
}

// inspiration: https://dribbble.com/shots/23441704-A-product-card-UI

export default Button
