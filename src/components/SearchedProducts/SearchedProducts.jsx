import { useContext } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'
import Loader from '../Loader/Loader'

export const SearchedProducts = () => {
  const { loadingSearch } = useContext(FiltersContext)

  return (
    <div>
      {loadingSearch
        ? (
          <div className='loader-container'>
            <Loader />
          </div>
          )
        : (
          <div>
            <h1>Search Results</h1>
            <p>Searched products</p>
          </div>
          )}
    </div>
  )
}
