import { Rnd } from "react-rnd";
import type { NoteType } from "../../types";
import { getRandomColor } from "../../utils/colors";

interface Props {
  note: NoteType;
  updatePosition: (id: number, patch: Partial<NoteType>) => void;
  onDragStart: () => void;
  onDrag: (e: MouseEvent | TouchEvent) => void;
  onDragEnd: (e: MouseEvent | TouchEvent) => void;
}

export const Note = ({
  note,
  updatePosition,
  onDragStart,
  onDrag,
  onDragEnd,
}: Props) => {
  return (
    <Rnd
      size={{ width: note.width, height: note.height }}
      position={{ x: note.x, y: note.y }}
      minWidth={160}
      minHeight={120}
      bounds="parent"
      onDragStart={onDragStart}
      onDrag={(e) => onDrag(e as MouseEvent | TouchEvent)}
      onDragStop={(e, d) => {
        onDragEnd(e as MouseEvent | TouchEvent);
        updatePosition(note.id, { x: d.x, y: d.y });
      }}
      onResizeStop={(_e, _dir, ref, _delta, pos) =>
        updatePosition(note?.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: pos.x,
          y: pos.y,
        })
      }
      className="cursor-grab active:cursor-grabbing"
    >
      <div className={`h-full w-full overflow-y-auto whitespace-pre-wrap rounded-lg ${getRandomColor(note.id)} p-3 text-sm leading-snug text-gray-900 shadow-lg shadow-black/40 ring-1 ring-black/10 text-pretty break-all`}>
        {note.text}
      </div>
    </Rnd>
  );
};
