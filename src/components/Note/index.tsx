import { Rnd } from "react-rnd";
import type { NoteType } from "../../types";

interface Props {
  note: NoteType;
  onUpdate: (id: number, patch: Partial<NoteType>) => void;
}

export const Note = ({ note, onUpdate }: Props) => {
  return (
    <Rnd
      size={{ width: note.width, height: note.height }}
      position={{ x: note.x, y: note.y }}
      minWidth={160}
      minHeight={120}
      bounds="parent"
      onDragStop={(e, d) => onUpdate(note.id, { x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) =>
        onUpdate(note?.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        })
      }
      className="cursor-grab active:cursor-grabbing"
    >
      <div className="h-full w-full rounded-lg bg-amber-300 p-3 text-sm leading-snug text-gray-900 shadow-lg shadow-black/40 ring-1 ring-black/10">
        {note.text}
      </div>
    </Rnd>
  );
};
