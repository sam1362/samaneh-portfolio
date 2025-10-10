"use client";

import Image from "next/image";

export default function HelsenettPrototype() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28 flex flex-col items-start gap-24">
      {/* ---------- PROTOTYPE ---------- */}
      <div className="max-w-4xl text-left mx-auto">
        <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
          Prototype
        </h2>

        <p className="text-gray-600 leading-relaxed">
          The initial step in our project was to understand the core challenges faced by cancer
          patients and their families. After conducting interviews and gathering insights,
          <span className="font-semibold"> we initially created a mobile application prototype.</span>{" "}
          However, after incorporating feedback and conducting usability tests,{" "}
          <span className="font-semibold">
            we realised that transitioning to a web application would be more practical and effective.
          </span>{" "}
          Usability tests played a critical role in this transition by helping us identify the
          limitations of our mobile app design and the preferences of our target users.
        </p>
      </div>

      {/* ---------- IMAGE ---------- */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <Image
          src="/images/prototypeLogo.png"
          alt="Prototype process and interface screens"
          width={1000}
          height={700}
          className="rounded-xl shadow-sm object-contain w-full max-w-3xl"
          sizes="(min-width:1024px) 500px, (min-width:500px) 70vw, 90vw"
        />
      </div>

      {/* ---------- REFLECTION ---------- */}
      <div className="max-w-4xl text-left mx-auto">
        <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
          Reflection
        </h2>

        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          We learned that understanding caregivers’ real needs through empathy and collaboration
          is key to creating meaningful, supportive healthcare solutions.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          The project journey was a creative exploration of caregiver challenges and solutions,
          building on Helsenorge as a trusted healthcare platform to improve usability and relevance
          for caregivers. Key insights revealed the emotional burdens and stress caregivers face,
          the difficulty of accessing reliable health information, and the lack of tailored support tools.
          To address these, we adopted a user-centered approach through direct engagement with caregivers,
          an iterative design process shaped by feedback, and a design thinking mindset that emphasized
          empathy and problem-solving.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The proposed solutions included a centralized caregiving section, personalized tools for
          stress reduction and support, and community networks that enable caregivers to share experiences.
          Ultimately, collaboration, empathy, and innovation guided the process, resulting in solutions that
          both empower caregivers and enhance the overall value of Helsenorge.
        </p>
      </div>
    </section>
  );
}
