"use client";
import { projects } from "../constants/projects";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-white text-[#1A1A1A] px-6 py-24 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold mb-16"
      >
        Selected Work
      </motion.h2>

      {/* گرید دو ستونه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        {projects.map((project) => (
          <Link key={project.id} href={project.link}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer flex flex-col hover:opacity-90 transition"
            >
              {/* تصویر پروژه */}
              <div className="rounded-2xl overflow-hidden shadow-sm bg-[#f9f9f9] flex items-center justify-center aspect-[16/9]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* توضیحات پروژه */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                  {project.description}
                </p>

                {/* برچسب‌ها */}
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
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
