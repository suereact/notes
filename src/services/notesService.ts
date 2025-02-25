// notesService.ts
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export const addNote = async (userId: string, text: string) => {
  const notesCollection = collection(db, "users", userId, "notes");
  await addDoc(notesCollection, { text, createdAt: new Date() });
};

export const getNotes = async (userId: string) => {
  const notesCollection = collection(db, "users", userId, "notes");
  const snapshot = await getDocs(notesCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    text: doc.data().text || "Без текста",
  }));
};

export const deleteNote = async (userId: string, id: string) => {
  const noteRef = doc(db, "users", userId, "notes", id);
  await deleteDoc(noteRef); // ✅ Используем правильное название переменной
};
