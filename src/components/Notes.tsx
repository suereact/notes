import { useCallback, useEffect, useState } from "react";
import { addNote, getNotes, deleteNote } from "../services/notesService";
import { onAuthStateChangedListener } from "../services/authService";

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

  if (!userId) return <p>Войди в аккаунт, чтобы управлять заметками.</p>;

  return (
    <div>
      <h1>Мои заметки</h1>
      <input
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Введите заметку"
      />
      <button onClick={handleAddNote}>Добавить</button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDeleteNote(note.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
