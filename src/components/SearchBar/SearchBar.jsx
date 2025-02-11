import { useLocation, useNavigate } from 'react-router'
import './searchBar.css'
import { useContext, useEffect, useRef } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'
import SearchIcon from 'src/assets/Icons/Search'
import CloseIcon from 'src/assets/Icons/CloseIcon'

export const SearchBar = () => {
  const { setLoadingSearch, loading, searchValue, setSearchValue } = useContext(FiltersContext)

  const navigate = useNavigate()
  const location = useLocation()

  const intervalId = useRef(null)

  const handleSearch = (e) => {
    if (!loading) setLoadingSearch(true)
    setSearchValue(e.target.value)

    intervalId.current && clearInterval(intervalId.current)

    intervalId.current = setTimeout(() => {
      if (e.target.value === '') {
        navigate('/')
      } else {
        navigate(`/search?q=${encodeURIComponent(e.target.value)}`)
      }
    }, 500)
  }

  useEffect(() => {
    setSearchValue(location.search.split('=')[1])
  }, [])

  return (
    <>
      <label className='search-bar-container' htmlFor='search-bar-input'>
        <div className='search-icon'>
          <SearchIcon width={24} height={24} />
        </div>
        <input
          onInput={handleSearch}
          type='text'
          placeholder='Search for products'
          className='search-input'
          id='search-bar-input'
          autoComplete='off'
          name='search-bar-input'
          value={searchValue}
        />
        {searchValue && (
          <button
            className='clear-search-button' type='button'
            onClick={() => {
              setSearchValue('')
              navigate('/')
            }}
          >
            <CloseIcon width={16} height={16} />
          </button>
        )}
      </label>
    </>

  )
}
