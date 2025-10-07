"use client";

import Image from "next/image";
import React from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

const UsabilityIterationsSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20 space-y-16">
      {/* ===== عنوان ===== */}
    
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Iterations from Usability Tests
          </h2>
          
        </div>
        <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
  5 usability test rounds led to clearer hierarchy and smoother
          navigation.      
  </h2>
      

        <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
          We observed how users navigated key scenarios to uncover patterns,
          mental models, and blockers. Iterative feedback helped reduce
          cognitive load and surface key information more effectively.
        </p>
      </div>

      {/* ===== زیرعنوان و توضیحات ===== */}
      <div className="max-w-4xl mx-auto">
      <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
 1 – Relocating Size and Frame Options     
  </h2>
       
        <p className="text-gray-700 text-[15px] leading-relaxed">
          Moved size and frame selection closer to the artwork preview to
          improve visibility and ease of use. Helped users notice and interact
          with customization options more naturally.
        </p>
      </div>

      {/* ===== تصویر ===== */}
      <div className="max-w-5xl mx-auto mt-10">
        <Image
          src="/images/firstuse.png"
          alt="Usability test iteration preview"
          width={700}
          height={300}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default UsabilityIterationsSection;
