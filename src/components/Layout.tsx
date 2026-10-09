import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo, Wordmark } from './Logo';
import { IconMenu, IconX, IconArrowRight, IconCheck } from './Icons';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <div className="grain-overlay">
      {/* Skip link */}
      <a href="#main-content" className="skip-to-main">Skip to main content</a>

      {/* Top announcement bar - Hostinger style */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[60] bg-ink text-white"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand text-white font-semibold text-[10px] uppercase tracking-wider">
            New
          </span>
          <span className="text-white/90">Free automation consultation — </span>
          <Link to="/contact" className="font-semibold text-white hover:text-brand-light transition-colors underline underline-offset-2">
            Book your session →
          </Link>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-border/60 shadow-[0_1px_40px_rgba(0,0,0,0.04)]'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <Logo size={28} />
              <Wordmark className="text-ink text-lg group-hover:text-brand transition-colors duration-300" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-brand'
                      : 'text-ink-muted hover:text-ink hover:bg-surface'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white rounded-full text-sm font-semibold hover:bg-brand transition-all duration-300"
              >
                Get Started
                <IconArrowRight width={14} height={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-ink rounded-lg hover:bg-surface transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <IconX width={22} height={22} /> : <IconMenu width={22} height={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Hostinger style full screen */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="pt-20 pb-10 px-5 sm:px-8">
              {/* Nav links */}
              <nav className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-display font-semibold min-h-[56px] ${
                        location.pathname === link.path
                          ? 'text-brand bg-brand-50'
                          : 'text-ink hover:bg-surface'
                      }`}
                    >
                      {link.label}
                      <IconArrowRight width={18} height={18} className="opacity-30" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand text-white rounded-full text-base font-semibold"
                >
                  Book a Free Consultation
                  <IconArrowRight width={18} height={18} />
                </Link>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <IconCheck width={14} height={14} className="text-brand" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconCheck width={14} height={14} className="text-brand" />
                    <span>Custom solutions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main id="main-content" className="min-h-screen" tabIndex={-1}>{children}</main>

      {/* Footer - Hostinger inspired comprehensive footer */}
      <footer className="bg-ink text-white">
        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                <Logo size={28} />
                <Wordmark className="text-white text-lg" />
              </Link>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-6">
                AI-powered automation systems that eliminate repetitive work and accelerate business growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <IconCheck width={12} height={12} className="text-brand" />
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <IconCheck width={12} height={12} className="text-brand" />
                  <span>Ongoing support</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {[
                  { label: 'AI Automation', path: '/services' },
                  { label: 'Workflow Automation', path: '/services' },
                  { label: 'CRM Automation', path: '/services' },
                  { label: 'Lead Automation', path: '/services' },
                  { label: 'Customer Support', path: '/services' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-sm text-white/60 hover:text-brand transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-white/60 hover:text-brand transition-colors">About</Link></li>
                <li><Link to="/process" className="text-sm text-white/60 hover:text-brand transition-colors">Our Process</Link></li>
                <li><Link to="/work" className="text-sm text-white/60 hover:text-brand transition-colors">Case Studies</Link></li>
                <li><Link to="/solutions" className="text-sm text-white/60 hover:text-brand transition-colors">Industries</Link></li>
                <li><Link to="/contact" className="text-sm text-white/60 hover:text-brand transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get Started</h4>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-white/60 hover:text-brand transition-colors">Free Consultation</Link></li>
                <li><Link to="/services" className="text-sm text-white/60 hover:text-brand transition-colors">Explore Services</Link></li>
                <li><Link to="/process" className="text-sm text-white/60 hover:text-brand transition-colors">How We Work</Link></li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-light transition-all"
                >
                  Book a Call
                  <IconArrowRight width={14} height={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} VECTRAL. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Automate. Accelerate. Dominate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
