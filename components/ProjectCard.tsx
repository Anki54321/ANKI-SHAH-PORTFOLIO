import Link from "next/link";
import type { projects } from "@/data/project";

type ProjectItem = (typeof projects)[number];

export default function ProjectCard({ item }: { item: ProjectItem }) {
  const linkHref = item.liveUrl || item.sourceUrl || item.paperUrl || undefined;

  return (
    <div className="rounded-xl border border-white/10 p-5 transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-white/2" >
      {/* thumbnail */}
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-white/3">
        {item.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* external arrow, right aligned */}
      <div className="mt-2 flex justify-end">
        {linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.title}`}
            className="text-[#8593A6] hover:text-[#E7ECF2] transition-colors"
          >
            ↗
          </a>
        )}
      </div>

      {item.tag && (
        item.paperUrl ? (
          <a
            href={item.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8593A6] underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
          >
            {item.tag}
          </a>
        ) : (
          <p className="text-xs text-[#8593A6]">{item.tag}</p>
        )
      )}

      <Link href={`/projects/${item.slug}`}>
        <h3 className="mt-1 text-lg font-bold text-[#E7ECF2] hover:text-[#5EEAD4] transition-colors">
          {item.title}
        </h3>
      </Link>

      <p className="mt-2 text-sm leading-relaxed text-[#8593A6] text-justify">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 text-xs text-[#8593A6]"
          >
            {tech}
          </span>
        ))}
      </div>

      {(item.sourceUrl || item.liveUrl || item.paperUrl) && (
        <div className="mt-4 flex gap-4 border-t border-white/10 pt-4 text-xs text-[#8593A6]">
          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
            >
              Source
            </a>
          )}
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#5EEAD4] transition-colors"
            >
              Live demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}