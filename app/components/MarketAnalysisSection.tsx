"use client";

import Image from "next/image";
import React from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

const MarketAnalysisSection: React.FC = () => {
  return (
    // کل سکشن سفید می‌مونه
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-0">
      {/* باکس وسطی با پس‌زمینه‌ی توسی روشن */}
      <div className="bg-[#F2F0EA] py-16 px-6 md:px-20 max-w-6xl mx-auto rounded-2xl shadow-sm">
        {/* ===== عنوان بخش ===== */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Analysing Market & Competitors
          </h2>
           
          </div>
          <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
 Most competitors rely on generic listings, with few offering AI-driven personalization or AR previews.    
  </h2>
         

          <p className="text-gray-700 text-[15px] leading-relaxed">
            Looking at popular art platforms, we noticed most focus on generic
            browsing and purchase flows. We hypothesised that integrating AI
            personalization and AR previews could differentiate Artella by
            making art selection easier, more interactive, and tailored to each
            user’s space.
          </p>
        </div>

        {/* ===== تصویر لوگوها ===== */}
        <div className="max-w-5xl mx-auto flex justify-center mb-12">
          <Image
            src="/images/Logo.png"
            alt="Competitor logos"
            width={700}
            height={300}
            className="rounded-xl shadow-sm object-contain"
          />
        </div>

        {/* ===== تصویر تحلیل ===== */}
        <div className="max-w-5xl mx-auto mb-10">
          <Image
            src="/images/analysis.png"
            alt="Competitor analysis screenshots"
            width={900}
            height={300}
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysisSection;
