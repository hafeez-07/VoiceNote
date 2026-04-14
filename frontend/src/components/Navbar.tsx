import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";
import type { NoteType } from "../types/note";
import useAuth from "../../hooks/useAuth.ts";
import logo from "../assets/VaultNote.png";

type Props = {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const Navbar = ({ setNotes }: Props) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setNotes([]);
      navigate("/", {
        replace: true,
      });
      setUser(null);
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <div className="border-b border-zinc-600 bg-black px-5 py-2 text-white">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-12"/>
          <h1 className="text-2xl text-orange-400 font-serif font-bold">VoiceNote</h1>
        </div>


        <div className="flex items-center gap-5">
          <NavLink to="/app" className="hover:text-orange-400">
            Home
          </NavLink>
          <NavLink to="settings" className="hover:text-orange-400">
            Settings
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
