"use client";

import Image from "next/image";
import React from "react";


const PersonaSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20 space-y-20">
      {/*  Defining Persona & Goals  */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Defining Persona & Goals
          </h2>
        </div>
        <h2
            className= "font-fraunces text-[42px] font-normal text-[#1A1A1A] leading-snug"
          >
  Consolidating our key insights into a goal-oriented persona.
  </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/images/persona.png"
            alt="User persona illustration"
            width={350}
            height={350}
            className="rounded-xl object-contain"
          />

<div className="text-gray-700 text-[15px] leading-relaxed mt-6 md:mt-12">
  <p className="font-medium text-[#1A1A1A] mb-1">Mia Loomi</p>
  <p>28, Marketing Expert, newly moved in</p>
  <p className="mt-3">
    Her goal is to find artwork that reflects her personality and
    complements her space. She needs reassurance that the piece fits
    well in her home before committing to a purchase.
  </p>
  
</div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
