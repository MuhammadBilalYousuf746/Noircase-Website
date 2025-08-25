import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import InformationContent from "./InformationContent";

const workCategories = ["All", "Branding", "UIUX", "Web Designs", "Packaging"];
export default function Navbar({ onFilter }) {
  const [active, setActive] = useState("All");
  const [openMenu, setOpenMenu] = useState("Work"); 
  const [menuOpen, setMenuOpen] = useState(false); 

    const { scrollY } = useViewportScroll();

  // Fade out and move up as scrollY increases
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  const handleClick = (category) => {
    setActive(category);
    if (onFilter) onFilter(category);
  };

  return (
    <div className="bg-black text-white shadow-md">
      {/* Row 1: Logo + Title + Menu Button */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/noircaselogo.png"
            alt="Website Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ">
            <b>noir</b>case
          </h1>
        </div>


        {/* Menu Toggle */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-md font-medium text-white transition-all duration-300 transform ${
              menuOpen ? "scale-95 bg-gray-800" : "hover:scale-105 hover:bg-gray-700"
            }`}
          >
            Menu <Menu size={18} className="sm:hidden md:block" />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-36 sm:w-44 bg-[#1E1E1E] border border-gray-700 rounded-lg shadow-lg flex flex-col gap-1 sm:gap-2 overflow-hidden transition-all duration-500 ease-in-out transform ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <button
              className={`text-left px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300 ${
                openMenu === "Work"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => {
                setOpenMenu("Work");
                setMenuOpen(false);
              }}
            >
              Work
            </button>

            <button
              className={`text-left px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300 ${
                openMenu === "Information"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => {
                setOpenMenu("Information");
                setMenuOpen(false);
              }}
            >
              Information
            </button>

            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-600 px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>

 {/* Text section with 4 lines and 2 buttons */}
      <div className="px-4 sm:px-6 md:px-8 py-6 text-center max-w-3xl mx-auto">
     <motion.div style={{ opacity, y }} className="px-4 sm:px-6 md:px-8 py-6 text-center max-w-3xl mx-auto">
      <h1 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-2 font-bold">
        We're Creative Agency
      </h1>
      <h1 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-2 font-bold">
        Turning Idea into <span className="text-white">Business</span>
      </h1>
      <p className="text-white text-sm sm:text-base md:text-lg mb-2">
        We're creative agency crafting timeless brands and seamless digital experiences.
      </p>
      <p className="text-white text-sm sm:text-base md:text-lg mb-4">
        From brand identity to websites, we design strategy, clarity and impact.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-md border border-white hover:bg-black hover:text-white transition">
          Explore Projects
        </button>
        <button className="bg-black text-white font-semibold px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition">
          Book a Call
        </button>
      </div>
    </motion.div>

      </div>

{/* Row 2: Work & Information Options */}
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-1 sm:py-2 border-t border-gray-700 text-sm sm:text-base">
  <button
    className={`font-semibold transition-colors duration-300 ${
      openMenu === "Work" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
    }`}
    onClick={() => {
      setOpenMenu("Work");
      setActive("All"); // reset active to default Work
    }}
  >
    Work
  </button>

  <button
    className={`font-semibold transition-colors duration-300 ${
      openMenu === "Information" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
    }`}
    onClick={() => {
      setOpenMenu("Information");
      setActive("About"); // automatically select About when Information opens
    }}
  >
    Information
  </button>
</div>

      {/* Row 3: Sub Navbar (Work / Information) */}
{/* Row 3: Sub Navbar (Work / Information) */}
<div className="flex flex-wrap justify-center gap-3 sm:gap-6 py-2 text-xs sm:text-sm md:text-base transition-all duration-500 ease-in-out">
  {openMenu === "Work" &&
    workCategories.map((category) => (
      <button
        key={category}
        onClick={() => handleClick(category)}
        className={`transition-colors duration-300 ${
          active === category ? "text-white font-semibold" : "text-gray-400 hover:text-white"
        }`}
      >
        {category}
      </button>
    ))}

  {openMenu === "Information" &&
    ["About", "Team", "Process", "Contact"].map((info) => (
      <button
        key={info}
        onClick={() => setActive(info)}
        className={`px-3 py-1 rounded-md transition-colors duration-300 ${
          active === info ? "text-white font-semibold border-b-2 border-white" : "text-gray-400 hover:text-white"
        }`}
      >
        {info}
      </button>
    ))}
</div>
<AnimatePresence mode="wait">
  {openMenu === "Work" && (
    <motion.div
      key="workContent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6 md:px-8 py-6 max-w-5xl mx-auto text-white"
    >
    </motion.div>
  )}

  {openMenu === "Information" && (
    <InformationContent key="infoContent" selected={active} />
  )}
</AnimatePresence>

    </div>
    
  );
}