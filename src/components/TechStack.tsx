const techs = [
  { name: 'React', abbr: 'Re' },
  { name: 'Next.js', abbr: 'Nx' },
  { name: 'Node.js', abbr: 'No' },
  { name: 'Python', abbr: 'Py' },
  { name: 'Swift', abbr: 'Sw' },
  { name: 'Kotlin', abbr: 'Ko' },
  { name: 'AWS', abbr: 'AW' },
  { name: 'Kubernetes', abbr: 'K8' },
  { name: 'PostgreSQL', abbr: 'PG' },
  { name: 'GraphQL', abbr: 'GQ' },
  { name: 'TensorFlow', abbr: 'TF' },
  { name: 'Rust', abbr: 'Rs' },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F7F7F5]">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#A0A0A0] mb-12">
          Technologies We Master
        </div>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {techs.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E0E0E0] flex items-center justify-center transition-all duration-300 group-hover:border-[#FF6200] group-hover:shadow-[0_4px_20px_rgba(255,98,0,0.12)]">
                <span className="font-syne font-extrabold text-[13px] text-[#1A1A1A] tracking-tight">{t.abbr}</span>
              </div>
              <span className="text-[11px] font-medium text-[#A0A0A0] group-hover:text-[#1A1A1A] transition-colors duration-300">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
