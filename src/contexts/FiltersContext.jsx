import { createContext } from 'react'
import useProducts from '../hooks/useProducts.js'

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  return (
    <FiltersContext.Provider
      value={useProducts()}
    >
      {children}
    </FiltersContext.Provider>
  )
}
