import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    business: '',
    email: '',
    website: '',
    automate: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let's Automate Your Business
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tell us about your business and what you'd like to automate. We'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Business Name</label>
                  <input
                    type="text"
                    value={formState.business}
                    onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Website</label>
                  <input
                    type="url"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">What do you want to automate?</label>
                <input
                  type="text"
                  value={formState.automate}
                  onChange={(e) => setFormState({ ...formState, automate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="e.g., Lead management, customer onboarding, email follow-ups..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Additional Details</label>
                <textarea
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us more about your business and what you'd like to achieve..."
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-sm font-medium text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                {submitted ? (
                  'Request Sent ✓'
                ) : (
                  <>
                    Request Automation Consultation
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-surface border border-border h-full">
              <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-0.5">Email</p>
                    <p className="text-sm text-white">hello@nexusflowai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-0.5">Phone</p>
                    <p className="text-sm text-white">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-0.5">Location</p>
                    <p className="text-sm text-white">Remote — Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-text-muted mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-3 py-2 rounded-lg bg-surface-lighter border border-border text-xs text-text-secondary hover:text-white hover:border-primary/30 transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-primary-light font-medium">⚡ Average Response Time</p>
                <p className="text-sm text-text-secondary mt-1">We typically respond within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
