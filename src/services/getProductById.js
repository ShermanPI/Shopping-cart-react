const getProductById = async (id) => {
  const res = await fetch(import.meta.env.VITE_API_URL + '/products/' + id)
  const data = await res.json()
  return data
}

export default getProductById
