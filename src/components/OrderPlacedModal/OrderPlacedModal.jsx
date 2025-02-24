import { useEffect, useRef } from 'react'
import './orderPlacedModal.css'
import animateFireworks from 'src/helpers/animateFireworks'
import { getCelebrationRandomEmoticon } from 'src/helpers/getFunnyEmoticon'

export const OrderPlacedModal = ({ setOpen, open }) => {
  const emoticonRef = useRef(getCelebrationRandomEmoticon())

  useEffect(() => {
    if (open) {
      animateFireworks({ duration: 2000, shapes: ['star', 'square'] })
    }
  }, [open])

  return (
    <>
      <div
        className={`behind-shadow ${!open ? 'closed-order' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className='order-placed-modal'>
          <span className='order-emoticon'>
            {emoticonRef.current}
          </span>

          <h2 className='order-placed-title'>
            Order Placed Successfully!
          </h2>

          <p>
            Thank you for your order. We'll send you shipping confirmation when your order is on its way!
          </p>

          <div className='order-number-container'>
            <p>

              Order Number
            </p>
            <p>

              ORD-123-456-789
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
