import { useEffect, useMemo, useState } from 'react'
import getAllTheProducts from '../services/getAllTheProducts'
// import getProductsByCategory from '../services/getProductsByCategory'

function useProducts () {
  const [filters, setFilters] = useState({ categorySlug: 'All', minPrice: 0 })
  const [products, setProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)

  const minProductsPrice = useMemo(() => Math.min(...products.map((product) => product.price)), [products])
  const maxProductsPrice = useMemo(() => Math.max(...products.map((product) => product.price)), [products])

  const filteredProducts = products?.filter(product => {
    return product.price >= filters.minPrice && product.stock > 0
  })

  const setMinPrice = (minPrice = 0) => {
    setFilters({ ...filters, minPrice })
  }

  const setCategorySlug = (categorySlug) => {
    setFilters({ ...filters, categorySlug })
  }

  useEffect(() => {
    (async () => {
      const result = await getAllTheProducts()

      setProducts(result.products)
    })()
  }, [])

  return {
    products,
    productsLoading,
    setProductsLoading,
    filteredProducts,
    setProducts,
    setCategorySlug,
    filters,
    minProductsPrice,
    maxProductsPrice,
    setMinPrice
  }
}

export default useProducts
