import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useContext, useRef, useState } from 'react'
import DollarIcon from 'src/assets/Icons/DollarIcon'
import UpIcon from 'src/assets/Icons/UpIcon'
import { FiltersContext } from 'src/contexts/FiltersContext'
import DownloadIcon from 'src/assets/Icons/DownloadIcon'
import EqualIcon from 'src/assets/Icons/EqualIcon'
import CloseIcon from 'src/assets/Icons/CloseIcon'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  const panelOptionContainerRef = useRef()
  const { filters, setFilters, clearFilters } = useContext(FiltersContext)

  return (
    <div className='all-filters-container' ref={panelOptionContainerRef}>
      <div onClick={() => setPanelOpen(!panelOpen)} className='filters-panel-btn'>
        <FilterIcon width={18} />
      </div>
      <div className={`panel-options-container ${panelOpen ? 'open' : ''}`}>
        <div className='advanced-filter'>
          <div className='advanced-filter-item'>
            <DollarIcon />
            PRICE
          </div>

          <div className='advanced-filter-item'>
            {filters.priceOrder &&
              <button onClick={() => clearFilters()} className='advanced-filter-icon-container clear-filters-btn'>
                <CloseIcon width={22} height={22} />
              </button>}
            <button
              className='advanced-filter-icon-container'
              onClick={() => setFilters({
                ...filters,
                priceOrder: filters.priceOrder === 'asc' ? 'desc' : 'asc'
              })}
            >
              {!filters.priceOrder && <EqualIcon />}

              {filters.priceOrder === 'asc' && <UpIcon />}

              {filters.priceOrder === 'desc' && <DownloadIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdvancedFilterPanel
