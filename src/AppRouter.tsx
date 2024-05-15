import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/login'
import { useAuth } from './hooks/useAuth'
import Pedidos from './components/pedidos'
import Productos from './components/products'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/productos" element={<Productos />} />
      </Route>
    </Routes>
  )
}

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
