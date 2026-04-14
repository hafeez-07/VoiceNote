import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading...</p>;
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
