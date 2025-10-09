import React from "react";

const CupBox: React.FC = () => {
  return (
    <main className="bg-[#FAFAFA] text-[#1A1A1A] min-h-screen px-6 py-24 flex justify-center">
      <div className="max-w-3xl w-full space-y-20">
        {/* Introduction */}
        <section>
          <h1 className="text-3xl font-semibold tracking-tight mb-6">
            CupBox
          </h1>
          <p className="text-lg leading-relaxed">
            CupBox lets customers build their own cupcakes by choosing sponge,
            cream, and toppings, then arranging them in a customised box. It
            makes ordering fun and personal while boosting full-box sales for
            the business.
          </p>
        </section>

        {/* My Role */}
        <section>
          <h2 className="text-2xl font-medium mb-4">My Role</h2>
          <p className="text-lg leading-relaxed">
            User Research, Wireframing, Prototyping, Usability Testing, Visual
            Design
          </p>
        </section>

        {/* Problem Discovery */}
        <section>
          <h2 className="text-2xl font-medium mb-4">Problem Discovery</h2>
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
    </main>
  );
};

export default CupBox;
