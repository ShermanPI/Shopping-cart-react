import { useEffect, useMemo, useState } from 'react'
import getAllTheProducts from '../services/getAllTheProducts'
import getAllCategories from '../services/getAllCategories'
import getProductsByCategory from '../services/getProductsByCategory'

function useProducts () {
  const [filters, setFilters] = useState({ categorySlug: 'All', minPrice: 0 })
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)

  const minProductsPrice = useMemo(() => Math.min(...products.map((product) => product.price)), [products])
  const maxProductsPrice = useMemo(() => Math.max(...products.map((product) => product.price)), [products])

  const filteredProducts = products?.filter(product => {
    return product.price >= filters.minPrice
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
      const categoriesResult = await getAllCategories()

      setProducts(result.products)
      setCategories(categoriesResult)
    })()
  }, [])

  useEffect(
    () => {
      (async () => {
        setProductsLoading(true)

        if (filters.categorySlug === 'All') {
          const result = await getAllTheProducts()

          setProducts(result.products)
          setProductsLoading(false)
        } else {
          const data = await getProductsByCategory(filters.categorySlug)
          setFilters({ ...filters, minPrice: 0 })
          setProducts(data.products)
          setProductsLoading(false)
        }
      })()
    }, [filters.categorySlug])

  return {
    categories,
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
