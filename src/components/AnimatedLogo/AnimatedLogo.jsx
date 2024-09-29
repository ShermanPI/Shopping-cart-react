import DiscountStar from './assets/DiscountStar'
import './animatedLogo.css'
import { useContext, useEffect, useRef } from 'react'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'

function AnimatedLogo () {
  const { shootingStarsArray } = useContext(shootingStarContext)
  const boxIconRef = useRef()

  // DOING THE ANIMATION THIS WAY ⬇️⬇️⬇️, (USING A CLASS WITH AN ANIMATION PROPERTY) MAKES THE BOX LOGO
  // TO NOT HAVE SMOOTHNESS IN THE ANIMATION BECAUSE WHEN THE ANIMATION IS PLAYED TOO MANY TIMES
  // THE ANIMATION GOES FROM 0 EVERY TIME IS PLAYED, AND THIS MAKES THE BOX TO VIOLENTLY
  // RESET THE ANIMATION

  // useEffect(() => {
  //   if (shootingStarsArray.length) {
  //     console.log('animate')
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

  useEffect(() => {
    if (shootingStarsArray.length) {
      console.log('animate')
      setTimeout(() => {
        boxIconRef.current.style.transform = 'scale(1, 1.12)'
        setTimeout(() => {
          boxIconRef.current.style.transform = 'scale(1, 1)'
        }, 300)
      }, parseFloat(shootingStarsArray[shootingStarsArray.length - 1].animationDuration) * 1000)
    }
  }, [shootingStarsArray])

  // SO, WHEN TO USE ANIMATION PROPERTY? 🤔 I THINK IS USEFUL WHEN YOU WANT TO CREATE CONTINOUS OR LOOPING
  // ANIMATIONS WITHOUT INTERRUMPTIONS.

  return (
    <>
      <div
        className='icon-container'
        ref={boxIconRef}
      >
        <div className='star-box-item'>
          <DiscountStar />
        </div>
        <div className='star-box-item'>
          <DiscountStar />
        </div>
        <div className='star-box-item'>
          <DiscountStar />
        </div>
        <div className='star-box-item'>
          <DiscountStar />
        </div>
        <div className='star-box-item'>
          <DiscountStar />
        </div>

        {shootingStarsArray.map((starStyle, index) => {
          return (
            <div
              className='shooting-star'
              key={index}
              style={starStyle}
            >
              <DiscountStar />
            </div>
          )
        }
        )}

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
    </>
  )
}

export default AnimatedLogo
