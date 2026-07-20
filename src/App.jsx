import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Home from "./Home";
import Course from "./Course";
import Lessons from "./Lessons";
import Login from "./Login";
import Signup from "./Signup";
import Services from "./Services";
import Process from "./Process";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/course" element={<Course />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route
          path="/process"
          element={
            <ProtectedRoute>
              <Process />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;