import { useEffect, useState } from "react";
import { logOut, onAuthStateChangedListener } from "../services/authService";
import { User } from "firebase/auth";
import LoginPage from "./LoginPage";

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
          <p>Hi, {user.displayName}!</p>
          <img src={user.photoURL || ""} alt="Profile photo" width={50} />
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}
