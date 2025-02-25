import { useState } from "react";

interface CreateNoteProps {
  newNote: string;
  setNewNote: (value: string) => void;
  handleAddNote: () => void;
}
export default function CreateNote({
  newNote,
  setNewNote,
  handleAddNote,
}: CreateNoteProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "close" : "create note"}
      </button>
      {isOpen && (
        <div>
          <input
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="New Note"
          />
          <button onClick={handleAddNote}>Add</button>
        </div>
      )}
    </div>
  );
}
