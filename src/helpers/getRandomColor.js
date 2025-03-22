export const getRandomColor = () => {
  const colors = ['tomato', 'lightgreen', 'lightblue', 'orange', 'lightpink']
  const randomIndex = Math.round(Math.random() * (colors.length - 1))
  return colors[randomIndex]
}
