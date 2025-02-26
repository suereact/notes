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
    <div className="flex flex-col items-center justify-between h-[800px]">
      <h1 className="text-9xl">The notebook</h1>
      <div>
        <p>This book is protected.</p>
        <button onClick={signInWithGoogle}>Log in with Google</button>
        {/* TODO:add a lock icon with unimation to unlock when hover */}
      </div>
    </div>
  );
}
