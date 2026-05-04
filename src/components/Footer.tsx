import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/CodeStack21', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/yashasvi-patil-584b60330', label: 'LinkedIn' },
  { icon: <HiOutlineMail />, href: 'mailto:yashasvipatil21@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-3 gap-12 mb-12 max-md:grid-cols-1 max-md:gap-8 max-md:text-center">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="font-mono text-xl font-bold inline-flex items-center gap-0.5 mb-4">
              <span className="text-accent">&lt;</span>
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">Yashasvi</span>
              <span className="text-accent">/&gt;</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs max-md:mx-auto">
              Building responsive, user-friendly web experiences with React and modern frontend technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-text-secondary hover:text-accent-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-text-primary">Connect</h4>
            <div className="flex gap-3 max-md:justify-center">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-secondary text-lg bg-bg-card/50 hover:border-accent hover:text-accent-light hover:-translate-y-1 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Made with <FiHeart className="text-accent text-xs" /> by Yashasvi Patil
          </p>
        </div>
      </div>
    </footer>
  );
}
