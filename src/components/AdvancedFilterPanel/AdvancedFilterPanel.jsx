import './AdvancedFilterPanel.css'
import FilterIcon from '../../assets/Icons/FilterIcon'
import { useEffect, useRef, useState } from 'react'
import DollarIcon from 'src/assets/Icons/DollarIcon'
import UpIcon from 'src/assets/Icons/UpIcon'
import DownloadIcon from 'src/assets/Icons/DownloadIcon'
import EqualIcon from 'src/assets/Icons/EqualIcon'
import CloseIcon from 'src/assets/Icons/CloseIcon'
import { useSearchParams } from 'react-router'
import { getRandomColor } from 'src/helpers/getRandomColor'

const AdvancedFilterPanel = () => {
  const [panelOpen, setPanelOpen] = useState(false)
  const panelOptionContainerRef = useRef()
  const [searchParams, setSearchParams] = useSearchParams()

  const searchParamPriceOrder = searchParams.get('priceOrder')

  const handlePriceOrder = () => {
    searchParams.set('priceOrder', searchParamPriceOrder === 'asc' ? 'desc' : 'asc')
    setSearchParams(searchParams)
  }

  const handleClearFilters = () => {
    searchParams.delete('priceOrder')
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!panelOptionContainerRef.current.contains(e.target) &&
      e.target !== panelOptionContainerRef.current) {
        setPanelOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div
      className='all-filters-container'
      ref={panelOptionContainerRef}

    >
      <div onClick={() => setPanelOpen(!panelOpen)} className='filters-panel-btn' style={{ color: searchParamPriceOrder ? getRandomColor() : '' }}>
        <FilterIcon width={18} />
      </div>
      <div className={`panel-options-container ${panelOpen ? 'open' : ''}`}>
        <div className='advanced-filter'>
          <div className='advanced-filter-item'>
            <DollarIcon />
            <p>
              PRICE
            </p>
          </div>

          <div className='advanced-filter-item'>
            {searchParamPriceOrder &&
              <button onClick={handleClearFilters} className='advanced-filter-icon-container clear-filters-btn'>
                <CloseIcon width={22} height={22} />
              </button>}
            <button
              className='advanced-filter-icon-container'
              onClick={handlePriceOrder}
            >
              {!searchParamPriceOrder && <EqualIcon />}

              {searchParamPriceOrder === 'asc' && <UpIcon />}

              {searchParamPriceOrder === 'desc' && <DownloadIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdvancedFilterPanel
