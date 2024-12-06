import { Fragment, useContext, useEffect, useState } from 'react'
import './productCardPreview.css'
import Button from '../../../Button/Button'
import ShoppingCart from '../../../../assets/Icons/ShoppingCart'
import Imagescarrousel from '../../../ImagesCarousel/ImagesCarrousel'
import { shootingStarContext } from '../../../Header/contexts/ShootingStarContext'
import { CartContext } from '../../../../contexts/CartContext'
import CloseIcon from '../../../../assets/Icons/CloseIcon'

const ProductCardPreview = ({ cardPreviewInfo, product, closeProductCard }) => {
  const [open, setOpen] = useState(false)
  const [animationFinished, setAnimationFinished] = useState(false)
  const { addShootingStar } = useContext(shootingStarContext)
  const { addCartItem } = useContext(CartContext)

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  const handleClosePreview = (e) => {
    e.stopPropagation()
    setOpen(false)
    closeProductCard()
  }

  useEffect(() => {
    setOpen(true)

    setTimeout(() => {
      setAnimationFinished(true)
    }, 400)
  }, [])

  return (
    <div className={`behind-shadow ${open ? '' : 'close'}`} onClick={handleClosePreview}>
      <div
        style={{
          '--initial-width': `${cardPreviewInfo.initialSize.width}px`,
          '--initial-height': `${cardPreviewInfo.initialSize.height}px`,
          '--initial-x': `${cardPreviewInfo.initialPosition.x}px`,
          '--initial-y': `${cardPreviewInfo.initialPosition.y}px`
        }}
        className={`card-preview-container ${open ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {
          (animationFinished && open) &&
            <>
              <div className='product-preview-name'>
                <h1><b>{product.title}</b></h1>
                <button className='close-cart-button' onClick={handleClosePreview}>
                  <CloseIcon />
                </button>
              </div>

              <div className='preview-content'>
                <div className='preview-carrousel-container'>
                  <Imagescarrousel imagesArray={product.images} />
                </div>

                <div className='product-detail-info'>

                  <section className='product-buying-info black-scroll-bar'>
                    <div className='price-rating'>
                      <h2>${product.price}</h2>
                      <h2>Rating: {product.rating}</h2>
                    </div>

                    <h3>Dimensions:</h3>
                    <div className='dimensions-container'>
                      <p>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width} cm</p>
                    </div>

                    <h3>Description:</h3>

                    <p>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, assumenda ex! Voluptatem officia exercitationem placeat quos quas, eaque error mollitia, deserunt voluptate nesciunt corporis necessitatibus! Quas voluptatem ut aliquam eligendi!
                      Nobis aliquid totam cupiditate ipsam numquam quam consequuntur minus ex vitae explicabo fugit, nulla officia earum quasi, repellendus vero dolor? Nulla doloribus dolor vero eius nisi ut aspernatur porro quasi?
                      Aliquid perferendis ipsum atque voluptatibus id? Distinctio, inventore quibusdam optio iusto consectetur id veritatis ad laboriosam temporibus at eaque suscipit laudantium modi tempora adipisci atque. Non tempora debitis asperiores harum!
                      Enim, aspernatur eveniet eos inventore libero vel, veritatis cumque hic minima sed quaerat, assumenda est! Dolorum quibusdam mollitia eos consequuntur cum quae fuga minus reprehenderit quos, possimus adipisci neque in.
                      Consequatur error facere culpa inventore eveniet odit aspernatur, iure, quisquam facilis praesentium reiciendis? Ipsum, tempora! Dolores fugiat aspernatur, quod quasi magnam laudantium corrupti amet assumenda corporis rerum, quas placeat nam.
                      Consequatur numquam libero quae perspiciatis sint eaque error sequi voluptatem exercitationem fugit! Accusantium, officia harum ducimus, eum quos totam aliquid blanditiis minus dolores possimus iste quia quidem earum delectus natus!
                      Placeat incidunt ipsa numquam error voluptatibus molestias quasi ea at laborum. Facilis sit voluptatum porro doloremque, minima perspiciatis nihil, esse quam incidunt blanditiis ipsum odio. Unde odio quasi aspernatur eaque!
                      Voluptate voluptatum voluptas, nesciunt reprehenderit nisi placeat quo quam illo magnam dolorem voluptatibus ut fugit quod reiciendis fuga repellendus quia, modi rerum. Dolorum possimus cum ut enim provident distinctio architecto.
                      Dolorum quod laboriosam tempore consequuntur mollitia cupiditate assumenda maiores, perspiciatis optio, hic sapiente molestias vel amet eveniet necessitatibus nemo quaerat aliquam sed officiis laborum minus fugiat dolor rem magnam. Iusto.
                      Explicabo laudantium porro perspiciatis. Possimus ducimus facere iure beatae molestiae adipisci ea modi dolor? At, debitis corrupti. Quia, mollitia, a ea ratione illo odio nihil facilis eum, voluptas optio doloribus!
                      Error vero aliquam ut aperiam itaque aliquid sint, incidunt quae hic corporis natus veniam maiores dignissimos cum accusamus ipsum cupiditate labore. Voluptate doloribus non vitae, repellendus similique laborum itaque aperiam.
                      Eum et beatae omnis, explicabo nihil praesentium pariatur architecto error sed est eius voluptas suscipit minus ratione asperiores facilis. Voluptatum aliquam placeat nostrum enim ab beatae, fugit non excepturi soluta.
                      Unde, dolores esse at incidunt quod minus voluptas sit molestiae eum quo veritatis, animi et quae! Repudiandae architecto quidem sit deleniti? Architecto blanditiis praesentium inventore beatae consectetur eveniet doloribus sunt!
                      Eius molestiae quis deserunt pariatur placeat modi nisi, nostrum facilis consequuntur unde repellat nobis, debitis aut voluptatibus eligendi quisquam soluta quae. Consequuntur maiores recusandae molestiae perferendis harum nobis ratione reprehenderit!
                      Alias cum facere ullam, eum cupiditate, neque beatae consequuntur dolores quas distinctio in, eaque veniam quasi esse odio! Repellendus soluta unde libero distinctio dolor earum? Dolorum corporis odio delectus molestias.
                      Omnis fuga corrupti molestias blanditiis nesciunt ducimus accusantium at similique, soluta illo optio adipisci ut architecto mollitia itaque perspiciatis ipsam! Quia obcaecati deserunt est rerum expedita inventore totam facere earum.
                      Nobis ipsum cumque ratione dolorem quaerat exercitationem optio neque, error ullam fugit, veniam quam temporibus sequi odit suscipit nesciunt sapiente nam at cum fugiat accusamus facere. Expedita perspiciatis incidunt quisquam?
                      Commodi alias repellendus recusandae nulla eveniet dolorem, totam incidunt et iure ut, consectetur ex labore accusantium nam placeat reiciendis! Eos veniam itaque similique porro neque id ipsum ab aliquid esse!
                      Deleniti quibusdam earum maiores magni impedit, dolore laboriosam exercitationem quidem saepe officia veritatis eligendi similique commodi iusto sed ab, libero eos nemo, natus soluta veniam magnam aliquid. Repellendus, incidunt nesciunt.
                      Fugit possimus, exercitationem nisi cum harum ex ullam officiis at obcaecati quasi, incidunt amet sapiente? Sint laboriosam velit praesentium dolorum, aliquam perferendis et libero id delectus consequatur culpa repellat natus!
                    </p>
                  </section>

                  <div className='product-card-preview-btn'>
                    <Button onClick={() => saveIntoCartHandler(product)}>
                      <ShoppingCart width={18} height={18} />
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </>
        }

      </div>
    </div>
  )
}

export default ProductCardPreview
