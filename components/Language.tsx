import { languages } from "@/data/site";

export default function Language() {
  return (
    <section id="language" className="border-t border-white/10 bg-[#0B0F14] px-6 pt-16 pb-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-s font-extrabold tracking-widest text-[#8593A6]">
          LANGUAGES
        </p>
        <p className="text-sm text-[#E7ECF2]">
          {languages.map((l, i) => (
            <span key={l.name}>
              {l.name} ({l.level})
              {i < languages.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

