import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="bg-[#0B0F14]">
      <Navbar />

      <section className="px-6 pt-16 pb-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="text-xs text-[#8593A6] hover:text-[#5EEAD4] transition-colors"
          >
            ← Back to home
          </Link>

          <p className="mt-6 text-xs font-extrabold tracking-widest text-[#8593A6]">
            ALL PROJECTS
          </p>

          <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {projects.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 p-5 transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-white/2"
              >
                <ProjectCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}