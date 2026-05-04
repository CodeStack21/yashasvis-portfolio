import { useState, FormEvent, ChangeEvent, ReactNode } from 'react';
import { FiMail, FiMapPin, FiSend, FiCheck, FiPhone } from 'react-icons/fi';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 max-md:py-16" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-mono text-sm text-accent uppercase tracking-[3px] mb-4 font-medium">Contact</span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold mb-2">
            Get in <span className="bg-gradient-to-r from-accent via-accent-light to-accent-blue bg-clip-text text-transparent">touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px]">Have a project in mind or want to connect? Let's talk!</p>
        </div>

        <div className="grid grid-cols-[1fr_1.2fr] gap-12 max-md:grid-cols-1">
          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            <InfoCard icon={<FiMail />} title="Email" value="yashasvipatil21@gmail.com" href="mailto:yashasvipatil21@gmail.com" />
            <InfoCard icon={<FiPhone />} title="Phone" value="(+91) 9689462451" href="tel:+919689462451" />
            <InfoCard icon={<FiMapPin />} title="Location" value="Maharashtra, India" />
            <div className="bg-bg-card border border-border rounded-2xl p-6 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-dot" />
                <span className="text-sm font-medium text-success">Open to Internships</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                I'm currently seeking internship opportunities in frontend development. Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
              <input
                type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(108,92,231,0.15)] transition-all duration-300 placeholder:text-text-muted"
                placeholder="Yashasvi"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Your Email</label>
              <input
                type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(108,92,231,0.15)] transition-all duration-300 placeholder:text-text-muted"
                placeholder="yashasvi@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
              <textarea
                id="message" name="message" rows={5} value={form.message} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border text-text-primary text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(108,92,231,0.15)] transition-all duration-300 resize-none placeholder:text-text-muted"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-accent via-accent-light to-accent-blue text-white shadow-[0_0_30px_rgba(108,92,231,0.3)] hover:shadow-[0_0_50px_rgba(108,92,231,0.5)] hover:-translate-y-0.5 transition-all duration-300 mt-2"
            >
              {submitted ? <><FiCheck /> Sent!</> : <><FiSend /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, href }: InfoCardProps) {
  const content = (
    <div className="bg-bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-border-hover hover:-translate-y-1 transition-all duration-400 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-light/8 text-accent-light text-xl border border-accent/15 shrink-0">
        {icon}
      </div>
      <div className="relative z-10">
        <p className="text-xs text-text-muted uppercase tracking-wider font-medium">{title}</p>
        <p className="text-sm font-semibold text-text-primary">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
