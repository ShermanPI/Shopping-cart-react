import { useLocation, useNavigate, useSearchParams } from 'react-router'
import './searchBar.css'
import { useContext } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'

export const SearchBar = () => {
  const { setLoadingSearch } = useContext(FiltersContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (e) => {
    setLoadingSearch(true)

    console.log(location.pathname, '❌❌❌❌')
    if (location.pathname !== '/search') {
      navigate('/search')
    }

    // todo: make throttle for this
    // setSearchParams({ q: e.target.value })
  }

  return (
    <>
      <div className='search-bar-container'>
        <input
          onInput={handleSearch}
          type='text'
          placeholder='Search for products'
          className='search-input'
        />
      </div>
    </>

  )
}
