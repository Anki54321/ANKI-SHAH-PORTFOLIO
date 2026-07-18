import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 bg-[#0B0F14] px-6 pt-16 pb-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-s font-extrabold tracking-widest text-[#8593A6]">
          EXPERIENCE
        </p>

        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.role + job.period}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-[15px] text-[#E7ECF2]">{job.role}</p>
                <p className="text-xs text-[#8593A6]">{job.period}</p>
              </div>
               <a
                href={job.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8593A6] hover:text-[#5EEAD4] hover:underline transition-colors"
              >
                {job.org}
              </a>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-justify leading-relaxed text-[#B8C2CE] before:mr-2 before:text-[#8593A6] before:content-['-']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}