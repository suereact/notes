import { signInWithGoogle } from "../services/authService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChangedListener } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        navigate("/");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>The notebook</h1>
      <p>This book is protected. Please log in</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
