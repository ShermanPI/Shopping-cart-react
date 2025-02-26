import { useContext, useEffect, useRef } from 'react'
import './orderPlacedModal.css'
import animateFireworks from 'src/helpers/animateFireworks'
import { getCelebrationRandomEmoticon } from 'src/helpers/getFunnyEmoticon'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
import { BoxIcon } from 'src/assets/Icons/BoxIcon'
import { LetterIcon } from 'src/assets/Icons/LetterIcon'
import { CartContext } from 'src/contexts/CartContext'

export const OrderPlacedModal = ({ setOpen, open }) => {
  const navigate = useNavigate()
  const emoticonRef = useRef(getCelebrationRandomEmoticon())
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    if (open) {
      animateFireworks({ duration: 3000, shapes: ['star', 'square'] })
    }
  }, [open])

  const completeOrder = () => {
    clearCart()
    navigate('/')
  }

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

          <p className='thanks-text'>
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
            <BoxIcon />
            <div>
              <b className='info-title'>
                Track Your Order
              </b>
              <p className='tracking-info'>
                Follow your order status online
              </p>
            </div>
          </div>

          <div className='placed-order-info-container order-confirmation-container'>
            <LetterIcon />
            <div>
              <b className='info-title'>
                Order Confirmation
              </b>
              <p className='tracking-info'>
                We sent you an email with your order details
              </p>
            </div>
          </div>

          <Button onClick={completeOrder}>
            Keep Shopping
          </Button>

        </div>
      </div>
    </>
  )
}
