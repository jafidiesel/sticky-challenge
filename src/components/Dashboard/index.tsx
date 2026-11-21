import { Note } from "../Note";
import type { NoteType } from "../../types";
import { useRef, useState } from "react";

export const Dashboard = ({
  notes,
  updatePosition,
  deleteNote,
  editNote
}: {
  notes: NoteType[];
  updatePosition(id: number, patch: Partial<NoteType>): void;
  deleteNote(id: number): void;
  editNote(id: number): void;
  
}) => {
  const [dragging, setDragging] = useState(false);
  const [overTrash, setOverTrash] = useState(false);
  const [overEdit, setOverEdit] = useState(false);
  const trashRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);

  const isOver = (e: MouseEvent | TouchEvent, el: HTMLElement | null) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const p = "touches" in e ? (e.touches[0] ?? e.changedTouches[0]) : e;
    return (
      p.clientX >= r.left &&
      p.clientX <= r.right &&
      p.clientY >= r.top &&
      p.clientY <= r.bottom
    );
  };

  if (!notes?.length) return <div>No notes added yet</div>;
  return (
    <div className="min-h-full">
      {notes.map((note: NoteType) => (
        <Note
          key={note.id}
          note={note}
          updatePosition={updatePosition}
          onDragStart={() => setDragging(true)}
          onDrag={(e) => {
            setOverTrash(isOver(e, trashRef.current));
            setOverEdit(isOver(e, editRef.current));
          }}
          onDragEnd={(e) => {
            if (isOver(e, trashRef.current)) deleteNote(note.id);
            if (isOver(e, editRef.current)) editNote(note.id);
            setDragging(false);
            setOverTrash(false);
            setOverEdit(false);
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

      {dragging && (
        <div
          ref={editRef}
          className={`absolute bottom-32 right-6 cursor-pointer flex h-20 w-20 items-center justify-center rounded-full text-2xl ${
            overEdit ? "bg-green-500" : "bg-neutral-700"
          }`}
        >
          ✏️
        </div>
      )}
    </div>
  );
};
