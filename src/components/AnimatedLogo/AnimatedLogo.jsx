import DiscountStar from './assets/DiscountStar'
import './animatedLogo.css'
import { useEffect, useState } from 'react'

function AnimatedLogo () {
  const [shootingStarsArray, setShootingStarArray] = useState([])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (shootingStarsArray.length !== 0) {
        setShootingStarArray([])
      }
    }, 300000)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [shootingStarsArray])

  const addShootingStar = () => {
    const minSpeedForStars = 3

    const randomNumberToOneHundred = Math.random() * 100
    const randomNumberToThree = Math.random() * minSpeedForStars

    const starLeftPosition = Math.min(80, Math.max(20, randomNumberToOneHundred))
    const starAnimationDuration = Math.min(minSpeedForStars, Math.max(1.5, randomNumberToThree))

    const newShootingStarArray =
        [...shootingStarsArray,
          {
            left: `${starLeftPosition}%`,
            animationDuration: `${starAnimationDuration}s`
          }]

    setShootingStarArray(newShootingStarArray)
  }

  return (
    <>
      <div
        className='icon-container'
        onClick={addShootingStar}
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
