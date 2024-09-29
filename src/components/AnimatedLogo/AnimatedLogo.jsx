import DiscountStar from './assets/DiscountStar'
import './animatedLogo.css'
import { useContext, useEffect, useRef } from 'react'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'

function AnimatedLogo () {
  const { shootingStarsArray } = useContext(shootingStarContext)
  const boxIconRef = useRef()

  useEffect(() => {
    if (shootingStarsArray.length) {
      console.log('animate')
      setTimeout(() => {
        boxIconRef.current.classList.add('box-drop')
        setTimeout(() => {
          boxIconRef.current.classList.remove('box-drop')
        }, 300)
      }, parseFloat(shootingStarsArray[shootingStarsArray.length - 1].animationDuration) * 1000)
    }
  }, [shootingStarsArray])

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
