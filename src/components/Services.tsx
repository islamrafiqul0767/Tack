import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Workflow,
  Users,
  Target,
  MessageSquare,
  Calendar,
  Mail,
  Settings,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent systems that automate business decisions and repetitive tasks.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect tools and automate processes from start to finish.',
  },
  {
    icon: Users,
    title: 'CRM Automation',
    description: 'Automatically manage leads, customers, follow-ups and pipelines.',
  },
  {
    icon: Target,
    title: 'Lead Automation',
    description: 'Capture, organize, qualify and distribute leads automatically.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Support',
    description: 'AI chatbots and automated customer-response systems.',
  },
  {
    icon: Calendar,
    title: 'Appointment Automation',
    description: 'Automate bookings, reminders, confirmations and follow-ups.',
  },
  {
    icon: Mail,
    title: 'Email & Messaging',
    description: 'Automated communication across email and messaging platforms.',
  },
  {
    icon: Settings,
    title: 'Custom Business Systems',
    description: 'Build automation specifically around your business process.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-light mb-3 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We build automation systems that transform how your business operates — from lead capture to customer delivery.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 rounded-xl bg-surface border border-border card-hover cursor-pointer"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                  <service.icon size={18} className="text-primary-light" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
