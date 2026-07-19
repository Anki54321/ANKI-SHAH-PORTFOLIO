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

          <p className="mb-6 text-xl font-extrabold tracking-widest text-[#E7ECF2]">
            ALL PROJECTS
          </p>

          <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {projects.map((item) => (
              <div
                key={item.title}
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