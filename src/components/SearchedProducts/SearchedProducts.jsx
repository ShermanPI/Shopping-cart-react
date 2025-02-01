import { useContext, useEffect } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'
import Loader from '../Loader/Loader'
import { useSearchParams } from 'react-router'
import { getProductByName } from 'src/services/getProductByName'

export const SearchedProducts = () => {
  const { loadingSearch, setLoadingSearch } = useContext(FiltersContext)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchQuery = searchParams.get('q')

    if (searchQuery) {
      const fetchSearchResults = async () => {
        const result = await getProductByName(searchQuery)
        setLoadingSearch(false)
      }

      fetchSearchResults()
    }
  }, [searchParams])

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
            <h2>Results for: {searchParams.get('q')} </h2>
          </div>
          )}
    </div>
  )
}
