import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";
import type { NoteType } from "../types/note";
import useAuth from "../../hooks/useAuth.ts";
import logo from "../assets/VaultNote.png";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

type Props = {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const Navbar = ({ setNotes }: Props) => {
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  console.log();

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logoutUser();
      setNotes([]);
      navigate("/", {
        replace: true,
      });
      setUser(null);
    } catch (err) {
      throw new Error("Something went wrong");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="border-b border-zinc-600 bg-black py-2 pr-5 pl-3 text-white">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-12" />
          <h1 className="font-serif text-2xl font-bold text-orange-400">
            VoiceNote
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <NavLink to="/app" className="hover:text-orange-400">
            Home
          </NavLink>
          <NavLink to="settings" className="hover:text-orange-400">
            Settings
          </NavLink>
          <button
            disabled={loggingOut}
            onClick={handleLogout}
            className="hover:scale-110 hover:text-orange-400"
          >
            {loggingOut ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
            ) : (
              <FiLogOut />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
