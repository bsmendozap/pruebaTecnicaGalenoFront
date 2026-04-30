import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Product from "../pages/products/Products";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/products"
        element={
          <MainLayout>
            <Product />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;