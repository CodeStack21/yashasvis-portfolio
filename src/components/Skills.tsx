import { ReactNode } from 'react';
import { FiMonitor, FiCpu, FiTool, FiBook } from 'react-icons/fi';

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <FiMonitor />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Languages',
    icon: <FiCpu />,
    skills: ['C', 'Java', 'JavaScript'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FiTool />,
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    title: 'Concepts',
    icon: <FiBook />,
    skills: ['DSA', 'Responsive Design', 'REST APIs', 'Flexbox', 'CSS Grid'],
  },
];

export default function Skills() {
  return (
    <section className="py-24 max-md:py-16 bg-bg-secondary/50" id="skills">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-mono text-sm text-accent uppercase tracking-[3px] mb-4 font-medium">Skills</span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-2">
            My <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">tech stack</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px]">Technologies and tools I work with.</p>
        </div>

        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} title={cat.title} icon={cat.icon} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-light/8 text-accent-light text-xl border border-accent/15 mb-5">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-primary/60 text-text-secondary border border-border hover:border-border-hover hover:text-accent-light transition-all duration-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
