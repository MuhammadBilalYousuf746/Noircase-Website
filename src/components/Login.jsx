export default function Login() {
  return (
    <div className="bg-[#F1F2F3] text-gray-900 min-h-screen flex flex-col items-center justify-center px-4">
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

      {/* Login Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-[#848884] text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
