import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";
import type { Note } from "../types/note";
import useAuth from "../../hooks/useAuth.ts";

type Props = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const Navbar = ({ setNotes }: Props) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setNotes([]);
      setUser(null);
      navigate("/");
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <div className="bg-gray-950 text-white py-2 px-5 shadow-2xl shadow-orange-400 ">
      <div className=" flex justify-between items-center mx-auto">
        <h1 className="text-2xl font-bold">Notes App</h1>

        <div className="flex gap-5 items-center">
          <div>{user?.username}</div>
          <NavLink to="/app" className="hover:text-orange-400">
            Home
          </NavLink>
          <button onClick={handleLogout} className="destructive-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
