import { Manufacturer } from "@/types/Manufacturer";
import { useState } from "react";
import ModalDialog from "../Dialogs/modal-dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function AddManufacturer() {
  const [form, setForm] = useState<Manufacturer>({
    id: NaN,
    name: "",
    image: "",
    address: "",
    phone: "",
    email: "",
  });
  return (
    <ModalDialog
      trigger={<button className="btn-add h-min">Añadir Distribuidor</button>}
      title="Añadir Distribuidor"
      description="Añade un nuevo distribuidor"
      body={
        <form id="add-product-form" className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="name" className="text-left">
              Nombre
            </label>
            <input
              id="name"
              defaultValue={form.name}
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
              defaultValue={form.address}
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
              defaultValue={""}
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
              defaultValue={""}
              className="border-2 border-gray-400 rounded-lg px-4 py-2 w-64"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex gap-4 justify-between items-center">
            <label htmlFor="image" className="text-left">
              Imagen
            </label>
            <input
              id="image"
              type="file"
              className=""
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>
        </form>
      }
      footer={
        <DialogClose className="btn-add" onClick={() => console.log(form)}>
          Añadir Distribuidor
        </DialogClose>
      }
    ></ModalDialog>
  );
}
