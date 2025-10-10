"use client";

import Image from "next/image";

export default function HelsenettIdea() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28 flex flex-col items-start gap-24">
      {/* ---------- PROBLEM ---------- */}
      <div className="max-w-4xl text-left mx-auto">
        <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
          Problem
        </h2>

        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          Caregivers are struggling without accessible tools and guidance to
          support patients effectively and reduce their own stress.
        </p>

        <p className="text-gray-600 leading-relaxed">
          The healthcare system is under pressure with an aging population, a
          shortage of health personnel, and rising expectations for quality and
          accessibility. This gap between resources and patient needs leaves
          caregivers and families feeling unsupported and emotionally burdened.
        </p>
      </div>

      {/* ---------- CONTEXT IMAGES (PESTEL / STAKEHOLDER / TRENDMAP) ---------- */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-16">
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/pestelAnalysis.png"
              alt="PESTEL Analysis"
              width={400}
              height={400}
              className="rounded-lg shadow-sm object-contain"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/stackholderMap.png"
              alt="Stakeholder Map"
              width={400}
              height={400}
              className="rounded-lg shadow-sm object-contain"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/trendMap.png"
              alt="Trend Map"
              width={400}
              height={400}
              className="rounded-lg shadow-sm object-contain"
            />
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Context Analysis: PESTEL, Stakeholder Mapping, and Trend Mapping
        </p>
      </div>

      {/* ---------- SOLUTION ---------- */}
      <div className="max-w-4xl text-left mx-auto mt-20">
        <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
          Solution
        </h2>

        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          A digital platform that makes life easier for caregivers.
        </p>

        <p className="text-gray-600 leading-relaxed">
          It gathers reliable health information in one place, provides
          personalized caregiving plans and resources, and offers interactive
          features to connect with professionals and other caregivers. In
          addition, it includes stress management tools to support caregivers’
          well-being and reduce the strain on healthcare personnel.
        </p>
      </div>

      {/* ---------- IMAGES BELOW SOLUTION (SERVICE & CHATHELSE) ---------- */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="h-px w-full my-6" />

          
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <Image
            src="/images/service.png"
            alt="Service Mockup"
            width={400}
            height={800}
            className=" object-contain"
          />
          <Image
            src="/images/chathelse.png"
            alt="Chat Helse Mockup"
            width={400}
            height={800}
            className=" object-contain"
          />
        </div>
          
        
      </div>
    </section>
  );
}
