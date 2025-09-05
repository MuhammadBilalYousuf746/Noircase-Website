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
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-4 py-6">
      {/* ✅ Main Card */}
      <div className="bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-100">
          All Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found</p>
        ) : (
          <>
            {/* ✅ Table View (Desktop) */}
            <div className="overflow-x-auto hidden sm:block">
              <table className="w-full border border-gray-700 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-800 text-gray-200">
                    <th className="border border-gray-700 p-3">Name</th>
                    <th className="border border-gray-700 p-3">Email</th>
                    <th className="border border-gray-700 p-3">Phone</th>
                    <th className="border border-gray-700 p-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr
                      key={index}
                      className="text-center hover:bg-gray-800 transition"
                    >
                      <td className="border border-gray-700 p-2">
                        {booking.name}
                      </td>
                      <td className="border border-gray-700 p-2">
                        {booking.email}
                      </td>
                      <td className="border border-gray-700 p-2">
                        {booking.phone}
                      </td>
                      <td className="border border-gray-700 p-2">
                        {new Date(booking.datetime).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Card View (Mobile) */}
            <div className="sm:hidden space-y-4">
              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <p>
                    <b>Name:</b> {booking.name}
                  </p>
                  <p>
                    <b>Email:</b> {booking.email}
                  </p>
                  <p>
                    <b>Phone:</b> {booking.phone}
                  </p>
                  <p>
                    <b>Date:</b> {new Date(booking.datetime).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShowBookings;
