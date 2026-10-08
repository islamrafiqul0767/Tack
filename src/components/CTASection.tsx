import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-accent/5" />
          <div className="absolute inset-0 border border-border rounded-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Content */}
          <div className="relative p-10 sm:p-16 lg:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Ready to eliminate repetitive work?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's identify the tasks slowing your business down and turn them into automated workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-sm font-medium text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Book a Free Automation Audit
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <MessageCircle size={16} />
                Talk to Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
