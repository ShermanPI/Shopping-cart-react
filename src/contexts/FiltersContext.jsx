import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const [loadingSearch, setLoadingSearch] = useState(true)

  return (
    <FiltersContext.Provider
      value={{ loadingSearch, setLoadingSearch }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
