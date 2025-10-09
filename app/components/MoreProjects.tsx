// components/MoreProjects.tsx
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  image: string;
}

interface MoreProjectsProps {
  current: string;
}

export default function MoreProjects({ current }: MoreProjectsProps) {
  const projects: Project[] = [
    {
      slug: "/project/artella",
      title: "Online Artshop – Artella (UX / UI)",
      image: "/images/artella-thumb.png",
    },
    {
      slug: "/project/helsenett",
      title: "Helsenett – University Project (UX Designer)",
      image: "/images/helsenett-thumb.png",
    },
    {
      slug: "/project/transport",
      title: "Ticket Model – Transportation Project (UX)",
      image: "/images/ticket-thumb.png",
    },
    {
      slug: "/project/cupbox",
      title: "CupBox – Gamified Cupcake Builder (UX / UI)",
      image: "/images/cupbox-thumb.png",
    },
  ];

  // حذف اسلش انتهایی در مسیر فعلی برای مقایسه‌ی دقیق
  const normalize = (path: string) => path.replace(/\/$/, "");

  const filtered = projects.filter((p) => normalize(p.slug) !== normalize(current));

  return (
    <section className="mt-28 max-w-6xl mx-auto text-center font-fraunces">
      <h2 className="text-2xl font-bold mb-12">Read more of my case studies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={p.slug}
            className="group flex flex-col items-center transition-transform hover:scale-[1.02]"
          >
            {/* Card */}
            <div className="w-full max-w-[380px] h-[280px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
              <Image
                src={p.image}
                alt={p.title}
                width={380}
                height={280}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Title */}
            <p className="mt-5 text-lg text-[#1A1A1A] group-hover:text-[#00636B] transition max-w-[300px]">
              {p.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
