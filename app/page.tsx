

"use client";

import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"; 
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      {/* نوار بالا */}
      <NavigationBar />

      {/* بخش معرفی */}
      <Hero />

      {/* بخش پروژه‌ها */}
      <Projects />

      {/* بخش درباره من */}
      <About />
      <Footer />
    </main>
  );
}
