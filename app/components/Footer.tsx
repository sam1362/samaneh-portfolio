"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00636b] text-white py-20 px-10 flex flex-col items-center justify-center">
      {/* Contact Button */}
      <div className="mb-14 transition-transform duration-500 hover:scale-[1.02]">
        <Link
          href="/contact"
          className="inline-block border-2 border-white hover:bg-white hover:text-[#00636b] text-white px-10 py-4 rounded-full font-semibold text-2xl md:text-3xl tracking-wide transition-colors duration-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-100">
        <a
          href="mailto:samanehmohammadreza83@gmail.com"
          className="hover:underline underline-offset-4 transition-colors"
        >
          samanehmohammadreza83@gmail.com
        </a>

        <p className="mt-4 md:mt-0">© 2025 Samaneh. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
