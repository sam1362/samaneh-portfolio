import React from "react";
import Image from "next/image";
import MoreProjects from "../MoreProjects";

const School: React.FC = () => {
  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen px-6 py-24 flex justify-center flex-col items-center">
      <div className="max-w-3xl w-full space-y-20">
        {/* Introduction */}
        <section>
          <h1 className="text-3xl font-semibold tracking-tight mb-6">EduUSA</h1>
          <p className="text-lg leading-relaxed">
            EduUSA is a mobile-first MVP that helps prospective students quickly
            discover, compare, and evaluate universities in the United States.
            The goal was to reduce cognitive load during early exploration and
            make side-by-side comparison effortless.
          </p>
        </section>

        {/* My Role */}
        <section>
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-lg leading-relaxed">
            UX/UI Designer, IA and key flows, component library, and accessibility.
          </p>
        </section>

        {/* Stack, Team, Timeline */}
        <section className="mt-20 max-w-6xl mx-auto font-fraunces">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Stack</h3>
              <p className="text-gray-600 leading-relaxed">
                Figma, Next.js, Tailwind, shadcn/ui, Framer Motion, Vercel
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Team</h3>
              <p className="text-gray-600 leading-relaxed">
                2 UX/UI Designers
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <p className="text-gray-600 leading-relaxed">2 Weeks</p>
            </div>
          </div>
        </section>

        {/* Problem Discovery */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Problem Discovery</h2>
          <h3 className="text-2xl font-medium mb-4 font-fraunces">
            Students Struggle to Compare Universities Quickly and Confidently.
          </h3>
          <p className="text-lg leading-relaxed">
            Students, especially international applicants, struggle to build a
            short list because information is scattered and interfaces are
            noisy. They need a clear path from discovery to comparison to taking
            action (apply or book an appointment).
          </p>
        </section>
      </div>

      {/* User Research */}
      <section className="bg-[#DBE6FF] px-12 md:px-20 py-20 rounded-3xl mt-20 mx-[-3rem] w-full max-w-6xl">
        <div className="px-6 md:px-0 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">User Research</h2>
          <p className="text-lg leading-relaxed mb-12 text-[#1A1A1A]/80">
            Through surveys and interviews with international students, we
            discovered key challenges in the university search and admission
            journey. Most users felt overwhelmed by scattered information,
            unclear comparisons, and lack of guidance in finding universities
            that match their academic and financial profiles. These insights
            helped us shape EduUSA as a simple, guided, and confident experience
            for choosing the right university.
          </p>

          <h3 className="text-2xl font-semibold mb-12">Findings</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Finding 1 */}
            <div className="flex flex-col items-center text-center space-y-5">
            <div className="w-[220px] h-[220px] bg-[#DBE6FF] flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  src="/images/scho1.png"
                  alt="Customizing is inconvenient and manual"
                  width={220}
                  height={220}
                  className="object-contain w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold">
                1. Students struggle to find universities that match their
                goals.
              </h4>
              <p className="text-base text-[#1A1A1A]/80 max-w-md">
                “I don’t know which universities actually fit my grades, budget,
                or career plans. There are so many sites, and none really guide
                me clearly.”
              </p>
            </div>

            {/* Finding 2 */}
            <div className="flex flex-col items-center text-center space-y-5">
              <div className="w-[220px] h-[220px] bg-[#DBE6FF] flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  src="/images/scho2.png"
                  alt="Customizing is inconvenient and manual"
                  width={220}
                  height={220}
                  className="object-contain w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold">
                2. Comparing options feels confusing and time-consuming.
              </h4>
              <p className="text-base text-[#1A1A1A]/80 max-w-md">
                “Every site shows rankings or random lists, but I can’t easily
                compare tuition, scholarships, and admission criteria in one
                place.”
              </p>
            </div>
          </div>

          {/* Insights */}
          <section className="mt-20">
            <h3 className="text-2xl font-semibold mb-12">Insights</h3>

            <div className="flex flex-col space-y-10">
              <div className="flex items-start space-x-6">
                
                <p className="text-lg leading-relaxed text-[#1A1A1A]/90">
                  Lack of centralised, guided information makes the decision
                  process overwhelming, reducing user trust and engagement.
                </p>
              </div>

              <div className="flex items-start space-x-6">
                
                <p className="text-lg leading-relaxed text-[#1A1A1A]/90">
                  Complex comparisons slow users down and increase dropout rates;
                  simplifying key metrics on cards and tables builds clarity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
        {/* HighFidelity */}
      <div className="max-w-3xl w-full space-y-20">
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">High Fidility</h2>
          <p className="text-lg leading-relaxed mb-12">
          University Details | Guest Profile
          </p>
        </section>
      </div>
      {/* Three centered images */}
<section className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
  <div className="flex justify-center">
    <Image
      src="/images/Harvard.png"
      alt="Harvard screen"
      width={320}
      height={640}
      className="object-contain "
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/continueHarvard.png"
      alt="Continue Harvard screen"
      width={320}
      height={640}
      className="object-contain "
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/profile.png"
      alt="Profile screen"
      width={320}
      height={640}
      className="object-contain "
    />
  </div>
</section>
      {/* Takeaway */}
      <div className="max-w-3xl w-full space-y-20">
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Impact (Early Signals)</h2>
          <p className="text-lg leading-relaxed mb-12">
          The initial release showed a noticeable increase in engagement with university cards and detail buttons (example: +X%).
During internal testing, the average navigation time to the comparison table dropped to under Y seconds — a promising indicator 
of improved efficiency.(Metrics will be updated after external validation.)
          </p>
        </section>
      </div>
      <div className="max-w-3xl w-full space-y-20">
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Learnings & Next Steps</h2>
          <p className="text-lg leading-relaxed mb-12">
          Minimal cards and a clear comparison table reduce cognitive load, helping users make faster decisions.
A guest-first approach lowers entry barriers, while transparent value messaging encourages account creation.
Next steps include connecting to real university data, enabling preference storage, and running A/B tests to refine CTA clarity.
          </p>
        </section>
      </div>
      <MoreProjects current="/project/school" />
    </main>
  );
};

export default School;
