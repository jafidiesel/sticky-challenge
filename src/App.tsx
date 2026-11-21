import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import type { NoteType } from "./types";
import { getLastId, loadNotes, saveNotes } from "./utils/storage";
import { NoteFormModal, type NoteFormValues } from "./components/NoteFormModal";

function App() {
  const [notes, setNotes] = useState<NoteType[]>(() => loadNotes());
  const [modalOpen, setModalOpen] = useState(false);
  const [noteBeingEdited, setNoteBeingEdited] = useState<NoteType | null>(null);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (values: NoteFormValues) => {
    setNotes((ns) => [...ns, { id: getLastId(), ...values }]);
    setModalOpen(false);
  };

  const updateNote = (id: number, patch: Partial<NoteType>) =>
    setNotes((ns) => ns.map((n) => (n.id === id ? { ...n, ...patch } : n)));

  const deleteNote = (id: number) =>
    setNotes((ns) => ns.filter((n) => n.id !== id));

  const openEditNote = (id: number) => {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    setNoteBeingEdited(note);
    setModalOpen(true);
  };

  const handleNote = (values: NoteFormValues) => {
    if (noteBeingEdited) {
      updateNote(noteBeingEdited.id, values);
    } else {
      addNote(values);
    }
    setModalOpen(false);
    setNoteBeingEdited(null);
  };

  const bringToFront = (id: number) => {
    setNotes((ns) => {
      const note = ns.find((n) => n.id === id);
      if (!note || ns[ns.length - 1].id === id) return ns; // ya está arriba
      return [...ns.filter((n) => n.id !== id), note];
    });
  };

  return (
    <div className="flex h-screen min-h-192 flex-col">
      <Navbar onAddNote={() => setModalOpen(!modalOpen)} />
      <Dashboard
        notes={notes}
        updatePosition={updateNote}
        deleteNote={deleteNote}
        editNote={openEditNote}
        bringToFront={bringToFront}
      />
      {modalOpen && (
        <NoteFormModal
          onSubmit={handleNote}
          onClose={() => setModalOpen(false)}
          note={noteBeingEdited}
        />
      )}
    </div>
  );
}

export default App;
