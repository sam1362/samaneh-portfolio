"use client";

import Image from "next/image";
import React from "react";


const SolutionArchitectureSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20 space-y-24">
      {/* Approaching a Solution  */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Approaching a Solution
          </h2>
        
        </div>
        <h2
            className= "font-fraunces text-[42px] font-normal text-[#1A1A1A] leading-snug"
          >
 Creating a confident and personalized experience through visual
          context and smart guidance.        
  </h2>

        <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
        Our research and user persona revealed that users needed clarity, not just options. 
        The ideal solution connects them directly to their space and style. By focusing on visual relevance and personalization, 
        users can upload their space, explore AI-curated or self-selected art, and instantly preview pieces in 
        context, making the experience tangible, interactive, and confidence-boosting.
        </p>

    
      </div>

      {/*  System Architecture  */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> System Architecture
          </h2>
         
        </div>
        <h2
            className="font-fraunces text-[42px] font-normal text-[#1A1A1A] leading-snug"
          >
 Designing a minimal and focused flow for confident art selection.
  </h2>

        <p className="text-gray-700 text-[15px] leading-relaxed">
        We crafted a simple user flow where users can upload their space, explore art, and preview pieces in context, all in a few easy steps. Whether selecting their own or browsing suggestions, the experience stays focused and intuitive, with minimal distractions.
        </p>
      </div>

      {/*  imageFlow  */}
      <div className="max-w-5xl mx-auto mt-12">
        <Image
          src="/images/flow.png"
          alt="User flow diagram"
          width={800}
          height={500}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default SolutionArchitectureSection;
