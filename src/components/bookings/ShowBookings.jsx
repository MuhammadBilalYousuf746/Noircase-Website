import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/book-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* ✅ Logo + Title (same as BookCallForm) */}
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

      {/* Main Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl relative">
        {}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition-all duration-200"
          >
            ⎋ Logout
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          All Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-700 text-gray-200">
                  <th className="border border-gray-600 p-2">Name</th>
                  <th className="border border-gray-600 p-2">Email</th>
                  <th className="border border-gray-600 p-2">Phone</th>
                  <th className="border border-gray-600 p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={index}
                    className="text-center hover:bg-gray-700 transition"
                  >
                    <td className="border border-gray-600 p-2">
                      {booking.name}
                    </td>
                    <td className="border border-gray-600 p-2">
                      {booking.email}
                    </td>
                    <td className="border border-gray-600 p-2">
                      {booking.phone}
                    </td>
                    <td className="border border-gray-600 p-2">
                      {new Date(booking.datetime).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowBookings;
