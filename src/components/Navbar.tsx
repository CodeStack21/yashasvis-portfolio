import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === '/' && location.pathname === '/') return true;
    if (to !== '/' && location.pathname === to) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-border shadow-lg py-3'
          : 'py-5'
      }`}
      id="navbar"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-xl font-bold flex items-center gap-0.5 hover:scale-105 transition-transform"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-accent">&lt;</span>
          <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">
            Yashasvi
          </span>
          <span className="text-accent">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul
          className={`flex items-center gap-2 md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:border-none md:p-0 md:shadow-none
            ${menuOpen
              ? 'fixed top-0 right-0 w-3/4 max-w-xs h-screen flex-col justify-center gap-4 bg-bg-secondary/98 backdrop-blur-3xl border-l border-border p-8 shadow-2xl z-50'
              : 'fixed top-0 -right-full w-3/4 max-w-xs h-screen flex-col justify-center gap-4 bg-bg-secondary/98 p-8 md:relative md:right-0 md:flex'
            } transition-all duration-400`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-accent-light bg-accent/12'
                    : 'text-text-secondary hover:text-text-primary hover:bg-accent/10'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="md:ml-2">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent via-accent-light to-accent-blue text-white shadow-[0_0_30px_rgba(108,92,231,0.3)] hover:shadow-[0_0_50px_rgba(108,92,231,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary text-2xl p-2 rounded-lg hover:text-accent hover:bg-accent/10 transition-all z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
}
