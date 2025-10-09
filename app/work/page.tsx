"use client";

import Projects from "../components/Projects";

export default function WorkPage() {
  return (
    <main className="bg-[#FAFAFA] text-[#1A1A1A] min-h-screen px-6 md:px-16 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-16">
          My Work
        </h1>

        <Projects />
      </section>
    </main>
  );
}
