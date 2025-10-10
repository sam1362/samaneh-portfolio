"use client";

import Image from "next/image";

export default function HelsenettProcess() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28 flex flex-col items-start gap-24">
      {/* ---------- DESIGN PROCESS ---------- */}
      <div className="max-w-4xl text-left mx-auto">
        <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
          Design Process
        </h2>

        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          Understanding the needs through observation and empathy.
        </p>

        <p className="text-gray-600 leading-relaxed">
        We interviewed two relatives of cancer patients and one researcher experienced in cancer care to 
        understand emotional needs and system gaps. Keeping an open mindset helped us uncover unexpected 
        insights and refine our questions. Through active listening and observing tone and body language, 
        we learned how relatives navigate uncertainty and what support they lack, while the researcher’s 
        perspective revealed challenges patients face during recovery and the gaps in current healthcare services.
        </p>
      </div>

      {/* ---------- IMAGE: OBSERVATION ---------- */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
      <Image
  src="/images/observation.png"
  alt="Observation and Empathy Research"
  width={1000}
  height={700}
  className="rounded-xl shadow-sm object-contain w-full max-w-3xl" 
  sizes="(min-width:1024px) 500px, (min-width:500px) 70vw, 90vw"
/>

        <p className="text-gray-500 text-sm mt-4">
          Field Observation – Understanding Caregivers in Real Context
        </p>
      </div>
    </section>
  );
}
