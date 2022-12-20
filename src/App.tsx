import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Auth/Signup";
import "./asset/css/style.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AdminAddPoll from "./Component/Admin/AdminAddPoll";
import AdminEditPoll from "./Component/Admin/AdminEditPoll";
import AdminAddOption from "./Component/Admin/AdminAddOption";
import AdminRoute from "./PrivateRoute/AdminRoute";
import DashboardRoute from "./PrivateRoute/DashboardRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DashboardRoute>
              <AdminDashboard />
            </DashboardRoute>
          }
        />
        <Route
          path="/admin-add-poll"
          element={
            <AdminRoute>
              <AdminAddPoll />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-edit-poll/:id"
          element={
            <AdminRoute>
              <AdminEditPoll />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-add-option/:id"
          element={
            <AdminRoute>
              <AdminAddOption />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
