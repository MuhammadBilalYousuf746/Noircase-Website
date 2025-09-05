import { useNavigate, Outlet, Link } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* ✅ Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col p-6">
        {/* Logo */}
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

        {/* Navigation */}
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
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-3xl font-bold">Hello Admin 👋</h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition"
          >
            ⎋ Logout
          </button>
        </div>

        {/* ✅ Page Content (Nested Routing) */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
