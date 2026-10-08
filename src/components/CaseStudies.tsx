import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-commerce Lead Management',
    category: 'E-commerce',
    problem: 'Leads were manually collected from multiple sources, entered into spreadsheets, and follow-ups were inconsistent — resulting in lost opportunities.',
    solution: 'Built an automated lead pipeline that captures leads from all channels, qualifies them using AI scoring, assigns them to the right team member, and triggers personalized follow-up sequences.',
    workflow: 'Form → AI Scoring → CRM Assignment → Email Sequence → Slack Notification',
    tech: ['Make.com', 'OpenAI', 'HubSpot', 'Slack', 'SendGrid'],
  },
  {
    title: 'Real Estate Appointment System',
    category: 'Real Estate',
    problem: 'Property viewings were scheduled manually through phone calls and emails. No-shows were common and agents spent hours on administrative work.',
    solution: 'Implemented an AI-powered booking system with automated reminders, confirmations, and rescheduling. Integrated with calendar and CRM for seamless management.',
    workflow: 'Booking Request → AI Confirmation → Calendar Sync → SMS Reminder → Follow-up',
    tech: ['Cal.com', 'Twilio', 'Zapier', 'Airtable', 'GPT-4'],
  },
  {
    title: 'Agency Client Onboarding',
    category: 'Agency',
    problem: 'Client onboarding took 2+ weeks of manual work — sending contracts, collecting information, setting up accounts, and coordinating with teams.',
    solution: 'Created an end-to-end automated onboarding system that triggers the entire workflow from contract signing to project kickoff — reducing onboarding time to under 24 hours.',
    workflow: 'Contract Signed → Account Creation → Welcome Email → Team Brief → Project Setup',
    tech: ['n8n', 'Notion', 'Stripe', 'Slack', 'Google Workspace'],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Case Studies
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Demo projects showcasing how we transform manual processes into automated workflows.
          </p>
          <span className="inline-block mt-3 text-xs text-text-muted px-3 py-1 rounded-full bg-surface border border-border">
            * Demo / Concept Projects
          </span>
        </motion.div>

        {/* Case study tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-primary/10 text-primary-light border border-primary/20'
                  : 'text-text-secondary hover:text-white bg-surface border border-transparent hover:border-border'
              }`}
            >
              {study.category}
            </button>
          ))}
        </motion.div>

        {/* Active case study */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-border">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                  {caseStudies[activeIndex].category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {caseStudies[activeIndex].title}
                </h3>
              </div>
              <ExternalLink size={18} className="text-text-muted" />
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-red-500/[0.03] border border-red-500/10">
                <h4 className="text-sm font-semibold text-red-400 mb-2">Problem</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {caseStudies[activeIndex].problem}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-green-500/[0.03] border border-green-500/10">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Solution</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {caseStudies[activeIndex].solution}
                </p>
              </div>
            </div>

            {/* Workflow */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-white mb-3">Automation Workflow</h4>
              <div className="flex flex-wrap items-center gap-2">
                {caseStudies[activeIndex].workflow.split(' → ').map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-surface-lighter border border-border text-xs text-text-secondary">
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={12} className="text-text-muted" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Technologies & Integrations</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-xs text-primary-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
