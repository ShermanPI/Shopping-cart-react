import { useNavigate } from 'react-router'
import './searchBar.css'
import { useContext, useRef } from 'react'
import { FiltersContext } from 'src/contexts/FiltersContext'

export const SearchBar = () => {
  const { setLoadingSearch, loading } = useContext(FiltersContext)

  const navigate = useNavigate()

  const intervalId = useRef(null)

  const handleSearch = (e) => {
    if (!loading) setLoadingSearch(true)

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
