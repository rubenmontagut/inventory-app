import { useParams } from "react-router";
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
import useManufacturer from "@/hooks/useManufacturer";

export default function ManufacturerDetail() {
  const { id } = useParams();
  const { manufacturer, manufacturerProducts } = useManufacturer({
    id: Number(id),
  });

  return (
    <>
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
    </>
  );
}
