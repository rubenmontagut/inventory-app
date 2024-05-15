import categories from '../../../data/categories.json'
import { type Category } from '../../types/Category'
import './categories.css'

export default function Categorias() {
  return (
    <section className="section-wrapper">
      <div>
        <h1 className="section-title">Categorías</h1>
      </div>
      <ul>
        {categories.map((category: Category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </section>
  )
}
