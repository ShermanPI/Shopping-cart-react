async function getAllCategories () {
  const res = await fetch(import.meta.env.VITE_API_URL + '/products/categories')
  const data = await res.json()
  return data.map(category => ({
    name: category.name,
    slug: category.slug,
    url: category.url
  }))
}

export default getAllCategories
