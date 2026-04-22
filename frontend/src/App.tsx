import { fetchNotes } from "./api/notesApi.ts";
import { useEffect, useState } from "react";
import type { NoteType } from "./types/note.ts";

import Home from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import EditNote from "./pages/EditNote.tsx";
import Register from "./pages/Register.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Landing from "./pages/Landing.tsx";
import useAuth from "../hooks/useAuth.ts";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import Settings from "./pages/Settings.tsx";
import Note from "./pages/Note.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    //if user is logged out , return
    if (!user) {
      return;
    }

    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };
    loadNotes();
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/app",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <RootLayout setNotes={setNotes} />,
          children: [
            {
              index: true,
              element: <Home notes={notes} setNotes={setNotes} />,
            },
            {
              path: "note/:id",
              element: <Note notes={notes} setNotes={setNotes} />,
            },
            {
              path: "edit/:id",
              element: <EditNote notes={notes} setNotes={setNotes} />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },

    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
