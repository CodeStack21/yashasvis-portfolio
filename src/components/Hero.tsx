import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="home">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 -top-[10%] -right-[5%] bg-[radial-gradient(circle,rgba(108,92,231,0.4),transparent_70%)] animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 -bottom-[5%] -left-[10%] bg-[radial-gradient(circle,rgba(116,185,255,0.3),transparent_70%)] animate-float [animation-delay:2s]" />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-40 top-[40%] left-1/2 bg-[radial-gradient(circle,rgba(162,155,254,0.25),transparent_70%)] animate-float [animation-delay:4s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,92,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,92,231,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-16 w-full max-lg:flex-col-reverse max-lg:text-center">
        {/* Text */}
        <div className="flex-1 max-w-[640px] max-lg:flex max-lg:flex-col max-lg:items-center">
          <p className="text-lg text-text-secondary mb-3 font-medium animate-fade-in-up">
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hello, I'm
          </p>

          <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.1] mb-2 tracking-tight animate-fade-in-up [animation-delay:0.1s] opacity-0">
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">
              Yashasvi Patil
            </span>
          </h1>

          <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-text-secondary mb-6 animate-fade-in-up [animation-delay:0.2s] opacity-0">
            <span>I build </span>
            <span className="text-accent-light font-semibold">responsive web experiences</span>
            <span className="inline-block text-accent animate-blink font-light ml-0.5">|</span>
          </h2>

          <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-10 max-w-[520px] animate-fade-in-up [animation-delay:0.3s] opacity-0 max-lg:text-center">
            Second-year Computer Engineering student passionate about building
            responsive, user-friendly web applications with React and modern
            frontend technologies. Turning ideas into clean, interactive UIs.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-10 flex-wrap animate-fade-in-up [animation-delay:0.4s] opacity-0 max-sm:flex-col max-sm:w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-accent via-accent-light to-accent-blue text-white shadow-[0_0_30px_rgba(108,92,231,0.3)] hover:shadow-[0_0_50px_rgba(108,92,231,0.5)] hover:-translate-y-0.5 transition-all duration-300 max-sm:justify-center"
            >
              View My Work <FiArrowDown />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold border-[1.5px] border-border-hover text-text-primary hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 max-sm:justify-center"
            >
              Get In Touch
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-3 animate-fade-in-up [animation-delay:0.4s] opacity-0 max-lg:justify-center">
            <SocialIcon href="https://github.com/CodeStack21" label="GitHub" icon={<FiGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/yashasvi-patil-584b60330" label="LinkedIn" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:yashasvipatil21@gmail.com" label="Email" icon={<HiOutlineMail />} />
          </div>
        </div>

        {/* Avatar */}
        <div className="shrink-0 flex flex-col items-center gap-6 animate-fade-in-up [animation-delay:0.2s] opacity-0">
          <div className="relative w-80 h-80 max-lg:w-56 max-lg:h-56">
            <div className="absolute -inset-2 rounded-full border-2 border-transparent bg-gradient-to-br from-accent via-accent-light to-accent-blue [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:destination-out] animate-spin-slow" />
            <div className="w-full h-full rounded-full overflow-hidden bg-bg-card border-[3px] border-bg-secondary">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-card to-bg-secondary text-6xl font-extrabold text-accent tracking-widest">
                YP
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-card/80 border border-border text-sm text-text-secondary backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            Open to Internships
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up [animation-delay:1.5s] opacity-0">
        <div className="w-[26px] h-[42px] rounded-[13px] border-2 border-text-muted flex justify-center pt-2 hover:border-accent transition-colors">
          <div className="w-[3px] h-2 bg-accent rounded-sm animate-scroll-wheel" />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-text-secondary text-xl bg-bg-card/50 hover:border-accent hover:text-accent-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(108,92,231,0.2)] hover:bg-accent/10 transition-all duration-200"
    >
      {icon}
    </a>
  );
}
