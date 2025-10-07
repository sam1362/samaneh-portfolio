"use client";

import Image from "next/image";
import React from "react";

const PainPointsSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20">
      {/* ===== عنوان ===== */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Identifying the Pain Points
          </h2>
        
        </div>

        <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-snug mb-6">
          Most users felt overwhelmed and uncertain when choosing art, which led
          to decision fatigue and inaction.
        </h2>

        <p className="text-gray-700 text-[15px] leading-relaxed">
          Even when tools like filters and categories were available, they only
          helped in the early stages of browsing. As users lost clarity and
          confidence, they abandoned the process altogether. The most impactful
          solution, then, is one that reduces friction, provides contextual
          clarity, and sustains decision confidence throughout the journey.
        </p>
      </div>

      {/* ===== تصویر کلی Pain Points ===== */}
      <div className="max-w-5xl mx-auto mt-16">
        <Image
          src="/images/painpoint.png"
          alt="Pain points visual summary"
          width={800}
          height={500}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default PainPointsSection;
