import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconCheck } from '../components/Icons';

const services = [
  {
    icon: IconBrain,
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Intelligent systems that automate business decisions and repetitive tasks using advanced AI models.',
    features: ['AI-powered decision making', 'Natural language processing', 'Intelligent data classification', 'Predictive analytics', 'Automated content generation'],
  },
  {
    icon: IconWorkflow,
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    description: 'Connect your tools and automate processes from start to finish with seamless integrations.',
    features: ['Multi-tool integration', 'Trigger-based automation', 'Conditional logic flows', 'Error handling & retries', 'Real-time monitoring'],
  },
  {
    icon: IconCRM,
    title: 'CRM Automation',
    slug: 'crm-automation',
    description: 'Automatically manage leads, customers, follow-ups and pipelines without manual data entry.',
    features: ['Auto lead assignment', 'Pipeline management', 'Contact synchronization', 'Deal stage automation', 'Activity tracking'],
  },
  {
    icon: IconTarget,
    title: 'Lead Automation',
    slug: 'lead-automation',
    description: 'Capture, organize, qualify and distribute leads automatically across your sales team.',
    features: ['Multi-channel capture', 'AI lead scoring', 'Auto-routing rules', 'Instant notifications', 'Duplicate detection'],
  },
  {
    icon: IconChat,
    title: 'Customer Support',
    slug: 'customer-support',
    description: 'AI chatbots and automated customer-response systems that handle inquiries 24/7.',
    features: ['AI-powered chatbots', 'Ticket auto-routing', 'Knowledge base integration', 'Sentiment analysis', 'Multi-language support'],
  },
  {
    icon: IconCalendar,
    title: 'Appointment Automation',
    slug: 'appointment-automation',
    description: 'Automate bookings, reminders, confirmations and follow-ups for any scheduling need.',
    features: ['Online booking system', 'Automated reminders', 'Calendar synchronization', 'No-show reduction', 'Rescheduling automation'],
  },
  {
    icon: IconMail,
    title: 'Email & Messaging',
    slug: 'email-messaging',
    description: 'Automated communication across email and messaging platforms with personalization.',
    features: ['Drip campaigns', 'Personalized sequences', 'Multi-channel messaging', 'A/B testing', 'Performance analytics'],
  },
  {
    icon: IconSettings,
    title: 'Custom Business Systems',
    slug: 'custom-systems',
    description: 'Build automation specifically around your unique business processes and requirements.',
    features: ['Custom workflow design', 'Bespoke integrations', 'Industry-specific solutions', 'Scalable architecture', 'Ongoing optimization'],
  },
];

export default function Services() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Our Services</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                Automation that <span className="text-gradient-red">transforms</span> your business.
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                We build intelligent automation systems that eliminate repetitive work, streamline operations, and accelerate growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="group p-8 rounded-2xl bg-white border border-border card-lift hover:border-brand/30 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <service.icon width={28} height={28} className="text-brand group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-ink mb-3 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-ink-muted leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-ink-muted">
                            <IconCheck width={16} height={16} className="text-brand flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-ink-muted mb-10">
              Let's discuss how we can automate your business processes.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20"
            >
              Book a Free Consultation
              <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
