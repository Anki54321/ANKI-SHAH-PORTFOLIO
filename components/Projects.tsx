import Link from "next/link";
import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section id="projects" className="border-t border-white/10 bg-[#0B0F14] px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-baseline justify-between">
          <p className="mb-6 text-xl font-extrabold tracking-widest text-[#E7ECF2]">
            PROJECTS
          </p>
          <Link
            href="/projects"
            className="text-xs text-[#8593A6] hover:text-[#5EEAD4] transition-colors"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
           {projects.slice(0, 2).map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}