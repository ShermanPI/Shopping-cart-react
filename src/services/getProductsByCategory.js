async function getProductsByCategory (categorySlug, limit = 0) {
  const res = await fetch(import.meta.env.VITE_API_URL + `/products/category/${categorySlug}?limit=${limit}`)
  const data = await res.json()

  return data
}

export default getProductsByCategory
