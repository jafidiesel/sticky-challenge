import type { NoteType } from "../../types";

export const Note = ({ height, text, width }: NoteType) => {
  return (
    <div
      className="flex flex-col rounded-lg bg-amber-300 p-3 text-gray-900 shadow-lg shadow-black/40 ring-1 ring-black/10 transition-shadow group-active:shadow-2xl"
      style={{ flexShrink: 0, height, width }}
    >
      <textarea
        value={text}
        onChange={() => {}}
        placeholder="write..."
        className="w-full h-full resize-none bg-transparent text-sm leading-snug placeholder:text-amber-900/50 focus:outline-none"
      />
    </div>
  );
};
