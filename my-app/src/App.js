import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import MediaLibrary from "./pages/MediaLibrary";
import PatientDirectory from "./pages/PatientDirectory";
import Login from "./pages/Login";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/upload" element={<PrivateRoute><Upload /></PrivateRoute>} />
        <Route path="/media" element={<PrivateRoute><MediaLibrary /></PrivateRoute>} />
        <Route path="/patients" element={<PrivateRoute><PatientDirectory /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
