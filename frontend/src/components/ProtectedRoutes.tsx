import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Skeleton from "./Skeleton";

const ProtectedRoutes = () => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) return <Skeleton />;
  if (!user) {
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }
  return <Outlet />;
};

export default ProtectedRoutes;
