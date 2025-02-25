import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/Auth";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Auth />
              <Notes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
