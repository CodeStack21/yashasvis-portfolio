import { ReactNode } from 'react';
import { FiCode, FiLayout, FiZap } from 'react-icons/fi';

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  subtitle: string;
}

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const highlights = [
  { icon: <FiCode />, title: 'Clean Code', description: 'Writing structured, readable, and well-organized code.' },
  { icon: <FiLayout />, title: 'Responsive Design', description: 'Building interfaces that look great on every screen size.' },
  { icon: <FiZap />, title: 'Problem Solver', description: '1400+ problems solved on CodeChef with a rating of 1461.' },
];

const stats = [
  { number: '1400+', label: 'Problems Solved' },
  { number: '8.81', label: 'CGPA' },
  { number: '25+', label: 'Contests' },
];

export default function About() {
  return (
    <section className="py-24 max-md:py-16 relative" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <SectionHeader label="About Me" title="Passionate about building" highlight="web experiences" subtitle="A glimpse into who I am and what drives me." />

        {/* Grid */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-start max-md:grid-cols-1">
          {/* Story Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-8 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
            <div className="relative z-10">
              <span className="inline-block font-mono text-xs text-accent px-3.5 py-1.5 rounded-full border border-border-hover bg-accent/8 mb-6 tracking-wider uppercase">
                My Story
              </span>
              <p className="text-text-secondary mb-5 leading-relaxed">
                I'm Yashasvi Patil, a second-year Computer Engineering student at R. C. Patel Institute of Technology. My journey into tech started with curiosity about how websites work, and it quickly turned into a passion for frontend development.
              </p>
              <p className="text-text-secondary mb-5 leading-relaxed">
                I love building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. I enjoy the process of turning a design into a real, interactive experience that people can use.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Beyond coding, I'm an active competitive programmer — solving algorithmic challenges on CodeChef and participating in hackathons like the Adobe India Hackathon. I'm always looking to learn, grow, and contribute to meaningful projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border max-sm:grid-cols-1 max-sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="block text-3xl font-extrabold bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent leading-tight">
                      {stat.number}
                    </span>
                    <span className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((item, index) => (
              <HighlightCard key={item.title} icon={item.icon} title={item.title} description={item.description} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 flex flex-col items-center">
      <span className="font-mono text-sm text-accent uppercase tracking-[3px] mb-4 font-medium">{label}</span>
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-2">
        {title} <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">{highlight}</span>
      </h2>
      <p className="text-lg text-text-secondary max-w-[600px]">{subtitle}</p>
    </div>
  );
}

function HighlightCard({ icon, title, description, delay }: HighlightCardProps) {
  return (
    <div
      className="flex items-start gap-5 p-6 bg-bg-card border border-border rounded-2xl hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 relative overflow-hidden group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
      <div className="relative z-10 shrink-0 w-[50px] h-[50px] flex items-center justify-center rounded-[14px] bg-gradient-to-br from-accent/15 to-accent-light/8 text-accent-light text-xl border border-accent/15">
        {icon}
      </div>
      <div className="relative z-10">
        <h3 className="text-[1.05rem] font-bold mb-1">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export { SectionHeader };
