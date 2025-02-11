import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const [loadingSearch, setLoadingSearch] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  return (
    <FiltersContext.Provider
      value={{ loadingSearch, setLoadingSearch, searchValue, setSearchValue }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
