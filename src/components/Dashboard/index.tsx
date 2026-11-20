import { Note } from "../Note";
import type { NoteType } from "../../types";
import { useRef, useState } from "react";

export const Dashboard = ({
  notes,
  updateNote,
  deleteNote,
}: {
  notes: NoteType[];
  updateNote(id: number, patch: Partial<NoteType>): void;
  deleteNote(id: number): void;
}) => {
  const [dragging, setDragging] = useState(false);
  const [overTrash, setOverTrash] = useState(false);
  const trashRef = useRef<HTMLDivElement>(null);

  const isOverTrash = (e: MouseEvent | TouchEvent) => {
    const r = trashRef.current?.getBoundingClientRect();
    if (!r) return false;
    const point = "touches" in e ? (e.touches[0] ?? e.changedTouches[0]) : e;
    return (
      point.clientX >= r.left &&
      point.clientX <= r.right &&
      point.clientY >= r.top &&
      point.clientY <= r.bottom
    );
  };

  if (!notes?.length) return <div>No notes added yet</div>;
  return (
    <div className="min-h-full">
      {notes.map((note: NoteType) => (
        <Note
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDragStart={() => setDragging(true)}
          onDrag={(e) => setOverTrash(isOverTrash(e))}
          onDragEnd={(e) => {
            if (isOverTrash(e)) deleteNote(note.id);
            setDragging(false);
            setOverTrash(false);
          }}
        />
      ))}

      {dragging && (
        <div
          ref={trashRef}
          className={`absolute bottom-6 right-6 cursor-pointer flex h-20 w-20 items-center justify-center rounded-full text-2xl ${
            overTrash ? "bg-red-500" : "bg-neutral-700"
          }`}
        >
          🗑️
        </div>
      )}
    </div>
  );
};
