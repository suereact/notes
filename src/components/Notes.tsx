import { useCallback, useEffect, useState } from "react";
import { addNote, getNotes, deleteNote } from "../services/notesService";
import { onAuthStateChangedListener } from "../services/authService";
import NotesList from "./notes/NotesList";
import CreateNote from "./notes/CreateNote";

export default function Notes() {
  const [notes, setNotes] = useState<{ id: string; text: string }[]>([]);
  const [newNote, setNewNote] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUserId(user ? user.uid : null);
    });

    return unsubscribe;
  }, []);

  const fetchNotes = useCallback(async () => {
    if (userId) {
      const fetchedNotes = await getNotes(userId);
      setNotes(fetchedNotes);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchNotes();
    }
  }, [userId, fetchNotes]);

  const handleAddNote = async () => {
    if (newNote.trim() && userId) {
      await addNote(userId, newNote);
      setNewNote("");
      fetchNotes();
    }
  };

  const handleDeleteNote = async (id: string) => {
    if (userId) {
      await deleteNote(userId, id);
      fetchNotes();
    }
  };

  if (!userId) return <p>Sign in to your account to manage your notes.</p>;

  return (
    <div>
      <h1>My Notes</h1>

      <CreateNote
        newNote={newNote}
        setNewNote={setNewNote}
        handleAddNote={handleAddNote}
      />
      <NotesList notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
}
