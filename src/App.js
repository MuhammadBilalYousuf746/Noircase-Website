import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Portfolio from "./components/Portfolio";
import InformationContent from "./components/InformationContent";
import Login from "./components/Login";
import BookCallForm from "./components/BookCallForm"; // 👈 ye import add karo

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

        <Routes>
          {/* Portfolio (default homepage) */}
          <Route path="/" element={<Portfolio />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Information Page */}
          <Route path="/InformationContent" element={<InformationContent />} />

          {/* Book a Call Page */}
          <Route path="/book-call" element={<BookCallForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
