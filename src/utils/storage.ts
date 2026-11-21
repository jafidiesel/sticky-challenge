import type { NoteType } from "../types";

const KEY = "notes";

function isNote(value: unknown): value is NoteType {
  if (typeof value !== "object" || value === null) return false;
  const n = value as Record<string, unknown>;
  return (
    typeof n.id === "number" &&
    typeof n.text === "string" &&
    typeof n.width === "number" &&
    typeof n.height === "number" &&
    typeof n.x === "number" &&
    typeof n.y === "number"
  );
}

export function loadNotes(): NoteType[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    return Array.isArray(data) ? data.filter(isNote) : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes: NoteType[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes));
  } catch (err) {
    console.error("Error saving in localstorage", err);
  }
}

export const getLastId = () => {
  return loadNotes()?.length || 0;
};
