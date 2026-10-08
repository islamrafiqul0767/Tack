import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ShoppingCart,
  UtensilsCrossed,
  Megaphone,
  Scissors,
  Building2,
  Store,
  Briefcase,
  Globe,
} from 'lucide-react';

const industries = [
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Megaphone, label: 'Agencies' },
  { icon: Scissors, label: 'Salons & Beauty' },
  { icon: Building2, label: 'Real Estate' },
  { icon: Store, label: 'Local Businesses' },
  { icon: Briefcase, label: 'Professional Services' },
  { icon: Globe, label: 'Online Businesses' },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">Solutions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Industries We Serve
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our automation systems are adaptable to any business model. We tailor every solution to your specific industry and workflow.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 rounded-xl bg-surface border border-border card-hover text-center cursor-pointer"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:border-primary/30 transition-colors">
                  <industry.icon size={20} className="text-primary-light" />
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">
                  {industry.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
