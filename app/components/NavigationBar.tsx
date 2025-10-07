"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  // ذخیره حالت در localStorage برای حفظ تم بین رفرش‌ها
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // وقتی صفحه لود میشه، تم قبلی رو بخونه
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-[#FAFAFA] dark:bg-[#0B0B0B]  py-5 px-10 flex items-center justify-between"
      >
      {/* لوگو سمت چپ */}
      <a
        href="/"
        className="font-semibold text-lg tracking-tight text-gray-900 dark:text-gray-100 hover:text-[#00636b] transition-colors"
      >
        Samaneh
      </a>

      {/* منو در وسط */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-10 text-sm font-medium text-gray-800 dark:text-gray-200">
      
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

      {/* دکمه Dark Mode سمت راست */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-sm border border-gray-400 dark:border-gray-500 rounded-full px-3 py-1 text-gray-700 dark:text-gray-200 hover:bg-[#00636b] hover:text-white transition-colors"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </motion.nav>
  );
}
