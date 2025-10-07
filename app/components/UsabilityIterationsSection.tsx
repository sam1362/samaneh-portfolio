"use client";

import Image from "next/image";
import React from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

const UsabilityIterationsSection: React.FC = () => {
  return (
    <section className="bg-white text-[#1A1A1A] py-20 px-6 md:px-20 space-y-16">
      {/* ===== عنوان ===== */}
    
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Iterations from Usability Tests
          </h2>
          
        </div>
        <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
  5 usability test rounds led to clearer hierarchy and smoother
          navigation.      
  </h2>
      

        <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
          We observed how users navigated key scenarios to uncover patterns,
          mental models, and blockers. Iterative feedback helped reduce
          cognitive load and surface key information more effectively.
        </p>
      </div>

      {/* ===== زیرعنوان و توضیحات ===== */}
      <div className="max-w-4xl mx-auto">
      <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
 1 – Relocating Size and Frame Options     
  </h2>
       
        <p className="text-gray-700 text-[15px] leading-relaxed">
          Moved size and frame selection closer to the artwork preview to
          improve visibility and ease of use. Helped users notice and interact
          with customization options more naturally.
        </p>
      </div>

      {/* ===== تصویر ===== */}
      <div className="max-w-5xl mx-auto mt-10">
        <Image
          src="/images/firstuse.png"
          alt="Usability test iteration preview"
          width={700}
          height={300}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
       {/* ===== زیرعنوان و توضیحات ===== */}
       <div className="max-w-4xl mx-auto">
      <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
2-Layout Shift: Vertical Toolbar to Horizontal    </h2>
       
        <p className="text-gray-700 text-[15px] leading-relaxed">
        Users needed more space to view wall images clearly, but the vertical toolbar was limiting visibility. 
        Moving the toolbar to the top made it easier to access and improved the overall viewing experience. 
        This toolbar is still on iteration phase.
        </p>
      </div>

      {/* ===== تصویر ===== */}
      <div className="max-w-5xl mx-auto mt-10">
        <Image
          src="/images/upload.png"
          alt="Usability test iteration preview"
          width={700}
          height={300}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
        {/* ===== زیرعنوان و توضیحات ===== */}
        <div className="max-w-4xl mx-auto">
      <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
3-Add Gallery Wall Suggestions    </h2>
       
        <p className="text-gray-700 text-[15px] leading-relaxed">
        When users preview their selected art in their own space, we now show curated matching pieces as a gallery wall option. 
        This helps them visualise a fuller look and explore related artworks easily.
        </p>
      </div>

      {/* ===== تصویر ===== */}
      <div className="max-w-5xl mx-auto mt-10">
        <Image
          src="/images/gallery.png"
          alt="Usability test iteration preview"
          width={400}
          height={200}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
        {/* ===== زیرعنوان و توضیحات ===== */}
        <div className="max-w-4xl mx-auto">
      <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
Web App Iteration: Needs to be Visually Appealing     </h2>
       
        <p className="text-gray-700 text-[15px] leading-relaxed">
        We redesigned the interface with dark tones to spotlight the artwork and support better decisions. 
        Icons guide quick understanding, while an artist’s quote adds emotion and meaning to the experience.
        </p>
      </div>

      {/* ===== تصویر ===== */}
      <div className="max-w-5xl mx-auto mt-10">
        <Image
          src="/images/app1.png"
          alt="Usability test iteration preview"
          width={600}
          height={300}
          className="rounded-xl object-contain mx-auto"
        />
      </div>
 {/* ===== عنوان ===== */}
    
 <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="text-xl mr-2">🔶</span> Project Takeaways
          </h2>
          
        </div>
        <h2
            className={`${fraunces.className} text-[42px] font-normal text-[#1A1A1A] leading-snug`}
          >
  Design decisions become far more meaningful when grounded in real user context, not just abstract assumptions.  
  </h2>
      

        <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
        We began with deep research into personalization, AR, and online art-buying behavior. While some early ideas didn’t 
        fit MVP goals, user interviews and contextual insights helped shape focused, valuable directions. 
        Understanding how people connect with their space, navigate uncertainty, and choose art emotionally guided our design approach.
        </p>
      </div>
    </section>
  );
};

export default UsabilityIterationsSection;
