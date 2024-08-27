async function getProductsByCategory (categorySlug, limit = 0) {
  const res = await fetch(`https://dummyjson.com/products/category/${categorySlug}?limit=${limit}`)
  const data = await res.json()

  return data
}

export default getProductsByCategory
