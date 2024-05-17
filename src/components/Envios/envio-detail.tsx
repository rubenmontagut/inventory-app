import useClientOrder from "@/hooks/useClientOrder";
import { useParams } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClientOrderDetails } from "@/types/OrderDetails";

export default function EnvioDetail() {
  const { id } = useParams();

  const { orderDetails } = useClientOrder(id!);

  return (
    <>
      <h1 className="section-title">Detalle del pedido</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Modelo</TableHead>
            <TableHead className="text-left">Precio unidad</TableHead>
            <TableHead className="text-left">Cantidad</TableHead>
            <TableHead className="text-left">Precio total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderDetails.map((detail: ClientOrderDetails) => (
            <TableRow key={detail.id}>
              <TableCell className="text-left">
                {detail.product_model}
              </TableCell>
              <TableCell className="text-left">
                {detail.total / detail.quantity}
              </TableCell>
              <TableCell className="text-left">{detail.quantity}</TableCell>
              <TableCell className="text-left">{detail.total}€</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-right" colSpan={3}>
              Total:
            </TableCell>
            <TableCell className="text-left">
              {orderDetails.reduce(
                (acc: number, detail: ClientOrderDetails) => acc + detail.total,
                0
              )}
              €
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
