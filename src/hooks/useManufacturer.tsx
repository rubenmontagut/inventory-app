import { Manufacturer } from "@/types/Manufacturer";
import { Product } from "@/types/Product";
import manufacturers from "../../data/manufacturers.json";
import products from "../../data/products.json";

export default function useManufacturer() {
  const getManufacturer = (id: number) => {
    const manufacturer = manufacturers.find(
      (manufacturer: Manufacturer) => manufacturer.id === id
    );
    return manufacturer;
  };

  const getManufacturerProducts = (id: number) => {
    const productsFound = products.filter(
      (product: Product) => product.manufacturerId === id
    );
    return productsFound;
  };

  return { getManufacturer, getManufacturerProducts };
}
