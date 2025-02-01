export const getProductByName = async (query) => {
  const response = await fetch(import.meta.env.VITE_API_URL + `/products/search?q=${query}`)
  return response.json()
}
