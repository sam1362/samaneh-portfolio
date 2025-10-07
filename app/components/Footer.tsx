"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00636b] text-white py-20 px-10 flex flex-col items-center justify-center">
      {/* دکمه Let's Talk وسط */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <Link
          href="#contact"
          className="inline-block border-2 border-white hover:bg-white hover:text-[#00636b] text-white px-10 py-4 rounded-full font-semibold text-2xl md:text-3xl tracking-wide transition-colors duration-300"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* بخش پایین: ایمیل و حق کپی */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-100">
        <a
          href="mailto:smr82computer@gmail.com"
          className="hover:underline underline-offset-4 transition-colors"
        >
          smr82computer@gmail.com
        </a>

        <p className="mt-4 md:mt-0">© 2025 Samaneh. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
