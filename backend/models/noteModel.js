import mongoose from "mongoose";

const NoteSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Note", NoteSchema);

export default Note;
