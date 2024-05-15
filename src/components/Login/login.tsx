import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router'
import users from '../../../data/users.json'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (users.find((user) => user.email === email)) {
      login(email)
      navigate('/productos')
    } else {
      alert('Invalid email')
    }
  }
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 items-center justify-center h-screen"
      >
        <div className="flex gap-4 items-center">
          <input
            id="email"
            type="text"
            value={email}
            className="border-2 border-gray-400 rounded-lg px-4 py-2 w-72"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            id="password"
            type="password"
            value={password}
            className="border-2 border-gray-400 rounded-lg px-4 py-2 w-72"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}
