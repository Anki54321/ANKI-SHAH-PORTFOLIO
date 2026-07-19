import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/project";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#0B0F14]">
      <Navbar />

      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/projects"
            className="text-xs text-[#8593A6] hover:text-[#5EEAD4] transition-colors "
          >
            ← All projects
          </Link>

          <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-white/3">
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {project.tag && (
            <p className="mt-6 text-xs text-[#8593A6]">{project.tag}</p>
          )}

          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#E7ECF2] sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 text-xs text-[#8593A6]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {project.longDescription.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-[#B8C2CE] text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {project.sections && (
            <div className="mt-10 space-y-10 border-t border-white/10 pt-10">
              {project.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-bold text-[#E7ECF2]">
                    {section.heading}
                  </h2>

                  {section.paragraphs && (
                    <div className="mt-3 space-y-3">
                      {section.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-sm leading-relaxed text-[#B8C2CE] text-justify"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm leading-relaxed text-[#B8C2CE] before:mr-2 before:text-[#8593A6] before:content-['-']"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.diagram && (
                    <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-white/3 p-4 text-xs leading-relaxed text-[#8FF5E4]">
                      {section.diagram}
                    </pre>
                  )}

                  {section.diagramImage && (
                    <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-white/3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={section.diagramImage}
                        alt={section.heading}
                        className="w-full object-contain"
                      />
                    </div>
                  )}

                  {section.subsections && (
                    <div className="mt-4 space-y-5">
                      {section.subsections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="text-sm font-semibold text-[#E7ECF2]">
                            {sub.heading}
                          </h3>
                          <ul className="mt-2 space-y-1.5">
                            {sub.bullets.map((b) => (
                              <li
                                key={b}
                                className="text-sm leading-relaxed text-[#B8C2CE] before:mr-2 before:text-[#8593A6] before:content-['-']"
                              >
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {(project.sourceUrl || project.liveUrl || project.paperUrl) && (
            <div className="mt-8 flex gap-5 border-t border-white/10 pt-6 text-sm text-[#8593A6]">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
                >
                  Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
                >
                  Live demo
                </a>
              )}
              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
                >
                  Paper
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}