import { useState } from "react";

export interface NoteFormValues {
  text: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

interface Props {
  onSubmit: (values: NoteFormValues) => void;
  onClose: () => void;
}

export const CreateModal = ({ onSubmit, onClose }: Props) => {
  const [text, setText] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      text,
      width: Number(width),
      height: Number(height),
      x: Number(x),
      y: Number(y),
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-6 rounded w-[60%] mx-auto flex flex-col gap-4 "
      >
        <h2 className="font-bold text-4xl">New note +</h2>

        <div className="flex flex-row gap-4 justify-between h-10">
          <div className="flex-1">Text:</div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="text"
            required
            className="flex-5"
          />
        </div>

        <div className="flex flex-row gap-4 justify-between h-10">
          <div className="flex-1">Width:</div>
          <input
            type="number"
            placeholder="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
            className="flex-5"
          />
        </div>
        <div className="flex flex-row gap-4 justify-between h-10">
          <div className="flex-1">Width:</div>
          <input
            type="number"
            placeholder="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="flex-5"
          />
        </div>
        <div className="flex flex-row gap-4 justify-between h-10">
          <div className="flex-1">X:</div>
          <input
            type="number"
            placeholder="x"
            value={x}
            onChange={(e) => setX(e.target.value)}
            required
            className="flex-5"
          />
        </div>
        <div className="flex flex-row gap-4 justify-between h-10">
          <div className="flex-1">Y:</div>
          <input
            type="number"
            placeholder="y"
            value={y}
            onChange={(e) => setY(e.target.value)}
            required
            className="flex-5"
          />
        </div>

        <div className="flex flex-row justify-around">
          <button
            type="button"
            onClick={onClose}
            className="border border-amber-50 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
