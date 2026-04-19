import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { NoteType } from "../types/note";
import { updateNote, getNote } from "../api/notesApi";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const EditNote = ({ setNotes, notes }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const resizeRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!id) {
      navigate("/app");
      return;
    }

    const editingNoteState = notes.find((note) => note._id === id);

    //if note exist in state (Initial render)
    if (editingNoteState) {
      setTitle(editingNoteState.title);
      setBody(editingNoteState.body);
    }
    //if it does not , after refresh
    else {
      const fetchNote = async () => {
        try {
          const note = await getNote(id);
          setTitle(note.title);
          setBody(note.body);
        } catch (err) {
          navigate("/app", {
            replace: true,
          });
          toast.error("Note not found", {
            duration: 1000,
          });
        }
      };
      fetchNote();
    }
  }, [id, notes]);

  useEffect(() => {
    if (!resizeRef.current) return;
    adjustHeight(resizeRef.current);
  }, [body]);

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    adjustHeight(el);
    setBody(el.value);
  };

  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + 4 + "px";
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      return;
    }

    const savedNote = await updateNote(id!, { title, body });

    //now find note with same id and replace

    setNotes((prev) =>
      prev
        .map((note) => (note._id === savedNote._id ? savedNote : note))
        .sort(
          (a, b) =>
            new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf(),
        ),
    );

    navigate(-1);
    toast.success("updated successfully", {
      duration: 1000,
    });
  };

  return (
    <div className="mx-auto max-w-5xl rounded-xl bg-zinc-900">
      <h2 className="border-b border-zinc-700 px-4 py-2 text-2xl font-semibold">
        Update Note
      </h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-2 p-4">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="auth-input-field"
        />
        <textarea
          ref={resizeRef}
          rows={3}
          name="body"
          value={body}
          onChange={textAreaHandler}
          placeholder="write your note here.."
          className="auth-input-field max-h-90 resize-none"
        ></textarea>
        <input className="submit-button" type="submit" value="update" />
      </form>
    </div>
  );
};
export default EditNote;
