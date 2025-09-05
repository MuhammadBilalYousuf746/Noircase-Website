import { useEffect, useState } from "react";

function ShowBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/book-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* ✅ Main Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl relative">
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
