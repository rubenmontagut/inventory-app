import { Product } from "@/types/Product";
import ModalDialog from "../Dialogs/modal-dialog";
import { DialogClose } from "../ui/dialog";
import categories from "../../../data/categories.json";
import { useState } from "react";

export default function EditProduct(product: Product) {
  const [form, setForm] = useState<Product>({
    name: product.name,
    category: product.category,
    model: product.model,
    stock: product.stock,
    priceClient: product.priceClient,
    priceManufacturer: product.priceManufacturer,
    manufacturerId: product.manufacturerId,
  });

  return (
    <ModalDialog
      trigger={
        <button className="w-full hover:bg-gray-200 px-4 py-2 rounded-lg">
          Editar
        </button>
      }
      title="Editar Producto"
      description={`Edita ${product.name}`}
      body={
        <form id="edit-product-form" className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="name" className="text-left">
              Nombre
            </label>
            <input
              id="name"
              defaultValue={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="category" className="text-left">
              Categoría
            </label>
            <select
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64 bg-white"
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {categories.map((category) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="model" className="text-left">
              Modelo
            </label>
            <input
              id="model"
              defaultValue={form.model}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) => setForm({ ...form, model: e.target.value })}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="stock" className="text-left">
              Stock
            </label>
            <input
              id="stock"
              defaultValue={form.stock}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) =>
                setForm({ ...form, stock: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="price" className="text-left">
              Precio
            </label>
            <input
              id="price"
              defaultValue={form.priceClient}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) =>
                setForm({ ...form, priceClient: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="priceManufacturer" className="text-left">
              Precio Fabricante
            </label>
            <input
              id="priceManufacturer"
              defaultValue={form.priceManufacturer}
              disabled
              className="text-gray-500 px-4 py-2 w-64 bg-white"
              onChange={(e) =>
                setForm({
                  ...form,
                  priceManufacturer: parseInt(e.target.value),
                })
              }
            />
          </div>
        </form>
      }
      footer={
        <DialogClose>
          <button
            type="submit"
            className="btn-add"
            onClick={() => console.log(form)}
          >
            Editar producto
          </button>
        </DialogClose>
      }
    ></ModalDialog>
  );
}
