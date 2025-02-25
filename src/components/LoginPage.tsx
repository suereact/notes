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
        navigate("/"); // ✅ Если пользователь вошел, переходим на главную страницу
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [navigate]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <h1>Вход в приложение</h1>
      <button onClick={signInWithGoogle}>Войти через Google</button>
    </div>
  );
}