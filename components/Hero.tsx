import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/site";

export default function Hero() {
  const whatsappNumber = profile.phone.replace(/[^\d]/g, "");

  return (
    <section id="top" className="bg-[#0B0F14] px-6 pt-16 pb-14">
      <div className="mx-auto max-w-3xl">
        {/* <p className="fade-up fade-up-1 text-[15px] text-[#8593A6]">{profile.location}</p> */}

        <h1 className="fade-up fade-up-2 mt-3 text-5xl font-extrabold tracking-tight text-[#E7ECF2] sm:text-6xl">
          {profile.name}
        </h1>

        <p className="fade-up fade-up-3 mt-4 text-lg text-[#B8C2CE]">
          {profile.role} · {profile.subrole}
        </p>

        <p className="fade-up fade-up-4 mt-6 max-w-2xl text-[15px] leading-relaxed text-[#B8C2CE] text-justify">
          {profile.summary}
        </p>

        <div className="fade-up fade-up-5 mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl bg-white px-5 h-11 flex items-center text-sm font-medium text-[#0B0F14] transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-[#E7ECF2] transition-colors hover:bg-white/5"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}