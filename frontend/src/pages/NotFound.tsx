import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen gap-3 flex-col items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900">
      <div className="text-3xl text-white font-semibold">
        Error <span className="text-red-400 font-bold ">404</span> : Page Not Found
      </div>
      <Link to="/app" className=" px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in">Go to home</Link>
    </div>
  );
};
export default NotFound;
