import CategoriesCarrousel from '../CategoriesCarrousel/CategoriesCarrousel'

export default function Filters ({ categories, setLoading }) {
  return (
    <div>

      <CategoriesCarrousel
        categoriesArray={categories}
      />
    </div>
  )
}
