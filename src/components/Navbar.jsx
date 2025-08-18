import { useState } from "react";

const categories = ["All", "Branding", "UI", "Web", "Illustration"];

export default function Navbar({ onFilter }) {
  const [active, setActive] = useState("All");

  const handleClick = (category) => {
    setActive(category);
    onFilter(category);
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
            ${active === cat ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
