import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import HomeSkeleton from "./HomeSkeleton";
import SettingsSkeleton from "./SettingsSkeleton";

const ProtectedRoutes = () => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    if (location.pathname.startsWith("/app/settings")) {
      return <SettingsSkeleton />;
    }

    return <HomeSkeleton />;
  }
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
