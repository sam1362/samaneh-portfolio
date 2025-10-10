"use client";

import Image from "next/image";

export default function Helsenett() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-24 py-24 flex flex-col gap-24">
      {/* ---------- HERO SECTION ---------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-semibold mb-4">Helsenett</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            To address the challenges faced by caregivers{" "}
            <span className="italic">(Pårørende)</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/appHelse.png"
            alt="Helsenett app mockup"
            width={400}
            height={800}
            className="object-contain"
          />
        </div>
      </div>

      {/* ---------- OVERVIEW + GOAL ---------- */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Overview */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            In this project, we focus on the challenges faced by{" "}
            <strong>caregivers</strong> like Sara, individuals who provide
            physical and emotional support to patients while struggling with
            emotional burdens, time constraints, and a lack of reliable health
            information.
          </p>
        </div>

        {/* Goal */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Goal</h2>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to develop solutions that empower them with centralized
            resources, social support, and stress-management tools. By
            integrating these solutions into <strong>Helsenorge</strong>, we aim
            to enhance an existing platform trusted by caregivers and healthcare
            professionals alike.
          </p>
        </div>
      </div>
    </section>
  );
}
