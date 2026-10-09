import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition, { Reveal } from '../components/PageTransition';
import { IconSend, IconCheck, IconAlertCircle, IconArrowRight } from '../components/Icons';

const easeOutExpo = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    website: '',
    automate: '',
    details: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'unavailable'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('unavailable');
  };

  const resetForm = () => {
    setSubmitState('idle');
    setFormData({ name: '', business: '', email: '', website: '', automate: '', details: '' });
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutExpo as any }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-50 border border-brand-100 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                </span>
                <span className="text-xs font-semibold text-brand uppercase tracking-[0.2em]">Get in Touch</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6 leading-[0.95] tracking-[-0.03em]">
                Let's <span className="text-gradient-red">automate</span> your business.
              </h1>
              <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
                Share a few details about your business and what you'd like to automate. We'll review your inquiry and reach out to schedule a discovery conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form Section - Hostinger style */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-border shadow-sm">
                  {submitState === 'unavailable' ? (
                    <div role="status" aria-live="polite">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                          <IconAlertCircle width={24} height={24} className="text-brand" />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-ink mb-2">Submission not yet available</h3>
                          <p className="text-ink-muted leading-relaxed">
                            This form is not currently connected to a backend. To send an inquiry, please reach out through the contact details listed alongside this form.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors"
                      >
                        Edit your message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="text-2xl font-display font-bold text-ink mb-2">Tell us about your project</h2>
                      <p className="text-sm text-ink-muted mb-6">Fields marked with * are required.</p>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                            Name <span className="text-brand">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="Your name"
                            required
                            minLength={2}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-business" className="block text-sm font-semibold text-ink mb-2">
                            Business Name
                          </label>
                          <input
                            id="contact-business"
                            name="business"
                            type="text"
                            autoComplete="organization"
                            value={formData.business}
                            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-2">
                            Email <span className="text-brand">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-website" className="block text-sm font-semibold text-ink mb-2">
                            Website
                          </label>
                          <input
                            id="contact-website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="https://yourcompany.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-automate" className="block text-sm font-semibold text-ink mb-2">
                          What do you want to automate? <span className="text-brand">*</span>
                        </label>
                        <input
                          id="contact-automate"
                          name="automate"
                          type="text"
                          value={formData.automate}
                          onChange={(e) => setFormData({ ...formData, automate: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="e.g., Lead management, customer onboarding, email follow-ups..."
                          required
                          minLength={3}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-details" className="block text-sm font-semibold text-ink mb-2">
                          Additional Details
                        </label>
                        <textarea
                          id="contact-details"
                          name="details"
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                          placeholder="Tell us more about your business and what you'd like to achieve..."
                        />
                      </div>

                      <p className="text-xs text-ink-faint leading-relaxed">
                        By submitting, you agree to be contacted about your inquiry. No data is stored until a backend integration is configured.
                      </p>

                      <button
                        type="submit"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                      >
                        Request Automation Consultation
                        <IconSend width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Sidebar - Hostinger style */}
            <div className="lg:col-span-2">
              <Reveal delay={0.2}>
                <div className="sticky top-24 space-y-6">
                  {/* What's included */}
                  <div className="p-6 rounded-2xl bg-surface border border-border">
                    <h3 className="text-lg font-display font-bold text-ink mb-4">What to expect</h3>
                    <ul className="space-y-3">
                      {[
                        'Free initial consultation',
                        'Review of your current workflows',
                        'Identification of automation opportunities',
                        'Rough scope and timeline discussion',
                        'No obligation to proceed',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                          <IconCheck width={18} height={18} className="text-brand flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick info */}
                  <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                    <h3 className="text-sm font-bold text-brand uppercase tracking-wider mb-3">⚡ Response Time</h3>
                    <p className="text-sm text-ink-muted">We typically respond within 24 hours during business days.</p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 rounded-2xl bg-ink text-white">
                    <h3 className="text-lg font-display font-bold mb-3">Prefer to talk?</h3>
                    <p className="text-sm text-white/70 mb-4">Schedule a call to discuss your automation needs directly.</p>
                    <a
                      href="#main-content"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-light transition-all"
                    >
                      Book a Call
                      <IconArrowRight width={14} height={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
