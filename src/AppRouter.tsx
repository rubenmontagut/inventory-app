import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import { useAuth } from "./hooks/useAuth";
import Pedidos from "./components/Orders/pedidos";
import Productos from "./components/Products/products";
import Categorias from "./components/Categories/categories";
import Manufacturers from "./components/Manufacturers/manufacturers";
import ManufacturerDetail from "./components/Manufacturers/manufacturer-detail";

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
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/distribuidores" element={<Manufacturers />} />
        <Route path="/distribuidores/:id" element={<ManufacturerDetail />} />
      </Route>
    </Routes>
  );
}

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
