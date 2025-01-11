import RatingStar from './components/RatingStar'
import './ratingStars.css'

const RatingStars = ({ rating = 0 }) => {
  const completedStars = Math.floor(rating)

  const stars = new Array(5)
  stars.fill(100)

  const notCompletedStarPercentage = rating - completedStars

  if (notCompletedStarPercentage > 0) {
    stars[completedStars] = Math.floor(notCompletedStarPercentage * 100)

    if (completedStars !== stars.length) {
      for (let i = completedStars + 1; i < stars.length; i++) {
        stars[i] = 0
      }
    }
  }

  return (
    <>
      <div className='stars-container'>
        {stars.map((percetange, index) => {
          return <RatingStar key={index} fillingPercentage={percetange} />
        })}
      </div>
    </>
  )
}

export default RatingStars
