import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/Auth"; // 👈 Добавляем компонент авторизации

export default function App() {
  return (
    <>
      <Auth /> {/* 👈 Показываем кнопку входа/выхода */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
