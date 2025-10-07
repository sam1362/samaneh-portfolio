import React from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

const ProcessSection: React.FC = () => {
  return (
    <section className=" text-[#111] py-20 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          The Process
        </h2>
        <div className="border-t-2 border-black w-full mt-4"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {/* Subheading */}
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Researching Problem Space
          </h2>
         
        </div>

        {/* Main Highlighted Text */}
        <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
 AI personalization and AR previews help simplify choices, making art buying online more confident and enjoyable.         
  </h2>
       

        {/* Description */}
        <p className="text-gray-600 text-[15px] leading-relaxed">
          
          Applying design thinking, we started with literature and competitive
          research to uncover user needs and behavioural barriers in online art
          purchasing. These findings were later validated through user
          interviews to guide our solution direction.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
