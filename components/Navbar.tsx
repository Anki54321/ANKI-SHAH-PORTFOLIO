import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0B0F14]">
      <nav className="mx-auto flex max-w-3xl items-center justify-between pt-6 pb-6">
        <a href="#top" className="text-lg font-bold text-[#E7ECF2]">
          {profile.name}
        </a>
        <ul className="flex items-center gap-7 text-[14px]">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  i === 0
                    ? "font-medium text-[#E7ECF2]"
                    : "text-[#8593A6] hover:text-[#E7ECF2] transition-colors"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
           <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 h-9 text-xs font-medium text-[#0B0F14] shadow-sm shadow-black/20 transition-all hover:opacity-90 hover:scale-[1.03]"
            >
              <FiDownload className="h-3.5 w-3.5" />
              Anki CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}