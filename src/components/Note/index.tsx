import { Rnd } from "react-rnd";
import type { NoteType } from "../../types";

interface Props {
  note: NoteType;
  onUpdate: (id: number, patch: Partial<NoteType>) => void;
}

export const Note = ({ note, onUpdate }: Props) => {

  return (
    <Rnd
      size={{ width: note?.width, height: note?.height }}
      position={{ x: note?.x, y: note?.y }}
      minWidth={160}
      minHeight={120}
      bounds="parent"
      dragHandleClassName="handle"
      onDragStop={(e, d) => onUpdate(note.id, { x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) =>
        onUpdate(note?.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        })
      }
    >
      <div
        className="flex flex-col rounded-lg bg-amber-300 p-3 text-gray-900 shadow-lg shadow-black/40 ring-1 ring-black/10 transition-shadow group-active:shadow-2xl"
        style={{ flexShrink: 0, height: note?.height, width: note?.width }}
      >
        <textarea
          value={note?.text}
          onChange={() => {}}
          placeholder="write..."
          className="w-full h-full resize-none bg-transparent text-sm leading-snug placeholder:text-amber-900/50 focus:outline-none"
        />
      </div>
    </Rnd>
  );
};
