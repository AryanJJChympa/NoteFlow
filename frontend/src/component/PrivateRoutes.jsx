import { Navigate } from "react-router";

export default function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}