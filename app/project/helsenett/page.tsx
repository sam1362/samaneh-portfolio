import Helsenett from "@/app/components/Helsenett/Helsenett";
import HelsenettIdea from "@/app/components/Helsenett/HelsenettIdea";
import HelsenettProcess from "@/app/components/Helsenett/HelsenettProcess";
import HelsenettPOV from "@/app/components/Helsenett/HelsenettPOV";
import HelsenettPrototype from "@/app/components/Helsenett/HelsenettPrototype";
import MoreProjects from "@/app/components/MoreProjects";

export default function HelsenettPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section>
        <div className="w-full">
          <Helsenett />
        </div>

        <div className="w-full">
          <HelsenettIdea />
        </div>

        <div>
          <HelsenettProcess />
        </div>

        <div>
          <HelsenettPOV />
        </div>

        <div>
          <HelsenettPrototype />
        </div>

  
        <div className="mb-32 md:mb-40">
          <MoreProjects current="/project/helsenett" />
        </div>
      </section>
    </main>
  );
}
