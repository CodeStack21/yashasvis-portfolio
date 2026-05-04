import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  live: string | null;
}

interface ProjectCardProps {
  project: Project;
}

const projects: Project[] = [
  {
    title: 'Online Food Ordering Website',
    description: 'A responsive food ordering platform with Sign Up/Sign In authentication using localStorage, protected routes, dynamic search, and price-based sorting.',
    tech: ['React', 'Tailwind CSS'],
    category: 'Web',
    github: 'https://github.com/CodeStack21',
    live: null,
  },
  {
    title: 'Spotify Clone Website',
    description: 'A fully responsive Spotify clone built with pixel-perfect UI replication, using Flexbox and CSS Grid for accurate alignment and consistent responsiveness.',
    tech: ['HTML', 'CSS'],
    category: 'Web',
    github: 'https://github.com/CodeStack21',
    live: null,
  },
  {
    title: 'Portfolio Website',
    description: 'This personal portfolio — built with React and Tailwind CSS to showcase my projects, skills, and achievements.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    category: 'Web',
    github: 'https://github.com/CodeStack21',
    live: null,
  },
];

const categories = ['All', 'Web'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 max-md:py-16" id="projects">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-mono text-sm text-accent uppercase tracking-[3px] mb-4 font-medium">Projects</span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-2">
            Things I've <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">built</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px]">A selection of projects that showcase my skills.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-[0_0_20px_rgba(108,92,231,0.3)]'
                  : 'bg-bg-card border border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tech, github, live } = project;
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-accent/20">{t}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-light transition-colors">
            <FiGithub /> Code
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-light transition-colors">
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
