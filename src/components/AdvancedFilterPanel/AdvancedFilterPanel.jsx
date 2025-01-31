import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useId, useRef, useState } from 'react'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  // const { maxProductsPrice, setMinPrice, filters } = useContext(FiltersContext)
  const minPriceID = useId()
  const panelOptionContainerRef = useRef()

  return (
    <div className='all-filters-container'>
      <div onClick={() => setPanelOpen(!panelOpen)} className='filters-panel-btn'>
        <FilterIcon width={18} />
      </div>
      <div className={`panel-options-container ${panelOpen ? 'open' : ''}`} ref={panelOptionContainerRef}>
        <div className='form-field'>
          <label htmlFor={minPriceID}>
            Min Price:
          </label>
          <span className='price-range-container'>
            <input
              className='price-range'
              id={minPriceID}
              type='range'
              name='volume'
              step='10'
              // max={Math.floor(maxProductsPrice)}
              // value={filters.minPrice}
              // onChange={(value) => { setMinPrice(value.target.value) }}
            />
            <p className='price-range-number'>
              {/* $ {filters.minPrice} */}
            </p>
          </span>
        </div>
      </div>
    </div>

  )
}

export default AdvancedFilterPanel
