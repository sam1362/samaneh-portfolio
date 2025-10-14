"use client";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20">
      {/* title */}
      <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>

      {/* description*/}
      <p className="text-gray-600 mb-12 text-center max-w-lg">
        I'd love to hear from you! Just click the email below or copy it to get
        in touch.
      </p>

      {/* email link*/}
      <a
        href="mailto:samanehmohammadreza83@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Samaneh,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
        className="bg-[#00636b] text-white py-3 px-8 rounded-full font-semibold text-lg transition-transform duration-200 hover:scale-105 hover:bg-[#004f56]"
      >
        ✉️ samanehmohammadreza83@gmail.com
      </a>

      {/* copy text*/}
      <p className="text-gray-500 mt-6 text-sm text-center">
        or copy:{" "}
        <span className="font-medium select-all text-[#00636b]">
        samanehmohammadreza83@gmail.com
        </span>
      </p>
    </main>
  );
}
