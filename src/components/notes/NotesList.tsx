interface NoteProps {
  handleDeleteNote: (id: string) => void;
  notes: { id: string; text: string }[];
}
export default function NotesList({ handleDeleteNote, notes }: NoteProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
