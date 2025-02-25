import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// 📌 Вход через Google
export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Ошибка входа:", error);
    return null;
  }
};

// 📌 Выход из системы
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Выход выполнен");
  } catch (error) {
    console.error("Ошибка выхода:", error);
  }
};

// 📌 Отслеживание состояния пользователя
export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};
