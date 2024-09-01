import { useRef, useState } from 'react'
import getProductsByCategory from '../../services/getProductsByCategory'
import './categoriesCarrousel.css'
import CarrouselBtn from './components/CarrouselBtn'
import getAllTheProducts from '../../services/getAllTheProducts'

function CategoriesCarrousel ({ categoriesArray = [], setProducts, setLoading }) {
  const defaultCategory = { name: 'All', slug: '', id: 0 }
  const carrouselBtnsContainerRef = useRef()
  const leftBtnRef = useRef()
  const rightBtnRef = useRef()

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [leftBtnVisible, setLeftBtnVisible] = useState(false)
  const [rightBtnVisible, setRightBtnVisible] = useState(true)

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

  const checkBtnsVisibility = () => {
    const carrouselContainerScrollLeft = carrouselBtnsContainerRef.current.scrollLeft
    const carrouselClientWidth = carrouselBtnsContainerRef.current.clientWidth

    if (carrouselContainerScrollLeft === 0) {
      setLeftBtnVisible(false)
    } else {
      setLeftBtnVisible(true)
    }

    if (carrouselContainerScrollLeft + carrouselClientWidth === carrouselBtnsContainerRef.current.scrollWidth) {
      setRightBtnVisible(false)
    } else {
      setRightBtnVisible(true)
    }
  }

  const rightClick = () => {
    const carrouselContainerWidth = carrouselBtnsContainerRef.current.offsetWidth
    carrouselBtnsContainerRef.current.scrollLeft += Math.ceil(carrouselContainerWidth / 4)
    checkBtnsVisibility()
  }

  const leftClick = () => {
    const carrouselContainerWidth = carrouselBtnsContainerRef.current.offsetWidth
    carrouselBtnsContainerRef.current.scrollLeft -= Math.ceil(carrouselContainerWidth / 4)
    checkBtnsVisibility()
  }

  return (
    <div className='carrousel-container'>
      <button
        className={`carrousel-move-btn left-btn ${leftBtnVisible ? '' : 'invisible-category-button'}`}
        ref={leftBtnRef}
        onClick={leftClick}
      >
        {'<'}
      </button>
      <div ref={carrouselBtnsContainerRef} className='carrousel-btns-container'>
        {categoriesAndAllOption?.map((category, index) =>
          <CarrouselBtn
            active={selectedCategory.slug === category.slug}
            onClick={() => handleCategoryClick(category)}
            name={category.name} key={index}
          />)}
      </div>
      <div
        className={`carrousel-move-btn right-btn ${rightBtnVisible ? '' : 'invisible-category-button'}`}
        ref={rightBtnRef}
        onClick={rightClick}
      >
        {'>'}
      </div>
    </div>
  )
}

export default CategoriesCarrousel
