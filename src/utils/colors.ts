const NOTE_COLORS = [
  "bg-amber-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-rose-300",
  "bg-violet-300",
  "bg-orange-300",
  "bg-teal-300",
  "bg-pink-300",
  "bg-lime-300",
  "bg-cyan-300",
];

export const getRandomColor = (id: number): string =>
  NOTE_COLORS[Math.abs(id) % NOTE_COLORS.length];
