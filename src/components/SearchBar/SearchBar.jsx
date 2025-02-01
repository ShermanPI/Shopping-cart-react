import { useLocation, useNavigate, useSearchParams } from 'react-router'
import './searchBar.css'
import { useContext, useRef } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'

export const SearchBar = () => {
  const { setLoadingSearch, loading } = useContext(FiltersContext)

  const location = useLocation()
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()

  const intervalId = useRef(null)

  const handleSearch = (e) => {
    if (!loading) setLoadingSearch(true)

    if (location.pathname !== '/search') {
      navigate('/search')
    }

    intervalId.current && clearInterval(intervalId.current)

    intervalId.current = setTimeout(() => {
      if (e.target.value === '') {
        setSearchParams({})
        navigate('/')
      } else {
        setSearchParams({ q: e.target.value })
      }
    }, 500)
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
