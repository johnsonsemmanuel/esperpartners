const techs = ['React', 'Next.js', 'Node.js', 'Python', 'Swift', 'Kotlin', 'AWS', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'TensorFlow', 'Rust'];

export default function TechStack() {
  return (
    <section className="py-20 px-12 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#A0A0A0] mb-10">
          Technologies We Master
        </div>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {techs.map((t) => (
            <span key={t} className="tech-logo font-syne font-bold text-[14px] tracking-[-0.02em]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
