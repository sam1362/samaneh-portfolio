"use client";

import Image from "next/image";

export default function TransportIntro() {
  return (
    <section className="w-full bg-white text-[#1A1A1A] px-10 md:px-20 py-28 flex flex-col gap-32">
      {/* ---------- PROJECT OVERVIEW (TWO-COLUMN LAYOUT) ---------- */}
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT: TEXT */}
        <div className="max-w-xl text-left">
          <h2 className="text-[40px] font-normal text-[#1A1A1A] mb-6 leading-snug">
            Ticket Model – Transportation Project
          </h2>

          <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
            Simplifying urban mobility through intuitive digital ticketing.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The project aimed to redesign the digital ticketing experience for public transportation.
            The goal was to make it more intuitive, accessible, and aligned with modern user behaviors.
            By focusing on ease of navigation, quick access to travel information, and inclusive design,
            the concept enhances the daily commuting experience for users across different age groups.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/transportLogin.png"
            alt="Transport App Mockup"
            width={1000}
            height={700}
            className="object-contain w-full max-w-[480px] md:max-w-[520px] bg-white"
            sizes="(min-width:1024px) 480px, (min-width:768px) 50vw, 90vw"
          />
        </div>
      </div>

      {/* ---------- INTRODUCTION ---------- */}
      <div className="mx-auto w-full max-w-5xl text-left">
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wide">
          Introduction
        </h3>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Public transport plays a crucial role in building sustainable cities, reducing traffic,
          and lowering environmental impact. In Norway, the government strongly encourages people
          to choose buses, trams, and trains instead of private cars. However, challenges like fare
          evasion and limited ticketing options reduce efficiency and create financial pressure on
          transport providers. To address these issues, our project explores innovative solutions
          that improve accessibility, increase ticket compliance, and support the long-term growth
          of an eco-friendly public transport system.
        </p>
      </div>

      {/* ---------- PROBLEM ---------- */}
      <div className="mx-auto w-full max-w-5xl text-left">
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wide">
          Problem
        </h3>
        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          The challenge centers on fare evasion, a persistent issue that threatens the sustainability
          and efficiency of Norway’s public transport system.
        </p>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Norway encourages the use of public transport over private vehicles, but fare evasion remains
          a significant challenge. Around 10% of Ruter’s users evade fares, creating financial losses that
          threaten both economic stability and future investment in infrastructure, which in turn risks the
          overall service quality. The issue is reinforced by limited ticket options in existing apps like
          Ruter and Vy, as well as high costs that discourage compliance. This highlights the need for
          innovative solutions to reduce fare evasion, improve accessibility, and ensure the sustainable
          growth of public transport.
        </p>
      </div>

      {/* ---------- SOLUTION ---------- */}
      <div className="mx-auto w-full max-w-5xl text-left">
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wide">
          Solution
        </h3>
        <p className="font-fraunces text-2xl md:text-[28px] text-[#1A1A1A] leading-snug mb-8">
          Our design approach focused on creating a ticketing system that not only minimizes fare evasion
          but also promotes a seamless, user-friendly, and sustainable travel experience.
        </p>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          The result of our research was the design of an innovative ticketing system aimed at reducing fare
          evasion and encouraging more people to use public transport. This system helps Ruter and Vy mitigate
          financial losses, supports a sustainable and eco-friendly transportation model, and attracts a larger
          user base. The report also highlights the data gathering process, idea development, and prototypes that
          demonstrate integration into existing public transport apps, contributing to a long-term sustainable
          solution.
        </p>
      </div>

      {/* ---------- PROJECT INFO ---------- */}
      <div className="w-full flex justify-center py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h4 className="text-lg font-semibold mb-2">Role</h4>
            <p className="text-gray-500">UX designer</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Tools</h4>
            <p className="text-gray-500">Figma</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Team</h4>
            <p className="text-gray-500">3 UX designers</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Timeline</h4>
            <p className="text-gray-500">Nov 2023 (4 weeks)</p>
          </div>
        </div>
      </div>

      {/* ---------- RESEARCH ---------- */}
      <div className="mx-auto w-full max-w-5xl text-left">
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wide">
          Research
        </h3>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
          From both interviews and surveys, we discovered clear patterns in how users perceive and engage
          with public transportation in Norway. Many users expressed frustration over high ticket costs and
          limited incentives to use public transport more often. These insights helped us pinpoint key areas
          where improvements could increase accessibility and satisfaction.
        </p>

        {/* ---------- KEY FINDINGS ---------- */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Key Findings:</h4>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Most participants find <strong>tickets expensive</strong> and not aligned with daily needs.
            </li>
            <li>
              <strong>More than half</strong> buy <strong>fewer than 30 single tickets per month</strong>.
            </li>
            <li>
              Some users <strong>admitted to fare evasion</strong> because of high prices.
            </li>
            <li>
              <strong>Lower prices</strong> and <strong>added benefits</strong> (e.g., free coffee, gift cards)
              would encourage increased use.
            </li>
            <li>
              There is a strong need to <strong>enhance affordability</strong> and{" "}
              <strong>perceived value</strong> in public transportation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
