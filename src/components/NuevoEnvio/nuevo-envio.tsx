import { useEffect, useState } from "react";
import products from "../../../data/products.json";
import { Product } from "@/types/Product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MinusCircle, PlusCircle } from "lucide-react";
import { QuantityMap } from "@/types/QuantityMap";

/* falta hacer la logica para crear un clientOrder y crear los clientOrderDetails para cada producto con quantity>0 */

export default function NuevoEnvio() {
  const [quantities, setQuantities] = useState(() =>
    products.reduce((acc: QuantityMap, product) => {
      acc[product.model] = 0;
      return acc;
    }, {})
  );

  const [canOrder, setCanOrder] = useState<boolean>(false);

  useEffect(() => {
    const hasAnyQuantity = Object.values(quantities).some(
      (quantity) => quantity > 0
    );
    setCanOrder(hasAnyQuantity);
  }, [quantities]);

  const handleQuantityChange = (model: string, value: number) => {
    setQuantities({
      ...quantities,
      [model]: Math.max(0, value),
    });
  };

  const handleIncrement = (model: string) => {
    setQuantities({
      ...quantities,
      [model]: isNaN(quantities[model]) ? 1 : quantities[model] + 1,
    });
  };

  const handleDecrement = (model: string) => {
    setQuantities({
      ...quantities,
      [model]: Math.max(0, quantities[model] - 1),
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Order quantities:", quantities);
  };

  return (
    <>
      <h1 className="section-title">Nuevo pedido</h1>

      <form onSubmit={handleSubmit} className="overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-left">Nombre</TableHead>
              <TableHead className="text-left">Categoría</TableHead>
              <TableHead className="text-left">Modelo</TableHead>
              <TableHead className="text-left">Stock</TableHead>
              <TableHead className="text-left">Precio</TableHead>
              <TableHead className="text-left">Cantidad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: Product) => (
              <TableRow key={product.model}>
                <TableCell className="text-left">{product.name}</TableCell>
                <TableCell className="text-left">{product.category}</TableCell>
                <TableCell className="text-left">{product.model}</TableCell>
                <TableCell className="text-left">{product.stock}</TableCell>
                <TableCell className="text-left">
                  {product.priceClient}€
                </TableCell>
                <TableCell className="text-left flex gap-4">
                  <input
                    type="number"
                    className="px-4 py-2 border-2 border-gray-400 rounded-lg"
                    value={
                      isNaN(quantities[product.model])
                        ? 0
                        : quantities[product.model]
                    }
                    onChange={(e) =>
                      handleQuantityChange(
                        product.model,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleIncrement(product.model)}
                    className="text-green-500"
                  >
                    <PlusCircle />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecrement(product.model)}
                    className="text-red-500"
                  >
                    <MinusCircle />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
      {Object.values(quantities).find((quantity) => quantity > 0) && (
        <button
          type="submit"
          className={`mt-4 px-4 py-2 ${
            canOrder ? "btn-primary" : "btn-not-allowed"
          } text-white rounded-lg`}
          disabled={!canOrder}
        >
          Submit Order
        </button>
      )}
    </>
  );
}
