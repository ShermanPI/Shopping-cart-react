import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const [loadingSearch, setLoadingSearch] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [filters, setFilters] = useState({
    priceOrder: 'asc'
  })

  const clearFilters = () => {
    setFilters({
      priceOrder: undefined
    })
  }

  return (
    <FiltersContext.Provider
      value={{ loadingSearch, setLoadingSearch, searchValue, setSearchValue, filters, setFilters, clearFilters }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
