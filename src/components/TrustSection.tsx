import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ShieldCheck, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Reduce repetitive manual work.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Errors',
    description: 'Create consistent automated workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Faster',
    description: 'Handle more customers without increasing manual workload.',
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-text">Your team shouldn't be doing work that software can handle.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Businesses lose countless hours because employees repeatedly perform manual tasks — data entry, follow-ups, customer responses, scheduling, and reporting. These tasks don't need human intelligence. They need automation.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-surface border border-border card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <benefit.icon size={22} className="text-primary-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
