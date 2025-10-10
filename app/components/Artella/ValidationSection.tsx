"use client";

import Image from "next/image";
import React from "react";

const ValidationSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20">
      {/* title */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Validating Our Assumptions
          </h2>
      
        </div>

        <h2
            className="font-fraunces text-[42px] font-normal text-[#1A1A1A] leading-snug">
        
Interviews with 20+ participants revealed the AR Alone Doesn’t Close
          the Deal in buying Art Online. 
  </h2>

        <p className="text-gray-700 text-[15px] leading-relaxed">
          We discovered that users often lacked confidence when choosing art,
          feeling overwhelmed by options and unsure about fit with their space
          and style. While AR previews helped them visualize artworks, they
          didn’t fully support the decision-making process.
        </p>
      </div>

      {/* subrtitle */}
      <div className="max-w-3xl mx-auto text-center my-16">
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          We discovered that users often lacked confidence when choosing art,
          feeling overwhelmed by options and unsure which pieces matched their
          space and style.
        </p>
      </div>

      {/* chatImage */}
      <div className="max-w-5xl mx-auto">
        <Image
          src="/images/chat.png"
          alt="User interview chat feedback"
          width={800}
          height={300}
          className="rounded-xl shadow-sm object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default ValidationSection;
