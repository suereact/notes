import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Ошибка входа:", error);
    return null;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Выход выполнен");
  } catch (error) {
    console.error("Ошибка выхода:", error);
  }
};

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};
