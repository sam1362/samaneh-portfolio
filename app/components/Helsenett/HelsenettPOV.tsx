"use client";

import Image from "next/image";

export default function HelsenettPOV() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* LEFT: TEXT */}
        <div className="max-w-xl">
          <h2 className="text-[40px] font-normal leading-snug mb-6">Point of View</h2>
          <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
            We defined a clear challenge to support caregivers like Sara through practical, research-based solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In this phase, we concentrated on defining a clear and actionable challenge to address
            the needs of caregivers like Sara. By analyzing research findings and distilling them
            into actionable insights, we simplified the complexity of caregiving challenges into
            manageable solutions. Using personas and “How Might We” questions, we gained a deeper
            understanding of Sara’s struggles as a caregiver for her husband.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <Image
          src="/images/HMWHelse.png"
          alt="How Might We? framing for Sara"
          width={1200}
          height={900}
          className="w-full h-auto object-contain max-w-[860px] mx-auto rounded-lg"
          sizes="(min-width:1024px) 48vw, (min-width:768px) 80vw, 92vw"
          priority={false}
        />
      </div>

      {/* ---- PERSONA (UNDER THE SECTION WITH SPACING) ---- */}
      <div className="mx-auto w-full max-w-5xl mt-14 md:mt-16">
        <div className="h-px w-full  mb-8" />
        <figure className="flex flex-col items-center">
          <Image
            src="/images/PersonaSara.png"
            alt="Persona: Sara"
            width={1200}
            height={900}
            className="w-full h-auto object-contain max-w-[560px] md:max-w-[640px] "
            loading="lazy"
            sizes="(min-width:1280px) 640px, (min-width:768px) 560px, 88vw"
          />
          <figcaption className="text-gray-500 text-sm mt-3">Persona — Sara</figcaption>
        </figure>
      </div>
    {/* ---- HMW QUESTION (CENTERED, FRAUNCES) ---- */}
    <div className="mx-auto w-full max-w-4xl text-center mt-16 md:mt-20">
        <p className="font-fraunces italic text-xl md:text-2xl leading-relaxed md:leading-relaxed tracking-normal text-[#1A1A1A]">
          How might we enhance Helsenorge to better support caregivers
          <br className="hidden md:block" />
          in navigating their challenges while improving their overall well-being?
        </p>
      </div>
    </section>
  );
}
