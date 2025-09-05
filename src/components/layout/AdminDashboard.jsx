import { useNavigate, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Mobile toggle icons
import { motion, AnimatePresence } from "framer-motion"; // ✅ Animations

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex bg-black text-white relative">
      {/* ✅ Overlay with animation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 md:hidden"
            onClick={() => setSidebarOpen(false)} // 👈 click overlay to close
          />
        )}
      </AnimatePresence>

      {/* ✅ Sidebar with animation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 w-64 bg-gray-900 flex flex-col p-6 z-40 md:hidden"
          >
            {/* Logo + Close Button */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <img
                  src="/noircaselogo.png"
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                />
                <h1 className="text-xl font-bold">
                  <b>noir</b>case
                </h1>
              </div>
              <button
                className="p-2 rounded hover:bg-gray-700"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              <Link
                to="/admin/show-bookings"
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-sm"
                onClick={() => setSidebarOpen(false)}
              >
                📑 Show Bookings
              </Link>
              <Link
                to="/admin/update-bookings"
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-sm"
                onClick={() => setSidebarOpen(false)}
              >
                ✏️ Update Bookings
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Desktop Sidebar (always visible) */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-gray-900 p-6">
        <div className="flex items-center gap-3 mb-10">
          <img
            src="/noircaselogo.png"
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-2xl font-bold">
            <b>noir</b>case
          </h1>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/show-bookings"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            📑 Show Bookings
          </Link>
          <Link
            to="/admin/update-bookings"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            ✏️ Update Bookings
          </Link>
        </nav>
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h2 className="text-xl md:text-3xl font-bold">Hello Admin 👋</h2>
          </div>

          <button
            onClick={handleLogout}
            className="px-3 md:px-4 py-2 rounded-lg bg-red-600 text-white text-sm md:text-base font-semibold shadow-md hover:bg-red-700 transition"
          >
            ⎋ Logout
          </button>
        </div>

        {/* ✅ Page Content (Nested Routing) */}
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
