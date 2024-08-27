async function getAllCategories () {
  const res = await fetch('https://dummyjson.com/products/categories')
  const data = await res.json()
  return data.map(category => ({
    name: category.name,
    slug: category.slug,
    url: category.url
  }))
}

export default getAllCategories
