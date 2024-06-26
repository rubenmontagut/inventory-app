import clientOrders from "../../../data/clientOrders.json";

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
import useClient from "@/hooks/useClient";
import { ClientOrder } from "@/types/ClientOrder";
export default function Envios() {
  const getClientName = (id: number) => {
    const { getClientById } = useClient();
    const client = getClientById(id);

    if (!client) return "";
    return client.name;
  };

  return (
    <>
      <h1 className="section-title">Pedidos</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Cliente</TableHead>
            <TableHead className="text-left">Fecha</TableHead>
            <TableHead className="text-left">Total</TableHead>
            <TableHead className="text-left">Detalles Envío</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientOrders.map((order: ClientOrder) => (
            <TableRow key={order.id}>
              <TableCell className="text-left">
                {getClientName(order.client_id)}
              </TableCell>
              <TableCell className="text-left">{order.order_date}</TableCell>
              <TableCell className="text-left">{order.total}€</TableCell>
              <TableCell>
                <NavLink className={`block w-fit`} to={`/envios/${order.id}`}>
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
