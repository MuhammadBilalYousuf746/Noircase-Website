import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Branding", "UI", "Web", "Illustration"];

export default function Navbar({ onFilter }) {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    if (onFilter) onFilter(category);
  };

  return (
    <div className="bg-[#F1F2F3] text-gray-900 shadow-md">
      {/* Logo + Title */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 py-4 px-4">
        <img
          src="/noircaselogo.png"
          alt="Website Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <b>noir</b>case
        </h1>
      </div>

      {/* Filter buttons + Login */}
      <div className="overflow-x-auto py-2">
        <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap sm:flex-nowrap px-2 sm:px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`rounded-full transition-colors duration-200
                ${
                  active === category
                    ? "bg-gray-700 text-white"
                    : "bg-[#848884] text-white hover:bg-gray-600"
                }
                px-3 py-1 text-xs
                max-[320px]:px-2 max-[320px]:py-1 max-[320px]:text-[10px]
                sm:px-4 sm:py-2 sm:text-sm
                md:px-5 md:py-2 md:text-base
                lg:px-6 lg:py-3 lg:text-lg
                whitespace-nowrap
              `}
            >
              {category}
            </button>
          ))}

          {/* Login button inline with categories */}
          <Link to="/login">
            <button className="rounded-full bg-[#848884] text-white hover:bg-gray-600 px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg whitespace-nowrap">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
