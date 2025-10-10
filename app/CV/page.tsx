"use client";

import { useEffect } from "react";

export default function CVPage() {
  useEffect(() => {
    //open pdf
    window.open("/resume.pdf", "_blank");
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-center px-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Opening Resume...
      </h1>
      <p className="text-gray-600 mb-8">
        If your CV doesn’t open automatically,
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00636b] font-medium underline ml-1"
        >
          click here to view it.
        </a>
      </p>
    </section>
  );
}
