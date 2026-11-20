import { Note } from "../Note";
import type { NoteType } from "../../types";

export const Dashboard = ({ notes }: { notes: NoteType[] }) => {
  return (
    <div className="flex flex-row justify-start flex-wrap gap-4">
      {notes.map((note: NoteType) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
};
