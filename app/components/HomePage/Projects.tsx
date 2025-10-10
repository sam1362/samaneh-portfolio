"use client";

import { projects } from "../../constants/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-white text-[#1A1A1A] px-6 py-24 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        {projects.map((project) => (
          <Link key={project.id} href={project.link}>
            <div className="group cursor-pointer flex flex-col hover:opacity-90 transition-opacity duration-300">
              <div className="rounded-2xl overflow-hidden shadow-sm bg-[#f9f9f9] flex items-center justify-center aspect-[16/9] transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="border border-[#00636b] text-[#00636b] px-3 py-1 text-sm rounded-full">
                    {project.year}
                  </span>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border border-[#00636b] text-[#00636b] px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
