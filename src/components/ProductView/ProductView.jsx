import { useParams } from 'react-router'
import './productView.css'
import { useEffect, useState } from 'react'
import useProducts from 'src/hooks/useProducts'
import RatingStars from '../RatingStars/RatingStars'
import ShoppingCart from 'src/assets/Icons/ShoppingCart'
import Button from '../Button/Button'

export const ProductView = () => {
  const { id: paramId } = useParams()
  const [product, setProduct] = useState()
  const { products } = useProducts()

  useEffect(() => {
    (async () => {
      const productInfo = products.filter(el => {
        return el.id === parseInt(paramId)
      })[0]

      setProduct(productInfo)
    })()
  }, [products])

  return (
    <>

      {
        product &&
          <section className='product-view-container'>
            <div className='product-preview-info'>
              <div className='product-preview-images product-preview-column'>
                <img src={product.thumbnail} alt={`Image of the product: ${product.title}`} />
              </div>

              <div className='product-preview-details product-preview-column'>
                <h2>{product?.title}</h2>
                <RatingStars rating={product?.rating} />
                <h2>${product?.price}</h2>
                <Button>
                  <ShoppingCart width={18} height={18} />
                  Add to cart
                </Button>
                <Button>
                  <ShoppingCart width={18} height={18} />
                  Buy Now
                </Button>

                <div className='product-specifications'>
                  <h3>
                    Product Specifications
                  </h3>
                  <div className='product-specifications-info' />
                </div>
              </div>
            </div>
          </section>
      }

    </>
  )
}
