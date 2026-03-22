import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="px-2 text-white bg-linear-to-bl from-zinc-900 to-zinc-800 min-h-screen flex  justify-between items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
