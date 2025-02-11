import { useContext, useEffect, useState } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'
import { useSearchParams } from 'react-router'
import { getProductByName } from 'src/services/getProductByName'
import ShoppingList from '../ShoppingList/ShoppingList'

export const SearchedProducts = () => {
  const { loadingSearch, setLoadingSearch } = useContext(FiltersContext)
  const [searchedProducts, setSearchedProducts] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchQuery = searchParams.get('q')

    if (searchQuery) {
      const fetchSearchResults = async () => {
        const result = await getProductByName(searchQuery)
        setSearchedProducts(result.products)
        setLoadingSearch(false)
      }

      fetchSearchResults()
    }
  }, [searchParams])

  return (
    <div className='products-main-container'>
      <h2>Results for: "{searchParams.get('q')}" </h2>
      <ShoppingList products={searchedProducts} productsLoading={loadingSearch} />
    </div>
  )
}
