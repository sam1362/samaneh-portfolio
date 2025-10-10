"use client";

import Image from "next/image";

export default function TransportDesign() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* ---------- LEFT: TEXT ---------- */}
        <div className="max-w-xl text-left">
          <h2 className="text-[40px] font-semibold text-[#1A1A1A] mb-6 leading-snug">
            Design and Prototyping
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
            Designed two types of prototypes to promote sustainable transportation.
          </p>

          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-[#1A1A1A]">Low-Fidelity Prototype:</span>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px]">
                <li>Created using a paper-based approach.</li>
                <li>Served as initial sketches for the ticketing system.</li>
                <li>Allowed for early-stage concept testing and iteration.</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold text-[#1A1A1A]">High-Fidelity Prototype:</span>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px]">
                <li>A more refined and interactive version.</li>
                <li>Provides a realistic user experience with detailed UI/UX elements.</li>
                <li>
                  Showcases how the innovative ticketing system integrates into public transport apps.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* ---------- RIGHT: IMAGE ---------- */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/LoFi.png"
            alt="Low-fidelity prototype sketches"
            width={1000}
            height={700}
            className="rounded-xl shadow-sm object-contain w-full max-w-[560px]"
            sizes="(min-width:1024px) 520px, (min-width:768px) 70vw, 90vw"
          />
          <p className="text-gray-500 text-sm mt-4 italic">Low-fidelity prototype</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-40">
          <Image
            src="/images/HiFi.png"
            alt="High-fidelity prototype sketches"
            width={1000}
            height={700}
            className=" object-contain w-full max-w-[560px]"
            sizes="(min-width:1024px) 520px, (min-width:768px) 70vw, 90vw"
          />
          <p className="text-gray-500 text-sm mt-4 italic">High-fidelity prototype</p>
        </div>
        {/* ---------- Reflection ---------- */}
      <div className="mx-auto w-full max-w-5xl text-left mt-40">
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wide">
          Reflection
        </h3>
        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
        This study highlights the need for affordable, flexible, and user-centered public transport to support sustainable commuting in Norway.

        </p>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        The study highlights that affordable and flexible public transport is key to sustainable commuting in Norway. 
        High ticket prices and inconsistent use contribute to fare evasion and revenue loss, while users express strong 
        interest in flexible passes, pricing incentives, and small rewards. By improving enforcement and simplifying payment 
        systems, public transport can become more accessible, reliable, and appealing — encouraging sustainability and reducing 
        reliance on private cars.
        </p>
      </div>
    </section>
  );
}
