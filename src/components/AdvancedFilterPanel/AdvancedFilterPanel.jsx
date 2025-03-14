import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useRef, useState } from 'react'
import DollarIcon from 'src/assets/Icons/DollarIcon'
import UpIcon from 'src/assets/Icons/UpIcon'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  // const { maxProductsPrice, setMinPrice, filters } = useContext(FiltersContext)
  const panelOptionContainerRef = useRef()

  return (
    <div className='all-filters-container'>
      <div onClick={() => setPanelOpen(!panelOpen)} className='filters-panel-btn'>
        <FilterIcon width={18} />
      </div>
      <div className={`panel-options-container ${panelOpen ? 'open' : ''}`} ref={panelOptionContainerRef}>
        <div className='advanced-filter'>
          <div className='advanced-filter-item'>
            <DollarIcon />
            PRICE
          </div>
          <div className='advanced-filter-icon-container'>
            <UpIcon />
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdvancedFilterPanel
