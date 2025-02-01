async function getAllTheProducts () {
  const res = await fetch(import.meta.env.VITE_API_URL + '/products')
  const data = await res.json()

  return data
}

export default getAllTheProducts
