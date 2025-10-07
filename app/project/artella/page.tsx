"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";
import { Fraunces } from "next/font/google";
import React from "react";
import ProcessSection from "@/app/components/ProcessSection";
import MarketAnalysisSection from "@/app/components/MarketAnalysisSection";
import ValidationSection from "@/app/components/ValidationSection";
import PainPointsSection from "@/app/components/PainPointsSection";
import PersonaSection from "@/app/components/PersonaSection";
import SolutionArchitectureSection from "@/app/components/SolutionArchitectureSection";
import UsabilityIterationsSection from "@/app/components/UsabilityIterationsSection";






const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ArtellaPage() {
  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen flex flex-col">
     
      <NavigationBar />

      <section className="flex-grow px-6 md:px-16 py-20 max-w-5xl mx-auto space-y-20">
        {/*  intro */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-3">Artella – ArtOnlineshop</h1>
          <p className="text-gray-500 mb-8">
            AI Personalization and AR Previews for Buying Art Online
          </p>
          <Image
            src="/images/HPArtella.png"
            alt="Artella main preview"
            width={1000}
            height={600}
            className="mx-auto rounded-xl shadow-lg"
          />
        </motion.section>

        {/* introPart */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Artella is an AI-powered platform that helps users find the perfect
            artwork for their space. With the ArtMatchTool feature, users can
            scan their wall to get size, colour, and style-based art
            recommendations. AR previews let them visualize pieces at home
            before buying, making art selection easy and personalized.
          </p>
        </section>

        {/* role */}
        <section className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p className="text-gray-600 leading-relaxed">
              I contributed to the end-to-end design process including scoping,
              user research, wireframing, prototyping, and usability testing.
              Additionally, I conducted interviews and synthesized insights to
              guide actionable design decisions.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg">Team</h3>
              <p className="text-gray-600">2 UX Designers, 1 Project Manager</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Tools</h3>
              <p className="text-gray-600">Figma, Miro, Maze</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Duration</h3>
              <p className="text-gray-600">8 weeks</p>
            </div>
          </div>
        </section>

        <Image
          src="/images/questions.png"
          alt="Questions"
          width={1000}
          height={700}
          className="mx-auto rounded-xl"
        />

        {/* problemDiscovery */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Problem Discovery
          </h2>
          <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
            People Find It Hard to See If Art Truly Fits Their Space.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            During our early interviews and surveys, many users shared that
            buying art online feels overwhelming and impersonal. They struggle
            to imagine how a piece would actually look on their walls, whether
            it fits their space, or if the style truly complements their home.
            Browsing endless options without any guidance leaves them feeling
            unsure and frustrated. As a result, they often settle for generic
            art that doesn’t feel meaningful – or they give up on buying
            altogether.
          </p>
        </section>

        <Image
          src="/images/visual - problem.png"
          alt="visual - problem"
          width={1000}
          height={700}
          className="mx-auto rounded-xl"
        />
         <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="text-xl mr-2">🔶</span> Our Solution - AI / AR
            </h2>
          </div>
          <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
            An AI-powered, personalized, and immersive art-buying experience.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Discover, preview, and select the perfect artwork with confidence
            using AR and smart recommendations.
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <video
            src="/videos/ArtMatchTool.mov"
            controls
            muted
            loop
            className="rounded-[30px] w-full max-w-[200px] h-[400px] object-contain"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 text-center space-y-10">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-left">
            <span className="text-xl mr-2">🔶</span>
            Our Solution – No AR device needed
          </h2>
        </div>

        <h1
          className={`${fraunces.className} text-[40px] md:text-[46px] font-normal text-[#1A1A1A] leading-snug max-w-4xl text-left`}
        >
          Upload your space, and preview before you buy.
        </h1>

        <div className="flex justify-center mt-12">
          <video
            src="/videos/DesktopMock.mov"
            controls
            muted
            loop
            playsInline
            className="w-full max-w-[900px] object-contain border-none outline-none overflow-hidden"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          />
        </div>
      </section>
     
       {/* Process */}
       <ProcessSection />
      </section>
   {/* marketAnalysisSection */}
<MarketAnalysisSection />
{/* validationSection */}
<ValidationSection />

{/*  painPointsSection */}
<PainPointsSection />

{/*  personaSection  */}
<PersonaSection />

{/*  solutionAndArchitectureSection  */}
<SolutionArchitectureSection />

{/*  usabilityIterationsSection  */}
<UsabilityIterationsSection />

      {/*  footer  */}
      <Footer />
    </main>
  );
}
