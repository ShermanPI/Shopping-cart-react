import { useState } from 'react'

function useLoader (initialLoadingState = false) {
  const [loading, setLoading] = useState(initialLoadingState)

  const setLoadingTrue = () => setLoading(true)
  const setLoadingFalse = () => setLoading(false)
  const toggleLoading = () => setLoading(!loading)

  return {
    loading,
    setLoadingTrue,
    setLoadingFalse,
    toggleLoading
  }
}

export default useLoader
