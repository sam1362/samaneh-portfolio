"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md py-5 px-6 flex items-center justify-between">
      {/* logo */}
      <Link
        href="/"
        className="font-semibold text-lg tracking-tight text-gray-900 hover:text-[#00636b] transition-colors"
      >
        Samaneh
      </Link>

      {/* hamburger button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="flex flex-col space-y-1.5 md:hidden focus:outline-none"
      >
        <span className="h-0.5 w-6 bg-gray-800 transition-all"></span>
        <span className="h-0.5 w-6 bg-gray-800 transition-all"></span>
        <span className="h-0.5 w-6 bg-gray-800 transition-all"></span>
      </button>

      {/* desktop menu */}
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-800">
        <Link href="/work" className="hover:text-[#00636b] transition-colors">
          Work
        </Link>
        <Link href="/about" className="hover:text-[#00636b] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#00636b] transition-colors">
          Contact
        </Link>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-[#FAFAFA] z-50 flex flex-col items-end justify-start pt-24 pr-10 space-y-6 text-2xl font-semibold text-gray-800"
          >
            {/* close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl text-gray-800 hover:text-[#00636b] transition"
            >
              ×
            </button>

            <Link
              href="/"
              className="hover:text-[#00636b] transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className="hover:text-[#00636b] transition"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="hover:text-[#00636b] transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#00636b] transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
