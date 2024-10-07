import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoutes() {
  const { accessToken, refreshToken } = useSelector((s) => s.auth);

  if (accessToken) return <Navigate to={"/"} />;

  return <Outlet />;
}
