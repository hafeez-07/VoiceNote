import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import type { NoteType } from "../types/note";

type Props = {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const RootLayout = ({ setNotes }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar setNotes={setNotes} />
      <main className="grow bg-linear-to-br from-zinc-900 via-black to-zinc-950 py-8 text-white">
        
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
