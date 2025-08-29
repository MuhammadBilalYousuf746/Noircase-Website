import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import InformationContent from "./InformationContent"; // ✅ import info content

// Sample portfolio items
const portfolioItems = [
  { id: 1, title: "Branding 1", category: "Branding", img: "/images/meta-color.png" },
  { id: 2, title: "UI 1", category: "UIUX", img: "/images/meta-color.png" },
  { id: 3, title: "Web 1", category: "Packaging", img: "/images/meta-color.png" },
  { id: 4, title: "Branding 2", category: "Branding", img: "/images/meta-color.png" },
  { id: 5, title: "Illustration 1", category: "Web Designs", img: "/images/meta-color.png" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState("Work"); // default tab
  const [active, setActive] = useState("All"); // active category

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="bg-black text-white shadow-md min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Navbar for filtering / menu */}
        <Navbar
          onFilter={setFilter}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          active={active}
          setActive={setActive}
        />

        {/* Animated content */}
        <AnimatePresence mode="wait">
          {openMenu === "Work" && (
            <motion.div
              key="workContent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-white font-bold text-lg md:text-xl text-center px-2">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {openMenu === "Information" && (
            <motion.div
              key="infoContent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-4 sm:px-6 md:px-8 py-6"
            >
              <InformationContent selected={active} />
            </motion.div>
          )}
          
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
          Explore all Projects
        </button>
      </div>
        </AnimatePresence>
        
      </div>

    </div>
  );
}
