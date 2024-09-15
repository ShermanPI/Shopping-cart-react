import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useContext, useState } from 'react'
import { FiltersContext } from '../../contexts/FiltersContext'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  const { maxProductsPrice, setMinPrice, filters } = useContext(FiltersContext)

  return (
    <div className='all-filters-container'>
      <div onClick={() => setPanelOpen(!panelOpen)} className='filters-panel-btn'>
        Filters
        <FilterIcon width={18} />
      </div>
      {panelOpen &&
        <div className='panel-options-container'>
          <div className='form-field'>
            <label>
              Min Price:
            </label>
            <span className='price-range-container'>
              <input
                className='price-range'
                type='range'
                id='volume'
                name='volume'
                step='1'
                max={Math.floor(maxProductsPrice)}
                value={filters.minPrice}
                onChange={(value) => { setMinPrice(value.target.value) }}
              />
              <p className='price-range-number'>
                $ {filters.minPrice}
              </p>
            </span>

          </div>

          <div className='form-field'>
            <label>
              Rating:
            </label>
          </div>
        </div>}
    </div>

  )
}

export default AdvancedFilterPanel
