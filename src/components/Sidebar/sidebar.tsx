import "./sidebar.css";
import { useAuth } from "@/hooks/useAuth";
import useUser from "@/hooks/useUser";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const { logout } = useAuth();
  const { getUserInfo } = useUser();
  const { userName, userLastName, userImage } = getUserInfo();
  const handleLogout = () => {
    logout();
  };
  return (
    <div
      id="sidebar"
      className="flex flex-col items-start h-full pb-10 justify-between"
    >
      <ul className="flex flex-col gap-5 items-start">
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/categorias">Categorías</NavLink>
        </li>
        <li>
          <NavLink to="/distribuidores">Distribuidores</NavLink>
        </li>
        <li>
          <NavLink to="/clientes">Clientes</NavLink>
        </li>
        <li>
          <NavLink to="/pedidos">Pedidos</NavLink>
        </li>
        <li>
          <NavLink to="/envios">Envíos</NavLink>
        </li>
      </ul>
      <div className="flex flex-col gap-8 items-center w-full">
        <button className="btn-primary w-[9rem]">Nuevo pedido</button>
        <button className="btn-primary w-[9rem]">Crear envío</button>
      </div>

      <div className="flex flex-col justify-end gap-12 items-center">
        <div className="flex items-center gap-6">
          <img
            src={userImage}
            alt="profile"
            className="w-16 h-16 rounded-full border border-gray-800"
          />
          <h1 className="text-lg font-semibold">
            {userName} {userLastName}
          </h1>
        </div>
        <button className="flex gap-4 text-lg" onClick={handleLogout}>
          <LogOut size={28} />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
