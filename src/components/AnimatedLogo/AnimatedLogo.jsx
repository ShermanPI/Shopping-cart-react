import DiscountStar from './assets/DiscountStar'
import './animatedLogo.css'
import { useContext } from 'react'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'

function AnimatedLogo () {
  const { shootingStarsArray } = useContext(shootingStarContext)

  return (
    <>
      <div
        className='icon-container'
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
