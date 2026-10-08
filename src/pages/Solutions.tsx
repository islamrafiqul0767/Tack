import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconCart, IconUtensils, IconMegaphone, IconScissors, IconBuilding, IconStore, IconBriefcase, IconGlobe, IconArrowRight } from '../components/Icons';

const industries = [
  { icon: IconCart, label: 'E-commerce', desc: 'Automate order processing, inventory management, and customer communications.' },
  { icon: IconUtensils, label: 'Restaurants', desc: 'Streamline reservations, orders, and customer feedback systems.' },
  { icon: IconMegaphone, label: 'Agencies', desc: 'Automate client onboarding, reporting, and project management.' },
  { icon: IconScissors, label: 'Salons & Beauty', desc: 'Manage bookings, reminders, and customer loyalty programs.' },
  { icon: IconBuilding, label: 'Real Estate', desc: 'Automate lead follow-ups, property listings, and appointment scheduling.' },
  { icon: IconStore, label: 'Local Businesses', desc: 'Streamline operations, customer management, and marketing.' },
  { icon: IconBriefcase, label: 'Professional Services', desc: 'Automate client intake, scheduling, and document management.' },
  { icon: IconGlobe, label: 'Online Businesses', desc: 'Scale operations with automated workflows and AI systems.' },
];

export default function Solutions() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Industries</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                Solutions for <span className="text-gradient-red">every</span> business.
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Our automation systems adapt to any industry. We tailor every solution to your specific business model and workflow.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <StaggerItem key={i}>
                <div className="group p-6 rounded-xl bg-white border border-border card-lift hover:border-brand/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <industry.icon width={28} height={28} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-brand transition-colors">
                    {industry.label}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Transformation Example */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-4">
                From Manual to <span className="text-gradient-red">Automated</span>
              </h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                See the difference automation makes in a typical business process.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="p-8 rounded-2xl bg-white border-2 border-red-100">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 mb-6">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-semibold text-red-600 uppercase">Before — Manual</span>
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-4">Manual Process</h3>
                <ul className="space-y-3">
                  {['Customer submits form', 'Employee checks it manually', 'Employee enters data into CRM', 'Employee sends follow-up email', 'Employee updates spreadsheet'].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-ink-muted">
                      <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-xs font-bold text-red-600">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-ink-muted"><span className="font-semibold text-red-600">Time:</span> ~45 minutes</p>
                  <p className="text-sm text-ink-muted"><span className="font-semibold text-red-600">Errors:</span> High risk</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-white border-2 border-green-100">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-green-600 uppercase">After — Automated</span>
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-4">Automated Process</h3>
                <ul className="space-y-3">
                  {['Customer submits form', 'AI qualifies lead automatically', 'CRM updated instantly', 'Personalized email sent', 'Team notified via Slack', 'Dashboard updated in real-time'].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-ink-muted">
                      <span className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-xs font-bold text-green-600">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-ink-muted"><span className="font-semibold text-green-600">Time:</span> &lt; 2 seconds</p>
                  <p className="text-sm text-ink-muted"><span className="font-semibold text-green-600">Errors:</span> Near zero</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-6">
              Don't see your industry?
            </h2>
            <p className="text-xl text-ink-muted mb-10">
              We work with businesses across all sectors. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20"
            >
              Talk to Us
              <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
