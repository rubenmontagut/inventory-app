import { Ellipsis } from "lucide-react";
import products from "../../../data/products.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EditProduct from "./edit-product";
import { Product } from "@/types/Product";
import DeleteDialog from "../Dialogs/delete-dialog";
import AddProduct from "./add-product";

export default function Productos() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1 className="section-title">Productos</h1>
        <AddProduct />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Nombre</TableHead>
            <TableHead className="text-left">Categoría</TableHead>
            <TableHead className="text-left">Modelo</TableHead>
            <TableHead className="text-left">Stock</TableHead>
            <TableHead className="text-left">Precio</TableHead>
            <TableHead className="text-left">Actions</TableHead>
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
              <TableCell className="text-left">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="button">
                      <Ellipsis />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit">
                    <div className="flex flex-col">
                      <EditProduct {...product} />
                      <DeleteDialog
                        description="¿Estás seguro de que quieres eliminar este producto?"
                        title="Eliminar Producto"
                        handleDeleteCategory={() => alert("Producto eliminado")}
                      >
                        <button className="w-full hover:bg-gray-200 px-4 py-2 rounded-lg">
                          Eliminar
                        </button>
                      </DeleteDialog>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
