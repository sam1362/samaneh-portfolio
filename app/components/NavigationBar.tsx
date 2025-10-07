"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌙 Dark Mode 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-[#FAFAFA]/90 dark:bg-[#0B0B0B]/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 py-5 px-6 flex items-center justify-between"
    >
      {/* logo*/}
      <a
        href="/"
        className="font-semibold text-lg tracking-tight text-gray-900 dark:text-gray-100 hover:text-[#00636b] transition-colors"
      >
        Samaneh
      </a>

      {/* hambergur*/}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-gray-800 dark:bg-gray-200 transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* menuDesktop*/}
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-800 dark:text-gray-200">
        <a href="/work" className="hover:text-[#00636b] transition-colors">
          Work
        </a>
        <a href="/about" className="hover:text-[#00636b] transition-colors">
          About
        </a>
        <a href="/contact" className="hover:text-[#00636b] transition-colors">
          Contact
        </a>
      </div>

      {/*  Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-sm border border-gray-400 dark:border-gray-600 rounded-full px-3 py-1 text-gray-700 dark:text-gray-200 hover:bg-[#00636b] hover:text-white transition-colors"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* menuOpenMobile*/}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#FAFAFA] dark:bg-[#0B0B0B] border-t border-gray-200 dark:border-gray-700 shadow-sm md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-5 text-[16px] font-medium text-gray-800 dark:text-gray-200">
              <a
                href="/work"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#00636b] transition"
              >
                Work
              </a>
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#00636b] transition"
              >
                About
              </a>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#00636b] transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
