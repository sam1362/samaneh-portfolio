import TransportIntro from "@/app/components/Transport/TransportIntro";
import TransportDesign from "@/app/components/Transport/TransportDesign";
import MoreProjects from "@/app/components/MoreProjects";

export default function TransportPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section>
        {/* ---------- INTRO ---------- */}
        <div className="w-full">
          <TransportIntro />
        </div>

        {/* ---------- DESIGN (بعداً اضافه می‌کنیم) ---------- */}
        <div className="w-full">
         <TransportDesign />
        </div>

        {/* ---------- MORE PROJECTS ---------- */}
        <div className="mb-32 md:mb-40">
          <MoreProjects current="/project/transport" />
        </div>
      </section>
    </main>
  );
}
