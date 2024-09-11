import { useEffect, useState } from 'react'
import getAllTheProducts from '../services/getAllTheProducts'
import getAllCategories from '../services/getAllCategories'
import getProductsByCategory from '../services/getProductsByCategory'

function useProducts () {
  const [filters, setFilters] = useState({ categorySlug: 'All' })
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)

  const filteredProducts = products?.filter(el => {
    return products
  })

  console.log(products, '🤯🤯🤯🤯')

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
        console.log('fetch de datos')
        setProductsLoading(true)

        if (filters.categorySlug === 'All') {
          const result = await getAllTheProducts()

          setProducts(result.products)
          setProductsLoading(false)
        } else {
          const data = await getProductsByCategory(filters.categorySlug)
          console.log(data.products, 'data.products')
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
    filters
  }
}

export default useProducts
