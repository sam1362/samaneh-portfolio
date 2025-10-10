"use client";

import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
    {
        value: 2,
        label: "years",
        subtext: "Master’s in Human–Computer Interaction",
      },
  {
    value: 4,
    suffix: "+",
    label: "years",
    subtext: "UX / UI Designer",
  },
  {
    value: 30,
    suffix: "+",
    label: "Projects",
    subtext: "Web Designer",
  },
  {
    value: 4,
    label: "years",
    subtext: "Backend Developer and IT Expert",
  },

];

export default function AboutStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // active
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // count
  useEffect(() => {
    if (visible) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1000;
        const step = Math.ceil(duration / end);

        const counter = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });
          if (start === end) clearInterval(counter);
        }, step);
      });
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white rounded-3xl shadow-sm p-10 w-full max-w-4xl border border-gray-100"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col justify-center p-6 rounded-2xl bg-[#FAFAFA] hover:bg-white transition-colors duration-300 shadow-sm"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="text-6xl font-semibold text-gray-900">
              {counts[i]}
              {stat.suffix}
            </h2>
            <span className="text-gray-500 text-sm uppercase tracking-wide">
              {stat.label}
            </span>
          </div>

          <hr className="my-4 border-gray-200" />

          <p className="text-gray-800 text-lg font-medium leading-snug">
            {stat.subtext}
          </p>
        </div>
      ))}
    </div>
  );
}
