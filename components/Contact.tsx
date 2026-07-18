import { FaEnvelope } from "react-icons/fa";
import { profile } from "@/data/site";

export default function Contact() {
  const whatsappNumber = profile.phone.replace(/[^\d]/g, "");

  return (
    <section id="contact" className="border-t border-white/10 bg-[#0B0F14] px-6 pt-16 pb-14">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-white/10 p-8">
          <p className="text-xl font-bold text-[#E7ECF2]">Open to new work</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#8593A6] text-justify">
            Freelance DevOps Engineer specializing in Linux, cloud infrastructure, automation, and containerized deployments. Available for remote collaborations worldwide.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#0B0F14] transition-opacity hover:opacity-90"
            >
              <FaEnvelope className="h-3 w-3" />
              Email me
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-[#E7ECF2] transition-colors hover:bg-white/5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}