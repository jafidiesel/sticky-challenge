import { Note } from "../Note";
import type { NoteType } from "../../types";

export const Dashboard = ({
  notes,
  updateNote,
}: {
  notes: NoteType[];
  updateNote(id: number, patch: Partial<NoteType>): void;
}) => {
  if (!notes?.length) return <div>No notes added yet</div>;
  return (
    <div className="min-h-full">
      {notes.map((note: NoteType) => (
        <Note key={note.id} note={note} onUpdate={updateNote} />
      ))}
    </div>
  );
};
