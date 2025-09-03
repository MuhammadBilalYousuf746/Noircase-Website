import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // ✅ Alert replace

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // reset msg

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (res.data.success) {
        setMessage("✅ Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        if (res.data.token) {
          localStorage.setItem("authToken", res.data.token);
        }

        setIsLoggedIn(true);
        navigate("/bookings");
      } else {
        setMessage("❌ Invalid credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setMessage("❌ Error while login, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* ✅ Logo + Title */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
        <img
          src="/noircaselogo.png"
          alt="Website Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <b>noir</b>case
        </h1>
      </div>

      {/* ✅ Form Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-gray-300 hover:text-white flex items-center"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          Admin Login
        </h2>

        {/* ✅ Message Box */}
        {message && (
          <div
            className={`mb-4 text-center p-2 rounded ${
              message.includes("✅")
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {message}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`py-2 rounded transition text-white ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
