import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCallForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-300 hover:text-white flex items-center"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Book a Call</h2>
        
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white placeholder-gray-400"
            required
          />
          <select
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white"
            required
          >
            <option value="">Select Option</option>
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
          </select>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white placeholder-gray-400"
          />
          <input
            type="datetime-local"
            className="border border-gray-600 bg-gray-700 p-2 rounded text-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
