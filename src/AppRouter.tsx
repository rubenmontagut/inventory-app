import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import { useAuth } from './hooks/useAuth2'

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
      />
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
