import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import tiktok from "../assets/tiktok_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-6 py-3 z-50">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center">
          <img className="w-14 cursor-pointer" src={tiktok} alt="TikTok logo" />

          <div className="flex space-x-8 text-gray-700 font-medium">
            <a
              href="#how-it-works"
              className="font-bold hover:text-indigo-900 hover:scale-[1.1] transition"
            >
              How it works
            </a>
            <a
              href="#get-started"
              className="font-bold hover:text-indigo-900 hover:scale-[1.1] transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 p-1 focus:outline-none cursor-pointer hover:bg-indigo-100 transition rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-gray-50 rounded-lg shadow-inner">
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a
              href="#get-started"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Spacer to prevent overlap */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
