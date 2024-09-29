import { createContext, useEffect, useState } from 'react'

export const shootingStarContext = createContext()

export const ShootingStarProvider = ({ children }) => {
  const [shootingStarsArray, setShootingStarArray] = useState([])

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (shootingStarsArray.length !== 0) {
        setShootingStarArray([])
      }
    }, 4000)

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
    <shootingStarContext.Provider value={{ shootingStarsArray, addShootingStar }}>
      {children}
    </shootingStarContext.Provider>
  )
}
