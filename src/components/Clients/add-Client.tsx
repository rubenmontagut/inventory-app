import { Client } from "@/types/Client";
import ModalDialog from "../Dialogs/modal-dialog";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";

interface AddEditClientProps {
  client?: Client;
}

export default function AddEditClient(props: AddEditClientProps) {
  const [form, setForm] = useState<Client>({
    id: NaN,
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  return (
    <ModalDialog
      trigger={
        <button
          className={`${
            props.client
              ? "w-full bg-white hover:bg-gray-200 px-4 py-2 rounded-lg"
              : "btn-add h-min"
          }`}
        >
          {props.client ? "Editar" : "Añadir Cliente"}
        </button>
      }
      title={props.client ? "Editar cliente" : "Añadir cliente"}
      description={
        props.client ? "Edita los datos del cliente" : "Añadir un nuevo cliente"
      }
      body={
        <form id="add-product-form" className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="name" className="text-left">
              Nombre
            </label>
            <input
              id="name"
              defaultValue={props.client ? props.client.name : form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
            />
          </div>

          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="address" className="text-left">
              Dirección
            </label>
            <input
              id="address"
              defaultValue={props.client ? props.client.address : form.address}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="phone" className="text-left">
              Teléfono
            </label>
            <input
              id="phone"
              defaultValue={props.client ? props.client.phone : form.phone}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="email" className="text-left">
              Email
            </label>
            <input
              id="email"
              defaultValue={props.client ? props.client.email : form.email}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </div>
        </form>
      }
      footer={
        <DialogClose className="btn-add" onClick={() => console.log(form)}>
          {props.client ? "Guardar" : "Añadir cliente"}
        </DialogClose>
      }
    ></ModalDialog>
  );
}
