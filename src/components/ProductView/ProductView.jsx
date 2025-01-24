import { useParams } from 'react-router'
import './productView.css'
import { useContext, useEffect, useState } from 'react'
import useProducts from 'src/hooks/useProducts'
import RatingStars from '../RatingStars/RatingStars'
import { shootingStarContext } from '../Header/contexts/ShootingStarContext'
import { CartContext } from 'src/contexts/CartContext'

export const ProductView = () => {
  const { id: paramId } = useParams()
  const [product, setProduct] = useState()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { products } = useProducts()

  const { addShootingStar } = useContext(shootingStarContext)
  const { addCartItem } = useContext(CartContext)

  useEffect(() => {
    (async () => {
      const productInfo = products.filter(el => {
        return el.id === parseInt(paramId)
      })[0]

      setProduct(productInfo)
    })()
  }, [products])

  const saveIntoCartHandler = (cartItem) => {
    addShootingStar()
    addCartItem(cartItem)
  }

  return (
    <>

      {
        product &&
          <section className='product-view-container'>
            <div className='product-preview-info'>
              <div className='product-preview-images product-preview-column'>
                <img
                  src={product.images[selectedImageIndex]}
                  className='product-preview-main-image'
                  alt={`Image of the product: ${product.title}`}
                />

                {product.images.length > 0 &&
                  <div className='product-preview-images-carousel'>
                    <div className='selected-square' style={{ transform: `translate(calc((${selectedImageIndex * 100}% - 0.3rem) + ${selectedImageIndex * 1.4}rem), -0.3rem)` }} />

                    {product.images.map((image, index) => (
                      <div key={index} className='product-preview-image-container' onClick={() => setSelectedImageIndex(index)}>
                        <img src={image} alt={`Image of the product: ${product.title}`} />
                      </div>))}
                  </div>}
              </div>

              <div className='product-preview-details product-preview-column'>
                <div className='product-title-and-rating'>
                  <h2>{product?.title}</h2>
                  <div className='product-rating-stars'>
                    <RatingStars rating={product?.rating} />
                    <p className='rating-number'>
                      ({product.rating})
                    </p>
                  </div>
                </div>
                <h2>${product?.price}</h2>

                <h3>About this item</h3>
                <p>{product?.description}</p>

                <button
                  className='product-preview-button'
                  onClick={() => saveIntoCartHandler(product)}
                >
                  Add to cart
                </button>

                <button
                  className='product-preview-button buy-now'
                >
                  Buy Now
                </button>

                <div className='product-specifications'>
                  <h3>
                    Product Specifications
                  </h3>
                  <div className='product-specifications-info'>
                    <div className='product-specifications-info-column'>
                      <ul>
                        <li><p>Brand</p></li>
                        <li><p>Model</p></li>
                        <li><p>Dimensions</p></li>
                      </ul>
                    </div>
                    <div className='product-specifications-info-column'>
                      <ul>
                        <li><p>{product?.brand || ' '}</p></li>
                        <li><p>{product?.model || 'N/A'}</p></li>
                        <li><p>{product.dimensions.depth} x {product.dimensions.height} x {product.dimensions.width}</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }

    </>
  )
}
