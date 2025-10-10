import React from "react";
import Image from "next/image";
import MoreProjects from "../MoreProjects";


const CupBox: React.FC = () => {
  return (
    <main className="bg-white text-[#1A1A1A] min-h-screen px-6 py-24 flex justify-center flex-col items-center">
      <div className="max-w-3xl w-full space-y-20">
        {/* Introduction */}
        <section>
          <h1 className="text-3xl font-semibold tracking-tight mb-6">CupBox</h1>

          <p className="text-lg leading-relaxed">
            CupBox lets customers build their own cupcakes by choosing sponge,
            cream, and toppings, then arranging them in a customised box. It
            makes ordering fun and personal while boosting full-box sales for
            the business.
          </p>
        </section>

        {/* My Role */}
        <section>
          <h2 className="text-2xl font-bold mb-4">My Role</h2>
          <p className="text-lg leading-relaxed">
            User Research, Wireframing, Prototyping, Usability Testing, Visual
            Design
          </p>
        </section>
        <section className="mt-20 max-w-6xl mx-auto font-fraunces">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Tools</h3>
      <p className="text-gray-600 leading-relaxed">
        Figma, Miro, FigJam, Maze, <br />
        Optimal Workshop
      </p>
    </div>

    {/* Team */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Team</h3>
      <p className="text-gray-600 leading-relaxed">3 UX Designers</p>
      <p className="text-gray-600 leading-relaxed">2 UX/UI Designers</p>
    </div>

    {/* Timeline */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Timeline</h3>
      <p className="text-gray-600 leading-relaxed">4 Weeks</p>
    </div>
  </div>
</section>


        {/* Problem Discovery */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Problem Discovery</h2>
          <h3 className="text-2xl font-medium mb-4 font-fraunces">
            Customers can not easily customize cupcakes online.
          </h3>
          <p className="text-lg leading-relaxed">
            Customers who want personalised cupcakes online face a big
            limitation. Customers can’t easily create their own mix of flavours,
            creams, and toppings. Many shops only let them pick from preset
            boxes, or they have to call or email to request custom combinations.
            This makes the process slow and frustrating, leading to fewer online
            orders and abandoned purchases.
          </p>
        </section>
      </div>

 {/* User Research */}
      <section className="bg-[#F9F2F3] px-12 md:px-20 py-20 rounded-3xl mt-20 mx-[-3rem] w-full max-w-6xl">
      

  <div className="px-6 md:px-0 max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">User Research</h2>
    <p className="text-lg leading-relaxed mb-12 text-[#1A1A1A]/80">
      Through surveys and interviews, we discovered key frustrations people face when ordering cupcakes online. 
      Customers want freedom to create their own mixes, but current systems make the process rigid, unclear, and 
      time-consuming. These insights guided us to design CupBox as a more interactive, flexible, and satisfying experience.
    </p>

    <h3 className="text-2xl font-semibold mb-12">Findings</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
  {/* Finding 1 */}
  <div className="flex flex-col items-center text-center space-y-5">
    <div className="w-[220px] h-[220px] bg-[#F9F2F3] flex items-center justify-center rounded-2xl overflow-hidden">
      <Image
        src="/images/cup1.png"
        alt="Users can't fully customise cupcakes"
        width={220}
        height={220}
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
    <h4 className="text-lg font-bold">
      1. Users can’t fully customise cupcakes.
    </h4>
    <p className="text-base text-[#1A1A1A]/80 max-w-md">
      “I want to choose my own base, cream, and topping, but the website only
      shows pre-made cupcakes. It feels limiting and not personal.”
    </p>
  </div>

  {/* Finding 2 */}
  <div className="flex flex-col items-center text-center space-y-5">
    <div className="w-[220px] h-[220px] bg-[#F9F2F3] flex items-center justify-center rounded-2xl overflow-hidden">
      <Image
        src="/images/cup2.png"
        alt="Customizing is inconvenient and manual"
        width={220}
        height={220}
        className="object-contain w-full h-full"
      />
    </div>
    <h4 className="text-lg font-bold">
      2. Customizing is inconvenient and manual.
    </h4>
    <p className="text-base text-[#1A1A1A]/80 max-w-md">
      “When I try to customise, I have to email or call the shop. It makes the
      online order feel frustrating and too long.”
    </p>
  </div>

  {/* Finding 3 */}
  <div className="flex flex-col items-center text-center space-y-5">
    <div className="w-[220px] h-[220px] bg-[#F9F2F3] flex items-center justify-center rounded-2xl overflow-hidden">
      <Image
        src="/images/cup3.png"
        alt="No real-time customized cupcake preview"
        width={220}
        height={220}
        className="object-contain w-full h-full"
      />
    </div>
    <h4 className="text-lg font-bold">
      3. No real-time customized cupcake preview.
    </h4>
    <p className="text-base text-[#1A1A1A]/80 max-w-md">
      “I can’t see what my cupcake will look like until it arrives. 
      I wish I could preview it while building my box.”
    </p>
  </div>

  {/* Finding 4 */}
  <div className="flex flex-col items-center text-center space-y-5">
    <div className="w-[220px] h-[220px] bg-[#F9F2F3] flex items-center justify-center rounded-2xl overflow-hidden">
      <Image
        src="/images/cup4.png"
        alt="Users not satisfied with available cupcakes"
        width={220}
        height={220}
        className="object-contain w-full h-full"
      />
    </div>
    <h4 className="text-lg font-bold">
      4. Users don’t satisfied with available cupcakes.
    </h4>
    <p className="text-base text-[#1A1A1A]/80 max-w-md">
      “When I order, I don’t feel encouraged to fill a whole box. 
      Sometimes I stop halfway and just leave the site.”
    </p>
  </div>
</div>
{/* Insights */}
<section className="mt-20">
  <h3 className="text-2xl font-semibold mb-12">Insights</h3>

  <div className="flex flex-col space-y-10">
    {/* Insight 1 */}
    <div className="flex items-start space-x-6">
      <div className="w-[40px] h-[40px] flex-shrink-0">
        <Image
          src="/images/insight1.png"
          alt="Insight icon 1"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <p className="text-lg leading-relaxed text-[#1A1A1A]/90">
        Lack of flexibility makes the process feel generic, lowering excitement and reducing repeat orders. 
        This decreases users satisfaction and engagement.
      </p>
    </div>

    {/* Insight 2 */}
    <div className="flex items-start space-x-6">
      <div className="w-[40px] h-[40px] flex-shrink-0">
        <Image
          src="/images/insight2.png"
          alt="Insight icon 2"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <p className="text-lg leading-relaxed text-[#1A1A1A]/90">
        No live preview of customized cupcake — users feel uncertain and less motivated to buy, decreasing conversion rate.
      </p>
    </div>

    {/* Insight 3 */}
    <div className="flex items-start space-x-6">
      <div className="w-[40px] h-[40px] flex-shrink-0">
        <Image
          src="/images/insight3.png"
          alt="Insight icon 3"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <p className="text-lg leading-relaxed text-[#1A1A1A]/90">
        Lack of completion cues leads to abandoned carts and missed upsell opportunities. 
        A gamified box-filling flow encourages full-box purchases and boosts sales.
      </p>
    </div>
  </div>
</section>

  </div>
  
  </section>
<div className="max-w-3xl w-full space-y-20">
  {/* Our Solution */}
  <section className="mt-20">
    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
    <h3 className="text-2xl font-medium mb-4 font-fraunces">
      Enable full cupcake customization with live preview and direct box add.
    </h3>
    <p className="text-lg leading-relaxed mb-12">
      Give customers access to all 3 parts of personalized cupcake creation (base, cream, topping),
      show a live preview as they build, and let them add each cupcake directly into a customised box.
    </p>

    {/* Before / After images */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Before */}
      <div className="flex flex-col items-center">
        <Image
          src="/images/before.png"
          alt="Before design"
          width={450}
          height={550}
          className=" object-contain"
        />
       
      </div>

      {/* After */}
      <div className="flex flex-col items-center">
        <Image
          src="/images/after.png"
          alt="After design"
          width={450}
          height={550}
          className="object-contain"
        />
      
      </div>
    </div>
  </section>
     {/* Usability | Iterations */}
     <div className="mb-12">
      <h4 className="text-xl font-semibold mb-3">Usability | Iterations</h4>
      <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
        Customers can’t easily create their own mix of flavours, creams, and toppings.
        Many shops only let them pick from preset boxes, or they have to call or email
        to request custom combinations. This makes the process slow and frustrating,
        leading to fewer online orders and abandoned purchases.
      </p>
    </div>
    <section className="mt-20 max-w-6xl mx-auto">
  <h2 className="text-2xl font-bold mb-12">Findings</h2>

  <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
    {/* Left: Image (larger area) */}
    <div className="flex-[1.2] flex justify-center items-stretch">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src="/images/info.png"
          alt="Findings Scenario 1"
          width={700}
          height={460}
          className="object-contain h-full w-auto"
        />
      </div>
    </div>

    {/* Right: Text (smaller area) */}
    <div className="flex-[0.8] space-y-4 text-[#1A1A1A] flex flex-col justify-center">
      <h3 className="text-xl font-semibold">Scenario 1</h3>
      <p className="text-lg leading-relaxed">
        We asked participants to create a customized box after selecting their preferred ingredients.
      </p>

      <div>
        <h4 className="text-lg font-semibold mb-1">Issue</h4>
        <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
          Many wanted to save their cupcake for future purchases, but the process was unclear.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-1">Our solution</h4>
        <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
          Add a popup that allows users to save the created cupcake. In this popup, they can rename their
          custom cupcake and store it as a favorite for future orders.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mt-20 max-w-6xl mx-auto">

  <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
    {/* Left: Image (larger area) */}
    <div className="flex-[1.2] flex justify-center items-stretch">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src="/images/mycupcake.png"
          alt="Findings Scenario 2"
          width={700}
          height={460}
          className="object-contain h-full w-auto"
        />
      </div>
    </div>

    {/* Right: Text (smaller area) */}
    <div className="flex-[0.8] space-y-4 text-[#1A1A1A] flex flex-col justify-center">
      <h3 className="text-xl font-semibold">Scenario 2</h3>
      <p className="text-lg leading-relaxed">
        We asked participants to consider they have already created a cupcake before, and it’s not their
        first time purchasing from CupBox.
      </p>

      <div>
        <h4 className="text-lg font-semibold mb-1">Issue</h4>
        <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
          They didn’t have access to saved cupcakes in the customized box page.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-1">Our solution</h4>
        <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
          Add a tab to directly access the cupcakes users already created and saved as their favorite ones.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mt-20 max-w-6xl mx-auto font-fraunces">
  <h2 className="text-2xl font-bold mb-12 text-center">
    It’s a gamified option where people can enjoy creating and choosing their personalized cupcake.
  </h2>

  <div className="flex justify-center">
    <video
      src="/videos/Customize.mov"
      controls
      muted
      loop
      playsInline
      className="object-contain"
      style={{ maxWidth: "900px", height: "auto" }}
    />
  </div>
</section>


<section className="mt-20 max-w-6xl mx-auto">
  <h2 className="text-2xl font-bold mb-12">High Fidelity (Some Pages)</h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
    {/* Firstcake */}
    <div className="flex flex-col items-center w-full md:w-1/2">
      <div className="w-full h-[400px] flex items-center justify-center">
        <Image
          src="/images/firstcake.png"
          alt="Customized Box Page"
          width={600}
          height={420}
          className="object-contain w-full h-full"
        />
      </div>
    </div>

    {/* Available Cupcake */}
    <div className="flex flex-col items-center w-full md:w-1/2">
      <div className="w-full h-[400px] flex items-center justify-center">
        <Image
          src="/images/available.png"
          alt="Available Cupcake Page"
          width={600}
          height={420}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
</section>


<section className="mt-20 max-w-6xl mx-auto">


  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
    {/* Firstcake */}
    <div className="flex flex-col items-center w-full md:w-1/2">
      <div className="w-full h-[400px] flex items-center justify-center">
        <Image
          src="/images/chocolate.png"
          alt="chocolate Box Page"
          width={600}
          height={420}
          className="object-contain w-full h-full"
        />
      </div>
    </div>

    {/* Available Cupcake */}
    <div className="flex flex-col items-center w-full md:w-1/2">
      <div className="w-full h-[400px] flex items-center justify-center">
        <Image
          src="/images/fullbox.png"
          alt="fullbox Cupcake Page"
          width={600}
          height={420}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
</section>


 {/* Takeaway */}
 <section>
          <h2 className="text-2xl font-bold mb-4">Project Takeaways</h2>
          <h3 className="text-2xl font-medium mb-4 font-fraunces">
          Great design happens where user needs and business goals meet.

          </h3>
          <p className="text-lg leading-relaxed">
          CupBox began as a way to let people personalize cupcakes online.
Real insights revealed bigger gaps, limited customization, no live preview, 
and a clunky ordering flow.
By focusing on how users actually want to create and visualize their cupcakes, 
the design became both delightful for customers and valuable for the business.
          </p>
        </section>


      
      <MoreProjects current="/project/cupbox" />

</div>

    </main>
  );
};

export default CupBox;
