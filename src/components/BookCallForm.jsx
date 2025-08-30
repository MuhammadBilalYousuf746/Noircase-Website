import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCallForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Logo + Title */}
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

      {/* Form Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-300 hover:text-white flex items-center"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
          Book a Call
        </h2>

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
