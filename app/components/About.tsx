"use client";

import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-28 gap-10 bg-[#FAFAFA] text-[#1A1A1A]"
    >
      {/* Left part */}
      <div className="flex-1 text-left max-w-xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          As a UX/UI designer with experience in front-end and back-end development (.NET),
          I design with a full understanding of how products are built.
        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
          This technical foundation allows me to create interfaces that are both visually refined 
          and technically feasible, ensuring smooth collaboration between design and development.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          My goal is to craft products that are scalable, intuitive, and visually consistent.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Button text="LinkedIn" href="https://linkedin.com" variant="primary" newTab />
          <Button text="CV" href="/resume.pdf" newTab />
          <Button text="GitHub" href="https://github.com" newTab />
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/Samaneh.png"
          alt="Samaneh profile"
          width={400}
          height={400}
          className="rounded-lg object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
}
