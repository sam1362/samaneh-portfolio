"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/Samaneh.png";
import Button from "./Button";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-10 transition-colors duration-500 ${
        darkMode ? "bg-[#0B0B0B] text-[#F7F7F5]" : "bg-[#FAFAFA] text-[#1A1A1A]"
      }`}
    >
      {/* بخش چپ - متن */}
      <div className="flex-1 flex flex-col items-start justify-center text-left space-y-6">
      <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block border border-[#00636b] text-sm rounded-full px-5 py-2 tracking-wide font-medium rotate-[-8deg]">
            Hi, I’m Samaneh
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight max-w-xl"
        >
           UX/UI Designer & Front-end Developer based in Norway.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg max-w-md text-gray-600 dark:text-gray-300"
        >
          I create calm, human-centered digital experiences.
        </motion.p>

        <Button
        text="View My Work"
        onClick={() => (window.location.href = "#work")}
         variant="primary"
          />

      </div>

      {/* بخش راست - تصویر */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <Image
          src={profilePic}
          alt="Samaneh Profile"
          width={380}
          height={380}
          className="rounded-full object-cover"
        />
      </motion.div>
    </section>
  );
}
