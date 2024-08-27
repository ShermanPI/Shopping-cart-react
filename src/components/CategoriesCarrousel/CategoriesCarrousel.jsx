import { useState } from 'react'
import getProductsByCategory from '../../services/getProductsByCategory'
import './categoriesCarrousel.css'
import CarrouselBtn from './components/CarrouselBtn'
import getAllTheProducts from '../../services/getAllTheProducts'

function CategoriesCarrousel ({ categoriesArray = [], setProducts, setLoading }) {
  const defaultCategory = { name: 'All', slug: '', id: 0 }

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const categoriesAndAllOption = [defaultCategory, ...categoriesArray]

  const handleCategoryClick = async (category) => {
    setLoading(true)
    if (category.name === 'All') {
      const result = await getAllTheProducts()

      setProducts(result.products)
      return
    }

    setSelectedCategory(category)
    const data = await getProductsByCategory(category.slug)

    console.log(data)
    setProducts(data.products)
    setLoading(false)
  }

  return (
    <>
      <div className='carrousel-container'>
        {categoriesAndAllOption?.map((category, index) =>
          <CarrouselBtn
            active={selectedCategory.slug === category.slug}
            onClick={() => handleCategoryClick(category)}
            name={category.name} key={index}
          />)}
      </div>
    </>
  )
}

export default CategoriesCarrousel
