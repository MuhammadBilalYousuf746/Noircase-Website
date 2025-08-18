import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

// Sample portfolio items
const portfolioItems = [
  { id: 1, title: "Branding 1", category: "Branding", img: "/images/img1.jpg" },
  { id: 2, title: "UI 1", category: "UI", img: "/images/img2.jpg" },
  { id: 3, title: "Web 1", category: "Web", img: "/images/img3.jpg" },
  { id: 4, title: "Branding 2", category: "Branding", img: "/images/img4.jpg" },
  { id: 5, title: "Illustration 1", category: "Illustration", img: "/images/img5.jpg" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <Navbar onFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
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
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Overlay title */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-bold text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
