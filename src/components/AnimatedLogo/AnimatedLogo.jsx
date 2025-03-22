import DiscountStar from './assets/DiscountStar'
import './animatedLogo.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { shootingStarContext } from '../../contexts/ShootingStarContext'
import { useNavigate } from 'react-router'
import { FiltersContext } from 'src/contexts/FiltersContext'
import { getRandomColor } from 'src/helpers/getRandomColor'

function AnimatedLogo () {
  const { shootingStarsArray } = useContext(shootingStarContext)
  const { setSearchValue } = useContext(FiltersContext)
  const [mouseOnIcon, setMouseOnIcon] = useState()
  const navigate = useNavigate()
  const boxIconRef = useRef()

  // Animate the icon container based on shooting stars
  useEffect(() => {
    if (shootingStarsArray.length) {
      const lastStar = shootingStarsArray[shootingStarsArray.length - 1]
      const animationDelay = parseFloat(lastStar.animationDuration) * 1000

      const animateIcon = () => {
        boxIconRef.current.style.transform = 'scale(1, 1.14)'
        setTimeout(() => {
          boxIconRef.current.style.transform = 'scale(1, 1)'
        }, 300)
      }

      setTimeout(animateIcon, animationDelay)
    }
  }, [shootingStarsArray])

  // Create rotating logo letters initial state
  useEffect(() => {
    const $logoText = document.querySelector('.logo-letter')
    if (!$logoText) return

    const innerTextArray = '24h Shopping Cart '.split('')
    const degRotation = 360 / innerTextArray.length

    const mappedTextFragment = innerTextArray.map((letter, index) => {
      const divElement = document.createElement('div')
      divElement.className = 'letter animated'
      divElement.style.rotate = `${index * degRotation}deg`

      const movingLetterElement = document.createElement('div')
      movingLetterElement.className = 'moving-letter'
      movingLetterElement.innerText = letter

      divElement.appendChild(movingLetterElement)
      return divElement
    })

    $logoText.replaceChildren(...mappedTextFragment)
  }, [])

  const handleMouseOver = () => {
    setMouseOnIcon(true)
  }

  const handleMouseLeave = () => {
    setMouseOnIcon(false)
  }

  const handleMouseClick = () => {
    setSearchValue('')
    navigate('/')
  }

  return (
    <div
      className='logo-name'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >

      <div className='animated-logo-container'>
        <div className={`logo-letter ${mouseOnIcon ? 'active' : ''}`} />
        <div className='logo'>
          <div className='icon-container' ref={boxIconRef}>
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className='star-box-item'>
                  <DiscountStar />
                </div>
              ))}

            {shootingStarsArray.map((starStyle, index) => (
              <div className='shooting-star' key={index} style={{ ...starStyle, color: getRandomColor() }}>
                <DiscountStar />
              </div>
            ))}

            <div className='diamond' />
            <div className='parallelogram-left'>
              <div className='tape' />
            </div>
            <div className='parallelogram-right'>
              <div className='sticker'>
                <div className='sticker-info'>
                  <div className='box-address' />
                  <div className='box-address large' />
                  <div className='box-address short' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='shop-title'>
        24h Shopping Cart
      </h1>
    </div>
  )
}

export default AnimatedLogo

// DOING THE ANIMATION THIS WAY ⬇️⬇️⬇️, (USING A CLASS WITH AN ANIMATION PROPERTY) MAKES THE BOX LOGO
// TO NOT HAVE SMOOTHNESS IN THE ANIMATION BECAUSE WHEN THE ANIMATION IS PLAYED TOO MANY TIMES
// THE ANIMATION GOES FROM 0 EVERY TIME IS PLAYED, AND THIS MAKES THE BOX TO VIOLENTLY
// RESET THE ANIMATION

// useEffect(() => {
//   if (shootingStarsArray.length) {
//     setTimeout(() => {
//       boxIconRef.current.classList.add('box-drop')
//       setTimeout(() => {
//         boxIconRef.current.classList.remove('box-drop')
//       }, 300)
//     }, parseFloat(shootingStarsArray[shootingStarsArray.length - 1].animationDuration) * 1000)
//   }
// }, [shootingStarsArray])

// BUT USING THE APPROACH OF CHANGING THE CSS PROPERTIES ⬇️⬇️ YOU WANT TO CHANGE BETWEEN STATES OF THE ANIMATION,
// INSTEAD OF USING THE "ANIMATION" PROPERTY. YOU CAN USE "TRANSITION" PROPERTY TO MAKE IT SMOOTH
// AND CHANGE THE CSS PROPERTIES YOU WANT TO CHANGE FROM STATE A [scale(1, 1)] TO STATE B [scale(1, 1.12)],
// AND CSS TRANSITION ALWAYS TRIES TO ANIMATE THOSE CHANGES FROM A TO B,
// NO MATTER WHERE THE STATE OF PROPERTY IS IN THE MOMENT IT WILL TRY TO RUN THE ENTIRE ROUTE

// SO, WHEN TO USE ANIMATION PROPERTY? 🤔 I THINK IS USEFUL WHEN YOU WANT TO CREATE CONTINOUS OR LOOPING
// ANIMATIONS WITHOUT INTERRUMPTIONS.
