import { useState } from "react";
import manufacturers from "../../../data/manufacturers.json";
import useManufacturer from "@/hooks/useManufacturer";
import { Product } from "@/types/Product";
import { Manufacturer } from "@/types/Manufacturer";

export default function NuevoPedido() {
  const [manufacturerProducts, setManufacturerProducts] = useState<Product[]>(
    []
  );

  const { getManufacturer, getManufacturerProducts } = useManufacturer();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedManufacturer = manufacturers.find(
      (manufacturer) => manufacturer.name === event.target.value
    );
    if (selectedManufacturer) {
      const manufacturer = getManufacturer(selectedManufacturer.id);
      if (manufacturer) {
        const products = getManufacturerProducts(manufacturer.id);
        setManufacturerProducts(products);
      }
    }
  };

  return (
    <>
      <h1 className="section-title">Nuevo pedido</h1>
      <div className="flex items-center justify-start gap-4">
        <label htmlFor="manufacturers" className="text-xl">
          Elija el distribuidor
        </label>
        <select
          id="manufacturers"
          className="bg-white border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
          onChange={handleChange}
        >
          <option selected disabled>
            Selecciona un distribuidor
          </option>
          {manufacturers.map((manufacturer) => (
            <option key={manufacturer.id}>{manufacturer.name}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-start gap-4 mt-4">
        <label htmlFor="products" className="text-xl">
          Elija los productos
        </label>
        <select
          id="products"
          className="bg-white border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
        >
          <option selected disabled>
            Selecciona un producto
          </option>
          {manufacturerProducts.map((product) => (
            <option key={product.model}>{product.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
