import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconSearch, IconPen, IconCode, IconChart, IconArrowRight } from '../components/Icons';

const steps = [
  {
    number: '01',
    icon: IconSearch,
    title: 'Discover',
    description: 'We learn how your business works today — the workflows, tools, and the repetitive tasks that take the most time. You share context about your goals and constraints.',
    details: ['Walkthrough of current workflows', 'Identify repetitive tasks', 'Review existing tools', 'Agree on priorities'],
  },
  {
    number: '02',
    icon: IconPen,
    title: 'Design',
    description: 'We map out an automation approach that fits your tools and team. You review the proposed workflow and approve it before any build work starts.',
    details: ['Workflow design', 'Integration plan', 'Tool selection', 'Written scope and proposal'],
  },
  {
    number: '03',
    icon: IconCode,
    title: 'Build',
    description: 'We build the automation and connect it to your existing tools. We test each step with you and train your team before going live.',
    details: ['Build and integrate', 'Test with your data', 'Team walkthrough', 'Handover documentation'],
  },
  {
    number: '04',
    icon: IconChart,
    title: 'Support',
    description: 'After launch, we stay available to fix issues, adjust the workflow, and extend the system as your business changes. Ongoing support is scoped separately.',
    details: ['Post-launch check-in', 'Issue resolution', 'Workflow adjustments', 'Optional retainer'],
  },
];

export default function Process() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">How we work</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ink mb-6 leading-tight">
                A clear path from <span className="text-gradient-red">idea to automation</span>.
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed">
                Every engagement follows the same four stages. You're involved at each step, and nothing moves forward without your approval.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <StaggerContainer>
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 last:mb-0 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className={`p-8 rounded-2xl bg-white border border-border card-lift ${i % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center">
                            <step.icon width={24} height={24} />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-brand uppercase tracking-wider">Step {step.number}</span>
                            <h3 className="text-2xl font-display font-bold text-ink">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-ink-muted leading-relaxed mb-5">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-ink-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden sm:flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-brand border-4 border-white shadow-lg relative z-10" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Ready to start your automation journey?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Book a free consultation and let's map out your automation strategy.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full text-base font-semibold hover:bg-brand-light transition-all duration-300 shadow-2xl shadow-brand/30"
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
