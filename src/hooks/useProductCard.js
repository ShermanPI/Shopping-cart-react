import { useState } from 'react'

const useProductCard = (cardElemenRef) => {
  const [cardPreview, setCardPreview] = useState({
    initialSize:
          { width: 0, height: 0 },
    initialPosition: {
      x: 0,
      y: 0
    },
    active: false
  })

  const openProductCard = (e) => {
    const cardImage = cardElemenRef.current
    const cardImageRectValue = cardImage.getBoundingClientRect()

    setCardPreview({
      initialSize: { width: cardImageRectValue.width, height: cardImageRectValue.height },
      initialPosition: { x: cardImageRectValue.x, y: cardImageRectValue.y },
      shouldRender: true
    })
  }

  const closeProductCard = (e) => {
    // the time to stop rendering this component need
    // no be the same as the animation ends
    setTimeout(() => {
      setCardPreview({ ...cardPreview, shouldRender: false })
    }, 400)
  }

  return { cardPreview, openProductCard, closeProductCard }
}

export default useProductCard
