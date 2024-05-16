import { Manufacturer } from "@/types/Manufacturer";
import { Product } from "@/types/Product";
import { useState, useEffect } from "react";
import manufacturers from "../../data/manufacturers.json";
import products from "../../data/products.json";

export default function useManufacturer({ id }: { id: number }) {
  const [manufacturer, setManufacturer] = useState<Manufacturer>(
    {} as Manufacturer
  );
  const [manufacturerProducts, setManufacturerProducts] = useState<Product[]>(
    []
  );

  useEffect(() => {
    if (!id) return;
    const manufacturerFound = manufacturers.find(
      (manufacturer: Manufacturer) => manufacturer.id === id
    );
    if (manufacturerFound) {
      setManufacturer(manufacturerFound);
      const productsFound = products.filter(
        (product: Product) => product.manufacturerId === id
      );
      setManufacturerProducts(productsFound);
    }
  }, [id]);

  return { manufacturer, manufacturerProducts };
}
