import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Smooth animations

function UpdateBookings() {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
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

  // ✅ Format datetime for input field
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16);
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

  // ✅ Save updated booking
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

  // ✅ Confirm delete
  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:5000/book-bookings/${deleteId}`, {
        method: "DELETE",
      });
      setBookings(bookings.filter((b) => b._id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-4 py-6">
      {/* Main Card */}
      <div className="bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-100">
          Update Bookings
        </h2>

        {/* ✅ Table / Mobile Cards */}
        {bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="hidden sm:table w-full border border-gray-700 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-800 text-gray-200">
                  <th className="border border-gray-700 p-3">Name</th>
                  <th className="border border-gray-700 p-3">Email</th>
                  <th className="border border-gray-700 p-3">Phone</th>
                  <th className="border border-gray-700 p-3">Date</th>
                  <th className="border border-gray-700 p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="text-center hover:bg-gray-800 transition"
                  >
                    <td className="border border-gray-700 p-2">{booking.name}</td>
                    <td className="border border-gray-700 p-2">{booking.email}</td>
                    <td className="border border-gray-700 p-2">{booking.phone}</td>
                    <td className="border border-gray-700 p-2">
                      {new Date(booking.datetime).toLocaleString()}
                    </td>
                    <td className="border border-gray-700 p-2 flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(booking)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteId(booking._id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ✅ Mobile Card View */}
            <div className="sm:hidden space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
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
                    <b>Date:</b>{" "}
                    {new Date(booking.datetime).toLocaleString()}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(booking)}
                      className="flex-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(booking._id)}
                      className="flex-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Edit Form (Slide Down) */}
        <AnimatePresence>
          {editingBooking && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-gray-800 rounded-xl shadow-lg"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✅ Delete Confirmation Modal with Animation */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg w-96 text-center"
            >
              <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
              <p className="mb-6">
                Are you sure you want to delete this booking?
              </p>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UpdateBookings;
