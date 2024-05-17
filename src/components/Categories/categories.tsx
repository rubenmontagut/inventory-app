import React, { useState } from "react";
import categories from "../../../data/categories.json";
import { type Category } from "../../types/Category";
import "./categories.css";
import AddEditCategoryDialog from "../Dialogs/add-edit-category-dialog";
import DeleteDialog from "../Dialogs/delete-dialog";

export default function Categorias() {
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);
  const [newCategory, setNewCategory] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const handleSaveCategory = () => {
    if (newCategory.trim() === "") {
      alert("El nombre de la categoría no puede estar vacío");
    } else {
      alert(`Nueva categoría ${newCategory}!`);
      setNewCategory("");
    }
  };

  return (
    <>
      <div className="section-title-button">
        <h1 className="section-title">Categorías</h1>
        <AddEditCategoryDialog
          buttonText="Añadir Categoría"
          description="Añade una nueva categoría para tus productos"
          saveButtonText="Crear Categoría"
          title="Nueva Categoría"
          create={true}
          handleInputChange={handleInputChange}
          handleSaveCategory={handleSaveCategory}
        />
      </div>
      <ul className="categories-list">
        {categories.map((category: Category) => (
          <li key={category.id}>
            <button
              className={`category ${
                selectedCategory == category ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="buttons-actions">
        {selectedCategory !== undefined && (
          <div className="flex gap-8">
            <AddEditCategoryDialog
              buttonText="Editar Categoría"
              description={`Edita la categoría ${selectedCategory.name}`}
              saveButtonText="Editar Categoría"
              title="Editar Categoría"
              create={false}
              handleInputChange={handleInputChange}
              handleSaveCategory={handleSaveCategory}
            />
            <DeleteDialog
              description="¿Estás seguro de que quieres eliminar esta categoría?"
              title="Eliminar Categoría"
              handleDeleteCategory={() => alert("Categoría eliminada")}
            >
              <button className="btn-delete">Eliminar categoría</button>
            </DeleteDialog>

            <button
              className="btn-cancel"
              onClick={() => {
                setSelectedCategory(undefined);
              }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </>
  );
}
