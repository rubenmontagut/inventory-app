import { useState } from 'react'
import categories from '../../../data/categories.json'
import { type Category } from '../../types/Category'
import './categories.css'

export default function Categorias() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <>
      <div>
        <h1 className="section-title">Categorías</h1>
      </div>
      <ul className="max-h-[80%] overflow-y-auto">
        {categories.map((category: Category) => (
          <li key={category.name}>
            <button
              className={`category ${
                selectedCategory == category.name ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedCategory(category.name)
              }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={`buttons flex flex-1 items-end gap-8 ${
          selectedCategory == '' ? 'justify-end' : 'justify-between'
        }`}
      >
        {selectedCategory && (
          <div className="flex gap-8">
            <button className="btn-edit">Editar categoría</button>
            <button className="btn-delete">Eliminar categoría</button>
            <button
              className="btn-cancel"
              onClick={() => {
                setSelectedCategory('')
              }}
            >
              Cancelar
            </button>
          </div>
        )}
        <button className="btn-add">Añadir Categoría</button>
      </div>
    </>
  )
}
