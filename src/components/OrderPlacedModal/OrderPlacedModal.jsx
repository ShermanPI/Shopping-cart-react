import { useEffect } from 'react'
import './orderPlacedModal.css'
import animateFireworks from 'src/helpers/animateFireworks'

export const OrderPlacedModal = ({ setOpen, open }) => {
  useEffect(() => {
    if (open) {
      animateFireworks({ duration: 5 })
    }
  }, [open])

  return (
    <>
      <div
        className={`behind-shadow ${!open ? 'close' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className='order-placed-modal'>
          MODAL
        </div>
      </div>
    </>
  )
}
