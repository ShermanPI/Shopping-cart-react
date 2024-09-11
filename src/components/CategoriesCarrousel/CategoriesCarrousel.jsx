import { useContext, useEffect, useRef, useState } from 'react'
import './categoriesCarrousel.css'
import CarrouselBtn from './components/CarrouselBtn'
import ArrowRight from '../../assets/Icons/ArrowRight'
import { FiltersContext } from '../../contexts/FiltersContext'
import getAllCategories from '../../services/getAllCategories'

function CategoriesCarrousel () {
  const { filters, setCategorySlug } = useContext(FiltersContext)

  const carrouselBtnsContainerRef = useRef()
  const leftBtnRef = useRef()
  const rightBtnRef = useRef()

  const [categories, setCategories] = useState([])
  const [leftBtnVisible, setLeftBtnVisible] = useState(false)
  const [rightBtnVisible, setRightBtnVisible] = useState(true)
  const [carrouselPosition, setCarrouselPosition] = useState(0)

  const defaultCategory = { name: 'All', slug: 'All', id: 0 }
  const categoriesAndAllOption = [defaultCategory, ...categories]

  const updateVisibility = (position, scrollableWidth) => {
    setLeftBtnVisible(position > 0)
    setRightBtnVisible(position < scrollableWidth)
  }

  const handleMoveClick = (direction) => {
    const scrollableWidth = carrouselBtnsContainerRef.current.scrollWidth - carrouselBtnsContainerRef.current.clientWidth
    const translateAmount = carrouselBtnsContainerRef.current.clientWidth / 3
    const newPosition = Math.max(0, Math.min(carrouselPosition + (direction * translateAmount), scrollableWidth))

    setCarrouselPosition(newPosition)
    updateVisibility(newPosition, scrollableWidth)
  }

  const rightClick = () => handleMoveClick(1)
  const leftClick = () => handleMoveClick(-1)

  useEffect(() => {
    (async () => {
      const categoriesResult = await getAllCategories()
      setCategories(categoriesResult)
    })()
  }, [])

  return (
    <div className='carrousel-container'>
      <div className={`carrousel-btn-container left-btn
        ${leftBtnVisible ? '' : 'invisible-category-button'}`}
      >
        <button
          className='carrousel-move-btn'
          ref={leftBtnRef}
          onClick={leftClick}
        >
          <ArrowRight className='carrouse-arrow-icon left-arrow-icon' />
        </button>
      </div>
      <div
        ref={carrouselBtnsContainerRef} className='carrousel-btns-container'
        style={{ transform: `translate(-${carrouselPosition}px)` }}
      >
        {categoriesAndAllOption?.map((category, index) =>
          <CarrouselBtn
            active={filters.categorySlug === category.slug}
            onClick={() => setCategorySlug(category.slug)}
            name={category.name} key={index}
          />)}
      </div>
      <div className={`carrousel-btn-container right-btn
        ${rightBtnVisible ? '' : 'invisible-category-button'}`}
      >
        <button
          className='carrousel-move-btn'
          ref={rightBtnRef}
          onClick={rightClick}
        >
          <ArrowRight className='carrouse-arrow-icon' />
        </button>
      </div>
    </div>
  )
}

export default CategoriesCarrousel
