import { Manufacturer } from "@/types/Manufacturer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import manufacturers from "../../../data/manufacturers.json";
import products from "../../../data/products.json";
import "./manufacturer-detail.css";
import { Product } from "@/types/Product";
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
import { Ellipsis } from "lucide-react";
import EditProduct from "../Products/edit-product";
import DeleteDialog from "../Dialogs/delete-dialog";

export default function ManufacturerDetail() {
  const [manufacturer, setManufacturer] = useState<Manufacturer>(
    {} as Manufacturer
  );
  const [manufacturerProducts, setManufacturerProducts] = useState<Product[]>(
    []
  );
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const manufacturerFound = manufacturers.find(
      (manufacturer) => manufacturer.id === parseInt(id)
    );
    if (manufacturerFound) {
      setManufacturer(manufacturerFound);
      const productsFound = products.filter(
        (product) => product.manufacturerId === parseInt(id)
      );
      setManufacturerProducts(productsFound);
    }
  }, [id]);

  return (
    <div>
      <div className="manufacturer-detail-header">
        <div className="manufacturer-detail-info">
          <h1 className="section-title">{manufacturer.name}</h1>
          <div className="manufacturer-detail-description">
            <p>{manufacturer.address}</p>
            <p>{manufacturer.phone}</p>
            <p>{manufacturer.email}</p>
          </div>
        </div>
        <img
          src={manufacturer.image}
          alt="Distribuidor"
          className="manufacturer-detail-image"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Nombre</TableHead>
            <TableHead className="text-left">Categoría</TableHead>
            <TableHead className="text-left">Modelo</TableHead>
            <TableHead className="text-left">Stock</TableHead>
            <TableHead className="text-left">Precio Distribuidor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {manufacturerProducts.map((product: Product) => (
            <TableRow key={product.model}>
              <TableCell className="text-left">{product.name}</TableCell>
              <TableCell className="text-left">{product.category}</TableCell>
              <TableCell className="text-left">{product.model}</TableCell>
              <TableCell className="text-left">{product.stock}</TableCell>
              <TableCell className="text-left">
                {product.priceManufacturer}€
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
