export const getProductByName = async (name) => {
  const response = await fetch(`https://api.example.com/products?name=${name}`)
  return response.json()
}
