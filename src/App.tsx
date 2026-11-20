import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import type { NoteType } from "./types";
import { getLastId, loadNotes, saveNotes } from "./utils/storage";
import { CreateModal, type NoteFormValues } from "./components/CreateModal";

function App() {
  const [notes, setNotes] = useState<NoteType[]>(() => loadNotes());
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (values: NoteFormValues) => {
    setNotes((ns) => [...ns, { id: getLastId(), ...values }]);
    setModalOpen(false);
  };

  const deleteNote = (id: number) =>
    setNotes((ns) => ns.filter((n) => n.id !== id));

  return (
    <>
      <Navbar onAddNote={() => setModalOpen(!modalOpen)} />
      <Dashboard notes={notes} />
      {modalOpen && (
        <CreateModal onSubmit={addNote} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default App;
