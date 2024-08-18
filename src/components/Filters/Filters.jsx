export default function Filters ({ setFilters, filters }) {
  const handleCategoryFilter = (e) => {
    setFilters({ ...filters, category: e.target.value })
  }

  return (
    <div>
      <select onChange={handleCategoryFilter}>
        <option value='All'> All </option>
        <option value='beauty'> beauty </option>
        <option value='fragrances'> fragrances </option>
        <option value='groceries'> groceries </option>
      </select>
    </div>
  )
}
