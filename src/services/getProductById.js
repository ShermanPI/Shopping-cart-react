const getProductById = async (id) => {
  const res = await fetch('https://dummyjson.com/products/' + id)
  const data = await res.json()
  return data
}

export default getProductById
