"use client";

import Image from "next/image";
import profilePic from "../../public/Samaneh.png";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-10 
      bg-[#FAFAFA] text-[#1A1A1A] transition-colors duration-500"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center text-left space-y-6 mt-20 md:mt-0">
        <div className="mb-4 transform transition-all duration-500 hover:-rotate-2">
          <span className="inline-block border border-[#00636b] text-sm rounded-full px-5 py-2 tracking-wide font-medium rotate-[-8deg]">
            Hi, I’m Samaneh
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-xl">
          UX/UI Designer & Front-end Developer based in Norway.
        </h1>

        <p className="text-base md:text-lg max-w-md text-gray-600">
          I create calm, human-centered digital experiences.
        </p>

        <Button
          text="View My Work"
          onClick={() => (window.location.href = "/work")}
          variant="primary"
        />
      </div>

      {/* Right Side (Image) */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0">
        <Image
          src={profilePic}
          alt="Samaneh Profile"
          width={340}
          height={340}
          className="rounded-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
