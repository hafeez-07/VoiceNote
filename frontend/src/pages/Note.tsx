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
    return <div className="mt-5 text-sm text-zinc-400">Loading note...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl px-5">
      <div className="mt-5 flex flex-col space-y-3 rounded-xl border border-white/10 bg-white/5  shadow-lg shadow-black backdrop-blur-md transition-all duration-300">
        <h4 className="px-6 border-b py-3 border-zinc-700  text-3xl font-semibold">
          {note.title}
        </h4>
        <div className="px-6 grow border-zinc-700 text-md whitespace-pre-line leading-relaxed">
          {note.body}
        </div>
        <div className="px-6 py-3 rounded-b-xl bg-white/10 border-zinc-700 mt-auto flex justify-between text-sm border-t">
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
              <FaPen className="text-sky-600 transition duration-300 ease-in hover:text-sky-400 " />
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
