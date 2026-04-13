export type NoteType = {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNote = Omit<NoteType, "_id" | "createdAt" | "updatedAt">;

export type UpdateNote = CreateNote;
