import { useNavigate } from 'react-router'
import './searchBar.css'
import { useContext, useRef, useState } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'
import SearchIcon from 'src/assets/Icons/Search'
import CloseIcon from 'src/assets/Icons/CloseIcon'

export const SearchBar = () => {
  const { setLoadingSearch, loading } = useContext(FiltersContext)
  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()

  const intervalId = useRef(null)

  const handleSearch = (e) => {
    if (!loading) setLoadingSearch(true)
    setInputValue(e.target.value)

    intervalId.current && clearInterval(intervalId.current)

    intervalId.current = setTimeout(() => {
      if (e.target.value === '') {
        navigate('/')
      } else {
        navigate(`/search?q=${encodeURIComponent(e.target.value)}`)
      }
    }, 500)
  }

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
          name='search-bar-input'
          value={inputValue}
        />
        {inputValue && (
          <button
            className='clear-search-button' type='button'
            onClick={() => {
              setInputValue('')
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
