import NoteForm from "../components/NoteForm";
import Notes from "../components/Notes";
import type { NoteType } from "../types/note";

type Props = {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

const Home = ({ notes, setNotes }: Props) => {
  return (
    <div className="px-3">
      <NoteForm setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default Home;
