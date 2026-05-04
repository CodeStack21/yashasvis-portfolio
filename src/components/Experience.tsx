import { FiAward, FiCalendar } from 'react-icons/fi';

interface Achievement {
  title: string;
  org: string;
  period: string;
  points: string[];
}

const achievements: Achievement[] = [
  {
    title: 'CodeChef Competitive Programmer',
    org: 'CodeChef',
    period: '2023 – Present',
    points: [
      'Achieved highest rating of 1461',
      'Participated in 25+ rated contests',
      'Solved 1400+ algorithmic problems',
    ],
  },
  {
    title: 'Adobe India Hackathon',
    org: 'Adobe',
    period: '2024',
    points: [
      'Worked in a team to design and develop solutions',
      'Built under competitive, time-bound conditions',
    ],
  },
  {
    title: 'TCS iON Career Edge – Young Professional',
    org: 'TCS',
    period: '2024',
    points: [
      'Gained knowledge in communication and workplace readiness',
      'Learned foundational IT concepts',
    ],
  },
  {
    title: 'GenAI-Powered Data Analytics Simulation',
    org: 'Tata Group',
    period: '2024',
    points: [
      'Hands-on exposure to data analysis and business insights',
      'Explored AI-driven decision-making workflows',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 max-md:py-16 bg-bg-secondary/50" id="experience">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-mono text-sm text-accent uppercase tracking-[3px] mb-4 font-medium">Achievements</span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-2">
            Certifications & <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px]">Competitions, certifications, and milestones along my journey.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-light/30 to-transparent max-md:left-4" />
          <div className="flex flex-col gap-10">
            {achievements.map((item, i) => (
              <div key={i} className="relative pl-20 max-md:pl-14">
                <div className="absolute left-[22px] top-8 w-4 h-4 rounded-full bg-accent border-[3px] border-bg-primary shadow-[0_0_20px_rgba(108,92,231,0.4)] max-md:left-[6px]" />
                <div className="bg-bg-card border border-border rounded-2xl p-6 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4 max-sm:flex-col max-sm:gap-2">
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-accent-light font-medium flex items-center gap-2"><FiAward className="text-sm" /> {item.org}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-text-muted font-mono shrink-0"><FiCalendar className="text-xs" /> {item.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.points.map((p, j) => (
                        <li key={j} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                          <span className="text-accent mt-1.5 text-[6px]">●</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
