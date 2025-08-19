import { useState } from "react";

const categories = ["All", "Branding", "UI", "Web", "Illustration"];

export default function Navbar({ onFilter }) {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    if (onFilter) onFilter(category);
  };

  return (
    <div className="bg-[#F1F2F3] text-gray-900 shadow-md">
      {/* Logo + Title in one line */}
      <div className="flex items-center justify-center gap-4 py-4">
        <img
          src="/noircaselogo.png" // ensure logo.png is in public folder
          alt="Website Logo"
          className="h-16 w-16 object-contain"
        />
        <h1 className="text-5xl "><b>noir</b>case</h1>
      </div>
 {/* Filter buttons */}
      <div className="overflow-x-auto py-2">
        <div className="flex gap-2 min-w-max justify-center px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`px-3 py-2 text-sm sm:text-base md:text-lg rounded-full transition-colors duration-200
                ${
                  active === category
                    ? "bg-gray-700 text-white" // Active button color
                    : "bg-[#E5E4E2] text-black hover:bg-white-600" // Inactive button color
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
