import { ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'AI Automation', href: '#services' },
    { label: 'Workflow Automation', href: '#services' },
    { label: 'CRM Automation', href: '#services' },
    { label: 'Lead Automation', href: '#services' },
    { label: 'Customer Support', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Industries', href: '#solutions' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                NexusFlow<span className="text-primary-light">AI</span>
              </span>
            </a>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed mb-6">
              We design AI-powered automation systems that eliminate repetitive work and help businesses grow faster.
            </p>
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} NexusFlow AI. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            Automate your business. Work smarter. Grow faster.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-xs text-text-secondary hover:text-white hover:border-primary/30 transition-all"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
