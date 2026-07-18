import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B0F14] px-6 pt-9 pb-14">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 text-xs text-[#8593A6]">
        <p>© {year} {profile.name}</p>
        <div className="flex gap-5">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaGithub className="h-4 w-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>

          <a
             href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GMAIL"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}