import { useEffect, useState } from "react";
import {
  signInWithGoogle,
  logOut,
  onAuthStateChangedListener,
} from "../services/authService";
import { User } from "firebase/auth";

export default function Auth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(setUser);
    return unsubscribe;
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Привет, {user.displayName}!</p>
          <img src={user.photoURL || ""} alt="Аватар" width={50} />
          <button onClick={logOut}>Выйти</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Войти через Google</button>
      )}
    </div>
  );
}
