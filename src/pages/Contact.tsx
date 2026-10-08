import { useState } from 'react';
import PageTransition, { Reveal } from '../components/PageTransition';
import { IconSend, IconCheck, IconAlertCircle } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    website: '',
    automate: '',
    details: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'unavailable'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend is currently configured for this form.
    // Instead of faking success, we inform the user clearly.
    setSubmitState('unavailable');
  };

  const resetForm = () => {
    setSubmitState('idle');
    setFormData({
      name: '',
      business: '',
      email: '',
      website: '',
      automate: '',
      details: '',
    });
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Contact</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink mb-6 leading-tight">
                Let's discuss <span className="text-gradient-red">your automation</span> needs.
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed">
                Share a few details about your business and what you'd like to automate. We'll review your inquiry and reach out to schedule a discovery conversation.
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
                {submitState === 'unavailable' ? (
                  <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-border" role="status" aria-live="polite">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                        <IconAlertCircle width={24} height={24} className="text-brand" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-ink mb-2">Submission not yet available</h3>
                        <p className="text-ink-muted leading-relaxed">
                          This form is not currently connected to a backend. To send an inquiry, please reach out through the contact details listed alongside this form, or check back after the form integration has been configured.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand/20"
                    >
                      Edit your message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-2">
                          Name <span className="text-brand" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-2">
                          Email <span className="text-brand" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-automate" className="block text-sm font-semibold text-ink mb-2">
                        What do you want to automate? <span className="text-brand" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-automate"
                        name="automate"
                        type="text"
                        value={formData.automate}
                        onChange={(e) => setFormData({ ...formData, automate: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                        placeholder="Tell us more about your business and what you'd like to achieve..."
                      />
                    </div>

                    <p className="text-xs text-ink-faint leading-relaxed">
                      By submitting, you agree to be contacted about your inquiry. No data is stored until a backend integration is configured.
                    </p>

                    <button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitState === 'submitting' ? 'Sending...' : 'Request Automation Consultation'}
                      <IconSend width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.2}>
                <div className="p-8 rounded-2xl bg-surface border border-border">
                  <h3 className="text-xl font-display font-bold text-ink mb-6">How to reach us</h3>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    The contact form above is not yet connected to a backend. To start a conversation, please share your inquiry details through the form and we will configure a response channel, or reach out via the method provided during your discovery call.
                  </p>

                  <div className="p-4 rounded-xl bg-brand-50 border border-brand-100">
                    <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2">What happens next</p>
                    <ol className="text-sm text-ink-muted leading-relaxed space-y-2 list-decimal list-inside">
                      <li>You share details about your business and goals.</li>
                      <li>We review your inquiry and identify potential automation opportunities.</li>
                      <li>We schedule a discovery conversation to discuss scope and next steps.</li>
                    </ol>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider mb-3">What we'll discuss</p>
                    <ul className="space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-2">
                        <IconCheck width={16} height={16} className="text-brand flex-shrink-0 mt-0.5" />
                        Your current workflows and bottlenecks
                      </li>
                      <li className="flex items-start gap-2">
                        <IconCheck width={16} height={16} className="text-brand flex-shrink-0 mt-0.5" />
                        Opportunities for automation
                      </li>
                      <li className="flex items-start gap-2">
                        <IconCheck width={16} height={16} className="text-brand flex-shrink-0 mt-0.5" />
                        Tools and integrations you already use
                      </li>
                      <li className="flex items-start gap-2">
                        <IconCheck width={16} height={16} className="text-brand flex-shrink-0 mt-0.5" />
                        Rough scope, timeline, and next steps
                      </li>
                    </ul>
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
