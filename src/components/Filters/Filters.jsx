import './filters.css'

import AdvancedFilterPanel from '../AdvancedFilterPanel/AdvancedFilterPanel'
import CategoriesCarrousel from '../CategoriesCarrousel/CategoriesCarrousel'

export default function Filters () {
  return (
    <div className='filters-container'>
      <CategoriesCarrousel
        categoriesArray
      />
      <AdvancedFilterPanel />
    </div>
  )
}
