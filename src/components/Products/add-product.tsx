import { Product } from "@/types/Product";
import { useState } from "react";
import ModalDialog from "../Dialogs/modal-dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import categories from "../../../data/categories.json";
import manufacturers from "../../../data/manufacturers.json";

export default function AddProduct() {
  const [form, setForm] = useState<Product>({
    name: "",
    category: "",
    model: "",
    stock: NaN,
    priceClient: NaN,
    priceManufacturer: NaN,
    manufacturerId: NaN,
  });
  return (
    <ModalDialog
      trigger={<button className="btn-add h-min">Añadir Producto</button>}
      title="Añadir Producto"
      description="Añade un nuevo producto"
      body={
        <form id="add-product-form" className="flex flex-col gap-4">
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
              <option selected disabled>
                Selecciona una categoría
              </option>
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
              defaultValue={""}
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
              defaultValue={""}
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
              defaultValue={""}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) =>
                setForm({
                  ...form,
                  priceManufacturer: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="manufacturer" className="text-left">
              Distribuidor
            </label>
            <select
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64 bg-white"
              onChange={(e) =>
                setForm({ ...form, manufacturerId: parseInt(e.target.value) })
              }
            >
              <option selected disabled>
                Selecciona un distribuidor
              </option>
              {manufacturers.map((manufacter) => (
                <option key={manufacter.id}>{manufacter.name}</option>
              ))}
            </select>
          </div>
        </form>
      }
      footer={
        <DialogClose className="btn-add" onClick={() => console.log(form)}>
          Añadir producto
        </DialogClose>
      }
    ></ModalDialog>
  );
}
