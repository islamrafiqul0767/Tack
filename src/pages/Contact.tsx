import { useState } from 'react';
import PageTransition, { Reveal } from '../components/PageTransition';
import { IconSend, IconMail2, IconPhone, IconMapPin, IconCheck } from '../components/Icons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    website: '',
    automate: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Contact</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                Let's <span className="text-gradient-red">automate</span> your business.
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Tell us about your business and what you'd like to automate. We'll respond within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                {submitted ? (
                  <div className="p-12 rounded-2xl bg-green-50 border-2 border-green-200 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <IconCheck width={32} height={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-ink mb-3">Request Sent!</h3>
                    <p className="text-ink-muted">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-2">Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-2">Business Name</label>
                        <input
                          type="text"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-2">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-ink mb-2">Website</label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">What do you want to automate? *</label>
                      <input
                        type="text"
                        value={formData.automate}
                        onChange={(e) => setFormData({ ...formData, automate: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                        placeholder="e.g., Lead management, customer onboarding, email follow-ups..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Additional Details</label>
                      <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                        placeholder="Tell us more about your business and what you'd like to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20"
                    >
                      Request Automation Consultation
                      <IconSend width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-surface border border-border sticky top-28">
                  <h3 className="text-xl font-display font-bold text-ink mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <IconMail2 width={20} height={20} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-1">Email</p>
                        <p className="text-ink font-medium">hello@vectral.ai</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <IconPhone width={20} height={20} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-ink font-medium">+1 (555) 000-0000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <IconMapPin width={20} height={20} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-1">Location</p>
                        <p className="text-ink font-medium">Remote — Worldwide</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-3">Follow Us</p>
                    <div className="flex gap-2">
                      {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="px-4 py-2 rounded-lg bg-white border border-border text-sm text-ink-muted hover:border-brand hover:text-brand transition-all"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-100">
                    <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">⚡ Response Time</p>
                    <p className="text-sm text-ink-muted">We typically respond within 24 hours</p>
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
