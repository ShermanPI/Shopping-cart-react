import { useEffect, useRef } from 'react'
import './productCardPreview.css'

const ProductCardPreview = ({ cardPreviewInfo }) => {
  const asjdhajsd = useRef()

  return (
    <>
      <div
        ref={asjdhajsd}
        style={{
          '--initial-width': `${cardPreviewInfo.initialSize.width}px`,
          '--initial-height': `${cardPreviewInfo.initialSize.height}px`,
          '--initial-x': `${cardPreviewInfo.initialPosition.x}px`,
          '--initial-y': `${cardPreviewInfo.initialPosition.y}px`
        }}
        className='card-preview-container'
      />
    </>
  )
}

export default ProductCardPreview
