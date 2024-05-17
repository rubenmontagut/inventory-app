import AddEditClient from "./add-Client";
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
import { Client } from "@/types/Client";

import clients from "../../../data/clients.json";
import { Ellipsis } from "lucide-react";
import DeleteDialog from "../Dialogs/delete-dialog";

export default function Clients() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1 className="section-title">Clientes</h1>
        <AddEditClient />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Nombre</TableHead>
            <TableHead className="text-left">Dirección</TableHead>
            <TableHead className="text-left">Teléfono</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client: Client) => (
            <TableRow key={client.id}>
              <TableCell className="text-left">{client.name}</TableCell>
              <TableCell className="text-left">{client.address}</TableCell>
              <TableCell className="text-left">{client.phone}</TableCell>
              <TableCell className="text-left">{client.email}</TableCell>
              <TableCell className="text-left">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="button">
                      <Ellipsis />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit">
                    <div className="flex flex-col">
                      <AddEditClient client={client} />
                      <DeleteDialog
                        description="¿Estás seguro de que quieres eliminar este cliente?"
                        title="Eliminar cliente"
                        handleDeleteCategory={() => alert("Cliente eliminado")}
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
