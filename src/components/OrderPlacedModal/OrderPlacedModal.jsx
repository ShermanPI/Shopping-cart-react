import { useEffect, useRef } from 'react'
import './orderPlacedModal.css'
import animateFireworks from 'src/helpers/animateFireworks'
import { getCelebrationRandomEmoticon } from 'src/helpers/getFunnyEmoticon'
import Button from '../Button/Button'

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

          <div className='placed-order-info-container tracking-info-container'>
            <b>
              Track Your Order
            </b>
            <p>
              Follow your order status online
            </p>
          </div>

          <div className='placed-order-info-container order-confirmation-container'>
            <b>
              Order Confirmation
            </b>
            <p>
              We sent you an email with your order details
            </p>
          </div>

          <Button>
            Keep Shopping
          </Button>

        </div>
      </div>
    </>
  )
}
