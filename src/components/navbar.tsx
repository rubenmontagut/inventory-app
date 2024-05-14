import { useAuth } from '@/hooks/useAuth'
import useUser from '@/hooks/useUser'
import { LogOut } from 'lucide-react'

export default function NavBar() {
  const { logout } = useAuth()
  const { getUserInfo } = useUser()
  const { userName, userLastName, userImage } = getUserInfo()
  const handleLogout = () => {
    logout()
  }
  return (
    <nav className="flex justify-between bg-white px-8 py-10 rounded-t-3xl gap-10 items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-lg">
          {userName} {userLastName}
        </h1>
        <img src={userImage} alt="profile" className="w-12 h-12 rounded-full" />
      </div>
      <button className="flex gap-4 text-lg" onClick={handleLogout}>
        <LogOut size={28} />
        Cerrar sesión
      </button>
    </nav>
  )
}
