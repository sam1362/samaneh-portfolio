"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 bg-[#FAFAFA] text-[#1A1A1A] transition-colors duration-500">
      {/* ---------- HERO CONTENT ---------- */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-10 md:gap-16 mt-20 md:mt-0">
        {/* LEFT: TEXT */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4 order-2 md:order-1 mt-6 md:mt-0">
          <div className="transform transition-all duration-500 hover:-rotate-2">
            <span className="inline-block border border-[#00636b] text-sm rounded-full px-5 py-2 tracking-wide font-medium rotate-[-8deg] bg-white shadow-sm">
              Hi, I’m Samaneh
            </span>
          </div>

          <h1 className="text-[26px] sm:text-[32px] md:text-[44px] font-extrabold leading-tight max-w-xl">
            UX/UI Designer & Front-end Developer based in Norway.
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-md text-gray-600">
          I create empathetic, user-focused designs.          </p>

          <Button
            text="View My Work"
            onClick={() => (window.location.href = "/work")}
            variant="primary"
          />
        </div>

        {/* ---------- RIGHT: IMAGE + ICONS ---------- */}
        <div className="flex-1 flex flex-col justify-center items-center order-1 md:order-2 relative">
          {/* background shape */}
          <div className="absolute inset-0 -z-10 w-[380px] h-[380px] bg-[#CCE6E6] rounded-[50%_30%_60%_40%/60%_40%_50%_50%] blur-2xl opacity-70 top-6 right-4 md:right-10"></div>

          {/* profile image */}
          <Image
            src="/Samaneh.png"
            alt="Samaneh Profile"
            width={340}
            height={340}
            className="object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* social links */}
          <div className="flex gap-4 mt-6">
            <Link
              href="https://linkedin.com/in/samaneh-mohammadreza"
              target="_blank"
              className="p-2 rounded-full bg-white shadow-sm hover:bg-[#00636b]/10 transition"
            >
              <Linkedin className="w-6 h-6 text-[#00636b]" />
            </Link>

            <Link
              href="https://github.com/sam1362"
              target="_blank"
              className="p-2 rounded-full bg-white shadow-sm hover:bg-[#00636b]/10 transition"
            >
              <Github className="w-6 h-6 text-[#00636b]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- EXPERIENCE HIGHLIGHTS ---------- */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center mt-12 md:mt-16">
        <div className="bg-white rounded-2xl shadow-sm py-6 sm:py-8 transition hover:shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-[#00636b] mb-2">
            3+ Years
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">UX/UI Designer</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm py-6 sm:py-8 transition hover:shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-[#00636b] mb-2">
            30+ Projects
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Completed</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm py-6 sm:py-8 transition hover:shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-[#00636b] mb-2">
            2+ Years
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Frontend Developer
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm py-6 sm:py-8 transition hover:shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-[#00636b] mb-2">
            Figma / React
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Core Tools</p>
        </div>
      </div>
    </section>
  );
}
