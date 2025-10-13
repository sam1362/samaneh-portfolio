"use client";

import Button from "./Button";
import AboutStats from "./AboutStats"; 

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
        As a UX/UI designer with experience in both front-end and back-end development (.NET), 
        I design with a deep understanding of how digital products are built. This technical foundation 
        helps me create interfaces that are both visually refined and technically feasible, ensuring smooth 
        collaboration between design and development.

        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
        I’m passionate about understanding user behavior, talking with users and clients, 
        and designing experiences that make every step simple, intuitive, and enjoyable. 
        My goal is to craft products that are scalable, user-centered, and consistently engaging.

        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          My goal is to craft products that are scalable, intuitive, and visually consistent.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Button text="LinkedIn" href="https://linkedin.com/in/samaneh-mohammadreza" variant="primary" newTab />
          <Button text="GitHub" href="https://github.com/sam1362" newTab />
        </div>
      </div>

      {/* ✅ Right side: Stats instead of image */}
      <div className="flex-1 flex justify-center">
        <AboutStats />
      </div>
    </section>
  );
}
