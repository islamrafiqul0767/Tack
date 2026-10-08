import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo, Wordmark } from './Logo';
import { IconMenu, IconX, IconArrowRight } from './Icons';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Process', path: '/process' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="grain-overlay">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <Logo size={28} />
              <Wordmark className="text-ink text-lg group-hover:text-brand transition-colors duration-300" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 link-underline ${
                    location.pathname === link.path
                      ? 'text-brand'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white rounded-full text-sm font-medium hover:bg-brand transition-all duration-300"
              >
                Book a Call
                <IconArrowRight width={14} height={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-ink rounded-lg hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <IconX width={22} height={22} /> : <IconMenu width={22} height={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-20 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col items-center gap-6 p-8 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-display font-semibold min-h-[44px] flex items-center ${
                      location.pathname === link.path ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-brand text-white rounded-full text-sm font-medium"
                >
                  Book a Call
                  <IconArrowRight width={14} height={14} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main id="main-content" className="min-h-screen" tabIndex={-1}>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <Logo size={24} />
                <Wordmark className="text-ink text-base" />
              </Link>
              <p className="text-sm text-ink-muted max-w-xs leading-relaxed">
                AI-powered automation systems that eliminate repetitive work and accelerate growth.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-ink mb-4">Services</h4>
              <ul className="space-y-2.5">
                {['AI Automation', 'Workflow Automation', 'CRM Automation', 'Lead Management'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-sm text-ink-muted hover:text-brand transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ink mb-4">Company</h4>
              <ul className="space-y-2.5">
                {['About', 'Process', 'Case Studies', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-ink-muted hover:text-brand transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ink mb-4">Get in touch</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/contact" className="text-sm text-ink-muted hover:text-brand transition-colors">Contact form</Link>
                </li>
                <li>
                  <Link to="/work" className="text-sm text-ink-muted hover:text-brand transition-colors">View our work</Link>
                </li>
                <li>
                  <Link to="/process" className="text-sm text-ink-muted hover:text-brand transition-colors">How we work</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink-faint">
              © {new Date().getFullYear()} VECTRAL. All rights reserved.
            </p>
            <p className="text-xs text-ink-faint">
              Automate. Accelerate. Dominate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
