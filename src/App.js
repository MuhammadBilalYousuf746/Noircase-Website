import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './styles/App.css';
import Portfolio from "./components/sections/Portfolio";
import InformationContent from "./components/sections/InformationContent";
import Login from "./components/forms/Login";
import BookCallForm from "./components/forms/BookCallForm";
import ShowBookings from "./components/bookings/ShowBookings";
import { useState, useEffect } from "react";

function App() {
  // ✅ Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Page refresh hone pe login state check karna
  useEffect(() => {
    const authStatus = localStorage.getItem("isLoggedIn");
    if (authStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Routes>
          {}
          <Route path="/" element={<Portfolio />} />

          {/* Login Page */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/bookings" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* Information Page */}
          <Route path="/InformationContent" element={<InformationContent />} />

          {/* Book a Call Page (✅ ab PUBLIC hai, login ki zarurat nahi) */}
          <Route path="/book-call" element={<BookCallForm />} />

          {/* Show Bookings Page (✅ sirf logged in users ke liye) */}
          <Route
            path="/bookings"
            element={isLoggedIn ? <ShowBookings /> : <Navigate to="/login" />}
          />

          {/* Agar route na mile to Portfolio dikhao */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
