import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Routes>
          {/* Portfolio (default homepage) */}
          <Route path="/" element={<Portfolio />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;