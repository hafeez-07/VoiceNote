import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import type { NoteType } from "../types/note";
import { toast } from "sonner";
import { deleteNote, getNote } from "../api/notesApi";
import { useEffect, useState } from "react";

type NoteProps = {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const Note = ({ notes, setNotes }: NoteProps) => {
  const { id } = useParams();
  const [note, setNote] = useState<NoteType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      try {
        const data = await getNote(id);

        setNote(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNote();
  }, [id]);

  const deleteOneNote = async (id: string) => {
    //save notes , in case if the delete fails
    const previousNotes = [...notes];

    toast.warning("Confirm delete?", {
      description: "This will permanently delete the note",
      duration: 6000,
      action: {
        label: "delete",
        onClick: async () => {
          setNotes((prev) => prev.filter((note) => note._id != id));
          setNote(undefined);
          navigate("/app", {
            replace: true,
          });

          try {
            await deleteNote(id);
          } catch (err) {
            setNotes(previousNotes);
          }
          toast.success("Deleted successfully", {
            duration: 1000,
          });
        },
      },
      cancel: {
        label: "cancel",
        onClick: () => {},
      },
    });
  };

  if (!id) {
    return <div className="mt-5 text-sm text-red-400">Invalid note id</div>;
  }

  if (!note) {
    return (
      <div
        className="mx-auto max-w-5xl animate-pulse px-5"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="mt-5 flex flex-col space-y-3 rounded-xl border border-white/10 bg-white/5 p-0 shadow-lg shadow-black backdrop-blur-md">
          <div className="border-b border-zinc-700 px-6 py-3">
            <div className="h-9 w-3/5 rounded bg-zinc-800" />
          </div>
          <div className="space-y-3 px-6 py-2">
            <div className="h-4 w-full rounded bg-zinc-800" />
            <div className="h-4 w-11/12 rounded bg-zinc-800" />
            <div className="h-4 w-10/12 rounded bg-zinc-800" />
            <div className="h-4 w-9/12 rounded bg-zinc-800" />
            <div className="h-4 w-4/5 rounded bg-zinc-800" />
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-zinc-700 bg-white/10 px-6 py-3">
            <div className="h-4 w-24 rounded bg-zinc-800" />
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded bg-zinc-800" />
              <div className="h-4 w-4 rounded bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5">
      <div className="mt-5 flex flex-col space-y-3 rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-black backdrop-blur-md transition-all duration-300">
        <h4 className="border-b border-zinc-700 px-6 py-3 text-3xl font-semibold">
          {note.title}
        </h4>
        <div className="text-md grow border-zinc-700 px-6 leading-relaxed whitespace-pre-line">
          {note.body}
        </div>
        <div className="mt-auto flex justify-between rounded-b-xl border-t border-zinc-700 bg-white/10 px-6 py-3 text-sm">
          <div>
            {new Date(note.updatedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={`/app/edit/${note._id}`}
              className="rounded transition-all duration-300 hover:cursor-pointer hover:text-blue-500"
            >
              <FaPen className="text-sky-600 transition duration-300 ease-in hover:text-sky-400" />
            </Link>

            <button className="rounded transition-all duration-300 hover:cursor-pointer hover:text-red-500">
              <FaTrash
                className="text-zinc-500 transition duration-300 ease-in hover:text-zinc-300"
                onClick={() => deleteOneNote(id)}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
