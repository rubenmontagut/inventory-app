import { useAuth } from '@/hooks/useAuth2'

export default function Home() {
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}
