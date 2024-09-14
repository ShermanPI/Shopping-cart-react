import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useState } from 'react'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  const [priceMinRange, setPriceMinRange] = useState(0)

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
                min='0'
                max='100'
                value={priceMinRange}
                onChange={(value) => { setPriceMinRange(value.target.value) }}
              />
              <p className='price-range-number'>
                $ {priceMinRange}
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
