import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconBrain, IconWorkflow, IconCRM, IconTarget, IconChat, IconCalendar, IconMail, IconSettings, IconArrowRight, IconCheck } from '../components/Icons';

const easeOutExpo = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: IconBrain,
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Use AI to handle classification, extraction, drafting, and other repetitive cognitive tasks — with human review where it matters.',
    features: ['Text classification and routing', 'Data extraction from documents', 'Draft generation with review', 'Decision support for repetitive choices'],
  },
  {
    icon: IconWorkflow,
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    description: 'Connect the tools you already use so work moves between them without manual copy-paste or status chasing.',
    features: ['Connect CRMs, email, calendars, and more', 'Trigger-based flows', 'Conditional logic and branching', 'Logging and error handling'],
  },
  {
    icon: IconCRM,
    title: 'CRM Automation',
    slug: 'crm-automation',
    description: 'Keep your CRM accurate and up to date by automating data entry, stage updates, and follow-up tasks.',
    features: ['Automatic field updates', 'Pipeline stage tracking', 'Follow-up task creation', 'Activity logging'],
  },
  {
    icon: IconTarget,
    title: 'Lead Automation',
    slug: 'lead-automation',
    description: 'Capture leads from your forms and channels, route them to the right person, and start follow-up without delay.',
    features: ['Capture from forms and channels', 'Routing rules by team or region', 'Instant internal notifications', 'Duplicate handling'],
  },
  {
    icon: IconChat,
    title: 'Customer Support',
    slug: 'customer-support',
    description: 'Handle common questions with automated responses and route complex cases to your team with full context.',
    features: ['Auto-reply to common questions', 'Ticket routing to the right agent', 'Context passed with every handoff', 'Escalation rules you define'],
  },
  {
    icon: IconCalendar,
    title: 'Appointment Automation',
    slug: 'appointment-automation',
    description: 'Let clients book time that works for them, with automatic reminders and rescheduling built in.',
    features: ['Self-serve booking page', 'Automated confirmations and reminders', 'Calendar sync across your team', 'Reschedule and cancel flows'],
  },
  {
    icon: IconMail,
    title: 'Email & Messaging',
    slug: 'email-messaging',
    description: 'Send the right message at the right time across email and chat — based on what the customer did or didn\'t do.',
    features: ['Triggered email sequences', 'Personalization from your data', 'Multi-channel delivery', 'Opt-out and preference handling'],
  },
  {
    icon: IconSettings,
    title: 'Custom Business Systems',
    slug: 'custom-systems',
    description: 'When off-the-shelf tools don\'t fit, we design automation around the way your business actually works.',
    features: ['Workflow designed around your process', 'Integrations with your existing tools', 'Documentation and training', 'Iterative improvement after launch'],
  },
];

export default function Services() {
  return (
    <PageTransition>
      {/* Hero - Hostinger style */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-4xl">
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
              <span className="text-xs font-semibold text-brand uppercase tracking-[0.2em]">Our Services</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6 leading-[0.95] tracking-[-0.03em]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: easeOutExpo as any }}
                className="block"
              >
                What we can
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo as any }}
                className="text-gradient-red block"
              >
                automate
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: easeOutExpo as any }}
                className="block"
              >
                for you.
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo as any }}
              className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl mb-10"
            >
              Each engagement is scoped to your workflows and tools. Below are the areas we most often work in — the final system is always designed around your business.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-ink-muted"
            >
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCheck width={16} height={16} className="text-brand" />
                <span>Ongoing support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Hostinger style */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <div className="group p-8 rounded-2xl bg-white border border-border hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 h-full">
                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-all duration-300"
                    >
                      <service.icon width={28} height={28} className="text-brand group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-ink mb-3 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-ink-muted leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-ink-muted">
                            <IconCheck width={16} height={16} className="text-brand flex-shrink-0 mt-0.5" />
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
      <section className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can automate your business processes.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-brand text-white rounded-full text-lg font-semibold hover:bg-brand-light transition-all duration-300"
            >
              Book a Free Consultation
              <IconArrowRight width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
