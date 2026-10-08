import { Link } from 'react-router-dom';
import PageTransition, { Reveal, StaggerContainer, StaggerItem } from '../components/PageTransition';
import { IconSearch, IconPen, IconCode, IconChart, IconArrowRight } from '../components/Icons';

const steps = [
  {
    number: '01',
    icon: IconSearch,
    title: 'Discover',
    description: 'We deep-dive into your business to understand your existing workflows, pain points, and biggest bottlenecks. We identify exactly where automation will have the most impact.',
    details: ['Stakeholder interviews', 'Workflow mapping', 'Bottleneck identification', 'ROI assessment'],
  },
  {
    number: '02',
    icon: IconPen,
    title: 'Design',
    description: 'We architect the most efficient automation strategy for your business. Every workflow is designed for maximum impact with minimal complexity.',
    details: ['Solution architecture', 'Integration planning', 'Technology selection', 'Implementation roadmap'],
  },
  {
    number: '03',
    icon: IconCode,
    title: 'Build',
    description: 'We develop and integrate the automation system into your existing tools and processes. Every component is tested rigorously before deployment.',
    details: ['System development', 'API integrations', 'Quality assurance', 'Team training'],
  },
  {
    number: '04',
    icon: IconChart,
    title: 'Optimize',
    description: 'We monitor performance, gather feedback, and continuously improve the system. Automation is not set-and-forget — it evolves with your business.',
    details: ['Performance monitoring', 'Feedback loops', 'Continuous improvement', 'Scaling support'],
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
              <span className="text-sm font-semibold text-brand uppercase tracking-wider mb-3 block">Our Process</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
                A proven path to <span className="text-gradient-red">automation</span>.
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Our methodology ensures every project delivers measurable results — from initial discovery to continuous optimization.
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
