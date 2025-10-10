"use client";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import About from "../components/HomePage/About";

export default function WorkPage() {
  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen flex flex-col">
      <NavigationBar />

      <section className="flex-grow px-6 md:px-16 py-20 max-w-6xl mx-auto">
      

        <About />
      </section>

      <Footer />
    </main>
  );
}