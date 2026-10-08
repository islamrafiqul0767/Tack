import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Code, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, existing workflow and biggest bottlenecks.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the most efficient automation strategy.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop and integrate the automation system.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Test, deploy, monitor and continuously improve the workflow.',
    icon: BarChart3,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            How We Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A proven methodology that delivers results — from initial discovery to continuous optimization.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative text-center"
              >
                {/* Node */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center relative z-10 group-hover:border-primary/40 transition-colors">
                    <step.icon size={24} className="text-primary-light" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary-light">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
