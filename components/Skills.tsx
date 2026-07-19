import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-[#0B0F14] px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-xl font-extrabold tracking-widest text-[#E7ECF2]">
          SKILLS
        </p>

        <div className="divide-y divide-white/10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
            >
              <p className="font-semibold text-[#E7ECF2] text-[13px] ">{group.title}</p>
              <p className="text-[13px] text-[#8593A6]">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}