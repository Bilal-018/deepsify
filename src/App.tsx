import { Dashboard } from "./pages/Dashboard";
import { FileUpload } from "./pages/FileUpload";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-[#0C111D] min-h-screen text-white overflow-x-hidden">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploadFile" element={<FileUpload />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
