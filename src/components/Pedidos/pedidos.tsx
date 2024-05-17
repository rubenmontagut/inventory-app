import useManufacturer from "@/hooks/useManufacturer";
import manufacturerOrders from "../../../data/manufacturerOrders.json";
import { type ManufacturerOrder } from "../../types/ManufacturerOrder";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Pedidos() {
  const getManufacturerName = (id: number) => {
    const { getManufacturer } = useManufacturer();
    const manufacturer = getManufacturer(id);
    if (!manufacturer) return "";
    return manufacturer.name;
  };

  return (
    <>
      <h1 className="section-title">Pedidos</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Distribuidor</TableHead>
            <TableHead className="text-left">Fecha</TableHead>
            <TableHead className="text-left">Total</TableHead>
            <TableHead className="text-left">Detalles Pedido</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {manufacturerOrders.map((order: ManufacturerOrder) => (
            <TableRow key={order.id}>
              <TableCell className="text-left">
                {getManufacturerName(order.manufacturer_id)}
              </TableCell>
              <TableCell className="text-left">{order.order_date}</TableCell>
              <TableCell className="text-left">{order.total}€</TableCell>
              <TableCell>
                <NavLink className={`block w-fit`} to={`/pedidos/${order.id}`}>
                  <ArrowRight className="hover:translate-x-2 transition-all duration-200 cursor-pointer" />
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
