import Link from 'next/link';

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'Enterprise Software', 'AI & Automation', 'Cloud & DevOps'],
  Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  Connect: ['LinkedIn', 'GitHub', 'Dribbble', 'Twitter / X'],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-10 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid gap-16 mb-16" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          {/* Brand */}
          <div>
            <Link href="/" className="font-syne font-extrabold text-[22px] tracking-[-0.5px] text-white no-underline block mb-4">
              Nex<span className="text-[#FF6200]">ora</span>
            </Link>
            <p className="text-[14px] text-[#5A5A5A] font-light leading-[1.7]">
              Building the software that powers tomorrow's most ambitious businesses. Excellence is our only standard.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#A0A0A0] mb-5">{title}</h4>
              <ul className="list-none flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-[#5A5A5A] font-light no-underline transition-colors duration-200 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-7 flex justify-between items-center flex-wrap gap-4">
          <div className="text-[13px] text-[#5A5A5A] font-light">© 2025 Esper Partners. All rights reserved.</div>
          <div className="flex items-center gap-2 text-[12px] text-[#5A5A5A]">
            Built with <span className="text-[#FF6200]">♥</span> for the world
          </div>
        </div>
      </div>
    </footer>
  );
}
