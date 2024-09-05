import { useRef, useState } from 'react'
import getProductsByCategory from '../../services/getProductsByCategory'
import './categoriesCarrousel.css'
import CarrouselBtn from './components/CarrouselBtn'
import getAllTheProducts from '../../services/getAllTheProducts'
import ArrowRight from '../../assets/Icons/ArrowRight'

function CategoriesCarrousel ({ categoriesArray = [], setProducts, setLoading }) {
  const defaultCategory = { name: 'All', slug: '', id: 0 }
  const carrouselBtnsContainerRef = useRef()
  const leftBtnRef = useRef()
  const rightBtnRef = useRef()

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [leftBtnVisible, setLeftBtnVisible] = useState(false)
  const [rightBtnVisible, setRightBtnVisible] = useState(true)
  const [carrouselPosition, setCarrouselPosition] = useState(0)

  const categoriesAndAllOption = [defaultCategory, ...categoriesArray]

  const handleCategoryClick = async (category) => {
    setLoading(true)
    setSelectedCategory(category)

    if (category.name === 'All') {
      const result = await getAllTheProducts()

      setProducts(result.products)
      setLoading(false)
      return
    }

    const data = await getProductsByCategory(category.slug)

    setProducts(data.products)
    setLoading(false)
  }

  const updateVisibility = (position, scrollableWidth) => {
    setLeftBtnVisible(position > 0)
    setRightBtnVisible(position < scrollableWidth)
  }

  const handleClick = (direction) => {
    const scrollableWidth = carrouselBtnsContainerRef.current.scrollWidth - carrouselBtnsContainerRef.current.clientWidth
    const translateAmount = carrouselBtnsContainerRef.current.clientWidth / 3
    const newPosition = Math.max(0, Math.min(carrouselPosition + (direction * translateAmount), scrollableWidth))

    setCarrouselPosition(newPosition)
    updateVisibility(newPosition, scrollableWidth)
  }

  const rightClick = () => handleClick(1)
  const leftClick = () => handleClick(-1)

  return (
    <div className='carrousel-container'>
      <div
        className={`carrousel-move-btn left-btn 
        ${leftBtnVisible ? '' : 'invisible-category-button'}`}
        ref={leftBtnRef}
        onClick={leftClick}
      >
        <ArrowRight className='carrouse-arrow-icon left-arrow-icon' />
      </div>
      <div
        ref={carrouselBtnsContainerRef} className='carrousel-btns-container'
        style={{ transform: `translate(-${carrouselPosition}px)` }}
      >
        {categoriesAndAllOption?.map((category, index) =>
          <CarrouselBtn
            active={selectedCategory.slug === category.slug}
            onClick={() => handleCategoryClick(category)}
            name={category.name} key={index}
          />)}
      </div>
      <div
        className={`carrousel-move-btn right-btn 
        ${rightBtnVisible ? '' : 'invisible-category-button'}`}
        ref={rightBtnRef}
        onClick={rightClick}
      >
        <ArrowRight className='carrouse-arrow-icon' />
      </div>
    </div>
  )
}

export default CategoriesCarrousel
