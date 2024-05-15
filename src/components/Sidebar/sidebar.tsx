import { Link } from 'react-router-dom'
import './sidebar.css'
import { useAuth } from '@/hooks/useAuth'
import useUser from '@/hooks/useUser'
import { LogOut } from 'lucide-react'

export default function SideBar() {
  const { logout } = useAuth()
  const { getUserInfo } = useUser()
  const { userName, userLastName, userImage } = getUserInfo()
  const handleLogout = () => {
    logout()
  }
  return (
    <div className="flex flex-col gap-20 items-start h-full pb-10">
      <ul className="flex flex-col gap-5 items-start">
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/categorias">Categorías</Link>
        </li>
        <li>
          <Link to="/distribuidores">Distribuidores</Link>
        </li>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>
      </ul>
      <button className="btn-primary">Nuevo pedido</button>
      <button className="btn-primary">Crear envío</button>

      <div className="flex flex-col flex-1 justify-end gap-6">
        <div className="flex items-center gap-6">
          <h1 className="text-lg">
            {userName} {userLastName}
          </h1>
          <img
            src={userImage}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <button className="flex gap-4 text-lg" onClick={handleLogout}>
          <LogOut size={28} />
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
