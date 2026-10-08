import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconArrowRight, IconCheck } from '../components/Icons';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Lead Management System',
    category: 'E-commerce',
    problem: 'Leads were manually collected from multiple sources, entered into spreadsheets, and follow-ups were inconsistent — resulting in lost opportunities and frustrated sales teams.',
    solution: 'Built an automated lead pipeline that captures leads from all channels, qualifies them using AI scoring, assigns them to the right team member, and triggers personalized follow-up sequences automatically.',
    workflow: ['Form Submission', 'AI Lead Scoring', 'CRM Assignment', 'Email Sequence', 'Slack Notification', 'Dashboard Update'],
    tech: ['Make.com', 'OpenAI GPT-4', 'HubSpot', 'Slack', 'SendGrid'],
    results: ['95% faster lead response time', 'Zero manual data entry', '3x increase in qualified leads', 'Automated follow-ups 24/7'],
  },
  {
    id: 2,
    title: 'Real Estate Appointment Automation',
    category: 'Real Estate',
    problem: 'Property viewings were scheduled manually through phone calls and emails. No-shows were common and agents spent hours on administrative work instead of selling.',
    solution: 'Implemented an AI-powered booking system with automated reminders, confirmations, and rescheduling. Integrated with calendar and CRM for seamless management across the team.',
    workflow: ['Booking Request', 'AI Confirmation', 'Calendar Sync', 'SMS Reminder', 'Follow-up Sequence', 'Feedback Collection'],
    tech: ['Cal.com', 'Twilio', 'Zapier', 'Airtable', 'GPT-4'],
    results: ['80% reduction in no-shows', '100% automated scheduling', '4 hours saved per agent daily', 'Improved client satisfaction'],
  },
  {
    id: 3,
    title: 'Agency Client Onboarding',
    category: 'Agency',
    problem: 'Client onboarding took 2+ weeks of manual work — sending contracts, collecting information, setting up accounts, and coordinating with multiple teams.',
    solution: 'Created an end-to-end automated onboarding system that triggers the entire workflow from contract signing to project kickoff — reducing onboarding time from weeks to hours.',
    workflow: ['Contract Signed', 'Account Creation', 'Welcome Email', 'Team Brief', 'Project Setup', 'Client Portal Access'],
    tech: ['n8n', 'Notion', 'Stripe', 'Slack', 'Google Workspace'],
    results: ['Onboarding reduced from 2 weeks to 24 hours', 'Zero manual coordination', 'Consistent client experience', 'Team can handle 5x more clients'],
  },
];

export default function Work() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Our Work</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                Real results. <span className="text-gradient-red">Real automation.</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Explore how we've transformed business processes through intelligent automation.
              </p>
              <p className="text-sm text-ink-faint mt-4 italic">* Demo / Concept Projects</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {caseStudies.map((study, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCase === i
                      ? 'bg-brand text-white shadow-lg shadow-brand/20'
                      : 'bg-white border border-border text-ink-muted hover:border-brand hover:text-brand'
                  }`}
                >
                  {study.category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Case Study */}
          <Reveal>
            <div className="rounded-2xl bg-white border border-border overflow-hidden">
              {/* Header */}
              <div className="p-8 lg:p-10 border-b border-border bg-surface">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">{caseStudies[activeCase].category}</span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-ink mt-2">
                  {caseStudies[activeCase].title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  {/* Problem */}
                  <div className="p-6 rounded-xl bg-red-50/50 border border-red-100">
                    <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">The Problem</h3>
                    <p className="text-ink-muted leading-relaxed">{caseStudies[activeCase].problem}</p>
                  </div>
                  {/* Solution */}
                  <div className="p-6 rounded-xl bg-green-50/50 border border-green-100">
                    <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-3">The Solution</h3>
                    <p className="text-ink-muted leading-relaxed">{caseStudies[activeCase].solution}</p>
                  </div>
                </div>

                {/* Workflow */}
                <div className="mb-10">
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Automation Workflow</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {caseStudies[activeCase].workflow.map((step, i, arr) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="px-4 py-2 rounded-lg bg-surface border border-border text-sm text-ink-muted font-medium">
                          {step}
                        </span>
                        {i < arr.length - 1 && <IconArrowRight width={14} height={14} className="text-ink-faint" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-10">
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Results</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {caseStudies[activeCase].results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-brand-50 border border-brand-100">
                        <IconCheck width={18} height={18} className="text-brand flex-shrink-0" />
                        <span className="text-sm font-medium text-ink">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Technologies & Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-ink text-white text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-ink mb-6">
              Want results like these?
            </h2>
            <p className="text-xl text-ink-muted mb-10">
              Let's discuss how we can transform your business processes.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20"
            >
              Start Your Project
              <IconArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
