import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/Auth"; 

export default function App() {
  return (
    <>
      <Auth />
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
