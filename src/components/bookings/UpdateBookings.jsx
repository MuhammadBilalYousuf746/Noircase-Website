import { useEffect, useState } from "react";

function UpdateBookings() {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [deleteId, setDeleteId] = useState(null); // ✅ Modal ke liye id store
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
  });

  // ✅ Fetch bookings
  useEffect(() => {
    fetch("http://localhost:5000/book-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Format date for input field
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
  };

  // ✅ Handle Edit click
  const handleEdit = (booking) => {
    setEditingBooking(booking._id);
    setFormData({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      datetime: formatDateTime(booking.datetime),
    });
  };

  // ✅ Handle Save Update
  const handleSave = async () => {
    try {
      await fetch(`http://localhost:5000/book-bookings/${editingBooking}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setBookings(
        bookings.map((b) =>
          b._id === editingBooking ? { ...b, ...formData } : b
        )
      );

      setEditingBooking(null);
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  // ✅ Delete confirm hone ke baad
  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:5000/book-bookings/${deleteId}`, {
        method: "DELETE",
      });
      setBookings(bookings.filter((b) => b._id !== deleteId));
      setDeleteId(null); // ✅ Modal band
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* ✅ Main Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-5xl relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          Update Bookings
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
                  <th className="border border-gray-600 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
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
                    <td className="border border-gray-600 p-2 flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(booking)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteId(booking._id)} // ✅ Modal open
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ✅ Edit Form */}
        {editingBooking && (
          <div className="mt-6 p-4 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Booking</h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="datetime-local"
                value={formData.datetime}
                onChange={(e) =>
                  setFormData({ ...formData, datetime: e.target.value })
                }
                className="p-2 rounded bg-gray-700 text-white"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingBooking(null)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this booking?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateBookings;
