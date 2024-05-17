import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import { useAuth } from "./hooks/useAuth";
import Pedidos from "./components/Pedidos/pedidos";
import Productos from "./components/Products/products";
import Categorias from "./components/Categories/categories";
import Manufacturers from "./components/Manufacturers/manufacturers";
import ManufacturerDetail from "./components/Manufacturers/manufacturer-detail";
import Clients from "./components/Clients/clients";
import Envios from "./components/Envios/envios";
import PedidoDetail from "./components/Pedidos/pedido-detail";
import EnvioDetail from "./components/Envios/envio-detail";
import NotFound from "./components/NotFound";
import NuevoPedido from "./components/NuevoPedido/nuevo-pedido";
import NuevoEnvio from "./components/NuevoEnvio/nuevo-envio";

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
        <Route path="/pedidos/:id" element={<PedidoDetail />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/distribuidores" element={<Manufacturers />} />
        <Route path="/distribuidores/:id" element={<ManufacturerDetail />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/envios/:id" element={<EnvioDetail />} />
        <Route path="/nuevo-pedido" element={<NuevoPedido />} />
        <Route path="/nuevo-envio" element={<NuevoEnvio />} />
        <Route path="*" element={<NotFound />} />
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
